import { createSlice } from '@reduxjs/toolkit';
import { ApiStatus, defaultlist, IUserState } from './userType';

const initialState: IUserState = {
    list: defaultlist,
    listStatus: ApiStatus.ideal
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export default userSlice.reducer