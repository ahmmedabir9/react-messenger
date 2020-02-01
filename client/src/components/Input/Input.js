import React from 'react';
import './Input.css';



const Input = ({ message, setMessage, sendMessage }) => (

    <div className="infoBar">
        <form className="form">
        <input
        className="input"
        type="text"
        placeholder="Type your Text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />

        <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
        </form>

    </div>
)


export default Input;