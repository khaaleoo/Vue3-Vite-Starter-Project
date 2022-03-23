import { Cookie } from '../../domain/repositories/Cookie'
import { CookieStorage } from 'cookie-storage'

const cookieStorage = new CookieStorage()

const appCookies: Cookie = {
  get: (key: string) => cookieStorage.getItem(key),
  set: (key: string, value: string) => cookieStorage.setItem(key, value),
  remove: (key: string) => cookieStorage.removeItem(key),
  removeItems: (key: string[]) =>
    key.forEach((e) => cookieStorage.removeItem(e)),
}

export default appCookies
