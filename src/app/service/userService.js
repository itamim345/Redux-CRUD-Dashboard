import httpService from "./HttpService"
import ApiConfig from "./ApiConfig"

export const getUserList = async () => {
   return await httpService.get(ApiConfig.user) 
} 