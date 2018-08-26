import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Helmet from 'react-helmet';

// global stylez
import './index.css';

// components
import Header from './components/Header';
import Body from './components/Body';

const App = () => (
  <main>
    <Helmet>
      <title>josh mcmillan</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>

    <Header />
    <Body />
  </main>
);

ReactDOM.render(<App />, document.body);
