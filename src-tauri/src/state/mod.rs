use std::sync::Mutex;

/// Global application state managed by Tauri.
///
/// Access in commands via `state: tauri::State<'_, AppState>`.
/// Fields wrapped in Mutex for interior mutability.
pub struct AppState {
    /// Auth token after successful login. None if not authenticated.
    pub _token: Mutex<Option<String>>,
}

impl AppState {
    pub fn new() -> Self {
        Self {
            _token: Mutex::new(None),
        }
    }
}

impl Default for AppState {
    fn default() -> Self {
        Self::new()
    }
}
