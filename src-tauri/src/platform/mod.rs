#[cfg(target_os = "macos")]
pub mod macos;

use tauri::WebviewWindow;

/// Standard window buttons.
pub enum WindowButton {
    Zoom,
}

/// Apply platform-specific window chrome.
pub fn apply_native_chrome<R: tauri::Runtime>(window: &WebviewWindow<R>) {
    #[cfg(target_os = "macos")]
    macos::attach_toolbar(window);

    #[cfg(not(target_os = "macos"))]
    let _ = window;
}

/// Show or hide a standard title bar button. No-op on unsupported platforms.
pub fn set_window_button_visible(window: &WebviewWindow, button: WindowButton, visible: bool) {
    #[cfg(target_os = "macos")]
    macos::set_window_button_visible(window, button, visible);

    #[cfg(not(target_os = "macos"))]
    let _ = window;
    let _ = button;
    let _ = visible;
}
