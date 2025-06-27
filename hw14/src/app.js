import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';

import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Error connecting:', err));

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

export default app;
