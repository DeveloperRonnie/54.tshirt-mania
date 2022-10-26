import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <Link to='home'>home</Link>
                <Link to='orderreview'>orderreview</Link>
                <Link to='grandpa'>grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;