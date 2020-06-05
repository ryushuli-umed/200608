import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

const Logout: FC = () => {
    return <Redirect to="/" />;
};

export default Logout;
