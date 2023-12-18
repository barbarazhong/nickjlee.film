import './Images.css';
import React from 'react';
// var listOfImages =[];

export const videos = [{
  id: 0,
  name: '@nickjlee15_',
  summary: 'Hi! I\'m Nicolas Johannes Lee',
  link: 'https://www.instagram.com/nickjlee15_/',
  imageId: 'njl.jpeg'
},{
  id: 1,
  name: '@blueboy_film',
  summary: 'My upcoming short film.',
  link: 'https://www.instagram.com/blueboy_film/',
  imageId: 'whereisblueboy.jpeg'
}, {
  id: 2,
  name: 'Vacation (Aftersun)',
  summary: 'A beautiful, tender look at a father and daughter on vacation.',
  link: 'https://www.youtube.com/watch?v=mZGEVzyAyNs&t=14s',
  imageId: 'vacation.jpeg'
},{
  id: 3,
  name: 'JAZZ & COOKING | in film',
  summary: 'I love cooking. I love jazz.',
  link: 'https://www.youtube.com/watch?v=Cutzq2vX5HM&t=1s',
  imageId: 'in_film_cooking_and_jazz.jpeg'
},{
  id: 4,
  name: 'Robert Eggers • OEUVRE',
  summary: 'An homage to Rogger Eggers.',
  link: 'https://www.youtube.com/watch?v=JgPJNBo-Llg&t=98s',
  imageId: 'robbert_eggers.jpeg'
},  
];

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

function Image(props) {
  return (
    <div className='img_container'>  
      <img className="image" key={props.index} src={props.image} alt="info"></img> 
      <div className='middle'> 
        {/* <div className='text'>{props.name}</div> */}
        <div className='text'>{props.summary}</div>
        <button class="button button1"
        role="link"
        onClick={() => openInNewTab(props.link)}
      >
      {props.name}
        </button>
      </div> 
    </div> 
  );
}

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));

class Images extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  // componentWillMount() {
  //   listOfImages = this.importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));
  // }
  
  render() {
    return(
      <div className='full_images'>
        {
          videos.map(
            (video) =>  <Image index={video.id} image={images[video.imageId]} summary={video.summary} name={video.name} link={video.link} />
          )
        }
      </div>
    )
  }
}

export default Images;
