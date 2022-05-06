import classes from './TransactionForm.module.css';
import { useEffect, useState } from 'react';

const TransactionForm = (props) => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [isDescriptionValid, setIsDescriptionValid] = useState(false);
    const [isAmountValid, setIsamountValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(()=> {
        setIsDescriptionValid(description.trim().length > 0);
    }, [description])

    useEffect(()=> {
        setIsamountValid(amount.trim().length > 0);
    }, [amount])

    useEffect(() => {
        setIsFormValid(isAmountValid && isAmountValid);
    }, [isDescriptionValid, isAmountValid])
 
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleAmount = (e) => {
        setAmount(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isFormValid) {
            alert("The Form is no valid");
        } else {
            const newInput = {
                description: description,
                amount: +amount,
                type: +amount > 0 ? 'income' : 'expense',
                id: new Date()
            }

            props.addTransaction(newInput);
            setDescription('');
            setAmount('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className={classes['transaction-form']}>
            <div className={classes.description}>
                <label>Description</label>
                <input onChange={handleDescription} value={description} type='text' placeholder='Description'></input>
            </div>
            <div className={classes.ammount}>
                <label>Amount (Negative for expense, positive for income)</label>
                <input onChange={handleAmount} value={amount} placeholder='Amount' type="number"></input>
            </div>
            <button>Add</button>
        </form>
    )
}

export { TransactionForm };