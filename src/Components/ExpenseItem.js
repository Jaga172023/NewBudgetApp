import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext); 
    const handleDeleteExpense = () => {
        dispatch ({
            type: 'DELETE_EXPENSE',
			payload: props.id,
        });
    };


    return (
        <>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <div className="col-xs">
                <b>{props.name}</b>
                <ExpenseDate date={props.date}></ExpenseDate>
                <span className="blockquote-footer">{props.description}</span>
            </div>
            <div className="col-xs">
                <span className='badge rounded-pill text-bg-success'>
                    {currency} {props.cost}
                </span>
                <button className="btnDelete" onClick={handleDeleteExpense}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
        </li>         
        </>
 
    );
}
 
export default ExpenseItem;