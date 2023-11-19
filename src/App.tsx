import React from 'react';
import './App.css';
import MainComponents from './components/MainComponents/MainComponents';
import IndexCard from './components/indexCard/IndexCard';
import HomeSlider from './components/homeSlider/HomeSlider';
import BottomNavigationMenu from './components/bottomNavigationMenu/BottomNavigationMenu';


function App() {

  return (
    <>
      <MainComponents />
      {/* <MainSearchBox /> */}
      <IndexCard />
      <HomeSlider />
      <BottomNavigationMenu />
    </>
  );
}

export default App;
