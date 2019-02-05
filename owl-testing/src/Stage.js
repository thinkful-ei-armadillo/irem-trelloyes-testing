import React from 'react';
import Participant from './Participant';

function Stage(props){
    return (
        <section className="OnStage">
            <div className="OnStage-participants">
                {props.participants
                .filter(item => item.onStage === true)
                .map((item, index) => {
                    return <Participant key={index} name={item.name} avatar={item.avatar} />;
                    })}
            </div>
        </section>
    );

}

export default Stage;