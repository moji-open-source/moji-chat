use crate::{error::AppError, window::WindowManager};

/// Open (or focus) the settings window.
#[tauri::command]
pub fn open_settings_window() -> Result<(), AppError> {
    WindowManager::global()
        .open_settings_window()
        .map_err(|e| AppError::window(e.to_string()))
}

/// Open (or focus) the main application window.
#[tauri::command]
pub fn open_app_window() -> Result<(), AppError> {
    WindowManager::global()
        .open_message_window()
        .map_err(|e| AppError::window(e.to_string()))
}

/// Open (or focus) the login window
#[tauri::command]
pub fn open_login_window() -> Result<(), AppError> {
    WindowManager::global()
        .open_login_window()
        .map_err(|e| AppError::window(e.to_string()))
}
