import React from 'react';
import './ToolBar.scss';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolBar = (props) => {
    return (
        <header>
            <Logo/>
            <div>MENU</div>
            <nav>
            <NavigationItems/>
            </nav>            
        </header>
    )
}

export default toolBar;