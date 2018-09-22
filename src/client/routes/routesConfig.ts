import * as React from 'react';
import Home from 'client/components/home/Home';
import About from 'client/components/about/About';

interface IRouteObjectType {
    path: string;
    component: React.ReactType; // TODO: define component type
    id: number;
    routes?: object[];
}

const routes: IRouteObjectType[] = [
    {
        path: '/home',
        id: 1,
        component: Home
    },
    {
        path: '/about',
        id: 2,
        component: About
    }
];

export default routes;
