import express from 'express';
import Category from '../models/Category.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

export default router;
