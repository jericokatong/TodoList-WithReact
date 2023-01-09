import "./TodoListCreateStyles.css";
import { useState } from "react";

const TodoListCreate = (props) => {
  const [getInputTodos, setInputTodos] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInputTodos,
    };

    props.onCreateTodo(newTodo);

    setInputTodos("");
  };

  const handleInput = (event) => {
    setInputTodos(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={getInputTodos} onChange={handleInput} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoListCreate;
