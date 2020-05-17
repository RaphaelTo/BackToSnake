import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Border = styled.div`
    border: 5px solid black;
    height: 60%;
    width: 60%;
`

export default function BorderGame({children}) {
    return (
        <Border>
            {children}
        </Border>
    )
}

BorderGame.propTypes = {
    children : PropTypes.element
}