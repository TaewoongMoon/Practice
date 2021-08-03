import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Nemo from './Nemo'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 3,
    }
    this.div = React.createRef()
    this.divRemove = React.createRef()
  }

  addNemo = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  hoverEvent = (event) => {
    console.log(event)
    console.log(event.target)
    event.target.style.backgroundColor = '#eee'
  }

  hoverRemoveEvent = () => {
    this.div.current.style.backgroundColor = '#ffffff'
  }

  componentDidMount() {
    this.div.current.addEventListener('mouseover', this.hoverEvent)
    this.divRemove.current.addEventListener('mouseover', this.hoverRemoveEvent)
  }

  componentWillUnmount() {
    this.div.current.removeEventListener('mouseover', this.hoverEvent)
    this.divRemove.current.removeEventListener(
      'mouseover',
      this.hoverRemoveEvent
    )
  }

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    } else {
      window.alert('더이상 네모가 없습니다.')
    }
  }

  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => {
      return i
    })
    console.log(nemo_count)
    return (
      <div style={{ width: '100wh', height: '100vh' }}>
        <div className="App" ref={this.div}>
          {nemo_count.map((_, index) => (
            <div
              key={index}
              style={{
                width: '150px',
                height: '150px',
                margin: '20px auto',
                backgroundColor: '#eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              nemo
            </div>
          ))}
          <button onClick={this.addNemo}>하나 추가</button>
          <button onClick={this.removeNemo}>하나 빼기</button>
        </div>
        <div
          style={{ width: '100%', height: '100%', border: '1px solid red' }}
          ref={this.divRemove}
        ></div>
      </div>
    )
  }
}

export default App
