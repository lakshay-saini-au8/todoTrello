import { todoVar } from "../actionTypes";
const initialState = {
  todo: {
    title: "Todo",
    item: [],
  },
  progress: {
    title: "In Progress",
    item: [],
  },
  done: {
    title: "Completed",
    item: [],
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
