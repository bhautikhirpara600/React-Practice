import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import expenseData from '../expenseData'

export const ExpensesContext = createContext()

export function ExpensesProvider({children}) {
    const [expenses, setExpenses] = useLocalStorage("expenses", expenseData)

    return (
        <ExpensesContext.Provider value={[expenses, setExpenses]}>
            {children}
        </ExpensesContext.Provider>
    )
}