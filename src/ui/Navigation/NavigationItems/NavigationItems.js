import React from 'react';
import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems =() => {
    return (
        <ul className="NavigationItems">
           <NavigationItem link='/' active={true}> Burger Builder </NavigationItem>
           <NavigationItem  link='/' active={true}> Checkout </NavigationItem>
        </ul>
    )
}
export default navigationItems;