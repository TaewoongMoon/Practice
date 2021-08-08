import './App.css'
import React from 'react'
import Quiz from './Quiz'
import Score from './Score'
import Message from './Message'
import Ranking from './Ranking'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Start from './Start'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => {}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '르탄이',
      page: 'message',
      list: [
        { question: '르탄이는 1살이다', answer: 'O' },
        { question: '르탄이는 2살이다', answer: 'O' },
        { question: '르탄이는 3살이다', answer: 'O' },
        { question: '르탄이는 4살이다', answer: 'O' },
      ],
      scoreMsg: '이 정도면 아주 친한 친구 사이, 앞으로도 더 친하게 지내요',
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/message" exact component={Message} />
          <Route path="/ranking" exact component={Ranking} />
        </Switch>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
