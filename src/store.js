import { writable } from 'svelte/store'

function createUser() {
  const { subscribe, set } = writable(window.localStorage.getItem('user'))

  return {
    subscribe,
    login(currentUser) {
      set(currentUser)
      window.localStorage.setItem('user', currentUser)
    },
    logout() {
      set(null)
      window.localStorage.removeItem('user')
    },
  }
}

export const user = createUser()
