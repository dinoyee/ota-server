import express from 'express';

import auth from './middleware/auth';
import { sign } from '../utils/jwt';
import { doLogin, getUserInfo } from '../repository/user';
import response from '../utils/response';
import error from '../utils/error';
import { sha1 } from '../utils/crypto';

const router = express.Router();

router.post('/doLogin', async (req, res) => {
  const { username } = req.body;
  let { password } = req.body;
  password = sha1(password);
  const user = await doLogin(username, password);
  if (user) {
    const { _id, isAdmin } = user;
    const token = await sign({ id: _id });
    return response.success(res, { token, username, isAdmin });
  }
  return response.failed(res, error.LOGIN_FAILED);
});

router.use(auth);

router.post('/getUserInfo', async (req, res) => {
  const { id } = res.locals.userInfo;
  const info = await getUserInfo(id);
  return response.success(res, info);
});
export default router;
