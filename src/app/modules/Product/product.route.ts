import  express  from 'express';
import { ProductControllers } from './product.controller';


const router = express.Router()
//1. Create a New Product (Method: POST) route
router.post('/', ProductControllers.createProduct);
//2. Retrieve a List of All Products (Method: GET) route
router.get('/',ProductControllers.getAllProducts);
//3. Retrieve a Specific Product by ID (Method: GET)
router.get('/:productId', ProductControllers.getProductById);






export const ProductRoutes = router;