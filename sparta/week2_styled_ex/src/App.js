import { useState } from 'react'
import './App.css'
import LifecycleEx from './LifecycleEx'

function App() {
  const [isShow, setIsShow] = useState(true)
  const isShowChange = () => {
    setIsShow(false)
  }
  return (
    <div className="App">
      {isShow && <LifecycleEx></LifecycleEx>}
      <button onClick={isShowChange}>바뀌어라</button>
    </div>
  )
}

// const MyStyled = styled.div`
//   width: 50vw;
//   min-height: 150px;
//   padding: 10px;
//   border-radius: 15px;
//   color: #fff;
//   &:hover {
//     background-color: #ddd;
//   }
//   background-color: ${(props) => (props.bgColor ? 'red' : 'purple')};
//   margin: 10px auto 0px auto;
// `

export default App
