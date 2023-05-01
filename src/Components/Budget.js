import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const onChangeBudgetHandler = (event) => {
        const enteredValue = Number(event.target.value);

        if (enteredValue < expenses) {
            alert (
                "The value of the buget can't be lower than the expenses value " +
                currency + 
                expenses
            );
        } dispatch ({
            type: 'SET_BUDGET',
            payload: enteredValue,
        });
    }
    
    return (
        <div class="alert alert-secondary input-group">
            <span class="input-group-text">Budget: {currency} </span>
            <input
            step='0.01'
            class="form-control" 
            aria-label="With textarea"
            value={budget} 
            type="number" 
            min={0} 
            onChange={onChangeBudgetHandler}
            required
            ></input>
        </div>       
    );
}
 
export default Budget;