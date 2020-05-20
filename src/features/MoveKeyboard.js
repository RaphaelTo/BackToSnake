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