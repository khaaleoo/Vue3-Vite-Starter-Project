import axios from 'axios'
import { Http } from '../../domain/repositories/Http'
import appCookies from './cookie'

const headers = {
  'Content-Type': 'application/json',
}

export const currentAxios = axios.create({
  headers,
})

currentAxios.interceptors.request.use(
  async (config: any) => {
    const token = appCookies.get('sso_id_token')
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

currentAxios.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
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
    })
    return response.data as T
  },
  post: async <T>(
    path: string,
    params?: Record<string, any> | string | any[],
    config?: any
  ) => {
    const response = await currentAxios.post(
      path,
      typeof params === 'string' || Array.isArray(params)
        ? params
        : { ...params },
      { ...config }
    )
    return response.data as T
  },
  put: async <T>(
    path: string,
    params?: Record<string, any> | string | any[],
    config?: any
  ) => {
    const response = await currentAxios.put(
      path,
      typeof params === 'string' || Array.isArray(params)
        ? params
        : { ...params },
      { ...config }
    )
    return response.data as T
  },
  delete: async <T>(path: string, params?: any, config?: any) => {
    const response = await currentAxios.delete(path, {
      ...config,
      params,
    })
    return response.data as T
  },
}
