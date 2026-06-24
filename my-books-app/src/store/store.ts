import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/User.slice";
import { searchReducer } from "../slices/Search.slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        search: searchReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
