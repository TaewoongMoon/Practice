import './App.css'
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Cat from './Cat'
import Dog from './Dog'
import Home from './Home'
import styled from 'styled-components'
import { withRouter } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
  }

  pageMove(props) {
    const { history } = props
    history.push('/cat/nabi')
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <MainPage to="/">Home으로가기</MainPage>
          </li>
          <li>
            <CatPage to="/cat/nabi">Cat으로가기</CatPage>
          </li>
          <li>
            <DogPage to="/dog">Dog으로가기</DogPage>
          </li>
          <button onClick={() => this.pageMove(this.props)}>페이지이동</button>
          <button onClick={() => this.props.history.goBack()}>뒤로가기</button>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cat/:cat_name" component={Cat} />
          <Route path="/:dog_name" component={Dog} />
        </Switch>
      </div>
    )
  }
}
const MainPage = styled(Link)`
  color: black;
  text-decoration: none;
`

const CatPage = styled(Link)`
  color: black;
  text-decoration: none;
`

const DogPage = styled(Link)`
  color: black;
  text-decoration: none;
`

export default withRouter(App)
