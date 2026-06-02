use tauri_plugin_http::reqwest;

use crate::error::AppError;
use crate::models::auth::{LoginParams, LoginResponse};

#[cfg(feature = "mock-server")]
use wiremock::MockServer;

#[cfg(not(feature = "mock-server"))]
const API_BASE_URL: &str = "https://clovu.me";

/// Authenticate against the remote API.
pub async fn login(params: &LoginParams) -> Result<LoginResponse, AppError> {
    #[cfg(feature = "mock-server")]
    let mock_server = MockServer::start().await; // Start the mock server if the feature is enabled

    #[cfg(feature = "mock-server")]
    {
        // Set up mock responses for the login endpoint
        use wiremock::matchers::{body_json, method, path};
        use wiremock::{Mock, ResponseTemplate};

        Mock::given(method("POST"))
            .and(path("/api/auth/login"))
            .and(body_json(serde_json::json!({
                "account": "hi@clovu.me",
                "password": "123456",
            })))
            .respond_with(ResponseTemplate::new(200).set_body_json(LoginResponse {
                user_id: "1".to_string(),
                token: "22222222222".to_string(),
            }))
            .mount(&mock_server)
            .await;
    }

    #[cfg(not(feature = "mock-server"))]
    let base_url = API_BASE_URL;
    #[cfg(feature = "mock-server")]
    let base_url = mock_server.uri(); // Use the mock server's URL if the feature is enabled

    println!("Using API base URL: {base_url}"); // Log the base URL for debugging

    let client = reqwest::Client::new();

    let res = client
        .post(format!("{base_url}/api/auth/login"))
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
