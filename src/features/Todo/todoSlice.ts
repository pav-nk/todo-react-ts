import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo } from "types";

const todoSlice = createSlice({
    name: '@todos',
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: new Date().toString(),
                title: action.payload,
                completed: false,
            }

            return [newTodo, ...state];
        },
        toggleTodo: (state, action: PayloadAction<Todo['id']>) => {},
        removeTodo: (state, action: PayloadAction<Todo['id']>) => {},
    },
})

export default todoSlice.reducer;