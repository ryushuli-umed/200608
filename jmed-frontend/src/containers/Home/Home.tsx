import React, { FC } from 'react';
import Container from '../../components/Container/Container';

import classes from './Home.module.css';

const Home: FC = () => {
    return (
        <>
            <Container attachedClasses={classes.topWrapper}></Container>
            <Container attachedClasses={classes.buttonWrapper}>
                会員登録(無料)
            </Container>
            <Container attachedClasses={classes.aboutWrapper}>特徴</Container>
            <Container attachedClasses={classes.howToWrapper}>
                ご利用の流れ
            </Container>
            <Container attachedClasses={classes.qaWapper}>
                よくある質問
            </Container>
            <Container attachedClasses={classes.buttonWrapper}>
                会員登録(無料)
            </Container>
        </>
    );
};

export default Home;
