import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../../styles/planets/Jupiter.css';

function Jupiter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='jupiter-container'>
      <Helmet>
        <title>Júpiter - PlanetarioX</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background: linear-gradient(to bottom right, #2a1900 1%, #000 25%);
          }
        `}
      </style>
      <div className='jupiter-content'>
        <div className='jupiter-text'>
          <h1>Júpiter</h1>
          <p>
            Júpiter es el quinto planeta más cercano al Sol en nuestro sistema solar y es el más grande en tamaño.
            Es un gigante gaseoso compuesto principalmente de hidrógeno y helio, y no tiene una superficie sólida definida.
          </p>
          <p>
            Júpiter es conocido por su característica distintiva, la Gran Mancha Roja, que es una tormenta gigante en su atmósfera que ha estado activa durante siglos.
            Además, tiene una serie de lunas, las más conocidas son las cuatro lunas galileanas: Ío, Europa, Ganimedes y Calisto, que tienen características geológicas interesantes.
          </p>
          <p>
            Júpiter tiene un campo magnético fuerte y una radiación intensa, lo que lo convierte en un entorno hostil para la vida tal como la conocemos.
            Las misiones espaciales han proporcionado información valiosa sobre Júpiter, incluyendo imágenes detalladas de su atmósfera y estudios de sus lunas.
          </p>
        </div>
        <div className='jupiter-image' style={{ userSelect: 'none' }}>
          <img
            src={require('../../images/planet-5.jpg')}
            alt='Decorado Olas'
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className='jupiter-gallery'>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/jupiter-1.jpg')}
              large={require('../../images/new-jupiter-1.jpg')}
              alt="NASA's Juno Mission Captures Lightning On Jupiter"
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>NASA's Juno Mission Captures Lightning On Jupiter</h2>
          <p>15 de junio de 2023</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/jupiter-2.jpg')}
              large={require('../../images/new-jupiter-2.jpg')}
              alt="NASA's Juno Views Northern Cyclones on Jupiter"
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>NASA's Juno Views Northern Cyclones on Jupiter</h2>
          <p>14 de diciembre de 2022</p>
        </div>
        <div className='image-container'>
          <div style={{ userSelect: 'none' }}>
            <ModalImage
              small={require('../../images/jupiter-3.jpg')}
              large={require('../../images/new-jupiter-3.jpg')}
              alt="NASA's Juno Mission Spots Two Jovian Moons"
              hideDownload={true}
              hideZoom={true}
              className='modal-image'
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2>NASA's Juno Mission Spots Two Jovian Moons</h2>
          <p>17 de noviembre de 2022</p>
        </div>
      </div>
      <div className='datos-container'>
        <h2>Datos de Júpiter</h2>
        <p>Gravedad: aproximadamente 24.79 m/s²</p>
        <p>Radio: aproximadamente 69,911 km</p>
        <p>Temperatura: aproximadamente -108°C</p>
        <p>Masa: aproximadamente 1.898 × 10^27 kg</p>
        <p>Edad: aproximadamente 4.5 mil millones de años</p>
      </div>
    </div>
  );
}

export default Jupiter;
