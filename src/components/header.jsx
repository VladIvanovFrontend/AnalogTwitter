import React from 'react';
import '/src/styles/header.module.css'

const Header = () => {
    return (
        <header>
            <img src={'/logo_header.svg'} alt={'logo__header'} height={'75px'} width={'75px'}/>
        </header>
    );
};

export default Header;