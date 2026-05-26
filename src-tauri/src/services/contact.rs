use crate::error::AppError;
use crate::models::contact::Contact;

/// Return all contacts. Currently returns mock data;
/// will be replaced by a real data source later.
pub fn list_contacts() -> Result<Vec<Contact>, AppError> {
    Ok(mock_contacts())
}

/// Find a single contact by ID.
pub fn get_contact(id: &str) -> Result<Contact, AppError> {
    mock_contacts()
        .into_iter()
        .find(|c| c.id == id)
        .ok_or_else(|| AppError::not_found(format!("contact '{id}' not found")))
}

fn mock_contacts() -> Vec<Contact> {
    vec![
        Contact {
            id: "lin".into(),
            name: "林澈".into(),
            handle: "@lin".into(),
            title: "产品设计".into(),
            status: "正在整理首页信息架构".into(),
            online: true,
        },
        Contact {
            id: "mika".into(),
            name: "Mika".into(),
            handle: "@mika".into(),
            title: "前端工程".into(),
            status: "今天会处理布局路由".into(),
            online: true,
        },
        Contact {
            id: "chen".into(),
            name: "陈予安".into(),
            handle: "@chen".into(),
            title: "后端工程".into(),
            status: "Tauri command 联调中".into(),
            online: false,
        },
        Contact {
            id: "workspace-bot".into(),
            name: "Workspace Bot".into(),
            handle: "@workspace-bot".into(),
            title: "系统助手".into(),
            status: "可以接收自动化通知".into(),
            online: false,
        },
    ]
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn list_returns_all_contacts() {
        let contacts = list_contacts().unwrap();
        assert_eq!(contacts.len(), 4);
        assert_eq!(contacts[0].id, "lin");
    }

    #[test]
    fn get_existing_contact() {
        let contact = get_contact("mika").unwrap();
        assert_eq!(contact.name, "Mika");
        assert_eq!(contact.handle, "@mika");
    }

    #[test]
    fn get_missing_contact_returns_not_found() {
        let err = get_contact("nonexistent").unwrap_err();
        assert_eq!(err.kind, "not_found");
    }
}
