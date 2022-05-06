import classes from './Item.module.css';

const Item = (props) => {

    const removeItem = () => {
        props.removeItem(props.id);
    }
    return (
        <div onClick={removeItem} className={`${classes.item} ${classes[props.type]}`}>
            <div>{props.description}</div>
            <div>{props.amount}</div>
        </div>
    )
}

export {Item};