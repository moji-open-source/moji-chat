pub mod macos;

use tauri::WebviewWindow;

/// Apply platform-specific window chrome.
pub fn apply_native_chrome<R: tauri::Runtime>(window: &WebviewWindow<R>) {
    #[cfg(target_os = "macos")]
    macos::attach_toolbar(window);

    #[cfg(not(target_os = "macos"))]
    let _ = window;
}
