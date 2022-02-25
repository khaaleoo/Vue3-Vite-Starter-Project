export interface Cookie {
  get: <T>(key: string) => string | null
  set: <T>(key: string, value: string) => void
}
