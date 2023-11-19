import Home  from './../pages/home/Home';
import Login from './../pages/auth/login/Login';
import Register from './../pages/auth/register/Register';
import Forgate from './../pages/auth/forgate/Forgate';


const routes = [
    { path: '/', element: <Home />},
    { path: '/login', element: <Login />},
    { path: '/register', element: <Register />},
    { path: '/forgate', element: <Forgate />},
    
    { path: '/*', element: '404'},
]

export default routes;