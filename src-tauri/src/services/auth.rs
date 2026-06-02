use tauri_plugin_http::reqwest;

use crate::error::AppError;
use crate::models::auth::{LoginParams, LoginResponse};

/// API endpoint path for authentication.
const AUTH_LOGIN_PATH: &str = "/api/auth/login";

#[cfg(not(feature = "mock-server"))]
const API_BASE_URL: &str = "https://clovu.me";

/// Create an HTTP client for API requests.
///
/// Returns a configured reqwest client with appropriate settings.
fn create_http_client() -> reqwest::Client {
    reqwest::Client::new()
}

/// Get the base URL for API requests.
///
/// Returns the mock server URL when `mock-server` feature is enabled,
/// otherwise returns the production API base URL.
async fn get_base_url() -> String {
    #[cfg(not(feature = "mock-server"))]
    {
        API_BASE_URL.to_string()
    }

    #[cfg(feature = "mock-server")]
    {
        setup_mock_server().await
    }
}

/// Set up and return a mock server for testing.
///
/// Configures mock responses for the login endpoint with test credentials.
#[cfg(feature = "mock-server")]
async fn setup_mock_server() -> String {
    use wiremock::matchers::{body_json, method, path};
    use wiremock::{Mock, MockServer, ResponseTemplate};

    let mock_server = MockServer::start().await;

    Mock::given(method("POST"))
        .and(path(AUTH_LOGIN_PATH))
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

    mock_server.uri()
}

/// Authenticate against the remote API.
pub async fn login(params: &LoginParams) -> Result<LoginResponse, AppError> {
    let base_url = get_base_url().await;

    println!("Using API base URL: {base_url}"); // Log the base URL for debugging

    let client = create_http_client();

    let res = client
        .post(format!("{base_url}{AUTH_LOGIN_PATH}"))
        .json(&serde_json::json!({
            "account": params.account,
            "password": params.password,
        }))
        .send()
        .await
        .map_err(|e| AppError::network(format!("failed to send login request: {e}")))?;

    if !res.status().is_success() {
        let status = res.status().as_u16();
        let body = res.text().await.unwrap_or_default();
        return Err(AppError::auth(format!(
            "login failed with status {status}: {body}"
        )));
    }

    res.json::<LoginResponse>()
        .await
        .map_err(|e| AppError::network(format!("failed to parse login response: {e}")))
}
