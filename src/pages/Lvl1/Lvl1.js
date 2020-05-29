import React, { useState, useEffect } from 'react';
import BorderGame from '../../components/BorderGame';
import Snake from '../../components/Snake';
import PowerUp from '../../components/PowerUp';
import { moveSnakeWithKeyboard } from '../../features/moveKeyboard';
import RandomSpawn from '../../features/RandomSpawn';
import Collision from '../../features/Collision';

export default function Lvl1() {
    const [detectionKeySnake, setDetectionKeySnake] = useState({});
    const [positionBorder, setPositionBorder] = useState();
    const [randPowerUp, setRandPowerUp] = useState({})
    const [positionSnake, setPositionSnake] = useState({})

    const getRef = (e) => {
        const { top, bottom, left, right } = e.current.getBoundingClientRect();
        setPositionBorder({
            height : {
                minHeight: Math.round(top),
                maxHeight: Math.round(bottom)
            },
            width : {
                minWidth: Math.round(left), 
                maxWidth: Math.round(right)
            }
        })
    };

    const getPositionSnake = (position) => {
        setPositionSnake(position)
    }

    useEffect(() => {
        if(positionBorder !== undefined){
            const randObject = new RandomSpawn(positionBorder.height, positionBorder.width);
            const randNumber = randObject.randomSpawn();
            setRandPowerUp(randNumber);
        }
    },[positionBorder])

    useEffect(() => {
        const collision = new Collision(randPowerUp.x, randPowerUp.y);
        collision.detectorCollision(positionSnake);

    }, [randPowerUp,positionSnake])

    return (
        <div className="level" tabIndex="0" onKeyDownCapture={e => moveSnakeWithKeyboard(e, setDetectionKeySnake)}>
            <BorderGame getRef={getRef}>
                <Snake keySnake={detectionKeySnake} getPositionSnake={getPositionSnake}/>
                <PowerUp positionPowerUp={randPowerUp}/>
                <h1>Ennemie</h1>
            </BorderGame>
            <h1>Level 1</h1>
        </div>
    )
}