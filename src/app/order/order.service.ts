import { TOrder } from './order.interface'
import { Order } from './order.model'

//1. Create a order (Method: POST)
const createOrder = async (payLoad: TOrder) => {
  const result = await Order.create(payLoad)
  return result
}

//2. Retrieve orderes (Method: GET)
const getAllOrders = async (email: unknown) => {
  if (typeof email === 'string') {
    const result = await Order.find({ email })
    return result
  }
  const result = await Order.find()
  return result
}

export const orderServices = {
  createOrder,
  getAllOrders,
}
