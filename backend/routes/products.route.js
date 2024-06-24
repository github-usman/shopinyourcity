import express from 'express';
import { deleteProduct, fillProdcut, getProductDetails } from '../controllers/product.controller.js';
const router  = express.Router();

router.get('/products',getProductDetails);
router.post('/products',fillProdcut);
router.delete('/products',deleteProduct);

export default router;