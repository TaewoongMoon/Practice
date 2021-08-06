import { createStore, combineReducers } from 'redux'
import bucket from './module/bucket'
import { createBrowserHistory } from 'history'

export const History = createBrowserHistory()
// Reducer 뭉치는 방법
const rootReducer = combineReducers({ bucket })

const store = createStore(rootReducer)

export default store
