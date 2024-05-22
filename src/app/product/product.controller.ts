import { Request, Response } from 'express'
import { productServices } from './product.service'
import { productValidationSchema } from './product.validation'

//1. Create a New Product (Method: POST) controller
const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const product = productValidationSchema.parse(data)

    const result = await productServices.createProduct(product)

    res.json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

//2. Retrieve a List of All Products and search  (Method: GET) controller
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query
    const result = await productServices.getAllProducts(searchTerm)
    res.json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

//3. Retrieve a Specific Product by ID (Method: GET) controller
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await productServices.getProductById(productId)
    if (!result) {
      return res.status(400).json({
        success: false,
        message: 'Product not found',
        data: result,
      })
    }
    res.json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

//4. Update Product Information (Method: PUT) controller
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const data = req.body
    const updatedProduct = productValidationSchema.parse(data)
    const result = await productServices.updateProduct(
      productId,
      updatedProduct,
    )
    res.json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

//5. Function to delete a product by ID (Method: DELETE) controller
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    await productServices.deleteProduct(productId)
    res.json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: err,
    })
  }
}

export const productControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
