import mongoose from 'mongoose';
import { LogE, LogI } from './logger';
import { Env } from './index';

const mongoDB = Env.MONGO_URL;
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB, {
  user: Env.MONGO_USER,
  pass: Env.MONGO_PASS,
}).then(() => {
  LogI('Connected to MongoDB');
});

mongoose.connection.on('error', () => {
  LogE('MongoDB connection error');
});
