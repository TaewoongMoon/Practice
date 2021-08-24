import { combineReducers } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { pokemonApi } from "./PokemonApi";

const addTodo = createAction("ADD");
const deleteToDo = createAction("DELETE");
const pokemonApiTest = createAction("POKEMONAPITEST");
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
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    return state.filter(
      (toDo) => parseInt(toDo.id) !== parseInt(action.payload)
    );
  },
});

const pokemonReducer = createReducer([], {
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const combinedReducers = combineReducers({ reducer, pokemonReducer });

const store = configureStore({
  reducer: {
    combinedReducers,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(pokemonApi.middleware),
});

export const actionCreators = {
  addTodo,
  deleteToDo,
  pokemonApiTest,
};

export default store;
