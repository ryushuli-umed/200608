import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

interface Props {
    link: string;
    exact?: boolean;
}

const navigationItemLeft: FC<Props> = ({ children, link, exact }) => {
    let attachedClasses = [classes.NavigationItem, classes.NavigationItemLeft];
    return (
        <li className={attachedClasses.join(' ')}>
            <NavLink to={link} exact={exact} activeClassName={classes.active}>
                {children}
            </NavLink>
        </li>
    );
};

export default navigationItemLeft;
