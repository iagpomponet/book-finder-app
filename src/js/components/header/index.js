import React from 'react';
import SearchBar from '../search-bar/index';
import Logo from '../logo/index';

import '../../../scss/components/header/index.scss'

function Header(){
    return(
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Logo />
                </div>
                <div className="search-bar">
                    <SearchBar />
                </div>
            </div>
        </header>
    )
}

export default Header