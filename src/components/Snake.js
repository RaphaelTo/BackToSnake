import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { changePositionCSSSnake } from '../features/moveKeyboard';
//import SnakeSVG from './SnakeSVG';

export default function Snake({keySnake, getPositionSnake}) {
    const [speed] = useState(3);
    const [xPosition, setXPosition] = useState(window.innerHeight / 2);
    const [yPosition, setYPosition] = useState(window.innerWidth / 2);
    const [eaten, setEeaten] = useState(1)

    const BetaSnake = {
        border: '5px solid white',
        position: 'absolute',
        left: `${yPosition}px`,
        top: `${xPosition}px`,
        width: `${eaten*2}%`
    }

    const X = {
        xPosition : xPosition,
        setXPosition: (state) => setXPosition(state)
    };

    const Y = {
        yPosition : yPosition,
        setYPosition: (state) => setYPosition(state)
    };

    useEffect(() => {
        changePositionCSSSnake(keySnake, X, Y, speed);
        getPositionSnake({x: xPosition, y: yPosition});
    }, [keySnake])


    return (
        <React.Fragment>
            <span style={BetaSnake}/>
        </React.Fragment>
    )
}

Snake.propTypes = {
    keySnake : PropTypes.object,
    getPositionSnake: PropTypes.func
}
