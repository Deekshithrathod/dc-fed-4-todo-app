import "./Todos.css";
import Todo from "../Todo/Todo";
import TodoInput from "../TodoInput/TodoInput";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../state/atoms/todo";
import { tabIdState } from "../../state/atoms/tabs";

const Todos = () => {
  const todos = useRecoilValue(filteredTodoListState);
  const activeTabId = useRecoilValue(tabIdState);

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
    </>
  );
};

export default Todos;
