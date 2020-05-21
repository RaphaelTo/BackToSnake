import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export default function Snake({positionSnake}) {
    //const [speed, setSpeed] = useState(0);
    const [xPosition, setXPosition] = useState(window.innerHeight / 2);
    const [yPosition, setYPosition] = useState(window.innerWidth / 2);

    const BetaSnake = {
        position: 'absolute',
        left: `${yPosition}px`,
        top: `${xPosition}px`,
        border: '5px solid white',
        backgroundColor: 'white',
    }

    useEffect(() => {
        if(Object.keys(positionSnake)[0] === "x"){
            setXPosition(positionSnake.x + xPosition)   
        }else if(Object.keys(positionSnake)[0] === "y"){
            setYPosition(positionSnake.y + yPosition)
        }
    }, [positionSnake])


    return (
        <React.Fragment>
            <div style={BetaSnake} />
        </React.Fragment>
    )
}

Snake.propTypes = {
    positionSnake : PropTypes.object,
}
