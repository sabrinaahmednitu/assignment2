import { Product } from './product.interface';
import { ProductModel } from './product.model';
import { Types } from 'mongoose';

//1. Create a New Product (Method: POST)
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
//2. Retrieve a List of All Products (Method: GET)
const getAllProductsFromtoDB = async () => {
  const result = await ProductModel.find();
  return result;
};
//3. Retrieve a Specific Product by ID (Method: GET)
const getProductById = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

//4. Update Product Information (Method: PUT)
const updateProductById = async (
  productId: string,
  updateData: Partial<Product>
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, updateData, {
    new: true,
  });
  return result;
};

//5. Function to delete a product by ID (Method: DELETE)
const deleteProductById = async (productId: string) => {
    const result = await ProductModel.findByIdAndDelete(productId);
    return result;
};

//6. Search a product (Method: GET)
const searchProducts = async (searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'i'); 
    const result = await ProductModel.find({
        $or: [
            { name: regex },
            { description: regex },
            { category: regex },
            { tags: regex }
        ]
    });
    return result;
};



export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromtoDB,
  getProductById,
  updateProductById,
  deleteProductById,
  searchProducts,
};
