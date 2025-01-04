/* eslint-disable react/prop-types */
export const TodoItem = ({ todo, onDeleteTodo, onToogleTodo }) => {
  return (
    <>
      <li
        key={todo.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span
          onClick={() => {
            onToogleTodo(todo.id);
          }}
          className={`align-self-center ${ todo.done ? 'text-decoration-line-through' : ''}` }
        >
          {todo.description}
        </span>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </li>
    </>
  );
};
