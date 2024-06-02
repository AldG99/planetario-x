import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../../styles/planets/Mercurio.css';

function Mercurio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mercurio-container'>
      <Helmet>
        <title>Mercurio - PlanetarioX</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background: linear-gradient(to bottom right, #2b2b2b 1%, #000 25%);
          }
        `}
      </style>
      <div className='mercurio-content'>
        <div className='mercurio-text'>
          <h1>Mercurio</h1>
          <p>
            Mercurio es el planeta más cercano al Sol en nuestro sistema solar y el más pequeño en tamaño.
            Es un mundo rocoso y desolado que orbita alrededor del Sol a una distancia media de aproximadamente 58 millones de kilómetros.
          </p>
          <p>
            Debido a su proximidad al Sol, la temperatura en la superficie de Mercurio puede alcanzar extremos de hasta 430 °C durante el día y caer a -180 °C durante la noche.
            Además, tiene una atmósfera muy delgada compuesta principalmente de elementos como el sodio y el potasio.
          </p>
          <p>
            Mercurio no tiene satélites naturales y su superficie está cubierta de cráteres y llanuras volcánicas.
            Aunque es el planeta más pequeño, tiene un núcleo de hierro grande en relación con su tamaño, lo que le confiere un campo magnético débil pero presente.
          </p>
        </div>
        <div className='mercurio-image' style={{ userSelect: 'none' }}>
          <img
            src={require('../../images/planet-1.jpg')}
            alt='Decorado Olas'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className='mercurio-gallery'>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/mercurio-1.jpg')}
              large={require('../../images/mercurio-1.jpg')}
              alt="Mercury's South Pole"
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Mercury's South Pole</h2>
          <p>8 de octubre de 1999</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/mercurio-2.jpg')}
              large={require('../../images/mercurio-2.jpg')}
              alt='Kuiper Crater'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Kuiper Crater</h2>
          <p>8 de octubre de 1999</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/mercurio-3.jpg')}
              large={require('../../images/mercurio-3.jpg')}
              alt='Hero Rupes Scarp'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Hero Rupes Scarp</h2>
          <p>7 de octubre de 1999</p>
        </div>
      </div>
      <div className='datos-container'>
        <h2>Datos de Mercurio</h2>
        <p>Gravedad: aproximadamente 3.7 m/s²</p>
        <p>Radio: aproximadamente 2,439.7 km</p>
        <p>Temperatura: -173°C a 427°C</p>
        <p>Masa: aproximadamente 3.3011 × 10^23 kg</p>
        <p>Edad: aproximadamente 4.5 mil millones de años</p>
      </div>
    </div>
  );
}

export default Mercurio;
