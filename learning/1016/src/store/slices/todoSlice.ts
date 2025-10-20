import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TodoState, Todo } from "../../types/todo";

const initialState: TodoState = { todos: [], nextId: 1 };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: state.nextId++,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearTodos: (state) => {
      state.todos = [];
      state.nextId = 1;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, clearTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
