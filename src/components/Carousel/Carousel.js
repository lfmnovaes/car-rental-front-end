import React, { useEffect, useState } from 'react';
import './carousel.css';

/* eslint react/prop-types: 0 */

const Carousel = (props) => {
  const { children, show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="flex items-center">
      {currentIndex > 0 ? (
        <button type="button" onClick={prev} className="left-arrow">
          &lt;
        </button>
      ) : (
        <button type="button" onClick={prev} className="left-arrow disabled">
          &lt;
        </button>
      )}
      <div>
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
      {currentIndex < length - show ? (
        <button type="button" onClick={next} className="right-arrow">
          &gt;
        </button>
      ) : (
        <button type="button" onClick={next} className="right-arrow disabled">
          &gt;
        </button>
      )}
    </div>
  );
};

export default Carousel;
