import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        listSearch: [],
        inputSearchs: ""
    },
    reducers: {
        ItemsSearch: (state, action) => {
            state.listSearch = action.payload
        },
        InputSearchItems: (state, action) => {
            state.inputSearchs = action.payload
        }
    }
})

export const { ItemsSearch, InputSearchItems } = searchSlice.actions
export default searchSlice.reducer