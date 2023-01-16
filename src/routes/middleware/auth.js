import { verify } from '../../utils/jwt';

export default async (req, res, next) => {
  const token = req.headers.authorization || '';
  let userInfo;
  try {
    userInfo = await verify(token, Env.JWT_SIGN_SECRET);
    res.locals.userInfo = userInfo;
  } catch (e) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  return next();
};