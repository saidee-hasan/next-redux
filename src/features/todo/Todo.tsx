import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { addTodo, toggleTodo } from "./todo";


const Todo: React.FC = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state: RootState) => state.todo?.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>

      <div className="todo-input-row">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your task..."
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>

      <ul className="todo-list">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`todo-item ${todo.completed ? "completed" : "pending"}`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
