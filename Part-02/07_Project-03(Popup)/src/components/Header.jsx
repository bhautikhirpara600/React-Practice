import viteLogo from '/vite.svg'
import { NavLink } from "react-router"

export default function Header() {
    return (
        <header className='flex justify-between items-center px-6 py-4 shadow-md'>
            <div><img src={viteLogo} alt="logo" /></div>
            <ul className='flex space-x-4 items-center'>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-cyan-600 font-bold underline" : ""}
                     to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-cyan-600 font-bold underline" : ""}
                     to="/about" >About</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-cyan-600 font-bold underline" : ""}
                     to="/contact" >Contact</NavLink>
                </li>

                <li>
                    <button  className='bg-cyan-500 px-4 py-2 text-white rounded-sm font-semibold cursor-pointer'>Sign in</button>
                </li>
            </ul>
        </header>
    )
}