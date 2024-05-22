

import { Request, Response } from 'express';
import { OrderServices } from './order.service';

//1. Create a New Order (Method: POST) controller
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrder(orderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

export const OrderControllers = {
  createOrder,
};











//2.Retrieve All Orders(Method: GET) controller

//3. Retrieve Orders by User Email (Method: GET) controller
