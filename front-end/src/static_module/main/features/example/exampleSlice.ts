import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: String = "initialState";

export const exampleSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setExampleAction: (state, action: PayloadAction<String>) => {
            return action.payload;
        }
    }
});

export const {
    setExampleAction
} = exampleSlice.actions;

export default exampleSlice.reducer;