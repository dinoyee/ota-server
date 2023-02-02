import express from 'express';
import { doRegister } from '../repository/user';
import auth from './middleware/auth';
import admin from './middleware/admin';
import response from '../utils/response';
import error from '../utils/error';

const router = express.Router();

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
