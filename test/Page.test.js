import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../src/components/Page';

it('Page component is rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page country={gb} countryUrl={''} changePage={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
