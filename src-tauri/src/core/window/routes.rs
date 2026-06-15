use std::path::PathBuf;

#[derive(Clone)]
pub enum Route {
    Login,
    Settings,
    Messages,
}

impl Route {
    pub fn path(&self) -> &'static str {
        match self {
            Route::Login => "/login",
            Route::Settings => "/settings",
            Route::Messages => "/messages",
        }
    }

    pub fn label(&self) -> &'static str {
        match self {
            Route::Login => "LOGIN",
            Route::Settings => "SETTINGS",
            Route::Messages => "MESSAGES",
        }
    }
}

impl From<Route> for PathBuf {
    fn from(val: Route) -> Self {
        val.path().into()
    }
}
