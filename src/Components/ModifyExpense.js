import { useState } from "react";
import ModifyExpenseForm from "./ModifyExpenseForm";

const ModifyExpense = (props) => {
    const modifyExpenseDataHandler = (enteredExpenseData) => {
        
    };

    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div>
            {!isEditing && <button className="btn btn-primary" onClick={startEditingHandler}>Modify Expense</button>}
            {isEditing && <ModifyExpenseForm onSaveExpenseData={modifyExpenseDataHandler} onCancel={stopEditingHandler}></ModifyExpenseForm>}
        </div>
    );
}
 
export default ModifyExpense;