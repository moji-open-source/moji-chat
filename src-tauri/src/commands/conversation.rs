use crate::error::AppError;
use crate::models::conversation::{Conversation, Message};
use crate::services;

/// Return all conversations.
#[tauri::command]
pub fn list_conversations() -> Result<Vec<Conversation>, AppError> {
    services::conversation::list_conversations()
}

/// Get a single conversation by ID.
#[tauri::command]
pub fn get_conversation(id: String) -> Result<Conversation, AppError> {
    services::conversation::get_conversation(&id)
}

/// Get messages for a conversation.
#[tauri::command]
pub fn get_messages(conversation_id: String) -> Result<Vec<Message>, AppError> {
    services::conversation::get_messages(&conversation_id)
}
