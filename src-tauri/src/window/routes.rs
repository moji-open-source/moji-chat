use std::{fmt, path::PathBuf};

#[derive(Clone)]
pub enum Route {
    Login,
    Settings,
    Messages,
}

impl From<Route> for String {
    fn from(val: Route) -> Self {
        val.to_string()
    }
}

impl AsRef<str> for Route {
    fn as_ref(&self) -> &str {
        match self {
            Route::Login => "LOGIN",
            Route::Settings => "SETTINGS",
            Route::Messages => "MESSAGES",
        }
    }
}

impl fmt::Display for Route {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.as_ref())
    }
}

impl From<Route> for PathBuf {
    fn from(val: Route) -> Self {
        match val {
            Route::Login => "/login".into(),
            Route::Settings => "/settings".into(),
            Route::Messages => "/messages".into(),
        }
    }
}
