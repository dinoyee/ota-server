import mongoose from 'mongoose';
import { findAdmin, createAdmin } from '../repository/user';

const mongoDB = Env.MONGO_URL;
mongoose.set('strictQuery', false);

const dbOptions = {
  user: Env.MONGO_USER,
  pass: Env.MONGO_PASS,
};

if (Env.MONGO_USER === undefined || Env.MONGO_PASS === undefined) {
  delete dbOptions.user;
  delete dbOptions.pass;
}

mongoose.connect(mongoDB, dbOptions)
  .then(async () => {
    LogI(`Connected to MongoDB ::: ${Env.MONGO_URL}`);
    const admin = await findAdmin();
    if (!admin) {
      const user = await createAdmin();
      LogI({ msg: 'Create Admin', user });
    } else {
      LogI('Has Admin');
    }
  });

mongoose.connection.on('error', () => {
  LogE('MongoDB connection error');
});
