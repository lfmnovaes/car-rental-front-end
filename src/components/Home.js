import React from 'react';
import Carousel from './Carousel/Carousel';

const Home = () => {
  const images = new Array(5).fill(null).map((_, index) => ({
    id: index,
    image: 'https://via.placeholder.com/300x300',
    data: 'some data',
  }));
  return (
    <div className="flex-1">
      <Carousel show={3}>
        {images.map((e) => (
          <div key={e.id}>
            <div className="flex flex-col p-2 items-center">
              <img src={e.image} alt="placeholder" />
              <span>{e.data}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
