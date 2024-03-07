import { verify } from '../../utils/jwt';
import response from '../../utils/response';

export default async (req, res, next) => {
  const token = req.headers.authorization || '';
  let userInfo;
  try {
    userInfo = await verify(token, Env.JWT_SIGN_SECRET);
    res.locals.userInfo = userInfo;
  } catch (e) {
    return response.unauthorized(res);
  }
  return next();
};
