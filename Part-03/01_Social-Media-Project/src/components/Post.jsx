import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostListContext } from "../store/Store";

const Post = ({postData}) => {

    const { userId, title, body, tags, reactions } = postData
    const { deletePost } = useContext(PostListContext)

    return (
        <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 max-w-[520px] relative">
            <div onClick={() => deletePost(title)} className="absolute top-0 right-0 cursor-pointer"><TiDelete /></div>
            <div className="bg-orange-400 text-white px-3 py-1 rounded-md font-medium w-fit mb-2">
                UserId: {userId}
            </div>
            <h3 className="text-lg font-bold mb-1"> {title} </h3>
            <p className="mb-2"> {body} </p>
            <p className="text-blue-600 space-x-2">
                {tags.map(tag => <span key={tag}>{`#${tag}`}</span>)}
            </p>
            <p className="mt-2 text-gray-700">Reactions: {typeof reactions === "object" ? reactions.likes : reactions}</p>
        </div>
    )
}

export default Post