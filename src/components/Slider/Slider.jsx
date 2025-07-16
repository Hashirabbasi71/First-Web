import React, { useState, useEffect } from 'react';
import img1 from '../Assests/1.jpg';
import img2 from '../Assests/2.jpg';
import img3 from '../Assests/3.jpeg';

const images = [img1, img2, img3];

function SimpleSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  /*useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);*/

  // Manual Controls
  const goNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div style={styles.slider}>
      <img
        src={images[current]}
        alt={`slide-${current}`}
        style={styles.image}
      />
      <div style={styles.controls}>
        <button onClick={goPrev} style={styles.button}>⟨ Prev</button>
        <button onClick={goNext} style={styles.button}>Next ⟩</button>
      </div>
      <p>{`Slide ${current + 1} of ${images.length}`}</p>
    </div>
  );
}

const styles = {
  slider: {
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '10px'
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#0d6efd',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  }
};

export default SimpleSlider;
