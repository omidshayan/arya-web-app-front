import React from 'react';
import MainComponents from './components/MainComponents/MainComponents';
import BottomNavigationMenu from './components/bottomNavigationMenu/BottomNavigationMenu';

import Routes from './routers/routes';
import { useRoutes } from 'react-router-dom';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
const routes = useRoutes(Routes);


  return (
    <>
      <MainComponents />
      {/* <MainSearchBox /> */}
      {routes}
      <Footer />
      <BottomNavigationMenu />
    </>
  );
}

export default App;
