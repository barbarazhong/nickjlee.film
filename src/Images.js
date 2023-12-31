import './Images.css';
import React from 'react';
// var listOfImages =[];

export const videos = [{
  id: 0,
  name: '@nickjlee_',
  summary: 'Hi! I\'m Nicolas Johannes Lee',
  link: 'https://www.instagram.com/nickjlee_/',
  imageId: 'njl_square_main.jpeg',
  squareImageId: 'njl_square.jpeg'
},{
  id: 1,
  name: '@blueboy_film',
  summary: 'My upcoming short film.',
  link: 'https://www.instagram.com/blueboy_film/',
  imageId: 'whereisblueboy_square_main.jpeg',
  squareImageId: 'whereisblueboy_square.jpeg'
}, {
  id: 2,
  name: 'Vacation (Aftersun)',
  summary: 'A beautiful, tender look at a father and daughter on vacation.',
  link: 'https://www.youtube.com/watch?v=mZGEVzyAyNs&t=14s',
  imageId: 'vacation_square_main.jpeg',
  squareImageId: 'vacation_square.jpeg'
},{
  id: 3,
  name: 'JAZZ & COOKING | in film',
  summary: 'I love cooking. I love jazz.',
  link: 'https://www.youtube.com/watch?v=Cutzq2vX5HM&t=1s',
  imageId: 'in_film_cooking_and_jazz_square_main.jpeg',
  squareImageId: 'in_film_cooking_and_jazz_square.jpeg'
},{
  id: 4,
  name: 'Robert Eggers • OEUVRE',
  summary: 'An homage to Rogger Eggers.',
  link: 'https://www.youtube.com/watch?v=JgPJNBo-Llg&t=98s',
  imageId: 'robert_eggers_square_main.jpeg',
  squareImageId: 'robert_eggers_square.jpeg'
},  
];

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

function Image(props) {
  return (
    <div className='img_container'>  
      <picture>
        <source media="(max-width:800px)" srcset={props.image_square}></source>
        <img className="image" key={props.index} src={props.image} alt={props.name}></img> 
      </picture>
      <div className='middle'> 
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
  
  render() {
    return(
      <div className='full_images'>
        {
          videos.map(
            (video) =>  <Image index={video.id} image={images[video.imageId]} image_square={images[video.squareImageId]} summary={video.summary} name={video.name} link={video.link} />
          )
        }
      </div>
    )
  }
}

export default Images;
