import express from 'express';
import jwt from 'jsonwebtoken';

import auth from './middleware/auth';
import UserSchema from '../models/user';
import { Env } from '../utils';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await UserSchema.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username, password }, Env.JWT_SIGN_SECRET);
    return res
      .status(200)
      .json({
        data: {
          token,
        },
      });
  }
  return res
    .status(400)
    .json({
      errorCode: 'OTA-400',
      message: 'Incorrect username or password',
    });
});

router.use(auth);

router.post('/getUserInfo', async (req, res) => {
  const { userInfo } = res.locals;
  return res.status(200).json({
    data: userInfo,
  });
});
export default router;
