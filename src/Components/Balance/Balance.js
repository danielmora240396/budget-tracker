import classes from './Balance.module.css';

const Balance = (props) => {
    return (
        <div className={classes.balance}>
            <div>Your Balance</div>
            <div>{`$${props.amount}`}</div>
            <div className={classes['balance-card']}>
                <div className={classes['balance-card-income']}>
                    Income
                    <div className={classes['balance-card-income-amount']}>${props.income}</div>
                </div>
                <div className={classes['balance-card-expense']}>
                    Expense
                    <div className={classes['balance-card-expense-amount']}>${props.expense*-1}</div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export {Balance};