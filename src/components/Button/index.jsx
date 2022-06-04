import React from 'react';

import { Btn } from './styles';

function Button({ label, children, onClick }) {
  return <Btn className="button" onClick={onClick}>{label}{children}</Btn>;
}

export default Button;