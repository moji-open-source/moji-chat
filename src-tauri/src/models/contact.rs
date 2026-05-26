use serde::Serialize;

#[derive(Debug, Clone, Serialize)]
pub struct Contact {
    pub id: String,
    pub name: String,
    pub handle: String,
    pub title: String,
    pub status: String,
    pub online: bool,
}
