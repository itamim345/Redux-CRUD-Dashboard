//Types
export interface IUser {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    age: number
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
}
