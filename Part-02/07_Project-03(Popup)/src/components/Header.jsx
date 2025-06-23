import { usePopup } from '../hooks/usePopup'
import Modal from './Modal'
import viteLogo from '/vite.svg'
import { NavLink } from "react-router"

export default function Header() {

    const [_, setDisplayPopup] = usePopup()

    return (
        <header className='flex justify-between items-center px-4 md:px-6 py-4 shadow-md'>
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
                    <button
                        onClick={() => setDisplayPopup(true)}
                        className='bg-cyan-500 px-4 py-2 text-white rounded-sm font-semibold cursor-pointer'>
                        Sign in
                    </button>

                    <Modal
                        header={<div className="text-xl font-bold">Sign In</div>}
                        footer={
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setDisplayPopup(false)}
                                    className="rounded-md cursor-pointer bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60">
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setDisplayPopup(false)}
                                    className="rounded-md cursor-pointer bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60">
                                    Sign In
                                </button>
                            </div>
                        }
                    >
                        <div className="-mx-4 my-3 px-4 py-4 flex flex-wrap gap-4">
                            <input
                                name='username'
                                placeholder="Username"
                                className="grow rounded border border-gray-600 px-2 py-1"
                                type="text"
                            />
                            <input
                                name='password'
                                placeholder="Password"
                                className="grow rounded border border-gray-600 px-2 py-1"
                                type="password"
                            />
                        </div>
                    </Modal>
                </li>
            </ul>
        </header>
    )
}