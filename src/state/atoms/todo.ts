import { atom, selector } from "recoil";
import Todos from "../../todos.json";
import { tabIdState } from "./tabs";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const getDefaultTodos = (): Todo[] => {
  const localStorageData = localStorage.getItem("todos");
  const existingTodos = [];
  if (localStorageData !== null) {
    existingTodos.push(...JSON.parse(localStorageData));
  } else {
    existingTodos.push(...Todos.todos);
  }
  return existingTodos;
};

export const todosState = atom({
  key: "todosList",
  default: getDefaultTodos() as Todo[],
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(tabIdState);
    const list = get(todosState);

    switch (filter) {
      case 2:
        return list.filter((item) => !item.completed);
      case 3:
        return list.filter((item) => item.completed);
      default:
        return list;
    }
  },
});
