import { updateUser } from './../../service/userService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, deleteUser, getUserList } from '../../service/userService';
import { ApiStatus, IUpdateUserActionProps, IUserForm, IUserState } from './userType';

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

export const deleteUserAction = createAsyncThunk(
    "user/deleteUserAction",
    async (id : string) => {
    await deleteUser(id);
        return id;
    }
)

export const updateUserAction = createAsyncThunk(
    "user/updateUserAction",
    async({id, data} : IUpdateUserActionProps) => {
       const response =  await updateUser(id, data)
       return response.data;
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


        builder.addCase(deleteUserAction.fulfilled, (state, action) => {
            const newList = state.list.filter((x) => x._id !== action.payload);
            state.list = newList;
        })
    }
})

export default userSlice.reducer