import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

describe('<App />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<App 
        lists={[
            {id: "2a4c", header:"Test List", cardIds: "l,n, j"},
            {id: "2a9b", header:"Test List", cardIds: "l,n, j"} ]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    })
})

