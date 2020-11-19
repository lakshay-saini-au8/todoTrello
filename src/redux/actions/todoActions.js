import { todoVar } from "../actionTypes";

export const addItemTodo = (payload) => ({
  type: todoVar.addItem,
  payload,
});

export const updateSate = (payload) => ({
  type: todoVar.updateState,
  payload,
});
