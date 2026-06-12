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

use crate::commands::{
    get_contact, get_conversation, get_messages, list_contacts, list_conversations, login,
    open_app_window, open_login_window, open_settings_window,
};
use state::AppState;

const LOGIN_LABEL: &str = "LOGIN";

#[tokio::main]
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub async fn run() {
    let builder = tauri::Builder::default().manage(AppState::new());

    builder
        .setup(|app| {
            let data_dir = app.path().app_data_dir()?;
            fs::create_dir_all(&data_dir)?;

            // Apply native window chrome to pre-defined windows.
            for label in [LOGIN_LABEL] {
                if let Some(win) = app.get_webview_window(label) {
                    platform::apply_native_chrome(&win);
                }
            }

            let _ = open_login_window(app.handle().clone());

            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            login,
            open_settings_window,
            open_app_window,
            list_contacts,
            get_contact,
            list_conversations,
            get_conversation,
            get_messages,
            open_login_window
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
