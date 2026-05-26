use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize)]
pub struct LoginParams {
    pub account: String,
    pub password: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct LoginResponse {
    pub token: String,
    #[serde(rename = "userId")]
    pub user_id: String,
}
