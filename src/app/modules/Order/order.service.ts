
import { Order } from './order.interface';
import { OrderModel } from './order.model';

//1. Create a New Order (Method: POST)
const createOrder = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

//2.Retrieve All Orders(Method: GET)
const getAllOrders = async () => {
  const result = await OrderModel.find();
  return result;
};

//3. Retrieve Orders by User Email (Method: GET)
const getOrdersByUserEmail = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrders,
  getOrdersByUserEmail,
};