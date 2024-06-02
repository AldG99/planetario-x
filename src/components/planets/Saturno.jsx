import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../../styles/planets/Saturno.css';

function Saturno() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='saturno-container'>
      <Helmet>
        <title>Saturno - PlanetarioX</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background: linear-gradient(to bottom right, #241a00 1%, #000 25%);
          }
        `}
      </style>
      <div className='saturno-content'>
        <div className='saturno-text'>
          <h1>Saturno</h1>
          <p>
            Saturno es el sexto planeta más cercano al Sol en nuestro sistema solar y es conocido por sus anillos espectaculares.
            Es un gigante gaseoso compuesto principalmente de hidrógeno y helio, similar a Júpiter, pero destaca por sus impresionantes anillos compuestos principalmente de partículas de hielo y roca.
          </p>
          <p>
            Saturno tiene una atmósfera con bandas de nubes y tormentas, incluyendo una tormenta hexagonal en su polo norte.
            También tiene varias lunas interesantes, como Titán, que es la segunda luna más grande del sistema solar y tiene una atmósfera densa y lagos de metano líquido en su superficie.
          </p>
          <p>
            Las misiones espaciales han proporcionado imágenes detalladas de Saturno y sus lunas, y han revelado información sobre su estructura interna y su campo magnético.
            Este planeta ha fascinado a la humanidad durante siglos y sigue siendo objeto de estudio e investigación.
          </p>
        </div>
        <div className='saturno-image' style={{ userSelect: 'none' }}>
          <img
            src={require('../../images/planet-6.jpg')}
            alt='Decorado Olas'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className='saturno-gallery'>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/saturno-1.jpg')}
              large={require('../../images/new-saturno-1.jpg')}
              alt='Texture in the Outer Cassini Division'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Texture in the Outer Cassini Division</h2>
          <p>13 de junio de 2019</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/saturno-2.jpg')}
              large={require('../../images/new-saturno-2.jpg')}
              alt='A Stage for Shadows'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>A Stage for Shadows</h2>
          <p>14 de mayo de 2018</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/saturno-3.jpg')}
              large={require('../../images/new-saturno-3.jpg')}
              alt='Final Frontier'
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>Final Frontier</h2>
          <p>19 de febrero de 2018</p>
        </div>
      </div>
      <div className='datos-container'>
        <h2>Datos de Saturno</h2>
        <p>Gravedad: aproximadamente 10.44 m/s²</p>
        <p>Radio: aproximadamente 58,232 km</p>
        <p>Temperatura: aproximadamente -139°C</p>
        <p>Masa: aproximadamente 5.683 × 10^26 kg</p>
        <p>Edad: aproximadamente 4.5 mil millones de años</p>
      </div>
    </div>
  );
}

export default Saturno;
