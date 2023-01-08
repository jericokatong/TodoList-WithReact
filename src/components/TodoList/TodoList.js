import "./TodoListStyles.css";

const TodoList = (props) => {
  return (
    <ul>
      {props.dataTodos.map((e) => {
        return <li key={e.id}>{e.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
