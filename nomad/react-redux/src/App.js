import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Pokemon from "./routes/Pokemon";
import { pokemonApi } from "./routes/PokemonApi";

function App() {
  console.log(pokemonApi.reducer);
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/:id" exact component={Detail}></Route>
      <Route path="/pokemonTest" exact component={Pokemon}></Route>
    </Router>
  );
}

export default App;
