mod auth;

/// Re-export all command functions so `lib.rs` can register them
/// with `tauri::generate_handler!` in one place.
pub use auth::login;
