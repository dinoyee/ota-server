import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export const getTemplate = (template) => {
  const file = `${path.join(__dirname, '..', 'templates')}/${template}`;
  try {
    const data = fs.readFileSync(file, 'utf8');
    return data.toString();
  } catch (e) {
    return e.toString();
  }
};

export const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

export const Env = {
  PORT: process.env.PORT,
  NPM_PACKAGE_NAME: process.env.npm_package_name,
  JWT_SIGN_SECRET: process.env.JWT_SIGN_SECRET,
  MONGO_URL: process.env.MONGO_URL,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASS: process.env.MONGO_PASS,
};
