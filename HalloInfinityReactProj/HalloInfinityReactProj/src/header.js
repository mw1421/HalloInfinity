// This is the header.
import React from 'react';
import './App.css';

class Header extends React.Component {
    render() {
        return (
            <div className= 'header'>
                <div className='header-main'>
                    <h1>
                        azh1n's React App
                    </h1>
                </div>
                <div className='header-secondary'>
                    <h3>
                        This is to showcase some stats from the popular game "Halo Infinite".
                    </h3>
                </div>

            </div>
        )
    }
}

export default Header;