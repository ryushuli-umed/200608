import React, { FC } from 'react';

import classes from './Container.module.css';

interface Props {
    attachedClasses: string;
}

const Container: FC<Props> = ({ children, attachedClasses }) => {
    const classesCombined = [classes.Container, attachedClasses];
    return (
        <div className={classesCombined.join(' ')}>
            <h3 className="section-title">{children}</h3>
        </div>
    );
};

export default Container;
