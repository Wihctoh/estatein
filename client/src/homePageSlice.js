import { createSlice } from "@reduxjs/toolkit";

export const homePageSlice = createSlice({
    name: "homePageActive",
    initialState: {
        value: false,
    },
    reducers: {
        changeFlag: (state) => {
            state.value = !state.value;
        },
    },
});

export const { changeFlag } = homePageSlice.actions;
export default homePageSlice.reducer;
