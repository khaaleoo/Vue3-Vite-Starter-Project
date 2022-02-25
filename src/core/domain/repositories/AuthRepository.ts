import { Auth } from '../models/auth'

export interface AuthRepository {
  login: (code: any, redirectUri: string) => Promise<Auth | null>
  refreshToken: (
    refreshToken: string
  ) => Promise<{ accessToken: string; tokenExpiresIn: number }>
}
