import React, { useState } from 'react';
import BorderGame from '../../components/BorderGame';
import Snake from '../../components/Snake';
import { moveSnakeWithKeyboard } from '../../features/MoveKeyboard';

export default function Lvl1() {
    const [move, setMove] = useState({x: 0});

    return (
        <div className="level" tabIndex="0" onKeyDownCapture={e => moveSnakeWithKeyboard(e, setMove)}>
            <BorderGame>
                <Snake mouvementSnake={move}/>
                <h1>Ennemie</h1>
            </BorderGame>
            <h1>Level 1</h1>
        </div>
    )
}