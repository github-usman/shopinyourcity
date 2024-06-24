import express from 'express';
import { deleteProduct, getProductDetails, fillProdcut } from '../controllers/product.controller.js';
const router  = express.Router();

router.get('/shops',getProductDetails);
router.post('/shops',fillProdcut);
router.delete('/shops',deleteProduct);

export default router;