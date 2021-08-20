import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: parseInt(Date.now()) });
  },
  [deleteToDo]: (state, action) => {
    return state.filter(
      (toDo) => parseInt(toDo.id) !== parseInt(action.payload)
    );
  },
});

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteToDo,
};

export default store;
