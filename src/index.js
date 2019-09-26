import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import App from './App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App title={title} className="root" />,
  document.getElementById('app')
);

module.hot.accept();
