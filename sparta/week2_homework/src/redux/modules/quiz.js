//Action
const GET_QUIZ = 'quiz/GET_QUIZ'
const ADD_ANSWER = 'quiz/ADD_ANSWER'
const RESET_ANSWER = 'quiz/RESET_ANSWER'

//initalState
const initialState = {
  name: '르탄이',
  score_texts: {
    60: '우린 친구!, 앞으로도 더 친하게 지내요! :)',
    80: '우와, 우리는 엄청 가까운 사이!',
    100: '둘도 없는 단짝이에요! :)',
  },
  quiz: [
    { question: '르탄이는 1살이다', answer: 'O' },
    { question: '르탄이는 2살이다', answer: 'O' },
    { question: '르탄이는 3살이다', answer: 'O' },
    { question: '르탄이는 4살이다', answer: 'O' },
  ],
  answer: [],
}

//ActionCreator

export const getQuiz = (quiz_list) => {
  return { type: GET_QUIZ, quiz_list }
}

export const answer = (answer) => {
  return { type: ADD_ANSWER, answer }
}

export const resetAnswer = () => {
  return { type: RESET_ANSWER }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'quiz/GET_QUIZ': {
      return { ...state, quiz: action.quiz_list }
    }
    case 'quiz/ADD_ANSWER': {
      return { ...state, answers: [...state.answers, action.answer] }
    }
    case 'quiz/RESET_ANSWER': {
      return { ...state, answers: [] }
    }
    default:
      return state
  }
}
