import { IAuth } from '../models/auth'

const AuthService: IAuth = {
  needToRefreshToken: (expTime: number, timeRange: number = 1000 * 60 * 5) => {
    const current = Date.now()
    const check = expTime - current
    return check > 0 && check < timeRange
  },
  isRefreshTokenPending: (isPending: string | boolean | number | null) =>
    !!isPending,
}

export default AuthService
