import React from 'react';

import './style.scss';

function Button({ label }) {
  return <button className="button">{label}</button>;
}

export default Button;