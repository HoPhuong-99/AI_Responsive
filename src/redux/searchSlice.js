import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        listSearch: []
    },
    reducers: {
        ItemsSearch: (state, action) => {
            state.listSearch = action.payload
        }
    }
})

export const { ItemsSearch } = searchSlice.actions
export default searchSlice.reducer