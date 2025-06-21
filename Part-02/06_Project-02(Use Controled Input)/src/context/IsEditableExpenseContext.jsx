import { createContext, useState } from "react";

export const IsEditableExpenseContext = createContext()

export function IsEditableExpenseProvider({children}) {
    const [isEditableExpense, setIsEditableExpense] = useState("")

    return (
        <IsEditableExpenseContext.Provider value={[isEditableExpense, setIsEditableExpense]}>
            {children}
        </IsEditableExpenseContext.Provider>
    )
}