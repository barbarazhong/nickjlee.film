import './App.css';
import Images from './Images.js';
import React from 'react';

function App() {
    return(
      <div className='App'>
        <Images/>
        <div className='socials'>
          <a href="https://www.instagram.com/nickjlee_/" class="fa fa-instagram"></a>
          <a href="https://www.youtube.com/@NicolasJohannesLee" class="fa fa-youtube-play"></a>
        </div>
      </div>
    )
}

export default App;
