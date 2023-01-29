import './App.css';
import BrandNavBar from './BrandNavBar.js';
import Images from './Images.js';
import React from 'react';

function App() {
    return(
      <div className='App'>
        <BrandNavBar />
        <Images />
      </div>
    )
    // <div className='App'>

    //   // TODO: make a for loop to loop through assets
    //   <div className='img_container'>
    //     <img src={img1} className="App-img" alt="img1" />
    //   </div>
    //   <div className='img_container'>
    //     <img src={img2} className="App-img" alt="img1" />
    //   </div>
    //   <div className='img_container'>
    //     <img src={img3} className="App-img" alt="img1" />
    //   </div>
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  
}

export default App;
