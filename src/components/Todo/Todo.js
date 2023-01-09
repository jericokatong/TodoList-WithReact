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
    setTodos([...getTodos, todo]);
  };

  const handleDelete = (e) => {
    setTodos(
      getTodos.filter((elemen, i) => {
        if (i != e) {
          return elemen;
        }
      })
    );
  };

  // console.log(getTodos[0].title);
  const handleEdit = (isiTitle, index) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: isiTitle,
    };

    getTodos.map((e, i) => {
      if (i == index) {
        return getTodos.splice(index, 1, newTodo);
      }
    });

    setTodos([...getTodos]);

    // const cobaAjeh = getTodos.splice(index, 1, newTodoEdit);

    // setTodos([...getTodos, newTodoEdit]);
    console.log("ini handle edit");
    console.log(getTodos);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoListCreate onCreateTodo={eventCreateTodo} dataTodos={getTodos} />
      <TodoList dataTodos={getTodos} eventDeleteTodo={handleDelete} eventEditTodo={handleEdit} />
    </div>
  );
};

export default Todo;
