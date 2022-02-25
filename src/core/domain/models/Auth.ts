export type Auth = {
  accessToken: string
  refreshToken: string
  tokenExpiresIn: number
}

export interface IAuth {
  needToRefreshToken: (expTime: number, timeRange?: number) => boolean
  isRefreshTokenPending: (
    isPending: string | boolean | number | null
  ) => boolean
}
