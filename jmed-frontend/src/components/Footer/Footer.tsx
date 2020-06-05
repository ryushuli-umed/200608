import React, { FC } from 'react';

import classes from './Footer.module.css';

const Footer: FC = () => {
    return (
        <footer className={classes.footer}>
            <ul>
                <p>利用規約</p>
                <p>プライバシーポリシー</p>
            </ul>
        </footer>
    );
};

export default Footer;
