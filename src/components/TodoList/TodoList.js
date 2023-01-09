import "./TodoListStyles.css";
import { useState } from "react";

const TodoList = (props) => {
  const [form, setForm] = useState("");

  const handleEditButton = (index) => {
    props.dataTodos.forEach((e, i) => {
      if (i == index) {
        console.log(e.title);
        setForm(e.title);
      }
    });

    index += 1;
    // const todoInput = document.querySelector("ul li:nth-of-type(" + index.toString() + ") .input-edit");
    // console.log("ini todo input");
    // console.log(todoInput);
    // console.log(form);

    const todoContent = document.querySelector("ul li:nth-of-type(" + index.toString() + ") .todoContent");
    console.log(todoContent);
    todoContent.classList.toggle("lenyap");

    const todoEditForm = document.querySelector("ul li:nth-of-type(" + index.toString() + ") .edit-form");
    todoEditForm.classList.toggle("lenyap");
  };

  const ketikaYesKlik = (index) => {
    props.eventEditTodo(form, index);

    console.log("iniKetika yes");
    console.log(props.dataTodos);

    index += 1;
    const todoContent = document.querySelector("ul li:nth-of-type(" + index.toString() + ") .todoContent");
    console.log(todoContent);
    todoContent.classList.toggle("lenyap");

    const todoEditForm = document.querySelector("ul li:nth-of-type(" + index.toString() + ") .edit-form");
    todoEditForm.classList.toggle("lenyap");
  };

  const handleInput = (event) => {
    setForm(event.target.value);
    console.log(form);
  };

  return (
    <ul>
      {/* {JSON.stringify(props.dataTodos)}; */}
      {props.dataTodos.map((e, i) => {
        return (
          <li key={i}>
            <div className="edit-form lenyap">
              <input className="input-edit" type="text" value={form} onChange={handleInput} />
              <button type="button" onClick={() => ketikaYesKlik(i)}>
                Ok
              </button>
            </div>
            <div className="todoContent">
              <div className="content">{e.title}</div>
              <div className="action">
                <button className="btn edit" type="button" onClick={() => handleEditButton(i)}>
                  Edit
                </button>
                <button className="btn delete" type="button" onClick={() => props.eventDeleteTodo(i)}>
                  Delete
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
