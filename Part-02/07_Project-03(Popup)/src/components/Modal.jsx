import { createPortal } from "react-dom"

export default function Modal({ header, footer, children, displayPopup, setDisplayPopup }) {

    return (
        createPortal(
            <div onClick={() => setDisplayPopup(false)} className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${!displayPopup ? "hidden" : ""}`}>
                <div onClick={(e) => e.stopPropagation()} className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg">
                    {header}
                    {children}
                    {footer}
                </div>
            </div>,
            document.getElementById('portal')
        )
    )
}
