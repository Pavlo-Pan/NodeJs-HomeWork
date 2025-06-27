import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get('/', async (req, res) => {
  const products = await Product.find().populate('category');
  res.json(products);
});

export default router;
