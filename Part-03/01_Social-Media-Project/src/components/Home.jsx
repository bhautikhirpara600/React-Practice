import Header from "./Header"
import SideBar from "./SideBar"
import { Outlet } from "react-router"

const Home = () => {

    return (
        <div className="flex bg-orange-50 min-h-screen ">
            <div className="flex bg-gray-100 font-sans">
                <SideBar />
            </div>
            <div className='px-10 py-6 flex flex-col w-full'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Home