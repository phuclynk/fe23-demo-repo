import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../slice/todoSlice";

export const todoStore = configureStore({
    reducer: {
        todo: todoReducer,
    }
});
