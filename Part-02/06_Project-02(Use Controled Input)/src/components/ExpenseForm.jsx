import { useState } from "react"

export default function ExpenseForm({ setExpenses }) {

    const [expense, setExpense] = useState({
        title: "",
        category: "",
        amount: ""
    })

    const expenseHandle = (e) => {
        e.preventDefault()

        const formExpense = {id: crypto.randomUUID(), ...expense}
        setExpenses((prevState) => ([...prevState, formExpense]))
        setExpense({
        title: "",
        category: "",
        amount: ""
    })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setExpense((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <form className="expense-form" onSubmit={expenseHandle}>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" value={expense.title} onChange={handleChange} />
            </div>
            <div className="input-container">
                <label htmlFor="category">Category</label>
                <select id="category" name="category" value={expense.category} onChange={handleChange}>
                    <option value="" hidden>Select Category</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Bills">Bills</option>
                    <option value="Education">Education</option>
                    <option value="Medicine">Medicine</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="amount">Amount</label>
                <input id="amount" name="amount" value={expense.amount} onChange={handleChange} />
            </div>
            <button className="add-btn">Add</button>
        </form>
    )
}