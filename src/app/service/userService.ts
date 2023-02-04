import httpService from "./HttpService"
import ApiConfig from "./ApiConfig"
import { IUser, IUserForm } from "../features/users/userType";

export const getUserList = async () => {
   return await httpService.get(ApiConfig.user) 
}

export const createUser = async (data: IUserForm) => {
  return await httpService.post<IUser>(ApiConfig.create, data );
}; 


export const deleteUser = async (id: string) => {
  const url = `${ApiConfig.delete}/${id}`
  return await httpService.delete(url)
}; 

export const updateUser = async (id: string, data: IUserForm) => {
  const url = `${ApiConfig.delete}/${id}`
  return await httpService.patch(url, data) 
}