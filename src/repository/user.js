import UserSchema from '../models/user';

// Admin
export const findAdmin = async () => UserSchema.findOne({ username: 'admin' });

export const createAdmin = async () => UserSchema.create({ username: 'admin', password: 'admin', isAdmin: true });

export const doLogin = async (username, password) => UserSchema.findOne({ username, password }).lean();

export const getUserInfo = async (_id) => UserSchema.findById(_id, '-_id username isAdmin').exec();

export const doRegister = async (username, password, isAdmin) => UserSchema.create({ username, password, isAdmin });
