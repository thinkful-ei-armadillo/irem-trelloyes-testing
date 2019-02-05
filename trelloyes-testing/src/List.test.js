import React from 'react';
import ReactDOM from 'react-dom';
import List from './App';
import renderer from 'react-test-renderer';

describe('<App />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<List />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List 
        header="Test List Header" 
        cards={[
          {title: "test card1 title", content: "test card1 content"}, 
          {title: "test card2 title", content: "test card2 content"}]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    })
})