import httpService from "./HttpService"
import ApiConfig from "./ApiConfig"
import { IUser, IUserForm } from "../features/users/userType";

export const getUserList = async () => {
   return await httpService.get(ApiConfig.user) 
}

export const createUser = async (data: IUserForm) => {
  return await httpService.post<IUser>(ApiConfig.create, data );
}; 