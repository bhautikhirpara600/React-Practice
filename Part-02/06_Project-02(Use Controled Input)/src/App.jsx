import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'

function App() {

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: ""
  })
  const [rowId, setRowId] = useState("")
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem("myExpenses")) || expenseData)
  const [isEditableExpense, setIsEditableExpense] = useState("")

  localStorage.setItem("myExpenses", JSON.stringify(expenses))

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm 
            setExpenses={setExpenses} 
            expense={expense} 
            setExpense={setExpense} 
            rowId={rowId} 
            isEditableExpense={isEditableExpense} 
            setIsEditableExpense={setIsEditableExpense} 
          />
          
          <ExpenseTable 
            expenses={expenses} 
            setExpenses={setExpenses} 
            setExpense={setExpense} 
            rowId={rowId} 
            setRowId={setRowId} 
            setIsEditableExpense={setIsEditableExpense} 
          />
        </div>
      </main>
    </>
  )
}

export default App
