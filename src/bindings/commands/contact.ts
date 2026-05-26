import { invoke } from '@tauri-apps/api/core'

import type { Contact } from '../types'

export async function listContacts(): Promise<Contact[]> {
  return invoke<Contact[]>('list_contacts')
}

export async function getContact(id: string): Promise<Contact> {
  return invoke<Contact>('get_contact', { id })
}
