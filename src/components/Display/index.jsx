import React from 'react';

import { Wrapper } from './styles';

function Display({ display }) {
  return (
    <Wrapper>
      <h1>{display}</h1>
    </Wrapper>
  );
}

export default Display;