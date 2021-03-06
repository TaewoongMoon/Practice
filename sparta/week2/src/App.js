import React from 'react'
import BucketList from './BucketList'
// import logo from './logo.svg'
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import './scss_ex.scss'

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props)
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ['르탄이'],
      opacityChecker: false,
    }
    this.opacityCheckerfunction = this.opacityCheckerfunction.bind(this)
  }

  opacityCheckerfunction() {
    this.setState({ opacityChecker: true })
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    // this 키워드를 통해 state에 접근할 수 있어요.
    return (
      <div className="App">
        <div className="container">
          <div className="sparta-image">
            <img alt="스파르타 이미지" src="image/scc_img01.png" />
          </div>
          <div class="click-text" onClick={() => this.opacityCheckerfunction()}>
            눌러보세요
          </div>
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <BucketList
            list={this.state.list}
            opacityChecker={this.state.opacityChecker}
          />
        </div>
      </div>
    )
  }
}

export default App
