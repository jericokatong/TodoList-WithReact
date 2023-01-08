import "./TodoStyles.css";
import TodoList from "../TodoList/TodoList";
import TodoListCreate from "../TodoListCreate/TodoListCreate";
import { useState } from "react";
import React from "react";

const Todo = () => {
  const [getTodos, setTodos] = useState([]);

  let eventCreateTodo = (todo) => {
    // setTodos(getTodos.concat(todo));

    // cara pakai spread syntax
    console.log(setTodos([...getTodos, todo]));
  };

  const handleDelete = (e) => {
    console.log(e);
    setTodos(
      getTodos.filter((elemen, i) => {
        if (i != e) {
          return elemen;
        }
      })
    );
  };

  return (
    <div>
      <h3>Todo List</h3>
      {JSON.stringify(getTodos)}
      <TodoListCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} eventDeleteTodo={handleDelete} />
    </div>
  );
};

export default Todo;
