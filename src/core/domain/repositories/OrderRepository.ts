import { Order } from '../models/Order'
import { OrderEvent } from '../models/OrderEvent'

export interface OrderRepository {
  get: (data: any) => Promise<Order[]>
  getEvents: (data: any) => Promise<OrderEvent[]>
}
