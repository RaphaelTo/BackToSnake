import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
//import SnakeSVG from './SnakeSVG';

export default function Snake({positionSnake}) {
    const [speed] = useState(3);
    const [xPosition, setXPosition] = useState(window.innerHeight / 2);
    const [yPosition, setYPosition] = useState(window.innerWidth / 2);

    const BetaSnake = {
        border: '5px solid white',
        position: 'absolute',
        left: `${yPosition}px`,
        top: `${xPosition}px`,
    }

    useEffect(() => {
        if(Object.keys(positionSnake)[0] === "x"){
            if(positionSnake.x === -1){
                setXPosition((positionSnake.x + xPosition) - speed)
            }else{
                setXPosition(positionSnake.x + xPosition + speed)   
            }
        }else if(Object.keys(positionSnake)[0] === "y"){
            if(positionSnake.y === -1){
                setYPosition((positionSnake.y + yPosition) - speed)
            }else{
                setYPosition(positionSnake.y + yPosition + speed)
            }
        }
    }, [positionSnake])


    return (
        <React.Fragment>
            <span style={BetaSnake}/>
        </React.Fragment>
    )
}

Snake.propTypes = {
    positionSnake : PropTypes.object,
}
