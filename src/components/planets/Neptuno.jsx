import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../../styles/planets/Neptuno.css';

function Neptuno() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='neptuno-container'>
      <Helmet>
        <title>Neptuno - PlanetarioX</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background: linear-gradient(to bottom right, #000026 1%, #000 25%);
          }
        `}
      </style>
      <div className='neptuno-content'>
        <div className='neptuno-text'>
          <h1>Neptuno</h1>
          <p>
            Neptuno es el octavo y último planeta del sistema solar, ubicado más allá de Urano.
            Es un gigante gaseoso compuesto principalmente de hidrógeno y helio, con una atmósfera azulada causada por la presencia de metano en su composición.
          </p>
          <p>
            Neptuno es conocido por ser uno de los planetas más ventosos del sistema solar, con vientos extremadamente rápidos que pueden superar los 2,000 km/h.
            Además, tiene características notables como la Gran Mancha Oscura, un sistema de nubes y tormentas similares a la Gran Mancha Roja de Júpiter.
          </p>
          <p>
            El planeta cuenta con un sistema de anillos tenues y una serie de lunas, incluyendo Tritón, la luna más grande, que tiene una órbita retrógrada y se cree que es un objeto capturado por la gravedad de Neptuno.
            Las misiones espaciales han proporcionado imágenes detalladas de Neptuno y su entorno, ayudando a aumentar nuestra comprensión de este misterioso planeta.
          </p>
        </div>
        <div className='neptuno-image' style={{ userSelect: 'none' }}>
          <img
            src={require('../../images/planet-8.jpg')}
            alt='Decorado Olas'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className='neptuno-gallery'>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/neptuno-1.jpg')}
              large={require('../../images/new-neptuno-1.jpg')}
              alt="Neptune's Blue-green Atmosphere"
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Neptune's Blue-green Atmosphere</h2>
          <p>16 de febrero de 2000</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/neptuno-2.jpg')}
              large={require('../../images/new-neptuno-2.jpg')}
              alt='Neptune'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Neptune</h2>
          <p>14 de octubre de 1999</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/neptuno-3.jpg')}
              large={require('../../images/new-neptuno-3.jpg')}
              alt='Crescents of Neptune and Triton'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Crescents of Neptune and Triton</h2>
          <p>23 de agosto de 1999</p>
        </div>
      </div>
      <div className='datos-container'>
        <h2>Datos de Neptuno</h2>
        <p>Gravedad: aproximadamente 11.15 m/s²</p>
        <p>Radio: aproximadamente 24,622 km</p>
        <p>Temperatura: aproximadamente -201°C</p>
        <p>Masa: aproximadamente 1.024 × 10^26 kg</p>
        <p>Edad: aproximadamente 4.5 mil millones de años</p>
      </div>
    </div>
  );
}

export default Neptuno;
