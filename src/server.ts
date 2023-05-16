import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

import languagesRoutes from './modules/language/LanguageRoutes'
import lpUserRoutes from './modules/lp_user/LP_UserRoutes'
import { seedDB } from './config/seedDB'

seedDB()

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(languagesRoutes);
app.use(lpUserRoutes);

export default app