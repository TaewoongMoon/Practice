import React from 'react'

import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList'
import styled from 'styled-components'
import Detail from './Detail'
import { connect } from 'react-redux'
import { loadBucket, createBucket } from './redux/module/bucket'

const mapStateToProps = (state) => {
  return { bucket_list: state.bucket.list }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(loadBucket()),

    create: (bucket) => dispatch(createBucket(bucket)),
  }
}

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props)
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {}
    this.addBucketList = this.addBucketList.bind(this)
    this.text = React.createRef()
    // ref는 이렇게 선언합니다!
  }

  componentDidMount() {}

  addBucketList() {
    // let list = this.state.list
    // const new_item = this.text.current.value
    this.props.create(this.text.current.value)
    // 리액트에서는 concat으로 배열항목을 합쳐주는 게 좋아요. 아래처럼요!
    // list = list.concat(new_item);
    // this.setState({list: list});
    //  이건 가장 편한 배열 합치기 방법입니다.
    //  ...은 배열 안에 있는 항목을 전부 꺼내서 늘어놓는다는 뜻입니다. (스프레드 문법이라고 불러요.)
    // this.setState({ list: [...list, this.text.current.value] })
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Line />
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          {/* Route 쓰는 법 2가지를 모두 써봅시다! */}
          <Route
            path="/"
            exact
            render={() => (
              <BucketList
                list={this.props.bucket_list}
                history={this.props.history}
              />
            )}
          />
          <Route path="/detail/:index" component={Detail} />
        </Container>
        {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
        <Input>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>
        </Input>
      </div>
    )
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`
// withRouter 적용
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
