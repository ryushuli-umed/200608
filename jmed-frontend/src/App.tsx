import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

const SignUp = React.lazy(() => {
    return import('./containers/Auth/SignUp/SignUp');
});

const QandA = React.lazy(() => {
    return import('./containers/QandA/QandA');
});

const Inquery = React.lazy(() => {
    return import('./containers/Inquery/Inquery');
});

const App = () => {
    let routes = (
        <Switch>
            <Route path="/signup" render={() => <SignUp />} />
            <Route path="/inquery" render={() => <Inquery />} />
            <Route path="/qanda" render={() => <QandA />} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
        </Switch>
    );

    return (
        <div>
            <Layout>
                <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
            </Layout>
        </div>
    );
};

export default withRouter(App);
