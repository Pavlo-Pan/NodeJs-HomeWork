import express from 'express';
import Publisher from '../models/Publisher.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const item = await Publisher.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get('/', async (req, res) => {
  const list = await Publisher.find();
  res.json(list);
});

router.get('/:id', async (req, res) => {
  const item = await Publisher.findById(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const item = await Publisher.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

router.delete('/:id', async (req, res) => {
  await Publisher.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
