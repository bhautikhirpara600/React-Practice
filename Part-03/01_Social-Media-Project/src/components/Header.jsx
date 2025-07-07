import { useContext, useRef } from "react"
import { PostListContext } from "../store/Store"

const Header = () => {
    const { searchPost } = useContext(PostListContext)
    const inputEle = useRef(null)

    const handleInput = (e) => {
        if(e.key === "Enter") {
            searchPost(inputEle.current.value.toLowerCase())
        }
    }

    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Social Media</h2>
            <input
                onKeyDown={handleInput}
                type="text"
                ref={inputEle}
                placeholder="Search user..."
                className="px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            />
        </div>
    )
}

export default Header