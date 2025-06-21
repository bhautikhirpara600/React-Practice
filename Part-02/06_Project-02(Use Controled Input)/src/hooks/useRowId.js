import { useContext } from "react";
import { RowIdContext } from "../context/RowIdContext";

export function useRowId() {
    return useContext(RowIdContext)
}