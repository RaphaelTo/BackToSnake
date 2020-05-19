import React, { useState, useEffect } from 'react';
import BorderGame from '../../components/BorderGame';
import Snake from '../../components/Snake';
import { moveSnakeWithKeyboard } from '../../features/MoveKeyboard';

export default function Lvl1() {
    const [move, setMove] = useState({x: 0});

    useEffect(() => {
        //
    },[setMove(moveSnakeWithKeyboard)])

    return (
        <div className="level" tabIndex="0" onKeyDownCapture={moveSnakeWithKeyboard}>
            <BorderGame>
                <Snake/>
                <h1>Ennemie</h1>
            </BorderGame>
            <h1>Level 1</h1>
        </div>
    )
}