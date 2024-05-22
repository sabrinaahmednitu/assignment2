import { Product } from "./product.interface";
import { ProductModel } from "./product.model";
import { Types } from 'mongoose';

//1. Create a New Product (Method: POST)
const createProductIntoDB = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
}
//2. Retrieve a List of All Products (Method: GET)
const getAllProductsFromtoDB = async () => {
  const result = await ProductModel.find();
  return result;
};
//3. Retrieve a Specific Product by ID (Method: GET)
const getProductById = async (productId: string) => {
    if (!Types.ObjectId.isValid(productId)) {
        throw new Error('Invalid product ID');
    }
    const result = await ProductModel.findById(productId).exec();
    if (!result) {
        throw new Error('Product not found');
    }
    return result;
};


export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromtoDB,
  getProductById,
};