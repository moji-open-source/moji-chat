#![allow(unexpected_cfgs)]

use std::fs;

use tauri::Manager;

mod commands;
mod error;
mod events;
mod models;
mod platform;
mod services;
mod state;

use commands::{
    get_contact, get_conversation, get_messages, list_contacts, list_conversations, login,
    open_settings_window,
};
use state::AppState;

#[tokio::main]
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub async fn run() {
    tauri::Builder::default()
        .manage(AppState::new())
        .setup(|app| {
            let data_dir = app.path().app_data_dir()?;
            fs::create_dir_all(&data_dir)?;

            // Apply native window chrome to pre-defined windows.
            for label in ["main", "main1"] {
                if let Some(win) = app.get_webview_window(label) {
                    platform::apply_native_chrome(&win);
                }
            }

            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            login,
            open_settings_window,
            list_contacts,
            get_contact,
            list_conversations,
            get_conversation,
            get_messages,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
