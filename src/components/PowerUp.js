import React from 'react';
import PropTypes from 'prop-types';

export default function PowerUp({position}) {
    const betaPowerUp = {
        position: 'absolute',
        left: '53%',
        top: '48%',
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
    position : PropTypes.object
}