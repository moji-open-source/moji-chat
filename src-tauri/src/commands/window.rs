use crate::utils::window::WebviewWindowExt;
use tauri::{AppHandle, Manager, WebviewUrl, WebviewWindow, WebviewWindowBuilder};

const SETTINGS_WINDOW_LABEL: &str = "settings";
const SETTINGS_WINDOW_URL: &str = "/settings";
const SETTINGS_WINDOW_WIDTH: f64 = 650.0;
const SETTINGS_WINDOW_HEIGHT: f64 = 680.0;

#[tauri::command]
pub fn open_app_setting_window(app: AppHandle) -> Result<(), String> {
    if let Some(window) = app.get_webview_window(SETTINGS_WINDOW_LABEL) {
        return focus_window(&window);
    }

    let window = WebviewWindowBuilder::new(
        &app,
        SETTINGS_WINDOW_LABEL,
        WebviewUrl::App(SETTINGS_WINDOW_URL.into()),
    )
    .inner_size(SETTINGS_WINDOW_WIDTH, SETTINGS_WINDOW_HEIGHT)
    .hidden_title(true)
    .title_bar_style(tauri::TitleBarStyle::Overlay)
    .closable(false)
    .minimizable(false)
    .maximizable(false)
    .resizable(false)
    .build()
    .map_err(|e| format!("Failed to create settings window: {}", e))?;

    apply_settings_window_chrome(&window);
    focus_window(&window)
}

fn focus_window<R: tauri::Runtime>(window: &WebviewWindow<R>) -> Result<(), String> {
    window
        .show()
        .map_err(|e| format!("Failed to show settings window: {}", e))?;
    window
        .set_focus()
        .map_err(|e| format!("Failed to focus settings window: {}", e))
}

fn apply_settings_window_chrome<R: tauri::Runtime>(window: &WebviewWindow<R>) {
    #[cfg(target_os = "macos")]
    window.to_native_window();

    #[cfg(not(target_os = "macos"))]
    let _ = window;
}
