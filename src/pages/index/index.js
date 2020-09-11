import React from 'react';
import ReactDom from 'react-dom';

import '../../styles/default_styles/_default.styl';

import Header from '../../components/Header';
import Main from '../../components/Main';

ReactDom.render(
  <>
    <Header />
    <Main />
  </>,
  document.getElementById('root'),
);
