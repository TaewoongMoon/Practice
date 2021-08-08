import { useState } from 'react'
import styled from 'styled-components'
import SwipeItem from './SwipeItem'
import { useSelector, useDispatch } from 'react-redux'
import { answer } from './redux/modules/quiz'
const Quiz = (props) => {
  const quiz = useSelector((state) => state.quiz.quiz)
  const answers = useSelector((state) => state.quiz.answer)
  const dispatch = useDispatch()
  console.log(answers.length)
  const [num, setNum] = useState(0)

  const onSwipe = (direction) => {
    if (num === 3) return
    let _answer = direction === 'left' ? 'O' : 'X'
    if (_answer === quiz[num].answer) {
      dispatch(answer(true))
    } else {
      dispatch(answer(false))
    }
    console.log('You swiped: ' + direction)
    setNum((prev) => prev + 1)
  }
  return (
    <QuizContainer>
      <p>
        <span>{num + 1}번 문제</span>
      </p>
      {quiz.map((data, index) => {
        if (index === num) {
          return <Question key={index}>{data.question}</Question>
        }
      })}
      <AnswerZone>
        <Answer>O</Answer>
        <Answer>X</Answer>
      </AnswerZone>
      {quiz.map((data, index) => {
        if (num === index) {
          return <SwipeItem key={index} onSwipe={onSwipe} />
        }
      })}
    </QuizContainer>
  )
}

const QuizContainer = styled.div`
  /* & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    border-radius: 30px;
  } */
  & span {
    padding: 8px 16px;
    background-color: #fef5d4;
    border-radius: 30px;
  }
`
const Question = styled.h1`
  font-size: 1.5em;
`
const AnswerZone = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const Answer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 10em;
  color: #dadafc77;
`

export default Quiz
