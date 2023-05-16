import initData from './initial-languages-data.json'
import { LanguageModel } from '../modules/language/LanguageModel'

export const seedDB = async () => {
    const data = await LanguageModel.findOne()
    if(data) return

    await LanguageModel.insertMany(initData)
}