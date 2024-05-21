import { Request, Response } from "express";
import { ProductServices } from "./product.service";


//1. Create a New Product (Method: POST) controller
const createProduct = async(req:Request, res:Response) => {
    try {
        const {product:productData} = req.body;
        const result = await ProductServices.createProductIntoDB(productData);
        //send response
        res.status(200).json({
          success: true,
          message: 'Product created successfully!',
          data: result,
        });
    } catch (err) {
        console.log(err)
   }
}
//2. Retrieve a List of All Products (Method: GET) controller
const getAllProducts = async(req:Request, res:Response) => {
    try {
        const result = await ProductServices.getAllProductsFromtoDB();
        //send response
        res.status(200).json({
          success: true,
          message: 'Products fetched successfully!',
          data: result,
        });
    } catch (err) {
        console.log(err)
   }
}
//2. Retrieve a List of All Products (Method: GET) controller
const getSingleProduct = async(req:Request, res:Response) => {
    try {
        const { productId } = req.params;
        console.log(productId);
        const result = await ProductServices.getSingleProductsFromtoDB(productId);
        //send response
        res.status(200).json({
          success: true,
          message: 'Product fetched successfully!',
          data: result,
        });
    } catch (err) {
        console.log(err)
   }
}



export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};