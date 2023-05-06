import mongoose from 'mongoose';

export const initDB = async () => {
  mongoose.connection
    .on('error', (error) => console.log(error))
    .once('open', () => console.log('Connected to Database'))
    .on('close', () => console.log('Database connection was closed!'));

  await mongoose.connect(process.env.MONGO_URI!);
};