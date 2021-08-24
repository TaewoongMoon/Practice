import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useLoginMutation } from "./PokemonApi";

const Pokemon = (props) => {
  console.log("props", props);
  const [loginCheck] = useLoginMutation();
  const [userPw] = useState({
    username: "onemonster",
    password: "dlfgusgmltn12",
  });
  return (
    <>
      <div>테스트</div>
      <button
        onClick={async () => {
          await loginCheck(userPw)
            .then((res) => console.log(res.data.token))
            .catch((err) => console.log(err));
        }}
      >
        결과
      </button>
    </>
  );
};
function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Pokemon);
