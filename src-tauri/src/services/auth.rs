use reqwest::Client;

use crate::error::AppError;
use crate::models::auth::{LoginParams, LoginResponse};

const API_BASE_URL: &str = "https://clovu.me";

/// Authenticate against the remote API.
pub async fn login(params: &LoginParams) -> Result<LoginResponse, AppError> {
    let client = Client::new();

    let res = client
        .post(format!("{API_BASE_URL}/api/auth/login"))
        .json(&serde_json::json!({
            "account": params.account,
            "password": params.password,
        }))
        .send()
        .await
        .map_err(|e| AppError::network(e.to_string()))?;

    if !res.status().is_success() {
        let status = res.status().as_u16();
        let body = res.text().await.unwrap_or_default();
        return Err(AppError::auth(format!("login failed ({status}): {body}")));
    }

    res.json::<LoginResponse>()
        .await
        .map_err(|e| AppError::network(format!("invalid response: {e}")))
}
