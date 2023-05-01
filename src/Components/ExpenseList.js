import { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [filteredExpenses, setFilteredExspenses] = useState(expenses || []);
    useEffect(() => {
        setFilteredExspenses(expenses)
    }, [expenses]);

    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpenses) => 
            filteredExpenses.name.toLowerCase().includes(event.target.value)
        );
        setFilteredExspenses(searchResults);
    }

    return (
        <>
        	<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
            <ul className="list-group mt-3 mb-3">
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                    id={expense.id} 
                    name={expense.name} 
                    cost={expense.cost}
                    description={expense.description} 
                    date={expense.date} />
                ))}
            </ul>
        </>
    );
}
 
export default ExpenseList;