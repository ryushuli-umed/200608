import React, { FC } from 'react';
import Container from '../../components/Container/Container';
import classes from './Home.module.css';

const Home: FC = () => {
    return (
        <>
            <Container attachedClasses={classes.topWrapper}>
                <div className="topPop">
                    <h1>test</h1>
                    <p>test</p>
                </div>
            </Container>
            <Container attachedClasses={classes.aboutWrapper}>特徴</Container>
            <Container attachedClasses={classes.howToWrapper}>
                ご利用の流れ
            </Container>
            <Container attachedClasses={classes.qaWapper}>
                よくある質問
            </Container>
        </>
    );
};

export default Home;
