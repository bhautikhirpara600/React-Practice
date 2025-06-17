export default function ExpenseForm({setExpenses}) {

    const expenseHandle = (e) => {
        e.preventDefault() 
        
        setExpenses((prevState) => ([...prevState, {...getData(e.target), id: crypto.randomUUID()}]))
        e.target.reset()
    }

    const getData = (form) => {
        const formData = new FormData(form)
        const data = {}
        for (const [key, value] of formData.entries()) {
            data[key] = value
        }
        return data
    }

    return (
        <form className="expense-form" onSubmit={expenseHandle}>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" />
            </div>
            <div className="input-container">
                <label htmlFor="category">Category</label>
                <select id="category" name="category">
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
                <input id="amount" name="amount" />
            </div>
            <button className="add-btn">Add</button>
        </form>
    )
}