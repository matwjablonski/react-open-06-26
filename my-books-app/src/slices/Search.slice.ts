import { createSlice } from "@reduxjs/toolkit";

type SearchState = {
    queries: string[];
}

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        queries: []
    } as SearchState,
    reducers: {
        addQuery: (state, action) => {
            if (!state.queries.includes(action.payload.query)) {
                state.queries.push(action.payload.query);
            }
        },
        removeQuery: (state, action) => {
            state.queries = state.queries.filter((query) => query !== action.payload.query);
        },
        clearQueries: (state) => {
            state.queries = [];
        }
    }
});

export const { actions: searchActions, reducer: searchReducer } = searchSlice;