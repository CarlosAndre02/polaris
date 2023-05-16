import express from 'express';
const router = express.Router();

import { LanguageModel } from './LanguageModel';

router.get('/language', async function (req, res) {
  try {
    const languages = await LanguageModel.find();
    res.status(200).json({ languages });
  } catch (e) {
    res.status(400).json({
      errorTitle: 'Um erro aconteceu na hora de buscar.',
      errorMessage: e
    });
  }
});

export default router;
