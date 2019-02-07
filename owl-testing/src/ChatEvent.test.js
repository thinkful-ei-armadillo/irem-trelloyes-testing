import React from 'react';
import ReactDOM from 'react-dom';
import ChatEvent from './ChatEvent';
import renderer from 'react-test-renderer';

describe('<App />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ChatEvent  
      type ="message"
      message ="Testing Chat Log"
      timestamp="1548852484247"
  />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatEvent 
      type ="message"
      message ="Testing Chat Log"
      timestamp="1548852484247" />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    })
})