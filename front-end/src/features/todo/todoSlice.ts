import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TodoType } from "../../types";

// Define a type for the slice state

const initialState: TodoType[] = [];

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodoItemAction: (state, action: PayloadAction<TodoType>) => {
            state.push(action.payload);
        },
        deleteTodoItemAction: (state, action: PayloadAction<TodoType>) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        setTodoItemAction: (state, action: PayloadAction<TodoType>) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        setTodoListAction: (state, action: PayloadAction<TodoType[]>) => {
            action.payload.forEach((todo) => {
                state.push(todo);
            });
        }
    }
});

export const {
    addTodoItemAction,
    deleteTodoItemAction,
    setTodoItemAction,
    setTodoListAction
} = todoSlice.actions;

export default todoSlice.reducer;
