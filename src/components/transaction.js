import '../components/transaction.css'
import Item from './item';


function Transaction(props) {

    const { data } = props
    console.log(data);

    return (
        <div>
            <ul> บัญชีรายรับ - รายจ่าย
               {
                data.map((data, index) => {
                    return <Item items={data}/>
                })
               }
            </ul>
        </div>
    )
}

export default Transaction;