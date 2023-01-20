import { getUserInfo } from '../../repository/user';

export default async (req, res, next) => {
  const { id } = res.locals.userInfo;
  const info = await getUserInfo(id);
  const { isAdmin } = info;
  if (!isAdmin) {
    return res.status(403).json({
      message: 'Forbidden',
    });
  }
  return next();
};
