import express from 'express';
import Magazine from '../models/Magazine.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const item = await Magazine.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get('/', async (req, res) => {
  const list = await Magazine.find().populate('publisher');
  res.json(list);
});

router.get('/:id', async (req, res) => {
  const item = await Magazine.findById(req.params.id).populate('publisher');
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await Magazine.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await Magazine.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
