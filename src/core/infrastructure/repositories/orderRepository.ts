import { Http } from '../../domain/repositories/Http'
import { OrderRepository } from '../../domain/repositories/OrderRepository'

export const orderRepository = (client: Http): OrderRepository => ({
  get: async (data) => {
    const result = await client.post('')
    return result
  },
  getEvents: async (data) => {
    const result = await client.post('')
    return result
  },
})
