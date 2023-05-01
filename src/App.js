import './App.css';
import AddExpense from './Components/AddExpense';
import Budget from './Components/Budget';
import Currency from './Components/Currency';
import ExpenseList from './Components/ExpenseList';
import ExpenseTotal from './Components/ExpenseTotal';
import Remaining from './Components/Remaining';
import AppProvider from './Context/AppContext';

function App() {
  return (
    <AppProvider>
        <div className='container'>

          <h1 className='mt-3'>My Budget Planner</h1>
          <div className='row mt-3'>
            <div className='col-lg'>
              <Budget />
            </div>
            <div className='col-lg'>
              <Remaining />
            </div>
            <div className='col-lg'>
              <ExpenseTotal />
            </div>
            <div className="col-lg">
              <Currency/>
            </div>
          </div>

          <h3 className='mt-3'>Expenses</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <ExpenseList />
            </div>
          </div>

          <h3 className='mt-3'>Add Expense</h3>
          <div className='row mt-3'>
            <div className='col-sm  mb-3'>
              <AddExpense />
            </div>
          </div>

        </div>
    </AppProvider>
  );
}

export default App;
