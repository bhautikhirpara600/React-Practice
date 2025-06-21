import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import { ExpenseProvider } from './context/expenseContext'
import { ExpensesProvider } from './context/ExpensesContext'
import { RowIdProvider } from './context/RowIdContext'
import { IsEditableExpenseProvider } from './context/IsEditableExpenseContext'

function App() {

  return (
    <ExpenseProvider>
      <ExpensesProvider>
        <RowIdProvider>
          <IsEditableExpenseProvider>
            <main>
              <h1>Track Your Expense</h1>
              <div className="expense-tracker">
                <ExpenseForm />
                <ExpenseTable />
              </div>
            </main>
          </IsEditableExpenseProvider>
        </RowIdProvider>
      </ExpensesProvider>
    </ExpenseProvider>
  )
}

export default App
