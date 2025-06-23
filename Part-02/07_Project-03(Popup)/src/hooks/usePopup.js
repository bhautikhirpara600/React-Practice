import { useContext } from "react";
import { DisplayPopup } from "../contexts/DisplayPopup";

export function usePopup() {
    return useContext(DisplayPopup)
}