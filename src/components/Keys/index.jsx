import React from 'react';
import { BsBackspace } from 'react-icons/bs';

import Button from '../Button';

import { Wrapper } from './styles';

function Keys({ setDisplay, display }) {
  const operators = ['^', '%', '/', '*', '-', '+', '.'];

  const handleNumber = (num) => setDisplay(`${display !== "Calculator" ? display : ''}${num}`);
  const handleDelete = () => display !== "Calculator" && setDisplay(display.slice(0, -1));
  const handleOperator = (op) => {
    const newDisplay = !operators.includes(display.slice(-1)) ? eval(display) : display;
    setDisplay(`${newDisplay}${(display.length > 0 && display !== "Calculator" && !operators.includes(display.slice(-1))) ? op : ''}`);
  };
  const handleEqual = () => !operators.includes(display.slice(-1)) && setDisplay(eval(display));

  return (
    <Wrapper>
      <Button label="AC" onClick={() => setDisplay('')} />
      <Button label="**" onClick={() => handleOperator('**')} />
      <Button label="%" onClick={() => handleOperator('%')} />
      <Button label="/" onClick={() => handleOperator('/')} />
      <Button label="7" onClick={() => handleNumber(7)} />
      <Button label="8" onClick={() => handleNumber(8)} />
      <Button label="9" onClick={() => handleNumber(9)} />
      <Button label="*" onClick={() => handleOperator('*')} />
      <Button label="4" onClick={() => handleNumber(4)} />
      <Button label="5" onClick={() => handleNumber(5)} />
      <Button label="6" onClick={() => handleNumber(6)} />
      <Button label="-" onClick={() => handleOperator('-')} />
      <Button label="1" onClick={() => handleNumber(1)} />
      <Button label="2" onClick={() => handleNumber(2)} />
      <Button label="3" onClick={() => handleNumber(3)} />
      <Button label="+" onClick={() => handleOperator('+')} />
      <Button label="." onClick={() => handleOperator('.')} />
      <Button label="0" onClick={() => handleNumber(0)} />
      <Button onClick={handleDelete}><BsBackspace /></Button>
      <Button label="=" onClick={handleEqual} />
    </Wrapper>
  );
}

export default Keys;