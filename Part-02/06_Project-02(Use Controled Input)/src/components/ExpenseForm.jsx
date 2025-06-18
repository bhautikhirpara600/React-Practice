import { useState } from "react"

export default function ExpenseForm({ setExpenses }) {

    const [expense, setExpense] = useState({
        title: "",
        category: "",
        amount: ""
    })
    const [errors, setErrors] = useState({})

    const validate = (expenseObj) => {
        const errorObj = {}

        if(!expenseObj.title) {
            errorObj.title = "Title is Required"
        }
        if(!expenseObj.category) {
            errorObj.category = "Category is Required"
        }
        if(!expenseObj.amount) {
            errorObj.amount = "Amount is Required"
        }

        setErrors(errorObj)
        return errorObj
    }

    const expenseHandle = (e) => {
        e.preventDefault()

        const formError = validate(expense)
        if(Object.keys(formError).length) return

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
        setErrors({})
    }

    return (
        <form className="expense-form" onSubmit={expenseHandle}>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" value={expense.title} onChange={handleChange} />
                <p className="error">{errors.title ? `*${errors.title}` : ""}</p>
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
                <p className="error">{errors.category ? `*${errors.category}` : ""}</p>
            </div>
            <div className="input-container">
                <label htmlFor="amount">Amount</label>
                <input id="amount" name="amount" value={expense.amount} onChange={handleChange} />
                <p className="error">{errors.amount ? `*${errors.amount}` : ""}</p>
            </div>
            <button className="add-btn">Add</button>
        </form>
    )
}