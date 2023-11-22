import Home  from './../pages/home/Home';
import Login from './../pages/auth/login/Login';
import Register from './../pages/auth/register/Register';
import Forgate from './../pages/auth/forgate/Forgate';

// lilam routes
import LilamHome from './../pages/lilam/home/Home';
import SingleLilam from './../pages/lilam/singleLilamPage/SingleLilam';



const routes = [

    // home page
    { path: '/', element: <Home />},
    { path: '/login', element: <Login />},
    { path: '/register', element: <Register />},
    { path: '/forgate', element: <Forgate />},
    
    
    // lilam
    { path: '/lilam', element: <LilamHome />},
    { path: '/lilam/lilampage', element: <SingleLilam />},


    
    { path: '/*', element: '404'},
]

export default routes;