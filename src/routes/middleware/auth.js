import jwt from 'jsonwebtoken';
import { Env } from '../../utils';

export default async (req, res, next) => {
  let token;
  try {
    token = req.headers.authorization;
  } catch (e) {
    token = '';
  }
  jwt.verify(token, Env.JWT_SIGN_SECRET, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    return next();
  });
};
