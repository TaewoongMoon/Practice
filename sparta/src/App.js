import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div
        style={{
          border: '1px solid gray',
          width: '300px',
          margin: '20px auto',
        }}
      >
        <h1 style={{ color: 'green' }}>안녕하세요</h1>
        <hr />
        <p style={{ textAlign: 'left' }}>이름을 입력해주세요</p>
      </div>
    </div>
  )
}

export default App
