import './App.css';
import Main from './components/main/Main';
import Routes from "./routers/routes";
import { useRoutes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserInfoProvider from './Context/UserInfoContext';



function App() {
  const routes = useRoutes(Routes);
  return (
    <>

    <UserInfoProvider>
    <ToastContainer />
      <Main />
      {routes}
    </UserInfoProvider>
    </>
  );
}

export default App;
