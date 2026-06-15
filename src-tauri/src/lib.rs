#![allow(unexpected_cfgs)]

mod cmd;
mod core;
mod error;
mod events;
mod models;
mod platform;
mod services;
mod state;
mod utils;

use crate::core::window::WindowManager;
use state::AppState;

#[tokio::main]
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub async fn run() {
    let builder = tauri::Builder::default().manage(AppState::new());
    builder
        .setup(|app| {
            core::handle::TauriAppHandle::global().init(app.handle().clone())?;

            utils::init::init_work_resource()?;
            core::tracing::inti_tracing(utils::dirs::app_log_dir()?);

            WindowManager::global()
                .init(app.handle().clone())?
                .open_login_window()
                .expect("Failed to create login window");
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
        cmd::login,
        cmd::open_settings_window,
        cmd::open_app_window,
        cmd::list_contacts,
        cmd::get_contact,
        cmd::list_conversations,
        cmd::get_conversation,
        cmd::get_messages,
        cmd::open_login_window
    ]
}
