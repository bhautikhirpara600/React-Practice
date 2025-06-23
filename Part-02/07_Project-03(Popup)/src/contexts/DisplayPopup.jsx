import { createContext, useState } from "react";

export const DisplayPopup = createContext()

export function DisplayPopupProvider({children}) {
    const [displayPopup, setDisplayPopup] = useState(false)

    return (
        <DisplayPopup.Provider value={[displayPopup, setDisplayPopup]}>
            {children}
        </DisplayPopup.Provider>
    )
}