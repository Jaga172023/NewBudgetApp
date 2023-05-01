import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from 'uuid';

const AddExpense = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }; 


    const onSubmit = (event) => {
        event.preventDefault()

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
            date: new Date(enteredDate),
            description: description,
        }

        dispatch ({
            type: 'ADD_EXPENSE',
            payload: expense,
        })

        setCost('');
        setName('');
        setDescription('');
        setEnteredDate('');
    }    

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm-3'>
                    <label for='name'>Name</label>
                    <input
                        pattern="[^' ']+"
                        className="form-control"
                        required='required'
                        type='text'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>

                <div className='col-sm'>
                    <label for='cost'>Cost</label>
                    <input
                        pattern="[^' ']+"
                        required='required'
                        type='number'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>

                <div className='col-sm'>
                    <label for='cost'>Date</label>
                    <input
                        required='required'
                        type='date'
                        className='form-control'
                        id='date'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    ></input>
                </div>
            </div>
            <div className="row mt-2">
                <div className='col-sm-9'>
                    <label for='validationTextarea' className="form-label">Description</label>
                    <input
                        pattern="[^' ']+"
                        maxlength="30"
                        required='required'
                        type='text'
                        className='form-control'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    ></input>
                        <div class="invalid-feedback">
                            Please enter a message in the textarea.
                        </div>
                </div>

                <div className='col-sm-3 mt-2'>
                    <label htmlFor="" style={{color:'white'}}>-</label>
                    <button type='submit' className='btnSend btn btn-primary' style={{width: '100%'}}>
                        Save
                    </button>
                </div>                
            </div>
        </form>
    );
}
 
export default AddExpense;