import React, { useState } from 'react'

function Lobby({ joinRoom }) {
    const [user, setUser] = useState();
    const [room, setRoom] = useState();

    return (
        <div>
            <h2>MyChat</h2>
            <hr className='line' />
            <div className='lobby-container'>
                <form onSubmit={e => {
                    e.preventDefault();
                    joinRoom(user, room);
                }}>
                    <div className="form-control">
                        <input type="text" onChange={e => setUser(e.target.value)} placeholder='Name'></input>
                    </div>
                    <div className="form-control">
                        <input type="text" onChange={e => setRoom(e.target.value)} placeholder='Room'></input>
                    </div>
                    <div>
                        <button type="submit" className="btn-save" disabled={!user || !room}>Join</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Lobby