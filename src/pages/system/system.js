import React from 'react';
import ReactDom from 'react-dom';

import '../../styles/default_styles/_default.styl';

import Header from '../../components/Header';

ReactDom.render(
  <>
    <Header />
  </>,
  document.getElementById('root'),
);
