import React from 'react';
import PropTypes from 'prop-types';

export default function PowerUp({positionPowerUp}) {
    const betaPowerUp = {
        position: 'absolute',
        left: `${positionPowerUp.y}px`,
        top: `${positionPowerUp.x}px`,
        border: '5px solid green',
        backgroundColor: 'green',
    }

    return (
        <React.Fragment>
            <span style={betaPowerUp}/>
        </React.Fragment>
    )
}

PowerUp.propTypes = {
    positionPowerUp : PropTypes.object
}