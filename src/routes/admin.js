import express from 'express';
import { doLogin, doRegister } from '../repository/user';
import { sign } from '../utils/jwt';
import auth from './middleware/auth';
import admin from './middleware/admin';
import response from '../utils/response';
import error from '../utils/error';

const router = express.Router();
router.post('/doLogin', async (req, res) => {
  const { username, password } = req.body;
  const user = await doLogin(username, password);
  if (user) {
    const { isAdmin } = user;
    if (isAdmin) {
      const { _id } = user;
      const token = await sign({ id: _id });
      return response.success(res, { token });
    }
    return response.forbidden(res);
  }
  return response.failed(res, error.LOGIN_FAILED);
});

router.use(auth);
router.use(admin);

router.post('/doRegister', async (req, res) => {
  const { username, password, isAdmin } = req.body;
  try {
    const user = await doRegister(username, password, isAdmin);
    if (user) {
      return response.success(res, { user });
    }
  } catch (err) {
    return response.mongoError(res, err);
  }
  return response.failed(res, error.REGISTER_FAILED);
});
export default router;
