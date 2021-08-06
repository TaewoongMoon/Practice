import './App.css'
import React from 'react'
import Quiz from './Quiz'
import Score from './Score'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '르탄이',
      page: 'quiz',
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
        {this.state.page === 'quiz' && <Quiz list={this.state.list} />}
        {this.state.page === 'score' && (
          <Score scoreMsg={this.state.scoreMsg} name={this.state.name} />
        )}
        {/* <Score /> */}
      </div>
    )
  }
}

export default App
