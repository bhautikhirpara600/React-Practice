import { useContext } from "react";
import { ExpenseContext } from "../context/expenseContext";

export function useExpense() {
    return useContext(ExpenseContext)
}