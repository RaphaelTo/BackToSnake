import React, {useState} from 'react';
import styled from 'styled-components';

const BetaSnake = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    border: 5px solid white;
    background-color: white
`

export default function Snake() {
    const [speed, setSpeed] = useState(0);
    
    return (
        <React.Fragment>
            <BetaSnake />
        </React.Fragment>
    )
}
