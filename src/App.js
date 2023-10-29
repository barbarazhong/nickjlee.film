import './App.css';
import BrandNavBar from './BrandNavBar.js';
import Images from './Images.js';
import React from 'react';

function App() {
    return(
      <div className='App'>
        <BrandNavBar className="App-header"/>
        <Images/>
      </div>
    )
}

export default App;
