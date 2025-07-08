import { useContext } from "react"
import Post from "./Post"
import { PostListContext } from "../store/Store"
import WelcomeMsg from "./WelcomeMsg"
import LoadingSpinner from "./LoadingSpinner"

const PostList = () => {

    const { postListData, loadingData } = useContext(PostListContext)

    return (
        <>
            {loadingData && <LoadingSpinner />}
            <div className="flex flex-wrap gap-5">
                {loadingData && !postListData.length && <WelcomeMsg />}
                {!loadingData && postListData.map(post => <Post key={post.title} postData={post} />)}
            </div>
        </>
    )
}

export default PostList