use objc2::rc::Retained;
use objc2_app_kit::{NSWindow, NSWindowButton};
use tauri::WebviewWindow;

use super::WindowButton;

impl From<WindowButton> for NSWindowButton {
    fn from(val: WindowButton) -> Self {
        match val {
            WindowButton::Zoom => NSWindowButton::ZoomButton,
        }
    }
}

/// Show or hide a standard title bar button (close, minimize, zoom).
pub fn set_window_button_visible<R: tauri::Runtime>(
    window: &WebviewWindow<R>,
    button: WindowButton,
    visible: bool,
) {
    let Some(ns_window) = get_ns_window(window) else {
        return;
    };
    if let Some(btn) = ns_window.standardWindowButton(button.into()) {
        btn.setHidden(!visible);
    }
}

/// Returns the native handle that is used by this window.
#[cfg(target_os = "macos")]
pub fn get_ns_window<R: tauri::Runtime>(window: &WebviewWindow<R>) -> Option<Retained<NSWindow>> {
    window
        .ns_window()
        .ok()
        .and_then(|ptr| unsafe { Retained::retain(ptr as *mut NSWindow) })
}

/// Attach a native NSToolbar to the window for the overlay title bar look.
/// Must be called on the main thread.
#[cfg(target_os = "macos")]
pub fn attach_toolbar<R: tauri::Runtime>(window: &WebviewWindow<R>) {
    use objc2::{MainThreadMarker, MainThreadOnly};
    use objc2_app_kit::{NSToolbar, NSWindowToolbarStyle};

    let Some(ns_window) = get_ns_window(window) else {
        return;
    };

    if let Some(mtm) = MainThreadMarker::new() {
        let toolbar = NSToolbar::init(NSToolbar::alloc(mtm));
        ns_window.setToolbar(Some(&toolbar));
    }

    ns_window.setToolbarStyle(NSWindowToolbarStyle::Automatic);

    set_css_var(window, "--window-chrome-radius", "10.5pt").unwrap_or_else(|err| {
        println!("Failed to set window rounded corners: {err}");
    });
}

fn set_css_var<R: tauri::Runtime>(
    wbv: &WebviewWindow<R>,
    name: &str,
    value: &str,
) -> Result<(), tauri::Error> {
    wbv.eval(format!(
        "document.documentElement.style.setProperty('{name}', '{value}')"
    ))
}
