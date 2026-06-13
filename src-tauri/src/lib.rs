#![allow(unexpected_cfgs)]

use std::fs;

use tauri::Manager;

mod commands;
mod core;
mod error;
mod events;
mod models;
mod platform;
mod services;
mod state;
mod window;

use crate::{
    commands::{
        get_contact, get_conversation, get_messages, list_contacts, list_conversations, login,
        open_app_window, open_login_window, open_settings_window,
    },
    window::WindowManager,
};
use state::AppState;

#[tokio::main]
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub async fn run() {
    let builder = tauri::Builder::default().manage(AppState::new());
    builder
        .setup(|app| {
            let data_dir = app.path().app_data_dir()?;
            fs::create_dir_all(&data_dir)?;

            let log_dir = app.path().app_log_dir()?;
            fs::create_dir_all(&log_dir)?;

            core::tracing::inti_tracing(log_dir);

            WindowManager::global()
                .init(app.handle().clone())?
                .open_login_window()
                .unwrap();

            Ok(())
        })
        .plugin(tauri_plugin_macos_fps::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(generate_handlers())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

pub fn generate_handlers() -> impl Fn(tauri::ipc::Invoke<tauri::Wry>) -> bool + Send + Sync + 'static
{
    tauri::generate_handler![
        login,
        open_settings_window,
        open_app_window,
        list_contacts,
        get_contact,
        list_conversations,
        get_conversation,
        get_messages,
        open_login_window
    ]
}
