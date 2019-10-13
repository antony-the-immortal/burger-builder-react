import React from 'react'
import './SideBar.scss';
import Logo from '../../../components/Logo/Logo';

import NavigationItems from './../NavigationItems/NavigationItems';
const sideDrawer =(props) => {
    return (
        <div className="SideDrawer">
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}
export default sideDrawer;