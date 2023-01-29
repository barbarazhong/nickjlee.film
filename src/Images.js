import './App.css';
import React from 'react';
var listOfImages =[];

class Images extends React.Component{
  importAll(r) {
    return r.keys().map(r);
}
componentWillMount() {
  listOfImages = this.importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));
}
  render(){
    return(
      <div>
        {
          listOfImages.map(
            (image, index) =>  <div className='img_container'>  <img className="App-img" key={index} src={image} alt="info"></img> </div>
          )
        }
      </div>
    )
  }
}

export default Images;
