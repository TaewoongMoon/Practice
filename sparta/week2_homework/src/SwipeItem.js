import React from 'react'
import styled from 'styled-components'

const img = './scc_img01.png'

const SwipeItem = React.memo(({ onSwipe }) => {
  const swipe_div = React.useRef(null)
  let swipe_status = 'ready'
  let target_classname = ''
  let coordinate = {
    start_x: 0,
    start_y: 0,
    end_x: 0,
    end_y: 0,
  }
  React.useEffect(() => {
    console.log('swipe_div', swipe_div.current)
    const reset = () => {
      swipe_status = 'ready'
      coordinate = {
        start_x: 0,
        start_y: 0,
        end_x: 0,
        end_y: 0,
      }

      swipe_div.current.className = target_classname
      swipe_div.current.style.left = 0 + 'px'
      swipe_div.current.style.top = 0 + 'px'
    }

    const touchStart = (e) => {
      swipe_status = 'touchstart'
      target_classname = swipe_div.current.className
      coordinate = {
        ...coordinate,
        start_x: e.touches[0].clientX,
        start_y: e.touches[0].clientY,
      }
    }

    const touchEnd = (e) => {
      swipe_status = 'touchend'
      coordinate = {
        ...coordinate,
        end_x: e.changedTouches[0].clientX,
        end_y: e.changedTouches[0].clientY,
      }
      let diff_x = coordinate.end_x - coordinate.start_x
      let direct = 'left'

      if (Math.abs(diff_x) > 50) {
        swipe_div.current.className = target_classname + ' swipe'
        console.log(swipe_div.current.className)
      }

      if (diff_x > 40) {
        direct = 'right'
        swipe_div.current.style.left = diff_x + 150 + 'px'
        swipe_div.current.style.opacity = 0
        console.log('coordinate', coordinate.end_x)
        console.log(coordinate.end_y)
        console.log(coordinate.start_x)
        console.log(coordinate.start_y)
      } else if (diff_x > -180 && diff_x < -50) {
        direct = 'left'
        swipe_div.current.style.left = diff_x - 150 + 'px'
        swipe_div.current.style.opacity = 0
        console.log(coordinate.end_x)
        console.log(coordinate.end_y)
        console.log(coordinate.start_x)
        console.log(coordinate.start_y)
      }
      setTimeout(() => {
        reset()
        if (diff_x > 40 || (diff_x > -180 && diff_x < -50)) {
          onSwipe(direct)
        }
      }, 300)
    }

    const touchMove = (e) => {
      // touchMove가 실행되는 동안에는 다른 이벤트들이 실행되는것을 방지하기 위해서 쓴다
      e.preventDefault()

      let current_coordinate = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }

      swipe_div.current.style.left =
        current_coordinate.x - coordinate.start_x + 'px'
      swipe_div.current.style.top =
        current_coordinate.y - coordinate.start_y + 'px'
    }

    const touchCancel = () => {}

    swipe_div.current.addEventListener('touchstart', touchStart)
    swipe_div.current.addEventListener('touchmove', touchMove)
    swipe_div.current.addEventListener('touchend', touchEnd)
    swipe_div.current.addEventListener('touchcancel', touchCancel)
    // 이벤트 해제할 떄 사용하는 부분
    return () => {
      if (!swipe_div.current) {
        return
      }
      swipe_div.current.removeEventListener('touchstart', touchStart)
      swipe_div.current.removeEventListener('touchmove', touchMove)
      swipe_div.current.removeEventListener('touchend', touchEnd)
      swipe_div.current.removeEventListener('touchcancel', touchCancel)
    }
  }, [])

  return (
    <DragItem ref={swipe_div}>
      <img alt="스파르타 이미지" src={img} />
    </DragItem>
  )
})

SwipeItem.defaultProps = {
  onSwipe: () => {},
}

const DragItem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  &.swipe {
    transition: 300ms;
  }
  & > div {
    background-color: #ffd6aa;
    border-radius: 50%;
  }
  & img {
    max-width: 200px;
  }
`

export default SwipeItem
