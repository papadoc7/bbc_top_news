import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

it('renders Country without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Country code={gb} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
