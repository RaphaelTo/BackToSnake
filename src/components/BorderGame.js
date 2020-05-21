import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Border = styled.div`
    border: 5px solid black;
    height: 60%;
    width: 60%;
`

export default function BorderGame({children, getRef}) {
    const refDiv = useRef();
    
    useEffect(() => {
        getRef(refDiv);
    }, [refDiv])
    
    return (
        <Border ref={refDiv}>
            {children}
        </Border>
    )
}

BorderGame.propTypes = {
    children : PropTypes.node,
    getRef: PropTypes.func
}