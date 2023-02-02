import * as crypto from 'crypto';

export const md5 = (s) => {
  const _md5 = crypto.createHash('md5');
  _md5.update(s);
  return _md5.digest('hex');
};

export const sha1 = (s) => {
  const _sha1 = crypto.createHash('sha1');
  _sha1.update(s);
  return _sha1.digest('hex');
};
