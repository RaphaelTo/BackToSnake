/**
 * This features need an event object and function which get data
 * @param {object} event 
 * @param {function} setMove 
 */

export const moveSnakeWithKeyboard = ({key}, setMove) => {
    if(key === "ArrowUp"){
       setMove({x : -1});
    }
    if(key === "ArrowDown"){
        setMove({x : 1});
    }
    if(key === "ArrowLeft"){
        setMove({y : -1});
    }
    if(key === "ArrowRight"){
        setMove({y : 1})
    }
}

export const changePositionCSSSnake = (props, XPosition, YPosition, speed) => {
    const {xPosition, setXPosition} = XPosition;
    const {yPosition, setYPosition} = YPosition;

    if(Object.keys(props)[0] === "x"){
        if(props.x === -1){
            setXPosition((props.x + xPosition) - speed)
        }else{
            setXPosition(props.x + xPosition + speed)
        }
    }
    if(Object.keys(props)[0] === "y"){
        if(props.y === -1){
            setYPosition((props.y + yPosition) - speed)
        }else{
            setYPosition(props.y + yPosition + speed)
        }
    }
}