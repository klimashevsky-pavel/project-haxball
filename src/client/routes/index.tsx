import * as  _ from 'lodash';
import * as React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import routes from 'client/routes/routesConfig';
import Header from 'client/components/header/Header';

export default () => (
    <div>
        <Route path="/" component={Header}/>
        <Switch>
            {_.map(routes, route => (
                <Route
                    key={route.id}
                    path={route.path}
                    render={props => <route.component {...props} routes={route.routes} />}
                />
            ))}
        <Redirect from="/" to="/home" />
        </Switch>
    </div>
);
