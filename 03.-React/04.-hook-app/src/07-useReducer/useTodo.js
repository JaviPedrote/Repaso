import { useReducer , useEffect} from "react";
import { todoReducer } from "./todoReducer";


export const useTodo = () => {
  
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
   }
  const [todos, dispatch] = useReducer(todoReducer,[],init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  
 }, [todos])



    const handleNewTodo = (todo) => {
        const action = {
          type: "add",
          payload: todo,
        };
        dispatch(action);
      };
    
      const handleDelete = (id) => {
        dispatch ({
          type: "remove",
          payload: id,
        });
      };
    
      const handleToogle = (id) => {
        dispatch({
          type: "toggle",
          payload: id,
        });
      }

  
    
    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=>!todo.done).length,

        handleNewTodo,
        handleDelete,
        handleToogle,

  }
}
