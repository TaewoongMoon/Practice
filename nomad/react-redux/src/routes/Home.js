import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "./ToDo";
import { actionCreators } from "./Store";

const Home = (props) => {
  console.log("props", props);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    props.addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
        <ul>
          {props.toDos.combinedReducers.reducer.map((toDo) => (
            <ToDo {...toDo} key={toDo.id} />
          ))}
        </ul>
      </form>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addTodo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
