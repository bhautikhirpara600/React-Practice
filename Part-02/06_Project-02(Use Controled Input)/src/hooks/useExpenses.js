import { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesContext";

export function useExpenses() {
    return useContext(ExpensesContext)
}