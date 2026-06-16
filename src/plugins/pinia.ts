import { createPinia } from 'pinia'
import SecureLS from 'secure-ls'
import { createPersistedState } from 'pinia-plugin-persistedstate'

interface SecureLSConstructor {
  new (config?: { isCompression?: boolean }): SecureLS
}

// Access the constructor safely via .default if it exists
const SecureConstructor =
  (SecureLS as unknown as { default: SecureLSConstructor }).default || SecureLS

const ls = new SecureConstructor({
  isCompression: false,
})

const pinia = createPinia()

pinia.use(
  createPersistedState({
    storage: {
      getItem: (key: string) => ls.get(key),
      setItem: (key: string, value: string) => ls.set(key, value),
    },
  }),
)

export default pinia
