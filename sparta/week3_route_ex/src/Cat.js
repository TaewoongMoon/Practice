import React from 'react'

const Cat = (props) => {
  const { params } = props.match
  console.log(params.cat_name)
  return <div>내 고양이 이름은 {params.cat_name}입니다.</div>
}

export default Cat
