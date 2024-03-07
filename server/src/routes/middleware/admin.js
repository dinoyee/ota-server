import { getUserInfo } from '../../repository/user';
import response from '../../utils/response';

export default async (req, res, next) => {
  const { id } = res.locals.userInfo;
  const info = await getUserInfo(id);
  const { isAdmin } = info;
  if (!isAdmin) {
    return response.forbidden(res);
  }
  return next();
};
