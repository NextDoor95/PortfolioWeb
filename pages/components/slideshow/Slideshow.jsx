import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const properties = {
  duration: 5000,
  infinite: true,
  indicators: true,
  autoplay: false,
  transitionDuration: 300,
  arrows: true,
  easing: "ease",
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
}
const slideImages = [
  {
    url: 'https://postimg.cc/c6FvvbX9'
  },
  {
    url: 'https://postimg.cc/c6FvvbX9'

  },
  {
    url: 'https://postimg.cc/c6FvvbX9'
  },
];

function Slideshow () {
    return (
      <div className="slide">
        <div className="slide-container">
          <Slide {...properties}>
            {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      </div>
      
    )
}

export default Slideshow