import { createUserAction } from './userSlice';
//Types
export interface IUser {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    age: string,
    id: string
    _id: string
}
export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}

export interface IUserState {
    list: IUser[],
    listStatus: ApiStatus
    createUserFormStatus: ApiStatus
}

export interface IUserForm {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    age: string;
}

export interface IUpdateUserActionProps{
    id:string;
    data: IUserForm;
}