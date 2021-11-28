// This is the header

import React from 'react';
import './App.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='header-main'>
                    <h3 className='header-item'>
                        Home
                    </h3>
                    <h3 className='header-item'>
                        About
                    </h3>
                </div>
            </div>
        )
    }
}

export default Header;