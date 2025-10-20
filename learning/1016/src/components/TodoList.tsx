import React, { use, useState } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearTodos,
} from "../store/slices/todoSlice";

const TodoList = () => {
  const [input, setInput] = useState("");
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(input));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          className="border-1 rounded-sm p-2 w-100"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodos}>Clear Todos</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <div className="flex justify-between items-center">
                <div className="flex justify-evenly items-center text-center">
                  <span>{todo.id}</span>
                  <span>{todo.text}</span>
                  <span>{todo.completed ? "Completed" : "Not Completed"}</span>
                </div>
                <div className="flex justify-evenly items-center text-center">
                  <button onClick={() => handleToggleTodo(todo.id)}>
                    {todo.completed ? "미완료" : "완료"}
                  </button>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    삭제
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
