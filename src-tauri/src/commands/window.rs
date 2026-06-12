use crate::error::AppError;
use crate::platform;
use tauri::{AppHandle, Manager, WebviewUrl, WebviewWindowBuilder};

const SETTINGS_LABEL: &str = "settings";
const SETTINGS_URL: &str = "/settings";
const SETTINGS_WIDTH: f64 = 650.0;
const SETTINGS_HEIGHT: f64 = 680.0;
const APP_LABEL: &str = "main";
const APP_URL: &str = "/messages";
const APP_MIN_WIDTH: f64 = 711.0;
const APP_MIN_HEIGHT: f64 = 520.0;
const APP_WIDTH: f64 = 934.0;
const APP_HEIGHT: f64 = 683.0;

/// Open (or focus) the settings window.
#[tauri::command]
pub fn open_settings_window(app: AppHandle) -> Result<(), AppError> {
    match app.get_webview_window(SETTINGS_LABEL) {
        Some(win) => focus_window(&win),
        None => create_settings_window(&app),
    }
}

/// Open (or focus) the main application window.
#[tauri::command]
pub fn open_app_window(app: AppHandle) -> Result<(), AppError> {
    match app.get_webview_window(APP_LABEL) {
        Some(win) => focus_window(&win),
        None => create_app_window(&app),
    }
}

/// Open (or focus) the login window
#[tauri::command]
pub fn open_login_window(app: AppHandle) -> Result<(), AppError> {
    match app.get_webview_window("REGISTER") {
        Some(win) => focus_window(&win),
        None => create_login_window(&app),
    }
}

/// Bring an existing window to the foreground.
fn focus_window(win: &tauri::WebviewWindow) -> Result<(), AppError> {
    win.show().map_err(|e| AppError::window(e.to_string()))?;
    win.set_focus()
        .map_err(|e| AppError::window(e.to_string()))?;
    Ok(())
}

/// Build a new settings window and apply platform chrome.
fn create_settings_window(app: &AppHandle) -> Result<(), AppError> {
    let builder =
        WebviewWindowBuilder::new(app, SETTINGS_LABEL, WebviewUrl::App(SETTINGS_URL.into()));

    #[cfg(target_os = "macos")]
    let builder = builder
        .hidden_title(true)
        .title_bar_style(tauri::TitleBarStyle::Overlay);

    let webview_window = builder
        .inner_size(SETTINGS_WIDTH, SETTINGS_HEIGHT)
        .maximizable(false)
        .accept_first_mouse(true)
        .resizable(false)
        .visible(false)
        .build()
        .map_err(|e| AppError::window(e.to_string()))?;

    platform::apply_native_chrome(&webview_window);
    platform::set_window_button_visible(&webview_window, platform::WindowButton::Zoom, false);

    Ok(())
}

fn create_app_window(app: &AppHandle) -> Result<(), AppError> {
    let builder = WebviewWindowBuilder::new(app, APP_LABEL, WebviewUrl::App(APP_URL.into()));

    #[cfg(target_os = "macos")]
    let builder = builder
        .hidden_title(true)
        .title_bar_style(tauri::TitleBarStyle::Overlay);

    let webview_window = builder
        .min_inner_size(APP_MIN_WIDTH, APP_MIN_HEIGHT)
        .inner_size(APP_WIDTH, APP_HEIGHT)
        .accept_first_mouse(true)
        .visible(false)
        .build()
        .map_err(|e| AppError::window(e.to_string()))?;

    platform::apply_native_chrome(&webview_window);
    platform::set_window_button_visible(&webview_window, platform::WindowButton::Zoom, false);

    Ok(())
}

fn create_login_window(app: &AppHandle) -> Result<(), AppError> {
    let builder = WebviewWindowBuilder::new(app, "LOGIN", WebviewUrl::App("/login".into()));

    #[cfg(target_os = "macos")]
    let builder = builder
        .hidden_title(true)
        .title_bar_style(tauri::TitleBarStyle::Overlay);

    let webview_window = builder
        .inner_size(450.0, 670.0)
        .visible(false)
        .resizable(false)
        .build()
        .map_err(|e| AppError::window(e.to_string()))?;

    platform::apply_native_chrome(&webview_window);
    platform::set_window_button_visible(&webview_window, platform::WindowButton::Zoom, false);
    Ok(())
}
