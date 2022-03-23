export interface Cookie {
  get: <T>(key: string) => string | null
  set: <T>(key: string, value: string) => void
  remove: <T>(key: string) => void
  removeItems: <T>(listKeys: string[]) => void
}
