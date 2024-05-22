
import { Order } from './order.interface';
import { OrderModel } from './order.model';

//1. Create a New Order (Method: POST)
const createOrder = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};



//2.Retrieve All Orders(Method: GET)

//3. Retrieve Orders by User Email (Method: GET)


export const OrderServices = {
  createOrder,
};