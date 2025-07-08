import { useContext, useRef } from "react"
import { PostListContext } from "../store/Store"

const CreatePost = ({setSelectTab}) => {

    const { setAddData } = useContext(PostListContext)

    const userIdElement = useRef(null)
    const titleElement = useRef(null)
    const bodyElement = useRef(null)
    const tagsElement = useRef(null)
    const reactionElement = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const userId = userIdElement.current.value
        const title = titleElement.current.value
        const body = bodyElement.current.value
        const tags = tagsElement.current.value.split(" ")
        const reactions = reactionElement.current.value

        setAddData({ userId, title, body, tags, reactions })

        e.target.reset()
        setSelectTab("Home")
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-orange-100 px-8 py-4 max-w-[550px] w-full rounded-xl">
                <h2 className="font-semibold text-3xl">Create Post</h2>
                <div className="flex flex-col">
                    <label htmlFor="userId" className="text-xl ml-1 mb-2 mt-2">User ID</label>
                    <input className="border-2 border-gray-500 max-w-[550px] w-full h-8 rounded-md px-4" 
                        type="text" 
                        id="userId" 
                        ref={userIdElement}
                        placeholder="Please enter your User ID (up to 100)"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-xl ml-1 mb-2 mt-2">Title</label>
                    <input className="border-2 border-gray-500 max-w-[550px] w-full h-8 rounded-md px-4" 
                        type="text" 
                        id="title"
                        ref={titleElement} 
                        placeholder="What's on your mind..." 
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="body" className="text-xl ml-1 mb-2 mt-2">Post Content</label>
                    <textarea className="border-2 border-gray-500 max-w-[550px] w-full rounded-md px-4"
                        rows={"4"}
                        cols={"40"}
                        type="text" 
                        id="body" 
                        ref={bodyElement}
                        placeholder="Tell about it..." 
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="tags" className="text-xl ml-1 mb-2 mt-2">Tags</label>
                    <input className="border-2 border-gray-500 max-w-[550px] w-full h-8 rounded-md px-4" 
                        type="text" 
                        id="tags" 
                        ref={tagsElement}
                        placeholder="Enter tags with space" 
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="reactions" className="text-xl ml-1 mb-2 mt-2">Reactions</label>
                    <input className="border-2 border-gray-500 max-w-[550px] w-full h-8 rounded-md px-4" 
                        type="text" 
                        id="reactions"
                        ref={reactionElement} 
                        placeholder="Enter number of reactions" 
                    />
                </div>
                <button className="bg-orange-400 mt-4 ml-2 text-white text-xl font-bold px-6 py-1.5 rounded-xl cursor-pointer">Post</button>
            </form>
        </>
    )
}

export default CreatePost