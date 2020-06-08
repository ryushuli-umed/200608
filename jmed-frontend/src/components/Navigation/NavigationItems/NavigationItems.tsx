import React, { FC } from 'react';

import classes from './NavigationItems.module.css';
import NavigationItemRight from './NavigationItem/NavigationItemRight';
import NavigationItemLeft from './NavigationItem/NavigationItemLeft';

const NavigationItems: FC = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItemLeft link="/" exact>
                <p>JMED</p>
            </NavigationItemLeft>
            <NavigationItemRight link="/howto">
                ご利用の流れ
            </NavigationItemRight>
            <NavigationItemRight link="/inquery">
                お問い合わせ
            </NavigationItemRight>
            <NavigationItemRight link="/qanda">
                よくある質問
            </NavigationItemRight>
            <NavigationItemRight link="/signup">会員登録</NavigationItemRight>
            <NavigationItemRight link="/login">ログイン</NavigationItemRight>
        </ul>
    );
};

export default NavigationItems;
