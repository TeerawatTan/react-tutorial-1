import React, { useState } from 'react'
import '../Form.css'

function Login() {
    const [input, setInput] = useState({})

    async function loginUser() {
        const requestBody = {
            "username": input.username,
            "password": input.password
        }

        return fetch('https://localhost:7168/api/Auth/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
            .then(data => data.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(input)
        const response = await loginUser();

        console.log(response)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" name="username" value={input.username || ''} onChange={handleInput}></input>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" name="password" value={input.password || ''} onChange={handleInput}></input>
                </div>
                <div>
                    <button type="submit" className="btn-save">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Login