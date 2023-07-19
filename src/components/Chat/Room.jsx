import React from 'react'
import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import ConnectedUsers from './ConnectedUsers';


function Room({ sendMessage, messages, users, closeConnection }) {
  return (
    <div className='room-container'>
    <div className='leave-room'>
        <button className='btn-leave-room' onClick={() => closeConnection()}>Leave Room</button>
    </div>
    <ConnectedUsers users={users} />
    <div className='chat'>
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
    </div>
</div>

  )
}

export default Room