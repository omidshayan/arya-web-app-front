import React from 'react';
import './App.css';
import MainComponents from './components/MainComponents/MainComponents';
import IndexCard from './components/indexCard/IndexCard';
import HomeSlider from './components/homeSlider/HomeSlider';


function App() {

  return (
    <>
      <MainComponents />
      {/* <MainSearchBox /> */}
      <IndexCard />
      <HomeSlider />
    </>
  );
}

export default App;
