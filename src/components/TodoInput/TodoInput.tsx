import { useState } from "react";
import "./TodoInput.css";
import { useSetRecoilState } from "recoil";
import { todosState } from "../../state/atoms/todo";

const TodoInput = () => {
  const [inputVal, setInputVal] = useState("");
  const setTodos = useSetRecoilState(todosState);

  const handleClick = () => {
    setTodos((prevState) => [
      {
        id: Math.ceil(Math.random() * 1000),
        title: inputVal,
        completed: false,
      },
      ...prevState,
    ]);
    setInputVal("");
  };
  return (
    <div className="todo-input">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        placeholder="add details"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default TodoInput;
