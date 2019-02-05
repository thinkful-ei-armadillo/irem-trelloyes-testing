import React from 'react';
import Participant from './Participant';


function Participants(props){
    return (
        <section className="List">
            <div className="List-participants">
                {props.participants
                .sort(function(a, b){return b.onStage-a.onStage})
                .map((item, index) => {
                    return <Participant key={index} name={item.name} avatar={item.avatar} />;
                    })}
            </div>
        </section>
    );

}

export default Participants;