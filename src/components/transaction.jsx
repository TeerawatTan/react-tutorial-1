import Detail from './Detail';
import Item from './Item';
import './transaction.css';

function Transaction(props) {

    const { list } = props

    return (
        <>
            <div>
                <Detail />
            </div>
            <div>
                <ul className='item-list'>
                    {list.map((element) => {
                        return <Item {...element} key={element.id} />;
                    })}
                </ul>
            </div>
        </>
    )
}

export default Transaction;