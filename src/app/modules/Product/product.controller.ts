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
//3. Retrieve a Specific Product by ID (Method: GET) controller
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductById(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

//4. Update Product Information (Method: PUT) controller
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await ProductServices.updateProductById(
      productId,
      updateData
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

//5. Function to delete a product by ID (Method: DELETE) controller
const deleteProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        await ProductServices.deleteProductById(productId);
        res.status(200).json({
          success: true,
          message: 'Product deleted successfully!',
          data: null,
        });
    } catch (err) {
        console.error(err);
    }
};

//6. Search a product (Method: GET) controller
const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.searchProducts(searchTerm as string);
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  searchProducts,
};