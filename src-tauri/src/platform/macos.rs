use tauri::WebviewWindow;

/// Attach a native NSToolbar to the window for the overlay title bar look.
/// Must be called on the main thread.
#[cfg(target_os = "macos")]
pub fn attach_toolbar<R: tauri::Runtime>(window: &WebviewWindow<R>) {
    use objc2::rc::Retained;
    use objc2::{MainThreadMarker, MainThreadOnly};
    use objc2_app_kit::{NSToolbar, NSWindow, NSWindowToolbarStyle};

    let ns_window = window
        .ns_window()
        .ok()
        .and_then(|ptr| unsafe { Retained::retain(ptr as *mut NSWindow) });

    let Some(ns_window) = ns_window else { return };

    if let Some(mtm) = MainThreadMarker::new() {
        let toolbar = NSToolbar::init(NSToolbar::alloc(mtm));
        ns_window.setToolbar(Some(&toolbar));
    }

    ns_window.setToolbarStyle(NSWindowToolbarStyle::Automatic);
}
