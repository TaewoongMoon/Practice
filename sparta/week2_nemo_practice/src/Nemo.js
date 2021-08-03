import { useEffect, useState } from 'react'

const Nemo = () => {
  const [count, setCount] = useState(3)

  const addNemo = () => {
    setCount((prev) => prev + 1)
  }

  const removeNemo = () => {
    setCount((prev) => prev - 1)
  }

  const nemoCount = Array.from({ length: count }, (v, i) => {
    return i
  })

  useEffect(() => {
    console.log(nemoCount)
  }, [count, nemoCount])

  return (
    <>
      <button onClick={addNemo}>더하기</button>
      <button onClick={removeNemo}>빼기</button>
    </>
  )
}

export default Nemo
