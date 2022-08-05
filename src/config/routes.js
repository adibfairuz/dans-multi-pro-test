import Home from '../pages/Home';
import Login from '../pages/Login';

const routes = [
    {
        name: 'Home',
        path: '/',
        Component: Home,
        auth: true,
    },
    {
        name: 'Login',
        path: '/login',
        Component: Login,
        auth: false,
    },
];

export default routes;