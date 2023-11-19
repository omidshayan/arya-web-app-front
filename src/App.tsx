import React from 'react';
import './App.css';
import MainComponents from './components/MainComponents/MainComponents';
import BottomNavigationMenu from './components/bottomNavigationMenu/BottomNavigationMenu';

import Routes from './routers/routes';
import { useRoutes } from 'react-router-dom';

function App() {
const routes = useRoutes(Routes);


  return (
    <>
      <MainComponents />
      {/* <MainSearchBox /> */}
      {routes}
      <BottomNavigationMenu />
    </>
  );
}

export default App;
