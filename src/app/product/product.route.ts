import express from 'express'
import { productControllers } from './product.controller'
const router = express.Router()

//1. Create a New Product (Method: POST) route
router.post('/', productControllers.createProduct)

//2. Retrieve a List of All Products (Method: GET) route
router.get('/', productControllers.getAllOrSearchProducts)

//3. Retrieve a Specific Product by ID (Method: GET) route
router.get('/:productId', productControllers.getProductById)

 //4. Update Product Information (Method: PUT) route
router.delete('/:productId', productControllers.deleteProduct)

//5. delete a product by its ID (Method: DELETE) route
router.put('/:productId', productControllers.updateProduct)

export const productRouter = router
