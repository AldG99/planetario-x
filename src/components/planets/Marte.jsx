import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../../styles/planets/Marte.css';

function Marte() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='marte-container'>
      <Helmet>
        <title>Marte - PlanetarioX</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background: linear-gradient(to bottom right, #2f1700 1%, #000 25%);
          }
        `}
      </style>
      <div className='marte-content'>
        <div className='marte-text'>
          <h1>Marte</h1>
          <p>
            Marte es el cuarto planeta más cercano al Sol en nuestro sistema solar y es conocido como el "Planeta Rojo" debido a su color distintivo.
            Es un planeta rocoso con una atmósfera delgada compuesta principalmente de dióxido de carbono.
          </p>
          <p>
            Marte tiene una superficie desértica y montañosa, con características geológicas únicas, como el volcán más alto del sistema solar, el Monte Olimpo, y el cañón más grande, el Valle Marineris.
            Además, se han encontrado pruebas de que en el pasado Marte tuvo agua líquida en su superficie, lo que ha llevado a especulaciones sobre la posibilidad de vida en el planeta.
          </p>
          <p>
            Marte también tiene dos lunas pequeñas llamadas Fobos y Deimos, que orbitan cerca de su superficie.
            Aunque Marte tiene una atmósfera delgada y temperaturas extremas, la posibilidad de colonización futura ha sido objeto de interés y estudio.
          </p>
        </div>
        <div className='marte-image' style={{ userSelect: 'none' }}>
          <img
            src={require('../../images/planet-4.jpg')}
            alt='Decorado Olas'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className='marte-gallery'>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/marte-3.jpg')}
              large={require('../../images/new-marte-3.jpg')}
              alt="'Postal' de Curiosity de 'Marker Band Valley'"
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>'Postal' de Curiosity de 'Marker Band Valley'</h2>
          <p>13 de junio de 2023</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/marte-1.jpg')}
              large={require('../../images/new-marte-1.jpg')}
              alt='Image Relayed by MAVEN Mars Orbiter from Curiosity Mars Roverr'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Image Relayed by MAVEN Mars Orbiter from Curiosity Mars Rover</h2>
          <p>10 de noviembre de 2014</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/marte-2.jpg')}
              large={require('../../images/new-marte-2.jpg')}
              alt='Happy Mars Solstice!'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Happy Mars Solstice!</h2>
          <p>27 de junio de 2008</p>
        </div>
      </div>
      <div className='datos-container'>
        <h2>Datos de Marte</h2>
        <p>Gravedad: aproximadamente 3.71 m/s²</p>
        <p>Radio: aproximadamente 3,389.5 km</p>
        <p>Temperatura: aproximadamente -87°C a -5°C</p>
        <p>Masa: aproximadamente 6.417 × 10^23 kg</p>
        <p>Edad: aproximadamente 4.6 mil millones de años</p>
      </div>
    </div>
  );
}

export default Marte;
