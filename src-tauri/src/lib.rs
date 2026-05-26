#![allow(unexpected_cfgs)]

use std::fs;

use commands::{login, open_app_setting_window};
use manager::app_handle::AppHandleManager;
use tauri::Manager;
use utils::window::WebviewWindowExt;

mod commands;
mod manager;
mod utils;

#[tokio::main]
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub async fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let app_data_dir = app
                .path()
                .app_data_dir()
                .expect("failed to get app data dir");

            // Ensure the app-data directory exists (used by future features).
            fs::create_dir_all(&app_data_dir)?;

            AppHandleManager::global().init(app.app_handle().clone());

            #[cfg(target_os = "macos")]
            if let Some(window) = app.get_webview_window("main") {
                window.to_native_window();
            }

            #[cfg(target_os = "macos")]
            if let Some(window) = app.get_webview_window("main1") {
                window.to_native_window();
            }

            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![login, open_app_setting_window])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
