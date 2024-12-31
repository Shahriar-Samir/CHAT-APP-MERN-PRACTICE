import { TUser } from './user.interface';
import UserModel from './users.model';

export const addUserIntoDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  return result;
};
