import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home () {
    return (
        <div className="menu">
            <h1>Back to Snake</h1>
            <Link to="/lvl1">
                Let's start
            </Link>
        </div>
    )
}