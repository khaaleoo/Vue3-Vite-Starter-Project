import axios from 'axios'
import { Http } from '../../domain/repositories/Http'
import AuthService from '../../domain/services/Auth.service'
import appCookies from './cookie'

const headers = {
  'Content-Type': 'application/json',
}

const currentAxios = axios.create({
  // baseURL: '',
  // timeout: 1000,
  headers,
})

axios.interceptors.request.use(
  async (config: any) => {
    const token = appCookies.get('sso_access_token')
    const expiresIn = Number(appCookies.get('sso_expires_in'))
    const isRefreshing = AuthService.isRefreshTokenPending(
      localStorage.getItem('isRefreshTokenPending')
    )
    if (AuthService.needToRefreshToken(expiresIn) && !isRefreshing) {
      //
    }
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response
    if (status === 401) {
      console.error('unauthorized')
    }
    return Promise.reject({
      error,
      response: error.response?.data,
    })
  }
)

export const httpAxios: Http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await currentAxios.get(path, {
      ...config,
      params,
      headers,
    })
    return response.data as T
  },
  post: async <T>(
    path: string,
    params?: Record<string, any> | string,
    config?: any
  ) => {
    const response = await currentAxios.post(
      path,
      typeof params === 'string' ? params : { ...params },
      { ...config, headers }
    )
    return response.data as T
  },
  put: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await currentAxios.put(
      path,
      { ...params },
      { ...config, headers }
    )
    return response.data as T
  },
  delete: async <T>(path: string, params?: any, config?: any) => {
    const response = await currentAxios.delete(path, {
      ...config,
      params,
      headers,
    })
    return response.data as T
  },
}
