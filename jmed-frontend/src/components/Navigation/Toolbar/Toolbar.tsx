import React, { FC } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

interface Props {
    drawerToggleClicked: () => void;
}

const Toolbar: FC<Props> = ({ drawerToggleClicked }) => (
    <header>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;
