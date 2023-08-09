import { useState } from "react";
import "./Todo.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todosState } from "../../state/atoms/todo";
import { tabIdState } from "../../state/atoms/tabs";

const Todo = ({
  id,
  detail,
  checked,
  ...props
}: {
  id: number;
  detail: string;
  checked: boolean;
}) => {
  const setTodos = useSetRecoilState(todosState);
  const tabIndex = useRecoilValue(tabIdState);
  const defaultValue = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultValue);

  const updateTodos = (id: number, completed: boolean) => {
    setTodos((todos) =>
      todos.map((todo) => {
        let newVal = todo.completed;
        if (id === todo.id) {
          newVal = completed;
        }
        return { ...todo, completed: newVal };
      })
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <div className="todo">
      <label>
        <input
          className={isChecked ? "checked" : ""}
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked((prev) => !prev);
            updateTodos(id, !isChecked);
          }}
          {...props}
        />
        <span className={isChecked ? "checked detail" : "detail"}>
          {detail}
        </span>
      </label>
      {tabIndex === 3 && (
        <span
          className="material-symbols-outlined"
          onClick={() => deleteTodo(id)}>
          delete
        </span>
      )}
    </div>
  );
};

export default Todo;
