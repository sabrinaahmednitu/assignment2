import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/Product/product.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());


//E-commerce appliation routes
app.use('/',ProductRoutes)

// app.get("/", (req: Request, res: Response) => {
//   const a = 10;

//   res.send(a);

//   //   res.send('Hello World!');
// });

export default app;
