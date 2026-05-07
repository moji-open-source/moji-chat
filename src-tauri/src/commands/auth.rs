use reqwest::Client;
use serde::{Deserialize, Serialize};

/// API base URL — centralised here so it's easy to swap later.
const API_BASE_URL: &str = "https://clovu.me";

/// Fields sent to the login endpoint.
#[derive(Deserialize)]
pub struct LoginParams {
    pub account: String,
    pub password: String,
}

/// Shape of a successful login response from the server.
#[derive(Serialize, Deserialize)]
pub struct LoginResponse {
    pub token: String,
    #[serde(rename = "userId")]
    pub user_id: String,
}

/// Tauri command: authenticate with account + password.
///
/// The frontend calls this via `invoke('login', { account, password })`.
/// All HTTP logic lives here — the frontend never touches the network directly.
#[tauri::command]
pub async fn login(params: LoginParams) -> Result<LoginResponse, String> {
    let client = Client::new();

    let res = client
        .post(format!("{}/api/auth/login", API_BASE_URL))
        .json(&serde_json::json!({
            "account": params.account,
            "password": params.password,
        }))
        .send()
        .await
        .map_err(|e| format!("Network error: {}", e))?;

    if !res.status().is_success() {
        let status = res.status().as_u16();
        let body = res.text().await.unwrap_or_default();
        return Err(format!("Login failed ({}): {}", status, body));
    }

    res.json::<LoginResponse>()
        .await
        .map_err(|e| format!("Invalid response: {}", e))
}
