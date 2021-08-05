import logo from './logo.svg'
import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import Cat from './Cat'
import Dog from './Dog'
import Home from './Home'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/cat" component={Cat} />
        <Route path="/dog" component={Dog} />
      </div>
    )
  }
}

export default App
