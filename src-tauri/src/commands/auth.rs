use crate::error::AppError;
use crate::models::auth::{LoginParams, LoginResponse};
use crate::services;

/// Authenticate with account + password.
#[tauri::command]
pub async fn login(params: LoginParams) -> Result<LoginResponse, AppError> {
    services::auth::login(&params).await
}
