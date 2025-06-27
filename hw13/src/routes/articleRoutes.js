import express from 'express';
import Article from '../models/Article.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const item = await Article.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get('/', async (req, res) => {
  const list = await Article.find().populate('tags');
  res.json(list);
});

router.get('/:id', async (req, res) => {
  const item = await Article.findById(req.params.id).populate('tags');
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
