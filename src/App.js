import classes from './App.module.css';
import { useEffect, useReducer, useState } from 'react';
import { Balance } from './Components/Balance/Balance';
import { History } from './Components/History/History';
import { Transaction } from './Components/Transaction/Transaction';

const listReducer = (state, action) => {
  if(action.type === 'ADD_ITEM') {
    const tempState = [...state];
    tempState.push(action.payload);
    return tempState;
  }

  if(action.type==='REMOVE_ITEM') {
    const tempState = [...state];
    const indexToRemove = tempState.findIndex(x => x.id === action.id);
    tempState.splice(indexToRemove, 1);
    return tempState;
  }

  return state;
}

function App() {

  const [balance, setBalance] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  
  const storedData = JSON.parse(localStorage.getItem('listItems'));
  const [listState, listStateDispatch] = useReducer(listReducer, storedData ? storedData: [])


  const addTransaction = (data) => {
    const action = {type: 'ADD_ITEM', payload: data}
    listStateDispatch(action);
  }

  const removeTransaction = (id) => {
    const action = {type: 'REMOVE_ITEM', id: id}
    listStateDispatch(action);
  }

  useEffect(() => {
    const sum = listState.reduce( (previousValue, currentValue) => previousValue + currentValue.amount, 0);
    const incomeData = listState.filter(x => x.type === 'income').reduce( (previousValue, currentValue) => previousValue + currentValue.amount, 0);
    const expenseData = listState.filter(x => x.type === 'expense').reduce( (previousValue, currentValue) => previousValue + currentValue.amount, 0);

    setBalance(sum);
    setTotalIncome(incomeData);
    setTotalExpense(expenseData);
    localStorage.setItem('listItems', JSON.stringify(listState))
  }, [listState])

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <div className={classes.headline}>Expense Tracker</div>
        <Balance amount={balance} income={totalIncome} expense={totalExpense}></Balance>
        <History list={listState} removeItem = {removeTransaction}></History>
        <Transaction addTransaction={addTransaction}></Transaction>
      </div>
    </div>
  );
}

export default App;
