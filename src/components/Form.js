import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Form.css'

const FormComponent = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid, setFormValid] = useState(false)

    const inputTitle = (event) => {
        setTitle(event.target.value)
    }
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }
    const onSave = (event) => {
        event.preventDefault()
        const newItem = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(newItem)
        setTitle('')
        setAmount(0)
    }
    useEffect(() => {
        setFormValid(title.trim().length > 0 && amount !== 0)
    }, [title,amount])

    return (
        <div>
            <form onSubmit={onSave}>
                <div className="form-control">
                    <label>รายการ</label>
                    <input type="text" value={title} onChange={inputTitle}></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" value={amount} onChange={inputAmount}></input>
                </div>
                <div>
                    <button type="submit" className="btn-save" disabled={!formValid}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent