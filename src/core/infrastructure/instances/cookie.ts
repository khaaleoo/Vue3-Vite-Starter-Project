import { Cookie } from '../../domain/repositories/Cookie'
import { CookieStorage } from 'cookie-storage'

const cookieStorage = new CookieStorage()

const appCookies: Cookie = {
  get: (key: string) => cookieStorage.getItem(key),
  set: (key: string, value: string) => appCookies.set(key, value),
}

export default appCookies
