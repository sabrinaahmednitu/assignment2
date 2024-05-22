import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/Product/product.route";
import { OrderRoutes } from "./app/modules/Order/order.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());


//Product Management route
app.use('/api/products', ProductRoutes);

//Order Management route
app.use('/api/orders', OrderRoutes);


export default app;
