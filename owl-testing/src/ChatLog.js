import React, {Component} from 'react';
import Participant from './Participant';
import store from './store';
import chatEvents from './ChatEvents';

class ChatLog extends Component{
  static defaultProps =  { 
      participants: store,
      chatEvents: chatEvents
};

  render() {
      console.log(this.props);
    return (
        <div className="App-list">
          {this.props.chatEvents.map(chatEvent=> (
          <Participant 
          name={this.props.participants.find(participant => participant.id === chatEvent.participantId).name}
          avatar={this.props.participants.find(participant => participant.id === chatEvent.participantId).avatar}
          />))}
      </div>
  );
}
}


export default ChatLog;