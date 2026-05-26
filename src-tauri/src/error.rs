use serde::Serialize;

/// Unified error type for all Tauri commands.
///
/// Keeps a flat `kind` + `message` structure so the frontend can
/// branch on `kind` without parsing strings, while avoiding a
/// monolithic enum that grows with every new feature.
#[derive(Debug, Clone, Serialize, thiserror::Error)]
#[error("{message}")]
pub struct AppError {
    /// Machine-readable category (e.g. "network", "auth", "not_found").
    pub kind: &'static str,
    /// Human-readable description for UI display or logging.
    pub message: String,
}

impl AppError {
    pub fn network(msg: impl Into<String>) -> Self {
        Self {
            kind: "network",
            message: msg.into(),
        }
    }

    pub fn auth(msg: impl Into<String>) -> Self {
        Self {
            kind: "auth",
            message: msg.into(),
        }
    }

    pub fn not_found(msg: impl Into<String>) -> Self {
        Self {
            kind: "not_found",
            message: msg.into(),
        }
    }

    pub fn _internal(msg: impl Into<String>) -> Self {
        Self {
            kind: "internal",
            message: msg.into(),
        }
    }

    pub fn window(msg: impl Into<String>) -> Self {
        Self {
            kind: "window",
            message: msg.into(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn error_serializes_to_flat_struct() {
        let err = AppError::auth("bad credentials");
        let json = serde_json::to_value(&err).unwrap();
        assert_eq!(json["kind"], "auth");
        assert_eq!(json["message"], "bad credentials");
    }

    #[test]
    fn error_display_shows_message() {
        let err = AppError::network("timeout");
        assert_eq!(err.to_string(), "timeout");
    }
}
