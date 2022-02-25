import { AuthRepository } from '../../domain/repositories/AuthRepository'
import { Http } from '../../domain/repositories/Http'
import { LoginDTO } from '../http/LoginDTO'

const ssoBackendEndpoint = String(import.meta.env.VITE_SSO_BE_ENDPOINT)
const cognitoEndpoint = String(import.meta.env.VITE_COGNITO_ENDPOINT)
const ssoNuxtEndpoint = String(import.meta.env.VITE_SSO_NUXT_ENDPOINT)

export const authRepository = (client: Http): AuthRepository => ({
  login: async (code: string, redirectUri: string) => {
    try {
      const result = await client.post<LoginDTO>(
        `${ssoNuxtEndpoint}/api/auth/login-oauth2`,
        { code, redirect_uri: redirectUri }
      )
      const { access_token, id_token, refresh_token, expires_in } =
        result.data?.data
      return {
        accessToken: id_token,
        refreshToken: refresh_token,
        tokenExpiresIn: expires_in,
      }
    } catch (e) {
      throw 'Error login'
    }
  },
  refreshToken: async (refreshToken: string) => {
    try {
      const result = await client.post(ssoBackendEndpoint, refreshToken)
      return result?.data
    } catch (e) {
      throw 'Error refreshToken'
    }
  },
})
