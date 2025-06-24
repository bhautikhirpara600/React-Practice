import { useState } from "react"
// import {todos} from "../data"

export function About() {

    const [todoData, setTodoData] = useState([])

    const getData = () => {
        import('../data').then(module => setTodoData(module.todos))
    }

    return (
        <>
            <h1 className="text-2xl text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md  max-w-max m-auto font-bold text-center p-2 mt-4" >This is an About Page.</h1>
            <div className="flex justify-center mt-4">
                <button onClick={getData} className='bg-cyan-500 px-4 py-2 text-white rounded-sm font-semibold cursor-pointer'>Load Data</button>
            </div>
            <ul className="mt-4">
                {
                    todoData.map(todo => (
                        <li className="ml-8" key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </>
    )
}