import React, { useState } from 'react';
import BorderGame from '../../components/BorderGame';
import Snake from '../../components/Snake';
//import MoveKeyboard from '../../features/MoveKeyboard';

export default function Lvl1() {
    const [move, setMove] = useState({x: 0});

    const moveSnakeWithKeyboard = ({key}) => {
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

    return (
        <div className="level" tabIndex="0" onKeyDownCapture={moveSnakeWithKeyboard}>
            <BorderGame>
                <Snake mouvementSnake={move}/>
                <h1>Ennemie</h1>
            </BorderGame>
            <h1>Level 1</h1>
        </div>
    )
}