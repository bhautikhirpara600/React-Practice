import { createContext, useState } from "react";

export const RowIdContext = createContext()

export function RowIdProvider({children}) {
    const [rowId, setRowId] = useState("")

    return (
        <RowIdContext.Provider value={[rowId, setRowId]}>
            {children}
        </RowIdContext.Provider>
    )
}