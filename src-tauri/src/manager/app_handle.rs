use std::sync::OnceLock;

use tauri::AppHandle;

/// A global singleton handle to the application.
pub struct AppHandleManager(OnceLock<AppHandle>);

impl AppHandleManager {
    /// Get the global instance of the app handle manager.
    pub fn global() -> &'static Self {
        static INSTANCE: AppHandleManager = AppHandleManager(OnceLock::new());
        &INSTANCE
    }

    /// Initialize the app handle manager with an app handle.
    pub fn init(&self, handle: AppHandle) {
        if self.0.get().is_none() {
            self.0.set(handle).expect("AppHandle already initialized");
        }
    }

    // /// Get the app handle if it has been initialized.
    // pub fn get(&self) -> Option<AppHandle> {
    //     self.0.get().cloned()
    // }

    // /// Get the app handle, panics if it hasn't been initialized.
    // pub fn get_handle(&self) -> AppHandle {
    //     self.get().expect("AppHandle not initialized")
    // }
}
