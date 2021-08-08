// 리액트 패키지를 불러옵니다.
import React from 'react'
import { useSelector } from 'react-redux'

const Detail = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list)
  console.log(bucket_list, props)
  return <h1>{bucket_list[parseInt(props.match.params.index)]}</h1>
}

export default Detail
