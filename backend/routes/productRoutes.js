// productRoutes.js
import express from 'express';
import {
  createProduct,
  getAllProducts,
  deleteProduct,
  getProductById,
  updateProduct,
} from '../controllers/productController.js';

const router = express.Router();

// POST /api/products/admin        (Create product)
router.post('/', createProduct);

// GET /api/products               (Get all products)
router.get('/', getAllProducts);

// GET /api/products/:id           (Get product by ID)
router.get('/:id', getProductById);

// PUT /api/products/:id           (Update product)
router.put('/:id', updateProduct);

// DELETE /api/products/:id        (Delete product)
router.delete('/:id', deleteProduct);

export default router;
