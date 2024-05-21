import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

//1. Create a New Product (Method: POST)
const createProductIntoDB = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
}

export const ProductServices = {
  createProductIntoDB,
};