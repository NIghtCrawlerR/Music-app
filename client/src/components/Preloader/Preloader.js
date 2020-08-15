import React from 'react';

import { PreloaderWrap, PreloaderInner } from './styles';

const Preloader = () => (
  <PreloaderWrap className="Preloader">
    <PreloaderInner />
  </PreloaderWrap>
);

export default Preloader;
