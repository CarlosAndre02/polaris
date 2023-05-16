import mongoose, { Schema, Document } from 'mongoose';

export type ILanguage = {
  name: string;
  duration: number;
  teacher: string;
  imageUrl: string;
  description: string;
  content: string;
};

export type LanguageDocument = Document & ILanguage;

const LanguageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  teacher: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    minLength: 3
  },
  content: {
    type: String,
    required: true,
    minLength: 3
  }
});

export const LanguageModel = mongoose.model<LanguageDocument>(
  'Language',
  LanguageSchema
);
