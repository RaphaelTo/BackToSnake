import React from 'react'
import PropTypes from 'prop-types';
import './Layout.css';

const Layout = ({children}) => {
    return (
        <div className="flexBoxBase">
            {children}
        </div>
    )
}

Layout.propTypes = {
    children : PropTypes.element
}

export default Layout;