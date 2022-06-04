import React, { useState } from 'react'

import Display from '../Display';
import Keys from '../Keys';

import { Wrapper } from './styles';

const Calculator = () => {
    const [display, setDisplay] = useState("Calculator");

    return (
        <Wrapper>
            <Display display={display}/>
            <Keys display={display} setDisplay={(val) => setDisplay(val)}/>
        </Wrapper>
    )
}

export default Calculator;