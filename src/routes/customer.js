import express from 'express';
import auth from './middleware/auth';
import UserSchema from '../models/user';

const router = express.Router();

router.get('/login', async (req, res) => {
  const user = new UserSchema({
    name: 'Dino',
    password: '123123',
  });
  const data = await user.save();
  res.send(data);
});

router.use(auth);
export default router;
