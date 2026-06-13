use crate::error::AppError;
use crate::models::contact::Contact;
use crate::services;

/// Return all contacts.
#[tauri::command]
pub fn list_contacts() -> Result<Vec<Contact>, AppError> {
    services::contact::list_contacts()
}

/// Get a single contact by ID.
#[tauri::command]
pub fn get_contact(id: String) -> Result<Contact, AppError> {
    services::contact::get_contact(&id)
}
