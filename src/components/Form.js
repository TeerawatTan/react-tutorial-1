import { useState } from "react";

const FormComponent = (props) => {
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState(0)
    
    const inputTitle = (event) => {
        setTitle(event.target.value)
    }
    const inputPrice = (event) => {
        setPrice(event.target.value)
    }
    const onSave = (event) => {
        const data = {
            title: title,
            price: price
        }

        props.onAddData(data)
    }

    return (
        <div>
            <form onSubmit={onSave}>
                <label>รายการ</label>
                <input type="text" value={title} onChange={inputTitle}></input>

                <label>จำนวนเงิน</label>
                <input type="number" value={price} onChange={inputPrice}></input>

                <button type="submit" >Save</button>
            </form>
        </div>
    )
}

export default FormComponent