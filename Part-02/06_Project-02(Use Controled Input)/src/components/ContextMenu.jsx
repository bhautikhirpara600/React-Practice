export default function ContextMenu({menuPosition, setMenuPosition, expenses, setExpenses, rowId, setExpense, setIsEditableExpense}) {
    if(!menuPosition.left || !menuPosition.top) return

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