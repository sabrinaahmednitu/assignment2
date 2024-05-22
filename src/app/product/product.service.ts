import { TProduct } from './product.interface'
import { Product } from './product.model'

//1. Create a New Product (Method: POST)
const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad)
  return result
}

//2. Retrieve a List of All Products and Search (Method: GET)
// Retrieve a List of All Products (Method: GET)
const getAllProductsFromtoDB = async () => {
  const result = await Product.find();
  return result;
};

// Search a product (Method: GET)
const searchProducts = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await Product.find({
    $or: [
      { name: regex },
      { description: regex },
      { category: regex },
      { tags: regex },
    ],
  });
  return result;
};

//3. Retrieve a Specific Product by ID (Method: GET)
const getProductById = async (id: string) => {
  const result = await Product.findById(id)
  return result
}

//4. Update Product Information (Method: PUT)
const updateProduct = async (id: string, updatedProduct: TProduct) => {
  const result = await Product.findByIdAndUpdate(
    id,
    {
      $set: {
        ...updatedProduct,
      },
    },
    { new: true },
  )
  return result
}

//5. Function to delete a product by ID (Method: DELETE)
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id)
  return result
}

export const productServices = {
  createProduct,
  getAllProductsFromtoDB,
  searchProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
