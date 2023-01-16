import jwt from 'jsonwebtoken';

export const verify = async (token) => jwt.verify(token, Env.JWT_SIGN_SECRET);

export const sign = async (payload) => jwt.sign(payload, Env.JWT_SIGN_SECRET, { expiresIn: Env.JWT_EXPIRE_TIME });
