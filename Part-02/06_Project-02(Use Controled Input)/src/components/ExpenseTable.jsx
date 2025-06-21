import { useState } from "react";
import { useFilter } from "../hooks/useFilter"
import ContextMenu from "./ContextMenu";
import { useExpense } from "../hooks/useExpense";
import { useExpenses } from "../hooks/useExpenses";
import { useRowId } from "../hooks/useRowId";
import { useIsEditableExpense } from "../hooks/useIsEditableExpense";

export default function ExpenseTable() {

    const [_1, setExpense] = useExpense()
    const [expenses, setExpenses] = useExpenses()
    const [rowId, setRowId] = useRowId()
    const [_2, setIsEditableExpense] = useIsEditableExpense()

    const [filteredData, setQuery] = useFilter(expenses, (data) => data.category)
    
    const [menuPosition, setMenuPosition] = useState({})
    const [sortCallback, setSortCallback] = useState(() => () => {})

    const total = filteredData.reduce((acc, curr) => acc + Number(curr.amount), 0)

    return (
        <>
            <ContextMenu
                menuPosition={menuPosition}
                setMenuPosition={setMenuPosition}
                expenses={expenses} setExpenses={setExpenses}
                rowId={rowId}
                setExpense={setExpense}
                setIsEditableExpense={setIsEditableExpense}
            />
            <table className="expense-table" onClick={() => menuPosition.left ? setMenuPosition({}) : ""}>
                <thead>
                    <tr>
                        <th className="title-column">
                            <div>
                                <span>Title</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    viewBox="0 0 384 512"
                                    className="arrow up-arrow"
                                    onClick={() => setSortCallback(() => (x, y) => x.title.localeCompare(y.title))}
                                >
                                    <title>Ascending</title>
                                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    viewBox="0 0 384 512"
                                    className="arrow down-arrow"
                                    onClick={() => setSortCallback(() => (x, y) => y.title.localeCompare(x.title))}
                                >
                                    <title>Descending</title>
                                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    viewBox="0 0 512 512"
                                    className="refresh clear"
                                    onClick={() => setSortCallback(() => () => {})}
                                >
                                    <title>Refresh</title>
                                    <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                                </svg>
                            </div>
                        </th>
                        <th>
                            <select onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                                <option value="">All</option>
                                <option value="grocery">Grocery</option>
                                <option value="clothes">Clothes</option>
                                <option value="bills">Bills</option>
                                <option value="education">Education</option>
                                <option value="medicine">Medicine</option>
                            </select>
                        </th>
                        <th className="amount-column">
                            <div>
                                <span>Amount</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    viewBox="0 0 384 512"
                                    className="arrow up-arrow"
                                    onClick={() => setSortCallback(() => (x, y) => x.amount - y.amount)}
                                >
                                    <title>Ascending</title>
                                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    viewBox="0 0 384 512"
                                    className="arrow down-arrow"
                                    onClick={() => setSortCallback(() => (x, y) => y.amount - x.amount)}
                                >
                                    <title>Descending</title>
                                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={10}
                                    viewBox="0 0 512 512"
                                    className="refresh clear"
                                    onClick={() => setSortCallback(() => () => {})}
                                >
                                    <title>Refresh</title>
                                    <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
                                </svg>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.sort(sortCallback).map(({ id, title, category, amount }) => (
                            <tr key={id} onContextMenu={(e) => {
                                e.preventDefault()
                                setMenuPosition({ left: e.clientX + 4, top: e.clientY + 4 })
                                setRowId(id)
                            }} >
                                <td>{title}</td>
                                <td>{category}</td>
                                <td>₹{amount}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <th>Total</th>
                        <th />
                        <th>₹{total}</th>
                    </tr>
                </tbody>
            </table>
        </>
    )
}