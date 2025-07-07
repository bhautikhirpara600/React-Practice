const SideBar = ({state}) => {

    const [selectTab, setSelectTab] = state

    return (
    <aside className="w-64 bg-purple-600 text-white p-6">
        <h1 className="text-3xl font-bold mb-10">Side Bar</h1>

        <nav className="space-y-4">
            <div onClick={() => setSelectTab("Home")} className={`flex items-center space-x-2 hover:bg-purple-700 p-3 rounded-lg cursor-pointer ${selectTab === "Home" && "bg-purple-800"}`}>
                <span className="font-medium">Home</span>
            </div>
            <div onClick={() => setSelectTab("Create Post")} className={`flex items-center space-x-2 hover:bg-purple-700 p-3 rounded-lg cursor-pointer ${selectTab === "Create Post" && "bg-purple-800"}`}>
                <span className="font-medium">Create Post</span>
            </div>
        </nav>
    </aside>)
}

export default SideBar