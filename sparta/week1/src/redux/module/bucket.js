// bucket.js

// Actions
const LOAD = 'bucketlist/LOAD'
const CREATE = 'bucketlist/CREATE'

const initialState = {
  list: ['영화관 가기', '매일 책읽기', '수영배우기'],
}

// Action Creators
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket }
}
export const createBucket = (bucket) => {
  return { type: CREATE, bucket }
}
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'bucketlist/LOAD': {
      return state
    }

    case 'bucketlist/CREATE': {
      const new_bucket_list = [...state.list, action.bucket]
      return { list: new_bucket_list }
    }
    default:
      return state
  }
}
