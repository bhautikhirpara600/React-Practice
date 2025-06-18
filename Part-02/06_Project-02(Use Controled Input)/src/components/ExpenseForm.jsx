import { useState } from "react"
import Input from "./Input"
import Select from "./Select"

export default function ExpenseForm({ setExpenses }) {

    const [expense, setExpense] = useState({
        title: "",
        category: "",
        amount: ""
    })
    const [errors, setErrors] = useState({})

    const validationRules = {
        title: [
            {required: true, errorMsg: "Please enter a title."},
            {minLength: 5, errorMsg: "The title must be at least 5 characters long."},
            {pattern: /^[A-Z]/, errorMsg: "The first letter should be uppercase."}
        ],
        category: [{required: true, errorMsg: "Please select a category."}],
        amount: [{required: true, errorMsg: "Please enter an amount."}]
    }

    const validate = (formData) => {
        const errorsData = {}

        Object.entries(formData).forEach(([key, value]) => {
            validationRules[key].some((rule) => {
                if(rule.required && !value) {
                    errorsData[key] = rule.errorMsg
                    return true
                }
                if(rule.minLength && value.length < 5) {
                    errorsData[key] = rule.errorMsg
                    return true
                }
                if(rule.pattern && !rule.pattern.test(value)) {
                    errorsData[key] = rule.errorMsg
                    return true
                }
            })
        })

        setErrors(errorsData)
        return errorsData
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
            <Input
                label="Title"
                id="title"
                name="title"
                value={expense.title}
                onChange={handleChange}
                error={errors.title ? `*${errors.title}` : ""}
            />
            <Select
                label="Category"
                id="category"
                name="category"
                value={expense.category}
                onChange={handleChange}
                defaultOption="Select Category"
                options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
                error={errors.category ? `*${errors.category}` : ""}
            />
            <Input
                label="Amount"
                id="amount"
                name="amount"
                value={expense.amount}
                onChange={handleChange}
                error={errors.amount ? `*${errors.amount}` : ""}
            />
            <button className="add-btn">Add</button>
        </form>
    )
}