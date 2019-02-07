import React from 'react';

function ChatEvent(props){
    return (
        <div className="ChatEvent">
            <p>{props.type}</p>
            <p>{props.message}</p>
            <p>{props.timestamp}</p>
        </div>
    );
}

export default ChatEvent;