import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../../styles/star/Sol.css';

function Sol() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='sol-container'>
      <Helmet>
        <title>Sol - PlanetarioX</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background: linear-gradient(to bottom right, #300800 1%, #000 25%);
          }
        `}
      </style>
      <div className='sol-content'>
        <div className='sol-text'>
          <h1>Sol</h1>
          <p>
            El Sol es la estrella central del sistema solar y la principal fuente de energía para la vida en la Tierra.
            Es una esfera gigante de plasma caliente que emite luz y calor debido a reacciones nucleares en su núcleo.
          </p>
          <p>
            Tiene un diámetro de aproximadamente 1.39 millones de kilómetros y una masa que es 330,000 veces la masa de la Tierra.
            Está compuesto principalmente de hidrógeno y helio.
          </p>
          <p>
            La energía emitida por el Sol es esencial para el clima y el ciclo de vida en la Tierra.
            Proporciona luz para la fotosíntesis, influye en los fenómenos climáticos y las corrientes oceánicas.
          </p>
        </div>
        <div className='sol-image' style={{ userSelect: 'none' }}>
          <img
            src={require('../../images/sun.jpg')}
            alt='Decorado Olas'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className='sol-gallery'>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/sol-2.jpg')}
              large={require('../../images/sol-2.jpg')}
              alt='El Sol Forma una Pregunta'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>El Sol Forma una Pregunta</h2>
          <p>29 de diciembre de 2017</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/sol-3.jpg')}
              large={require('../../images/sol-3.jpg')}
              alt='NuSTAR Observa al Sol'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>NuSTAR Observa al Sol</h2>
          <p>8 de julio de 2015</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/sol-1.jpg')}
              large={require('../../images/sol-1.jpg')}
              alt='NuSTAR Observa al Sol'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Pulsos del Sol</h2>
          <p>11 de febrero de 2014</p>
        </div>
      </div>
      <div className='datos-container'>
        <h2>Datos del Sol</h2>
        <p>Gravedad: aproximadamente 274 m/s²</p>
        <p>Radio: aproximadamente 696,340 km</p>
        <p>Temperatura: aproximadamente 5,500°C</p>
        <p>Masa: aproximadamente 1.989 × 10^30 kg</p>
        <p>Edad: aproximadamente 4.6 mil millones de años</p>
      </div>
    </div>
  );
}

export default Sol;
