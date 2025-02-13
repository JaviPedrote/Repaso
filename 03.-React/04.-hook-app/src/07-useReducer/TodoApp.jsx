
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from "./useTodo";




export const TodoApp = () => {
  
  const {todos,todosCount, pendingTodosCount, handleNewTodo, handleDelete, handleToogle} = useTodo();
  
  return (
    <>
      <h1>
        TodoApp ({todosCount}) <small>Pendientes:({pendingTodosCount})</small>{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDelete} onToogleTodo={handleToogle}/>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
