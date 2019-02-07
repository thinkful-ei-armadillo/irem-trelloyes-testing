import React, {Component} from 'react';
import Participant from './Participant';
import store from './store';
import chatEvents from './ChatEvents';
import ChatEvent from './ChatEvent';

class ChatLog extends Component{
  static defaultProps =  { 
      participants: store,
      chatEvents: chatEvents
};

  render() {
      console.log(this.props);
    return (
        <div className="Chat-list">
          {this.props.chatEvents.map(chatEvent=> (
            <div className="ChatEvent-lis">
              <Participant 
                name={this.props.participants.find(participant => participant.id === chatEvent.participantId).name}
                avatar={this.props.participants.find(participant => participant.id === chatEvent.participantId).avatar} />
              <ChatEvent 
              type={chatEvent.type} 
              message={chatEvent.message} 
              timestamp= {new Date(chatEvent.timestamp).toString()} />
          </div>
          ))}
      </div>
  );
}
}


export default ChatLog;