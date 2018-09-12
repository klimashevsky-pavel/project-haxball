import * as _ from 'lodash';
import * as React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import routes from 'client/routes/routesConfig';
import Routes from 'client/routes';

export default () => (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
);
