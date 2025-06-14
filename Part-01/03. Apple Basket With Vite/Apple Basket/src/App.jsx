import { useState } from "react"
import AppleBasket from "./AppleBasket"
import Button from "./Button"
import leftArrow from "./assets/Images/left-arrow.svg"
import rightArrow from "./assets/Images/right-arrow.svg"

function App() {
  const [rightCount, setRightCount] = useState(0)
  const [leftCount, setLeftCount] = useState(10)
  const leftEvent = () => {
    if (leftCount < 10) {
      setLeftCount((previousCount) => previousCount + 1)
      setRightCount((previousCount) => previousCount - 1)
    }
  }

  const rightEvent = () => {
    if (rightCount < 10) {
      setRightCount((previousCount) => previousCount + 1)
      setLeftCount((previousCount) => previousCount - 1)
    }
  }

  return (
    <section className="container">
      <AppleBasket appleCount={leftCount} basketName={"Basket-1"} />
      <Button clickEvent={leftEvent} imgURL={leftArrow} title="Left Arrow" />
      <Button clickEvent={rightEvent} imgURL={rightArrow} title="Right Arrow" />
      <AppleBasket appleCount={rightCount} basketName={"Basket-2"} />
    </section>
  )
}

export default App
