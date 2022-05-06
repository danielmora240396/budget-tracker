import classes from './History.module.css';
import { Item } from './Item/Item,';

const History = (props) => {

    const removeItem = (id) => {
        props.removeItem(id)
    }

    const items = props.list.map(item => {
        return <Item removeItem={removeItem} key={item.id} {...item}></Item>
    });
    return (
        <div className={classes['history']}>
            <div className={classes['history-headline']}>
                History
            </div>
            <div>
                {items}
            </div>
        </div>
    )
}

export {History};