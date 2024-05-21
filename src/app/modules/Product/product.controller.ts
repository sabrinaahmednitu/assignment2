import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async(req:Request, res:Response) => {
    try {
        const {product:productData} = req.body;
        const result = await ProductServices.createProductIntoDB(productData);
        //send response
        res.status(200).json({
          success: true,
          message: 'Product created successfully',
          data: result,
        });
    } catch (err) {
        console.log(err)
   }
}

export const ProductControllers = {
  createProduct,
};