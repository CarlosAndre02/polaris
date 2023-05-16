import mongoose, { Schema, Document, Types } from 'mongoose';

export type ILP_User = {
    name: string
    email: string
    languages: Types.ObjectId[];
};

export type LP_UserDocument = Document & ILP_User;

const LP_UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    languages: {
      type: [Schema.Types.ObjectId],
      default: [],
      ref: 'Language'
    },
  }
);

export const LP_UserModel = mongoose.model<LP_UserDocument>('LPUser', LP_UserSchema);