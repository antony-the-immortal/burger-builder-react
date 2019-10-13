import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.module.scss';
import ToolBar from '../../ui/Navigation/ToolBar/ToolBar';
import SideDrawer from '../../ui/Navigation/SideBar/SideBar';

const layout = (props) => {
    return (
        <Aux>
            <SideDrawer />
            <ToolBar />
            <main>
            {props.children}
            </main>
        </Aux>
    )
}
export default layout;