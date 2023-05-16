import express from 'express'
const router = express.Router()

import { LP_UserModel } from './LP_UserModel'
import { LanguageModel } from '../language/LanguageModel'

router.get("/lpuser/:email", async function (req, res) {
  try {
    const lpuser = await LP_UserModel.findOne({
      email: req.params.email
    });
    if(!lpuser) throw new Error("User not found")

    const languagesData = await LanguageModel.find({
      _id: { $in: lpuser.languages }
    })

    const lpuserRetrieved = { 
      name: lpuser.name,
      email: lpuser.email,
      languages: languagesData
    }
    
    res.status(200).json({ lpuserRetrieved });
  } catch (e) {
    return res.status(400).json({
      errorTitle: "Um erro aconteceu na hora de buscar.",
      errorMessage: e,
    });
  }
})

router.post("/lpuser", async function (req, res) {
  const lpuser = new LP_UserModel({
    name: req.body.name,
    email: req.body.email,
    languages: req.body.languages
  });

  try {
    const lpuserSaved = await lpuser.save();
    res.status(201).json({
      lpuser: lpuserSaved
    });
  } catch (e) {
    return res.status(400).json({
      errorTitle: "Um erro aconteceu na hora de salvar.",
      errorMessage: e,
    });
  }
})

export default router