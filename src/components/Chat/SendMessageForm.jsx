import { useState } from 'react';

const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    return <form
        onSubmit={e => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
        <div className='send-message-box'>
            <input type="user" placeholder="message..."
                onChange={e => setMessage(e.target.value)} value={message} />
                <button type="submit" disabled={!message}>Send</button>
        </div>
    </form>
}

export default SendMessageForm;
