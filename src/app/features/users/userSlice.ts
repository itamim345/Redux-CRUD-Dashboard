import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, getUserList } from '../../service/userService';
import { ApiStatus, IUserForm, IUserState } from './userType';

const initialState: IUserState = {
    list: [],
    listStatus: ApiStatus.ideal,
    createUserFormStatus: ApiStatus.ideal
}

export const getUserListAction = createAsyncThunk("user/getUserListAction",
    async () => {
        //api to get list
        const response = await getUserList();
        return response.data;
        // return response data
    }
)

export const createUserAction = createAsyncThunk(
    "user/createUserAction",
    async (data: IUserForm) => {
        const response = await createUser(data);
        return response.data
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


        builder.addCase(createUserAction.pending, (state) => {
            state.listStatus = ApiStatus.loading
        });
        builder.addCase(createUserAction.fulfilled, (state) => {
            state.listStatus = ApiStatus.success;
        });
        builder.addCase(createUserAction.rejected, (state) => {
            state.listStatus = ApiStatus.error
        })
    }
})

export default userSlice.reducer