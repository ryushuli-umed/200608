import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

interface Props {
    link: string;
    exact?: boolean;
}

const navigationItemRight: FC<Props> = ({ children, link, exact }) => (
    <li className={classes.NavigationItem}>
        <NavLink to={link} exact={exact} activeClassName={classes.active}>
            {children}
        </NavLink>
    </li>
);

export default navigationItemRight;
