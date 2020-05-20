import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export default function Snake({mouvementSnake}) {
    const [speed, setSpeed] = useState(1.5);
    const [xPosition, setXPosition] = useState(50);
    const [yPosition, setYPosition] = useState(50);

    const BetaSnake = {
        position: 'absolute',
        left: `${yPosition}%`,
        top: `${xPosition}%`,
        border: '5px solid white',
        backgroundColor: 'white',
    }

    useEffect(() => {
        if(Object.keys(mouvementSnake)[0] === "x"){
            setXPosition(mouvementSnake.x + xPosition)
        }else if(Object.keys(mouvementSnake)[0] === "y"){
            setYPosition(mouvementSnake.y + yPosition)
        }
    }, [mouvementSnake])


    return (
        <React.Fragment>
            <div style={BetaSnake} />
        </React.Fragment>
    )
}

Snake.propTypes = {
    mouvementSnake : PropTypes.object,
}
