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

export const Env = () => {
  const { env } = process;
  return env;
};
