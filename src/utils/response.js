import error from './error';

const success = (res, data) => res
  .status(200)
  .json({
    data,
  });

const unauthorized = (res) => res
  .status(401)
  .json({
    message: error.UNAUTHORIZED.message,
  });

const forbidden = (res) => res
  .status(403)
  .json({
    message: error.FORBIDDEN.message,
  });

const failed = (res, e) => {
  const { code, message } = e;
  res.status(400)
    .json({
      errorCode: code,
      message,
    });
};

export default {
  success, unauthorized, forbidden, failed,
};
