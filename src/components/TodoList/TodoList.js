import "./TodoListStyles.css";

const TodoList = (props) => {
  return (
    <ul>
      {props.dataTodos.map((e, i) => {
        return (
          <li key={i}>
            <div className="content">{e.title}</div>
            <div className="action">
              <button className="btn edit" type="button">
                Edit
              </button>
              <button className="btn delete" type="button" onClick={() => props.eventDeleteTodo(i)}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
