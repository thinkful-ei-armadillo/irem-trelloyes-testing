import React from 'react';
import ReactDOM from 'react-dom';
import Participants from './Participants';
import Stage from './Stage';
import store from './store';

ReactDOM.render(<Participants participants={store}/>, document.querySelector('#root'));
// ReactDOM.render(<Stage participants={store}/>, document.querySelector('#root'));