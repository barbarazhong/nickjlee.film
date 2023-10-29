import './Images.css';
import React from 'react';
// var listOfImages =[];

export const videos = [{
  id: 0,
  name: 'JAZZ & COOKING | in film',
  summary: 'I love cooking. I love jazz. Let\'s see what happens when we combine them..',
  youtube_link: 'https://www.youtube.com/watch?v=Cutzq2vX5HM&t=1s',
  imageId: 'in_film_cooking_and_jazz.jpeg'
}, {
  id: 1,
  name: 'Robert Eggers • OEUVRE',
  summary: 'We are starting out strong with Robert Eggers, who in my opinion has one of the strongest visual and phonetic language working today.',
  youtube_link: 'https://www.youtube.com/watch?v=JgPJNBo-Llg&t=98s',
  imageId: 'robbert_eggers.jpeg'
}, {
  id: 2,
  name: 'Vacation (Aftersun)',
  summary: 'An homage to my favorite film of 2022. A beautiful, tender look at a father and daughter on vacation.',
  youtube_link: 'https://www.youtube.com/watch?v=mZGEVzyAyNs&t=14s',
  imageId: 'vacation.jpeg'
}, 
];

function Image(props) {
  return (
    <div className='img_container'>  
      <img className="image" key={props.index} src={props.image} alt="info"></img> 
      <div className='middle'> 
        <div className='text'>{props.name}</div>
        <div className='text'>{props.summary}</div>
      </div> 
    </div> 
  );
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
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
            (video) =>  <Image index={video.id} image={images[video.imageId]} summary={video.summary} name={video.name} />
          )
        }
      </div>
    )
  }
}

export default Images;
