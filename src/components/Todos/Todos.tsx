import "./Todos.css";
import Todo from "../Todo/Todo";
import TodoInput from "../TodoInput/TodoInput";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredTodoListState, todosState } from "../../state/atoms/todo";
import { tabIdState } from "../../state/atoms/tabs";

const Todos = () => {
  const todos = useRecoilValue(filteredTodoListState);
  const activeTabId = useRecoilValue(tabIdState);
  const setTodos = useSetRecoilState(todosState);
  const clearAllTodos = () => {
    setTodos([]);
  };
  return (
    <>
      {activeTabId === 1 && <TodoInput />}
      <div className="todos-container">
        {todos.map((todo) => {
          return (
            <Todo
              detail={todo.title}
              key={todo.id}
              checked={todo.completed}
              id={todo.id}
            />
          );
        })}
      </div>
      {activeTabId === 3 && (
        <div className="todos-info">
          <button onClick={() => clearAllTodos}>
            <span className="material-symbols-outlined">delete</span> delete all
          </button>
        </div>
      )}
    </>
  );
};

export default Todos;
