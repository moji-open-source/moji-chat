import type { ConversationParticipant } from './types'

const FALLBACK_AVATAR_LABEL = '?'

/**
 * Avatar labels come from data first, then from the display name.
 * This keeps generated initials consistent when remote profiles arrive later.
 */
export function getAvatarLabel(participant: ConversationParticipant) {
  const avatar = participant.avatar.trim()

  if (avatar.length > 0) {
    return avatar
  }

  const initials = participant.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.at(0))
    .join('')
    .toUpperCase()

  return initials || FALLBACK_AVATAR_LABEL
}
