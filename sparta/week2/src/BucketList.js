import React from 'react'

const BucketList = (props) => {
  // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
  const my_lists = props.list

  console.log(props)
  // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
  return (
    <div className={`lists${props.opacityChecker ? '-opacity' : ''}`}>
      {
        // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요.
        // 자세한 사용법은 아래 링크를 확인해주세요.
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        my_lists.map((list, index) => {
          // 콘솔을 확인해봅시다 :)
          console.log(list)
          return (
            <div className="list-item" key={index}>
              <div className="temp">
                나는&nbsp;
                <span className="list-target">{list}</span>에 대해 얼마나 알고
                있을까?
              </div>
              <input className="input-box" type="text" placeholder=" 내 이름" />
            </div>
          )
        })
      }
    </div>
  )
}

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList
