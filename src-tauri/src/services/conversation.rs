use crate::error::AppError;
use crate::models::conversation::{Conversation, Message, MessageSender};

/// Return all conversations for the current user.
pub fn list_conversations() -> Result<Vec<Conversation>, AppError> {
    Ok(mock_conversations())
}

/// Get a single conversation by ID.
pub fn get_conversation(id: &str) -> Result<Conversation, AppError> {
    mock_conversations()
        .into_iter()
        .find(|c| c.id == id)
        .ok_or_else(|| AppError::not_found(format!("conversation '{id}' not found")))
}

/// Get messages for a conversation.
pub fn get_messages(conversation_id: &str) -> Result<Vec<Message>, AppError> {
    Ok(mock_messages(conversation_id))
}

fn mock_conversations() -> Vec<Conversation> {
    vec![
        Conversation {
            id: "c1".into(),
            name: "Aria Chen".into(),
            avatar: "AC".into(),
            last_message: "Sent you the Figma file! Let me know what you think 🎨".into(),
            time: "now".into(),
            unread: 3,
            pinned: true,
            online: true,
            typing: Some(false),
        },
        Conversation {
            id: "c2".into(),
            name: "Design Team".into(),
            avatar: "DT".into(),
            last_message: "Kai: Sprint review is at 4pm today".into(),
            time: "2m".into(),
            unread: 7,
            pinned: true,
            online: true,
            typing: None,
        },
        Conversation {
            id: "c3".into(),
            name: "Kai Nakamura".into(),
            avatar: "KN".into(),
            last_message: "yeah that PR looks good to merge".into(),
            time: "18m".into(),
            unread: 0,
            pinned: false,
            online: true,
            typing: Some(true),
        },
        Conversation {
            id: "c4".into(),
            name: "Zoe Laurent".into(),
            avatar: "ZL".into(),
            last_message: "Revised the logo — check your email".into(),
            time: "1h".into(),
            unread: 1,
            pinned: false,
            online: false,
            typing: None,
        },
        Conversation {
            id: "c5".into(),
            name: "Marcus Webb".into(),
            avatar: "MW".into(),
            last_message: "Deployment is live ✅".into(),
            time: "3h".into(),
            unread: 0,
            pinned: false,
            online: true,
            typing: None,
        },
        Conversation {
            id: "c6".into(),
            name: "Sasha Petrov".into(),
            avatar: "SP".into(),
            last_message: "Can we hop on a call tomorrow?".into(),
            time: "Yesterday".into(),
            unread: 0,
            pinned: false,
            online: false,
            typing: None,
        },
        Conversation {
            id: "c7".into(),
            name: "Lena Hoffman".into(),
            avatar: "LH".into(),
            last_message: "Here are the model benchmarks you asked about".into(),
            time: "2d".into(),
            unread: 0,
            pinned: false,
            online: true,
            typing: None,
        },
    ]
}

fn mock_messages(conversation_id: &str) -> Vec<Message> {
    match conversation_id {
        "c1" => vec![
            Message { id: "1".into(), sender: MessageSender::Other, text: "Hey! Did you get a chance to look at the new designs?".into(), time: "2:08 PM".into() },
            Message { id: "2".into(), sender: MessageSender::Me, text: "Just opened them now — the color palette is stunning".into(), time: "2:09 PM".into() },
            Message { id: "3".into(), sender: MessageSender::Other, text: "Thanks! I went with a darker base this time. Felt more premium.".into(), time: "2:10 PM".into() },
            Message { id: "4".into(), sender: MessageSender::Me, text: "It really shows. The purple accent works perfectly against it.".into(), time: "2:11 PM".into() },
            Message { id: "5".into(), sender: MessageSender::Other, text: "Exactly what I was going for 🎨 Also tweaked the typography — switched to Inter.".into(), time: "2:12 PM".into() },
            Message { id: "6".into(), sender: MessageSender::Me, text: "Smart call. Readable and modern without being generic.".into(), time: "2:13 PM".into() },
            Message { id: "7".into(), sender: MessageSender::Other, text: "Sent you the Figma file! Let me know what you think 🎨".into(), time: "2:14 PM".into() },
        ],
        "c2" => vec![
            Message { id: "1".into(), sender: MessageSender::Other, text: "Hey team, quick heads up — sprint review moved to 4pm today".into(), time: "9:30 AM".into() },
            Message { id: "2".into(), sender: MessageSender::Me, text: "Got it, thanks for the update".into(), time: "9:32 AM".into() },
            Message { id: "3".into(), sender: MessageSender::Other, text: "Also, the new component library is ready for review".into(), time: "10:15 AM".into() },
            Message { id: "4".into(), sender: MessageSender::Me, text: "Nice! I'll take a look after lunch".into(), time: "10:16 AM".into() },
            Message { id: "5".into(), sender: MessageSender::Other, text: "Kai: Sprint review is at 4pm today".into(), time: "3:45 PM".into() },
        ],
        "c3" => vec![
            Message { id: "1".into(), sender: MessageSender::Other, text: "Hey, can you review my PR when you get a chance?".into(), time: "11:20 AM".into() },
            Message { id: "2".into(), sender: MessageSender::Me, text: "Sure, which repo?".into(), time: "11:22 AM".into() },
            Message { id: "3".into(), sender: MessageSender::Other, text: "The main frontend one. PR #247 — it's the auth refactor".into(), time: "11:23 AM".into() },
            Message { id: "4".into(), sender: MessageSender::Me, text: "Looking at it now. The token refresh logic looks solid".into(), time: "11:40 AM".into() },
            Message { id: "5".into(), sender: MessageSender::Other, text: "Thanks! I spent a while getting the retry logic right".into(), time: "11:41 AM".into() },
            Message { id: "6".into(), sender: MessageSender::Me, text: "yeah that PR looks good to merge".into(), time: "11:45 AM".into() },
        ],
        "c4" => vec![
            Message { id: "1".into(), sender: MessageSender::Other, text: "I've been working on the logo redesign all week".into(), time: "Yesterday 2:00 PM".into() },
            Message { id: "2".into(), sender: MessageSender::Me, text: "How's it coming along?".into(), time: "Yesterday 2:05 PM".into() },
            Message { id: "3".into(), sender: MessageSender::Other, text: "Really good! Went with a more minimal approach this time".into(), time: "Yesterday 2:06 PM".into() },
            Message { id: "4".into(), sender: MessageSender::Me, text: "Can't wait to see it. The old one felt a bit heavy".into(), time: "Yesterday 2:08 PM".into() },
            Message { id: "5".into(), sender: MessageSender::Other, text: "Exactly my thought. Lighter weight, more versatile".into(), time: "Yesterday 2:09 PM".into() },
            Message { id: "6".into(), sender: MessageSender::Other, text: "Revised the logo — check your email".into(), time: "Today 10:30 AM".into() },
        ],
        "c5" => vec![
            Message { id: "1".into(), sender: MessageSender::Me, text: "How's the deployment going?".into(), time: "1:00 PM".into() },
            Message { id: "2".into(), sender: MessageSender::Other, text: "Running the final checks now. CI is green".into(), time: "1:02 PM".into() },
            Message { id: "3".into(), sender: MessageSender::Me, text: "Great. Any migration scripts this time?".into(), time: "1:03 PM".into() },
            Message { id: "4".into(), sender: MessageSender::Other, text: "Nope, just the API changes. Should be smooth".into(), time: "1:04 PM".into() },
            Message { id: "5".into(), sender: MessageSender::Other, text: "Deployment is live ✅".into(), time: "1:30 PM".into() },
            Message { id: "6".into(), sender: MessageSender::Me, text: "Awesome, I'll verify on staging".into(), time: "1:31 PM".into() },
        ],
        "c6" => vec![
            Message { id: "1".into(), sender: MessageSender::Other, text: "Hey, are you free this week for a sync?".into(), time: "Monday 4:00 PM".into() },
            Message { id: "2".into(), sender: MessageSender::Me, text: "Sure, what's it about?".into(), time: "Monday 4:15 PM".into() },
            Message { id: "3".into(), sender: MessageSender::Other, text: "Want to discuss the new plugin architecture".into(), time: "Monday 4:16 PM".into() },
            Message { id: "4".into(), sender: MessageSender::Me, text: "Sounds good. Thursday works best for me".into(), time: "Monday 4:20 PM".into() },
            Message { id: "5".into(), sender: MessageSender::Other, text: "Can we hop on a call tomorrow?".into(), time: "Wednesday 5:00 PM".into() },
        ],
        "c7" => vec![
            Message { id: "1".into(), sender: MessageSender::Me, text: "Hey Lena, do you have those benchmark results?".into(), time: "2 days ago 10:00 AM".into() },
            Message { id: "2".into(), sender: MessageSender::Other, text: "Yes! Just finished running them last night".into(), time: "2 days ago 10:05 AM".into() },
            Message { id: "3".into(), sender: MessageSender::Me, text: "How does the new model compare?".into(), time: "2 days ago 10:06 AM".into() },
            Message { id: "4".into(), sender: MessageSender::Other, text: "About 40% faster on inference, slightly better accuracy too".into(), time: "2 days ago 10:08 AM".into() },
            Message { id: "5".into(), sender: MessageSender::Me, text: "That's impressive. Memory usage?".into(), time: "2 days ago 10:09 AM".into() },
            Message { id: "6".into(), sender: MessageSender::Other, text: "Down 15%. The quantization trick worked".into(), time: "2 days ago 10:10 AM".into() },
            Message { id: "7".into(), sender: MessageSender::Other, text: "Here are the model benchmarks you asked about".into(), time: "2 days ago 10:12 AM".into() },
        ],
        _ => vec![],
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn list_returns_all_conversations() {
        let convos = list_conversations().unwrap();
        assert_eq!(convos.len(), 7);
        assert!(convos[0].pinned);
    }

    #[test]
    fn get_existing_conversation() {
        let convo = get_conversation("c1").unwrap();
        assert_eq!(convo.name, "Aria Chen");
    }

    #[test]
    fn get_missing_conversation_returns_not_found() {
        let err = get_conversation("nonexistent").unwrap_err();
        assert_eq!(err.kind, "not_found");
    }

    #[test]
    fn get_messages_for_c1() {
        let msgs = get_messages("c1").unwrap();
        assert_eq!(msgs.len(), 7);
    }

    #[test]
    fn all_conversations_have_messages() {
        let convos = list_conversations().unwrap();
        for convo in &convos {
            let msgs = get_messages(&convo.id).unwrap();
            assert!(
                !msgs.is_empty(),
                "conversation '{}' has no messages",
                convo.id
            );
        }
    }

    #[test]
    fn get_messages_for_unknown_returns_empty() {
        let msgs = get_messages("unknown").unwrap();
        assert!(msgs.is_empty());
    }
}
