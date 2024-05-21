import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

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
const getSingleProductsFromtoDB = async (productId: string) => {
  const result = await ProductModel.findOne({ productId });
  return result;
};



export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromtoDB,
  getSingleProductsFromtoDB,
};