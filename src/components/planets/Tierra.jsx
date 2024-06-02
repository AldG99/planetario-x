import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../../styles/planets/Tierra.css';

function Tierra() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='tierra-container'>
      <Helmet>
        <title>Tierra - PlanetarioX</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background: linear-gradient(to bottom right, #001134 1%, #000 25%);
          }
        `}
      </style>
      <div className='tierra-content'>
        <div className='tierra-text'>
          <h1>Tierra</h1>
          <p>
            La Tierra es el tercer planeta más cercano al Sol en nuestro sistema solar y es el hogar de millones de especies, incluyendo a los seres humanos.
            Es un planeta rocoso con una atmósfera que sostiene la vida y tiene una superficie cubierta en su mayoría por océanos y continentes.
          </p>
          <p>
            La Tierra tiene una amplia variedad de ecosistemas, que van desde desiertos áridos hasta densas selvas tropicales y vastas extensiones de tundra helada.
            Es el único planeta conocido hasta ahora en el que existe vida, gracias a una combinación única de condiciones, como la presencia de agua líquida y una atmósfera adecuada.
          </p>
          <p>
            Nuestro planeta tiene una estructura interna en capas, con una corteza sólida, un manto semisólido y un núcleo interno sólido rodeado por un núcleo externo líquido.
            Estos componentes interactúan para generar el campo magnético terrestre, que protege a la Tierra de la radiación solar dañina.
          </p>
        </div>
        <div className='tierra-image' style={{ userSelect: 'none' }}>
          <img
            src={require('../../images/planet-3.jpg')}
            alt='Decorado Olas'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className='tierra-gallery'>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/tierra-3.jpg')}
              large={require('../../images/new-tierra-3.jpg')}
              alt="NASA Satellite Finds Earth's Clouds are Getting Lower"
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>NASA Satellite Finds Earth's Clouds are Getting Lower</h2>
          <p>22 de febrero de 2012</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/tierra-2.jpg')}
              large={require('../../images/new-tierra-2.jpg')}
              alt='Global Images of Earth'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Global Images of Earth</h2>
          <p>10 de septiembre de 1997</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/tierra-1.jpg')}
              large={require('../../images/new-tierra-1.jpg')}
              alt='Earth - Antarctica Mosaic'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Earth - Antarctica Mosaic</h2>
          <p>1 de febrero de 1996</p>
        </div>
      </div>
      <div className='datos-container'>
        <h2>Datos de la Tierra</h2>
        <p>Gravedad: aproximadamente 9.8 m/s²</p>
        <p>Radio: aproximadamente 6,371 km</p>
        <p>Temperatura: aproximadamente -89.2°C a 56.7°C</p>
        <p>Masa: aproximadamente 5.972 × 10^24 kg</p>
        <p>Edad: aproximadamente 4.5 mil millones de años</p>
      </div>
    </div>
  );
}

export default Tierra;
