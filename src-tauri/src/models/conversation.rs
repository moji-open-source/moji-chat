use serde::Serialize;

#[derive(Debug, Clone, Serialize)]
pub struct Conversation {
    pub id: String,
    pub name: String,
    pub avatar: String,
    #[serde(rename = "lastMessage")]
    pub last_message: String,
    pub time: String,
    pub unread: u32,
    pub pinned: bool,
    pub online: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub typing: Option<bool>,
}

#[derive(Debug, Clone, Serialize)]
pub struct Message {
    pub id: String,
    pub sender: MessageSender,
    pub text: String,
    pub time: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "lowercase")]
pub enum MessageSender {
    Me,
    Other,
}
