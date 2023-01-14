import UserSchema from '../models/user';

export const login = async (username, password) => UserSchema.findOne({ username, password }).lean();

export const getUserInfo = async (_id) => UserSchema.findById(_id, '-_id username isAdmin').exec();
