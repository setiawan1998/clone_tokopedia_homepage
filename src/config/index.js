import { dynamicWrapper } from 'react-router-guard';
import checkAuth from './checkAuth';

export default [
    {
        path: '/details',
        canActivate: [checkAuth],
        routes: [
            {
                path: '/details/:id',
                component: dynamicWrapper(() => import('../screens/details')),
            },
        ],
    },
    {
        path: '/',
        routes: [
            {
                path: '/',
                exact: true,
                component: dynamicWrapper(() => import('../screens/homePage')),
            }
        ],
    },
];