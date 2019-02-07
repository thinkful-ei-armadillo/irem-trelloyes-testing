import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';
import ChatEvent from './ChatEvent';
import ChatLog from './ChatLog';
import renderer from 'react-test-renderer';


describe('<App />', () => {
    const participants=[
      {avatar: "https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg",
      name: "Sally Salonga",
      type: "message",
      message: "Testing Chat Log",
      timestamp: "1548852484247"},
      {avatar: "https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1",
      name: "Joe Turner",
      type: "thumbs up",
      timestamp: "1548852544247"},
  ];
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ChatLog />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatLog />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    })
})