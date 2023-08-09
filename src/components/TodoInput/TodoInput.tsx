import { useState } from "react";
import "./TodoInput.css";
import { useSetRecoilState } from "recoil";
import { todosState } from "../../state/atoms/todo";

const TodoInput = () => {
  const [inputVal, setInputVal] = useState("");
  const setTodos = useSetRecoilState(todosState);

  const handleClick = () => {
    // console.log(inputVal);
    setTodos((prevState) => [
      { id: prevState.length + 1, title: inputVal, completed: false },
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
