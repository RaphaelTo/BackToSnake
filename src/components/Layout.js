import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexboxBase = styled.div` 
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
`

export default function Layout({children}) {
    return (
        <FlexboxBase>
            {children}
        </FlexboxBase>
    )
}

Layout.propTypes = {
    children : PropTypes.element
}