
// home routes
import Home  from './../pages/home/Home';
import Login from './../pages/auth/login/Login';
import Register from './../pages/auth/register/Register';
import Forgate from './../pages/auth/forgate/Forgate';

// lilam routes
import LilamHome from './../pages/lilam/home/Home';
import SingleLilam from './../pages/lilam/singleLilamPage/SingleLilam';

// user panel routes
import Dashboard from '../pages/userPanel/dashboard/Dashboard';
import MyLilam from '../pages/userPanel/myLilam/MyLilam';
import DeactiveLilam from './../pages/userPanel/deactiveLilam/DeactiveLilam';
import UserInfo from '../components/userPanel/userInfo/UserInfo';
import CreateLilam from '../components/userPanel/lilam/createLilam/CreateLilam';


const routes = [
    // home page
    { path: '/', element: <Home />},
    { path: '/login', element: <Login />},
    { path: '/register', element: <Register />},
    { path: '/forgate', element: <Forgate />},
    
    
    // // lilam
    { path: '/lilam', element: <LilamHome />},
    { path: '/lilam/lilampage', element: <SingleLilam />},
    
    
    // userPanel
    { path: '/dashboard', element: <Dashboard />},
    { path: '/userInfo', element: <UserInfo />},

    // lilam
    { path: '/create-lilam', element: <CreateLilam />},
    { path: '/myLilam', element: <MyLilam />},
    { path: '/deactiveLilam', element: <DeactiveLilam />},


    
    { path: '/*', element: '404'},
]

export default routes;