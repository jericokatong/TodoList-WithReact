import "./TodoStyles.css";
import TodoList from "../TodoList/TodoList";
import TodoListCreate from "../TodoListCreate/TodoListCreate";
import { useState } from "react";
import React from "react";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    {
      id: 1,
      title: "Mandi",
    },

    {
      id: 2,
      title: "Minum",
    },

    {
      id: 3,
      title: "Cuci Tangan",
    },
  ]);

  const eventCreateTodo = (todo) => {
    // setTodos.push(todo);
    setTodos(getTodos.concat(todo));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoListCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
