import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../../styles/natural_satellite/Luna.css';

function Luna() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='luna-container'>
      <Helmet>
        <title>Luna - PlanetarioX</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background: linear-gradient(to bottom right, #333333 1%, #000 25%);
          }
        `}
      </style>
      <div className='luna-content'>
        <div className='luna-text'>
          <h1>Luna</h1>
          <p>
            Es el único satélite natural de la Tierra y es el quinto satélite más grande del sistema solar.
            Es un cuerpo celeste rocoso que orbita alrededor de la Tierra a una distancia promedio de aproximadamente 384,400 kilómetros.
          </p>
          <p>
            La Luna no tiene atmósfera significativa y su superficie está cubierta principalmente por cráteres, montañas y mares lunares, que son regiones planas formadas por antiguas erupciones volcánicas.
            Aunque carece de agua líquida en su superficie, se han descubierto pruebas de hielo en áreas permanentemente sombreadas en sus polos.
          </p>
          <p>
            La Luna está en una fase de rotación sincrónica con la Tierra, lo que significa que muestra siempre la misma cara hacia nosotros.
            Además, influye en las mareas de nuestro planeta debido a su atracción gravitatoria.
          </p>
        </div>
        <div className='luna-image' style={{ userSelect: 'none' }}>
          <img
            src={require('../../images/planet-9.jpg')}
            alt='Decorado Olas'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className='luna-gallery'>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/luna-3.jpg')}
              large={require('../../images/new-luna-3.jpg')}
              alt='Wrinkle Ridges on the Moon'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Wrinkle Ridges on the Moon</h2>
          <p>13 de mayo de 2019</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/luna-1.jpg')}
              large={require('../../images/new-luna-1.jpg')}
              alt="Earth's Moon"
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Earth's Moon</h2>
          <p>8 de junio de 1998</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/luna-2.jpg')}
              large={require('../../images/new-luna-2.jpg')}
              alt='Moon Color Visualizations'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Moon Color Visualizations</h2>
          <p>29 de enero de 1996</p>
        </div>
      </div>
      <div className='datos-container'>
        <h2>Datos de la Luna</h2>
        <p>Gravedad: aproximadamente 1.622 m/s²</p>
        <p>Radio: aproximadamente 1,737.1 km</p>
        <p>Temperatura: aproximadamente -233°C a 123°C</p>
        <p>Masa: aproximadamente 7.349 × 10^22 kg</p>
        <p>Edad: aproximadamente 4.5 mil millones de años</p>
      </div>
    </div>
  );
}

export default Luna;
