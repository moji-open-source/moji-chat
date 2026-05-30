use objc2::rc::Retained;
use objc2_app_kit::NSWindow;
use tauri::WebviewWindow;

/// Returns the native handle that is used by this window.
#[cfg(target_os = "macos")]
fn get_ns_window<R: tauri::Runtime>(window: &WebviewWindow<R>) -> Option<Retained<NSWindow>> {
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
}
