import  express  from 'express';
import { ProductControllers } from './product.controller';


const router = express.Router()
//1. Create a New Product (Method: POST) route
router.post('/', ProductControllers.createProduct);
//2. Retrieve a List of All Products (Method: GET) route
router.get('/',ProductControllers.getAllProducts);
//3. Retrieve a Specific Product by ID (Method: GET) route
router.get('/:productId', ProductControllers.getProductById);
 //4. Update Product Information (Method: PUT) route
router.put('/:productId', ProductControllers.updateProductById);
//5. Function to delete a product by ID (Method: DELETE) route
router.delete('/:productId', ProductControllers.deleteProductById);
//6. Search a product (Method: GET) route
router.get('/', ProductControllers.searchProducts);




export const ProductRoutes = router;