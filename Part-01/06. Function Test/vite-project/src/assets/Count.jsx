import { useState } from "react"

// const handleCount = () => {
//     console.log("Outside Comp");
// }

const Count = () => {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        console.log("Inside Comp");
        setCount(count+1)
    }
    return (
        <>
            <h1>Count:  {count}</h1>
            <button onClick={handleCount}>Update Count</button>
        </>
    )
}

export default Count