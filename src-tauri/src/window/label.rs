use std::{fmt, path::PathBuf};

#[derive(Clone)]
pub enum Label {
    Login,
    Settings,
    Messages,
}

impl From<Label> for String {
    fn from(val: Label) -> Self {
        val.to_string()
    }
}

impl AsRef<str> for Label {
    fn as_ref(&self) -> &str {
        match self {
            Label::Login => "LOGIN",
            Label::Settings => "SETTINGS",
            Label::Messages => "MESSAGES",
        }
    }
}

impl fmt::Display for Label {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.as_ref())
    }
}

impl From<Label> for PathBuf {
    fn from(val: Label) -> Self {
        match val {
            Label::Login => "/login".into(),
            Label::Settings => "/settings".into(),
            Label::Messages => "/messages".into(),
        }
    }
}
