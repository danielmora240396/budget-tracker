import classes from './Transaction.module.css';
import { TransactionForm } from './TransactionForm/TransactionForm';

const Transaction = (props) => {

    const addTransaction = (data) => {
        props.addTransaction(data);
    }
    return (
        <div className={classes['transaction']}>
            <div className={classes['transaction-headline']}>
                New Transaction
            </div>
            <TransactionForm addTransaction={addTransaction}></TransactionForm>
        </div>
    )
}

export { Transaction }