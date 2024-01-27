import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import { useUserStore } from './modules/user'

const pinia = createPinia()
pinia.use(persist)

export default pinia
export { useUserStore }
