import React from 'react';
import Participant from './Participant';
import ChatEvents from './ChatEvents';

function ChatLog(props){
    return (
        <section className="ChatLog">
            <div className="ChatLog-participants">
                {props.participants
                .sort(function(a, b){return b.inSession-a.inSession})
                .map((item, index) => {
                    return <Participant key={index} name={item.name} avatar={item.avatar} />;
                    })}
            </div>
        </section>
    );
}

export default ChatLog;