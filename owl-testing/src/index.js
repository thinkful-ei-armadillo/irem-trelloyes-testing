import React from 'react';
import ReactDOM from 'react-dom';
// import Participants from './Participants';
// import Stage from './Stage';
import ChatLog from './ChatLog';
import store from './store';

// ReactDOM.render(<Participants participants={store}/>, document.querySelector('#root'));
// ReactDOM.render(<Stage participants={store}/>, document.querySelector('#root'));
ReactDOM.render(<ChatLog />, document.querySelector('#root'));