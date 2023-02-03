import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserList } from '../../service/userService';
import { ApiStatus, IUserState } from './userType';

const initialState: IUserState = {
    list: [],
    listStatus: ApiStatus.ideal
}

export const getUserListAction = createAsyncThunk("user/getUserListAction",
    async () => {
        //api to get list
        const response = await getUserList();
        return response.data;
        // return response data
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getUserListAction.pending, (state) => {
            state.listStatus = ApiStatus.loading
        });
        builder.addCase(getUserListAction.fulfilled, (state, action) => {
            state.listStatus = ApiStatus.ideal;
            state.list = action.payload.data;
        });
        builder.addCase(getUserListAction.rejected, (state) => {
            state.listStatus = ApiStatus.error
        })
    }
})

export default userSlice.reducer