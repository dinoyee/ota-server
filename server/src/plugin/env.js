import * as dotenv from 'dotenv';

dotenv.config();

global.Env = {
  PORT: process.env.PORT,
  NPM_PACKAGE_NAME: process.env.npm_package_name,
  JWT_SIGN_SECRET: process.env.JWT_SIGN_SECRET,
  JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME,
  MONGO_URL: process.env.MONGO_URL,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASS: process.env.MONGO_PASS,
};
