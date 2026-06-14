use std::path::PathBuf;

use tauri::Manager;

use crate::core::handle::TauriAppHandle;

/// get the app home dir
pub fn app_home_dir() -> anyhow::Result<PathBuf> {
    let path = TauriAppHandle::global().path();

    match path.data_dir() {
        Ok(dir) => Ok(dir.join("io.github.moji-open-source.moji-chat")),
        Err(err) => {
            tracing::error!("Failed to get the app home directory {err}");
            Err(anyhow::anyhow!("Failed to get the app home directory"))
        }
    }
}

pub fn app_log_dir() -> anyhow::Result<PathBuf> {
    Ok(app_home_dir()?.join("logs"))
}
