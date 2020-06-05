import React, { FC, useState } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';
import Footer from '../../components/Footer/Footer';

const Layout: FC = ({ children }) => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    };

    return (
        <>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />

            <main className={classes.Content}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
