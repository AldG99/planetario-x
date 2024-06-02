import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../../styles/planets/Venus.css';

function Venus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='venus-container'>
      <Helmet>
        <title>Venus - PlanetarioX</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background: linear-gradient(to bottom right, #261a00 1%, #000 25%);
          }
        `}
      </style>
      <div className='venus-content'>
        <div className='venus-text'>
          <h1>Venus</h1>
          <p>
            Venus es el segundo planeta más cercano al Sol en nuestro sistema solar y se le conoce como el "planeta hermano" de la Tierra debido a su tamaño similar.
            Es un mundo rocoso con una densa atmósfera compuesta principalmente de dióxido de carbono.
          </p>
          <p>
            Venus tiene un efecto invernadero descontrolado, lo que hace que su superficie sea extremadamente caliente, con temperaturas promedio que superan los 450 °C.
          </p>
          <p>
            Este planeta no tiene lunas naturales y su superficie está marcada por volcanes, montañas y cañones.
            Aunque es similar en tamaño a la Tierra, Venus no tiene océanos y su presión atmosférica en la superficie es aproximadamente 90 veces mayor que la de la Tierra.
          </p>
          <p>
            Venus también es conocido por su movimiento retrógrado, lo que significa que gira sobre su eje en dirección opuesta a su órbita alrededor del Sol.
          </p>
        </div>
        <div className='venus-image' style={{ userSelect: 'none' }}>
          <img
            src={require('../../images/planet-2.jpg')}
            alt='Decorado Olas'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className='venus-gallery'>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/venus-1.jpg')}
              large={require('../../images/new-venus-1.jpg')}
              alt='Venus - Sinuous Channel'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Venus - Sinuous Channel</h2>
          <p>23 de septiembre de 1996</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/venus-3.jpg')}
              large={require('../../images/new-venus-3.jpg')}
              alt='Venus - False Color of Bereghinya Planitia'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Venus - False Color of Bereghinya Planitia</h2>
          <p>14 de marzo de 1996</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/venus-2.jpg')}
              large={require('../../images/new-venus-2.jpg')}
              alt='Venus - Lada Terra Region'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Venus - Lada Terra Region</h2>
          <p>1 de febrero de 1996</p>
        </div>
      </div>
      <div className='datos-container'>
        <h2>Datos de Venus</h2>
        <p>Gravedad: aproximadamente 8.87 m/s²</p>
        <p>Radio: aproximadamente 6,051.8 km</p>
        <p>Temperatura: aproximadamente 462°C</p>
        <p>Masa: aproximadamente 4.867 × 10^24 kg</p>
        <p>Edad: aproximadamente 4.5 mil millones de años</p>
      </div>
    </div>
  );
}

export default Venus;
