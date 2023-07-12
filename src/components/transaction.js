import './transaction.css'
import Item from './item';

function Transaction(props) {

    const {list} = props

    return (
        <ul className='item-list'>
            {list.map((element) => {
                return <Item {...element} key={element.id} />
            })}
        </ul>
    )
}

export default Transaction;