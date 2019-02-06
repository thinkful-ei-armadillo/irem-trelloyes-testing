import React from 'react';

function Participant(props){
    return (
        <div className="Participant">
            <img src={props.avatar} alt="headshot"/>
            <h3>{props.name}</h3>
            <p>{props.onStage}</p>
            <p>{props.id}</p>
        </div>
    );
}

export default Participant;