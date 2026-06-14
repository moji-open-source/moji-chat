mod routes;

use std::sync::OnceLock;
use tauri::{AppHandle, Manager, WebviewUrl, WebviewWindowBuilder};

use crate::{platform, window::routes::Route};

pub struct WindowManager {
    tauri_app: OnceLock<tauri::AppHandle>,
}

#[derive(Debug, thiserror::Error)]
pub enum WindowError {
    #[error("WindowManager has already been initialized")]
    AlreadyInitialized,

    #[error("Application handle is not initialized")]
    NotInitialized,

    #[error("Window operation failed: {0}")]
    Tauri(#[from] tauri::Error),
}

impl WindowManager {
    pub fn global() -> &'static Self {
        static INSTANCE: WindowManager = WindowManager {
            tauri_app: OnceLock::new(),
        };

        &INSTANCE
    }

    pub fn init(&self, app: tauri::AppHandle) -> Result<&Self, WindowError> {
        self.tauri_app
            .set(app)
            .map_err(|_| WindowError::AlreadyInitialized)
            .map(|_| self)
    }

    fn get_app_handle(&self) -> Result<&AppHandle, WindowError> {
        self.tauri_app
            .get()
            .ok_or_else(|| WindowError::NotInitialized)
    }

    pub fn open_login_window(&self) -> Result<(), WindowError> {
        tracing::info!("open login window");
        let app_handle = self.get_app_handle()?;

        match app_handle.get_webview_window("LOGIN") {
            Some(win) => focus_window(&win),
            None => create_login_window(app_handle),
        }
    }

    pub fn open_settings_window(&self) -> Result<(), WindowError> {
        let app_handle = self.get_app_handle()?;
        match app_handle.get_webview_window(Route::Settings.as_ref()) {
            Some(win) => focus_window(&win),
            None => create_settings_window(app_handle),
        }
    }

    pub fn open_message_window(&self) -> Result<(), WindowError> {
        let app_handle = self.get_app_handle()?;
        match app_handle.get_webview_window(Route::Messages.as_ref()) {
            Some(win) => focus_window(&win),
            None => create_app_window(app_handle, Route::Messages),
        }
    }
}

/// Bring an existing window to the foreground.
fn focus_window(win: &tauri::WebviewWindow) -> Result<(), WindowError> {
    win.show()?;
    win.set_focus()?;
    Ok(())
}

fn create_app_window(app: &AppHandle, flag: Route) -> Result<(), WindowError> {
    let builder = WebviewWindowBuilder::new(app, flag.clone(), WebviewUrl::App(flag.into()));

    #[cfg(target_os = "macos")]
    let builder = builder
        .hidden_title(true)
        .title_bar_style(tauri::TitleBarStyle::Overlay);

    let webview_window = builder
        .min_inner_size(711.0, 520.0)
        .inner_size(934.0, 683.0)
        .accept_first_mouse(true)
        .visible(false)
        .build()?;

    platform::apply_native_chrome(&webview_window);

    Ok(())
}

fn create_login_window(app: &AppHandle) -> Result<(), WindowError> {
    let builder =
        WebviewWindowBuilder::new(app, Route::Login, WebviewUrl::App(Route::Login.into()));

    #[cfg(target_os = "macos")]
    let builder = builder
        .hidden_title(true)
        .title_bar_style(tauri::TitleBarStyle::Overlay);

    let webview_window = builder
        .inner_size(450.0, 670.0)
        .visible(false)
        .resizable(false)
        .build()?;

    platform::apply_native_chrome(&webview_window);
    platform::set_window_button_visible(&webview_window, platform::WindowButton::Zoom, false);
    Ok(())
}

/// Build a new settings window and apply platform chrome.
fn create_settings_window(app: &AppHandle) -> Result<(), WindowError> {
    let builder = WebviewWindowBuilder::new(
        app,
        Route::Settings,
        WebviewUrl::App(Route::Settings.into()),
    );

    #[cfg(target_os = "macos")]
    let builder = builder
        .hidden_title(true)
        .title_bar_style(tauri::TitleBarStyle::Overlay);

    let webview_window = builder
        .inner_size(650.0, 680.0)
        .maximizable(false)
        .accept_first_mouse(true)
        .resizable(false)
        .visible(false)
        .build()?;

    platform::apply_native_chrome(&webview_window);
    platform::set_window_button_visible(&webview_window, platform::WindowButton::Zoom, false);

    Ok(())
}
