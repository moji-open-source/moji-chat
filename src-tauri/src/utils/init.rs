use std::fs;

use anyhow::Result;

use crate::utils::dirs;

pub fn init_work_resource() -> Result<()> {
    ensure_directories()?;
    Ok(())
}

/// ensure directories exists
fn ensure_directories() -> Result<()> {
    let directories = [
        ("app home", dirs::app_home_dir()?),
        ("app logs", dirs::app_log_dir()?),
    ];

    for (name, dir) in directories {
        if !dir.exists() {
            fs::create_dir_all(&dir).map_err(|e| {
                tracing::error!("Failed to create app {name} {:?}", e);
                anyhow::anyhow!("Failed to create app {name} {e}")
            })?;
            tracing::info!("Created app {name} {:?}", dir)
        }
    }

    Ok(())
}
