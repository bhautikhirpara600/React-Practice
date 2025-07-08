import { useContext } from "react"
import Post from "./Post"
import { PostListContext } from "../store/Store"
import WelcomeMsg from "./WelcomeMsg"

const PostList = () => {

    const {postListData} = useContext(PostListContext)

    return (
        <div className="flex flex-wrap gap-5">
            {!postListData.length && <WelcomeMsg />}
            {postListData.map(post => <Post key={post.title} postData={post} />)}
        </div>
    )
}

export default PostList