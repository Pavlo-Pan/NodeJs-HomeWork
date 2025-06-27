import express from 'express';
import Tag from '../models/Tag.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const item = await Tag.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get('/', async (req, res) => {
  const list = await Tag.find().populate('articles');
  res.json(list);
});

router.get('/:id', async (req, res) => {
  const item = await Tag.findById(req.params.id).populate('articles');
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await Tag.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
