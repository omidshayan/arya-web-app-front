import "./App.css";
import Main from "./components/main/Main";
import Routes from "./routers/routes";
import { useRoutes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserInfo from "./Context/UserInfo";

function App() {
  const routes = useRoutes(Routes);

  return (
    <>
      <ToastContainer />
      <UserInfo>
        <Main />
        {routes}
      </UserInfo>
    </>
  );
}

export default App;
