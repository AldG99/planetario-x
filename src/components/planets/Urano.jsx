import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../../styles/planets/Urano.css';

function Urano() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='urano-container'>
      <Helmet>
        <title>Urano - PlanetarioX</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background: linear-gradient(to bottom right, #001b19 1%, #000 25%);
          }
        `}
      </style>
      <div className='urano-content'>
        <div className='urano-text'>
          <h1>Urano</h1>
          <p>
            Urano es el séptimo planeta más cercano al Sol en nuestro sistema solar y es conocido por su color azul verdoso distintivo.
            Es un gigante gaseoso compuesto principalmente de hidrógeno y helio, pero también contiene metano en su atmósfera, lo que le da su color característico.
          </p>
          <p>
            Urano tiene una inclinación extrema en su eje de rotación, lo que significa que gira casi de lado en comparación con otros planetas.
            Esto resulta en patrones climáticos únicos y estaciones extremas que duran décadas.
          </p>
          <p>
            Aunque Urano es un planeta gigante, tiene una apariencia uniforme y no tiene características distintivas como las tormentas en Júpiter o los anillos de Saturno.
            Sin embargo, tiene una serie de lunas y anillos débiles que han sido descubiertos por misiones espaciales y observaciones telescópicas.
          </p>
        </div>
        <div className='urano-image' style={{ userSelect: 'none' }}>
          <img
            src={require('../../images/planet-7.jpg')}
            alt='Decorado Olas'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className='urano-gallery'>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/urano-1.jpg')}
              large={require('../../images/new-urano-1.jpg')}
              alt='Uranus Cyclone With Color Added'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Uranus Cyclone With Color Added</h2>
          <p>23 de mayo de 2023</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/urano-2.jpg')}
              large={require('../../images/new-urano-2.jpg')}
              alt="Uranus - Montage of Uranus' Five Largest Satellites"
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Uranus - Montage of Uranus' Five Largest Satellites</h2>
          <p>20 de agosto de 1999</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/urano-3.jpg')}
              large={require('../../images/new-urano-3.jpg')}
              alt="Uranus' Atmosphere"
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Uranus' Atmosphere</h2>
          <p>8 de mayo de 1999</p>
        </div>
      </div>
      <div className='datos-container'>
        <h2>Datos de Urano</h2>
        <p>Gravedad: aproximadamente 8.69 m/s²</p>
        <p>Radio: aproximadamente 25,362 km</p>
        <p>Temperatura: aproximadamente -197°C</p>
        <p>Masa: aproximadamente 8.681 × 10^25 kg</p>
        <p>Edad: aproximadamente 4.5 mil millones de años</p>
      </div>
    </div>
  );
}

export default Urano;
