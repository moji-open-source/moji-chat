use tauri::WebviewWindow;

pub trait WebviewWindowExt {
    /// This function can only be used in the main thread.
    #[cfg(target_os = "macos")]
    fn to_native_window(&self);
}

impl<R: tauri::Runtime> WebviewWindowExt for WebviewWindow<R> {
    #[cfg(target_os = "macos")]
    fn to_native_window(&self) {
        use objc2::MainThreadMarker;
        use objc2::MainThreadOnly;
        use objc2::rc::Retained;
        use objc2_app_kit::NSToolbar;
        use objc2_app_kit::NSWindow;

        let ns_window = match self
            .ns_window()
            .ok()
            // I hope to be able to automatically dereference!! e.g. val.fn() v (*val).fn() x
            .and_then(|ptr| unsafe { Retained::retain(ptr as *mut NSWindow) })
        {
            Some(r) => r,
            None => return,
        };

        if let Some(mtm) = MainThreadMarker::new() {
            let ns_toolbar = NSToolbar::init(NSToolbar::alloc(mtm));
            ns_window.setToolbar(Some(&ns_toolbar));
        }

        use objc2_app_kit::NSWindowToolbarStyle;
        ns_window.setToolbarStyle(NSWindowToolbarStyle::Automatic);
    }
}
