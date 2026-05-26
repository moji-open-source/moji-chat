mod auth;
mod window;

/// Re-export all command functions so `lib.rs` can register them
/// with `tauri::generate_handler!` in one place.
pub use auth::login;
pub use window::open_app_setting_window;
