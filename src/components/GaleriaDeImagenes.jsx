import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalImage from 'react-modal-image';
import '../styles/GaleriaDeImagenes.css';

function GaleriaDeImagenes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='galeria-container'>
      <Helmet>
        <title>Galeria de Imagenes</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background-color: #000;
          }
        `}
      </style>
      <div className='universe-gallery'>
        <div className='gallery-row'>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-1.jpg')}
                large={require('../images/new-imagen-1.jpg')}
                alt="Castell Henllys' From Above"
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>'Castell Henllys' From Above</h2>
            <p>26 de mayo de 2023</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-2.jpg')}
                large={require('../images/new-imagen-2.jpg')}
                alt='Glacier-like Features on Mars'
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>Glacier-like Features on Mars</h2>
            <p>12 de mayo de 2023</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-3.jpg')}
                large={require('../images/new-imagen-3.jpg')}
                alt='Looking at the Crater Half Full'
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>Looking at the Crater Half Full</h2>
            <p>13 de abril de 2023</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-4.jpg')}
                large={require('../images/new-imagen-4.jpg')}
                alt='Waxing and Waning Winds'
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>Waxing and Waning Winds</h2>
            <p>13 de abril de 2023</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-5.jpg')}
                large={require('../images/new-imagen-5.jpg')}
                alt='Circular Sand Dunes'
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>Circular Sand Dunes</h2>
            <p>3 de marzo de 2023</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-6.jpg')}
                large={require('../images/new-imagen-6.jpg')}
                alt='Look at a Steep North Polar Scarp'
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>A Look at a Steep North Polar Scarp</h2>
            <p>3 de marzo de 2023</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-7.jpg')}
                large={require('../images/new-imagen-7.jpg')}
                alt="Looking Back at Perseverance's Second Science Campaign"
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>Looking Back at Perseverance's Second Science Campaign</h2>
            <p>17 de febrero de 2023</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-8.jpg')}
                large={require('../images/new-imagen-8.jpg')}
                alt="Perseverance's Three Forks Sample Depot Selfie"
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>Perseverance's Three Forks Sample Depot Selfie</h2>
            <p>24 de enero de 2023</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-12.jpg')}
                large={require('../images/new-imagen-12.jpg')}
                alt='Cepheus C and Cepheus B Region by Spitzer (Two-Instrument)'
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>Cepheus C and Cepheus B Region by Spitzer</h2>
            <p>30 de mayo de 2019</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-9.jpg')}
                large={require('../images/new-imagen-9.jpg')}
                alt='Cosmic Sparklers'
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>Cosmic Sparklers</h2>
            <p>2 de julio de 2015</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-10.jpg')}
                large={require('../images/new-imagen-10.jpg')}
                alt='Smile, and the Universe Smiles With You!'
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>Smile, and the Universe Smiles With You</h2>
            <p>10 de febrero de 2015</p>
          </div>
          <div className='gallery-item'>
            <div style={{ userSelect: 'none' }}>
              <ModalImage
                small={require('../images/imagen-11.jpg')}
                large={require('../images/new-imagen-11.jpg')}
                alt='Happy Mars Solstice!'
                hideDownload={true}
                hideZoom={true}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <h2>Sounds of the Ancient Universe</h2>
            <p>21 de Marzo de 2013</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GaleriaDeImagenes;
