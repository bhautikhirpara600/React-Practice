import { useState } from "react"
import CreatePost from "./CreatePost"
import Header from "./Header"
import PostList from "./PostList"
import SideBar from "./SideBar"

const Home = () => {

    const [selectTab, setSelectTab] = useState("Home")

    return (
        <div className="flex bg-orange-50 min-h-screen ">
            <div className="flex bg-gray-100 font-sans">
                <SideBar state={[selectTab, setSelectTab]} />
            </div>
            <div className='px-10 py-6 flex flex-col w-full'>
                <Header />
                {selectTab === "Home" ? <PostList /> : <CreatePost setSelectTab={setSelectTab} />}
            </div>
        </div>
    )
}

export default Home