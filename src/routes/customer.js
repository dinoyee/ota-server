import express from 'express';

import auth from './middleware/auth';
import { sign } from '../utils/jwt';
import { doLogin, getUserInfo } from '../repository/user';

const router = express.Router();

router.post('/doLogin', async (req, res) => {
  const { username, password } = req.body;
  const user = await doLogin(username, password);
  if (user) {
    const { _id } = user;
    const token = await sign({ id: _id });
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
  const { id } = res.locals.userInfo;
  const info = await getUserInfo(id);
  return res.status(200).json({
    data: info,
  });
});
export default router;
