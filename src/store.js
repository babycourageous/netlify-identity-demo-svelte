import { writable } from 'svelte/store'

function createUser() {
  const { subscribe, set } = writable(null)

  return {
    subscribe,
    login(currentUser) {
      set(currentUser)
    },
    logout() {
      set(null)
    },
  }
}

export const user = createUser()
