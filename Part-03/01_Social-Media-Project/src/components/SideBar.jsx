import { NavLink } from "react-router"

const SideBar = () => {

    return (
    <aside className="w-64 bg-purple-600 text-white p-6">
        <h1 className="text-3xl font-bold mb-10">Side Bar</h1>

        <nav className="space-y-4">
            <NavLink to="/" className={({isActive}) => `flex items-center space-x-2 hover:bg-purple-700 p-3 rounded-lg cursor-pointer ${isActive ? "bg-purple-800" : ""}`}>
                <span className="font-medium">Home</span>
            </NavLink>
            <NavLink to="create-post" className={({isActive}) => `flex items-center space-x-2 hover:bg-purple-700 p-3 rounded-lg cursor-pointer ${isActive ? "bg-purple-800" : ""}`}>
                <span className="font-medium">Create Post</span>
            </NavLink>
        </nav>
    </aside>)
}

export default SideBar