import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interface/User";

const initialToken= window.localStorage.getItem('token') || window.sessionStorage.getItem('token') || undefined;

export interface UsersState {
    user: IUser | undefined;
    token: string | undefined;
    status: 'auth' | 'loading' | 'guest' | 'error';
}

const initialState: UsersState = {
    user: undefined,
    token: initialToken || undefined,
    status: 'guest'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = undefined;
            state.status = 'guest';
            state.token = undefined;
            window.localStorage.removeItem('token');
            window.sessionStorage.removeItem('token');
        },

        login: (state) => {
            state.status = 'auth';
            window.localStorage.setItem('token', state.token || '');
        }
    }
})

export default authSlice.reducer;