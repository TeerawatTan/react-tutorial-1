import React, { useState } from 'react'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import '../Chat/Chat.css';
import Lobby from './Lobby';
import Room from './Room';

function Chat() {
    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    const joinRoom = async (user, room) => {
        try {
            const connection = new HubConnectionBuilder()
                .withUrl("http://localhost:8083/chat")
                .configureLogging(LogLevel.Information)
                .build();

            connection.on("ReceiveMessage", (user, message) => {
                setMessages(messages => [...messages, { user, message }]);
            });

            connection.on("UsersInRoom", (users) => {
                setUsers(users);
            });

            connection.onclose(e => {
                setConnection();
                setMessages([]);
                setUsers([]);
            });

            await connection.start();
            await connection.invoke("JoinRoom", { user, room });
            setConnection(connection);
        } catch (e) {
            console.log(e);
        }
    }

    const sendMessage = async (message) => {
        try {
            await connection.invoke("SendMessage", message);
        } catch (e) {
            console.log(e);
        }
    }

    const closeConnection = async () => {
        try {
            await connection.stop();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='chat-container'>
            {!connection
                ? <Lobby joinRoom={joinRoom} />
                : <Room sendMessage={sendMessage} messages={messages} users={users} closeConnection={closeConnection} />}
        </div>

    )
}

export default Chat