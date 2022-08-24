import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

export const createUser = createAsyncThunk('user/createUser', async (newUser) => {
return await userService.signUp(newUser);
});

export const login = createAsyncThunk('user/login', async (user ) => {
    return await userService.login(user);
});

export const signOut = createAsyncThunk('user/signOut', async () => {
    return await userService.signOut();
});

export const loginWithGoogle = createAsyncThunk('user/loginWithGoogle', async () => {
    return await userService.loginWithGoogle();
});

const userSlice = createSlice({
    name: 'user',
    initialState:{
        info:{
            id:'',
            email:'',
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(createUser.fulfilled, (state, action) => {
                state.info = {id:action.payload.id}
        })
        .addCase(login.fulfilled, (state, action) => {
            state.info = {
                id:action.payload.user.uid,
                email: action.payload.user.email}
        })
        .addCase(signOut.fulfilled, (state, action) => {
            state.info = {
                id:'',
                email:'',
            };
        })
        .addCase(loginWithGoogle.fulfilled, (state, action) => {
            state.info = {
                id:action.payload.user.uid,
                email:action.payload.user.email,
            };
        })
        ;
    },
});


export default userSlice.reducer