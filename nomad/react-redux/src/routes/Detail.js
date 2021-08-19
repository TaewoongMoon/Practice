import { connect } from "react-redux";

const Detail = ({ toDo }) => {
  return <h1>{toDo?.text}</h1>;
};

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(state);
  console.log(id);
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
