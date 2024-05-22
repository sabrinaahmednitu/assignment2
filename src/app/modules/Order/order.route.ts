import { Router } from 'express';
import { OrderControllers } from './order.controller';

const router = Router();

//1. Create a New Order (Method: POST) route
router.post('/', OrderControllers.createOrder);

//2.Retrieve All Orders(Method: GET) controller
router.get('/', OrderControllers.getAllOrders);

//3. Retrieve Orders by User Email (Method: GET) controller
router.get('/', OrderControllers.getOrdersByUserEmail);

export const OrderRoutes = router;
