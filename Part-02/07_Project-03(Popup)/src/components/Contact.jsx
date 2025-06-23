import { useState } from "react";
import Modal from "./Modal";

export default function Contact() {

    const [displayPopup, setDisplayPopup] = useState(false)

    return (
        <>
            <h1 className="text-2xl text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md  max-w-max m-auto font-bold text-center p-2 mt-4" >This is a Contact Page.</h1>
            <div className="flex justify-center mt-4">
                <button onClick={() => setDisplayPopup(true)} className='bg-cyan-500 px-4 py-2 text-white rounded-sm font-semibold cursor-pointer'>Show</button>
            </div>
            <Modal
                displayPopup={displayPopup}
                setDisplayPopup={setDisplayPopup}
                header={<div className="font-bold text-2xl">Header</div>}
                footer={
                    <div className="flex justify-end">
                        <button onClick={() => setDisplayPopup(false)} className='bg-cyan-500 px-4 py-2 text-white rounded-sm font-semibold cursor-pointer'>Close</button>
                    </div>
                }
            >
                <div className="my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur minus harum distinctio temporibus quas praesentium fugit dolores
                    dignissimos corrupti autem vitae, adipisci, exercitationem dolore
                    laudantium quasi ipsum! Voluptate,quidem at!
                </div>
            </Modal>
        </>
    )
}