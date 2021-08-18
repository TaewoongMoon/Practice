import React, { useState } from "react";
import { connect } from "react-redux";

const Home = (props) => {
  console.log(props);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
