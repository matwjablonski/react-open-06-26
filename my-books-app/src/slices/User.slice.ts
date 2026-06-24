import { createSlice } from "@reduxjs/toolkit";

type UserState = {
    name?: string;
    isLoggedIn?: boolean;
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: undefined,
        isLoggedIn: false
    } as UserState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload.name;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.name = undefined;
            state.isLoggedIn = false;
        }
    }
});

export const { actions: userActions, reducer: userReducer } = userSlice;