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