import { useContext } from "react";
import { IsEditableExpenseContext } from "../context/IsEditableExpenseContext";

export function useIsEditableExpense() {
    return useContext(IsEditableExpenseContext)
}