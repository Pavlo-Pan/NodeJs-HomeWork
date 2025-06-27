import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';

import publisherRoutes from './routes/publisherRoutes.js';
import magazineRoutes from './routes/magazineRoutes.js';
import tagRoutes from './routes/tagRoutes.js';
import articleRoutes from './routes/articleRoutes.js';

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/publishers', publisherRoutes);
app.use('/magazines', magazineRoutes);
app.use('/tags', tagRoutes);
app.use('/articles', articleRoutes);

export default app;
