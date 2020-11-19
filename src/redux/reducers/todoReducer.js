import { v4 } from "uuid";
import { todoVar } from "../actionTypes";
const item1 = {
  id: v4(),
  name: "first",
};
const item2 = {
  id: v4(),
  name: "sec",
};
const item3 = {
  id: v4(),
  name: "third",
};
const initialState = {
  todo: {
    title: "Todo",
    item: [item1],
  },
  progress: {
    title: "In Progress",
    item: [item2],
  },
  done: {
    title: "Completed",
    item: [item3],
  },
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case todoVar.addItem:
      return {
        ...state,
        todo: { ...state.todo, item: [payload, ...state.todo.item] },
      };
    case todoVar.updateState:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default todoReducer;
