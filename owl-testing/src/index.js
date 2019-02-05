import React from 'react';
import ReactDOM from 'react-dom';
import Participants from './Participants';
import store from './store';

ReactDOM.render(<Participants participants={store}/>, document.querySelector('#root'));