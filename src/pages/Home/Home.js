import React from 'react';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <React.Fragment>
            <h1>Back to Snake</h1>
            <Link to="/lvl1">
                Let's start
            </Link>
        </React.Fragment>
    )
}