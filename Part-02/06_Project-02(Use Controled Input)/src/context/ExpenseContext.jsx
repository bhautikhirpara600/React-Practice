import { createContext, useState } from "react";

export const ExpenseContext = createContext()

export function ExpenseProvider({ children }) {
    const [expense, setExpense] = useState({
        title: "",
        category: "",
        amount: ""
    })
    return (
        <ExpenseContext.Provider value={[expense, setExpense]}>
            {children}
        </ExpenseContext.Provider>
    )
}
