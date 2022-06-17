import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: []
    },
    reducers: {
        updateTodoList: (state, action) => {
            state.todoList = [...action.payload]
        },
    }
});

// Đây là các action sẽ được dispatch từ UI vào store
export const { updateTodoList } = todoSlice.actions;

// REducer là 1 function được tạo ra để update state
export const todoReducer = todoSlice.reducer;