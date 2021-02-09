import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header =(props) => {
    return(
        <>
           <div id="header">
                    <Link className="logo" to="/">Eat-in</Link>
            </div>
        </>
    )
}

export default Header;
