use std::ops::Deref;

pub struct TauriAppHandle {
    inner: tokio::sync::OnceCell<tauri::AppHandle<tauri::Wry>>,
}

#[derive(thiserror::Error, Debug)]
pub enum HandleError {
    #[error("App Handle does not allow repeated initialization")]
    AlreadyInitializedError,
}

impl TauriAppHandle {
    pub fn global() -> &'static Self {
        static INSTANCE: TauriAppHandle = TauriAppHandle {
            inner: tokio::sync::OnceCell::const_new(),
        };

        &INSTANCE
    }

    pub fn init(&self, handle: tauri::AppHandle) -> Result<&Self, HandleError> {
        self.inner
            .set(handle)
            .map_err(|_| HandleError::AlreadyInitializedError)
            .map(|_| self)
    }

    pub fn get(&self) -> &tauri::AppHandle {
        self.inner
            .get()
            .expect("TauriAppHandle accessed before initialization")
    }
}

impl Deref for TauriAppHandle {
    type Target = tauri::AppHandle<tauri::Wry>;

    fn deref(&self) -> &Self::Target {
        self.get()
    }
}
