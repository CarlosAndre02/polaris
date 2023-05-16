import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();

import languagesRoutes from './modules/language/LanguageRoutes';
import lpUserRoutes from './modules/lp_user/LP_UserRoutes';
import { seedDB } from './config/seedDB';

seedDB();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, GET, PATCH, DELETE, OPTIONS'
  );
  next();
});

// Routes
app.use('/api', languagesRoutes);
app.use('/api', lpUserRoutes);

export default app;
