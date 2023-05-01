import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {

	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
        case 'CHG_CURRENCY': 
            action.type = 'DONE';
            state.currency = action.payload;
            return {
                ...state
            }
        case 'SET_BUDGET':
            action.type = "DONE";
            state.budget = action.payload;

            return {
                ...state,
            };
		default:
            return state;
	}
};


const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'Shopping', cost: 40, description: 'Some random description here, whatever' ,date: new Date(2020, 5, 15),},
        { id: 13, name: 'Holiday', cost: 400, description: 'Some random description here, whatever' , date: new Date(2020, 5, 15),},
        { id: 14, name: 'Car service', cost: 50, description: 'Some random description here, whatever' ,date: new Date(2020, 5, 15),},
    ],
    currency: '$'
};

export const AppContext = createContext();

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
                description: state.description,
                currency: state.currency,
            }}
        > 
            {props.children}
        </AppContext.Provider>
    );
}
 
export default AppProvider;