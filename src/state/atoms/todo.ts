import { atom, selector } from "recoil";
import Todos from "../../todos.json";
import { tabIdState } from "./tabs";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todosState = atom({
  key: "todosList",
  default: Todos.todos as Todo[],
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
