import { useExpense } from "../hooks/useExpense"
import { useExpenses } from "../hooks/useExpenses"
import { useIsEditableExpense } from "../hooks/useIsEditableExpense"
import { useRowId } from "../hooks/useRowId"

export default function ContextMenu({menuPosition, setMenuPosition}) {
    if(!menuPosition.left || !menuPosition.top) return

    const [rowId] = useRowId()
    const [expenses, setExpenses] = useExpenses()
    const [_1, setExpense] = useExpense()
    const [_2, setIsEditableExpense] = useIsEditableExpense()

    return (
        <div className="context-menu" style={{...menuPosition}}>
            <div onClick={() => {
                const { title, category, amount } = expenses.find((expense) => expense.id === rowId)
                setExpense({ title, category, amount })
                setIsEditableExpense(rowId)
                // console.log(rowId);
                setMenuPosition({})
            }}>Edit</div>

            <div onClick={() => {
                setExpenses((prevState) => prevState.filter(expense => expense.id !== rowId))
                setMenuPosition({})
            }}>Delete</div>
        </div>
    )
}