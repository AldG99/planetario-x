import React, { useRef } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GrFacebook, GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';
import Inicio from './components/Inicio';
import Explorar from './components/Explorar';
import Sol from './components/star/Sol';
import Mercurio from './components/planets/Mercurio';
import Venus from './components/planets/Venus';
import Luna from './components/natural_satellite/Luna';
import Tierra from './components/planets/Tierra';
import Marte from './components/planets/Marte';
import Jupiter from './components/planets/Jupiter';
import Saturno from './components/planets/Saturno';
import Urano from './components/planets/Urano';
import Neptuno from './components/planets/Neptuno';
import GaleriaDeImagenes from './components/GaleriaDeImagenes';
import Historia from './components/Historia';
import Noticias from './components/Noticias';
import './styles/scrollbar.css';
import './App.css';

function App() {
  const pageRef = useRef(null);

  const handleHeaderClick = () => {
    pageRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HelmetProvider>
      <Router>
        <div className='App' ref={pageRef}>
          <header>
            <nav style={{ userSelect: 'none' }}>
              <ul className='lista-planetario'>
                <li><Link to='planetario-x/build' onClick={handleHeaderClick}>PlanetarioX</Link></li>
                <li><Link to='/explorar' onClick={handleHeaderClick}>Explorar</Link></li>
                <li><Link to='/galeria-de-imagenes' onClick={handleHeaderClick}>Galería de Imágenes</Link></li>
                <li><Link to='/historia-astronomica' onClick={handleHeaderClick}>Historia Astronómica</Link></li>
                <li><Link to='/noticias-espaciales' onClick={handleHeaderClick}>Noticias Espaciales</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route exact path='planetario-x/build' element={<Inicio />} />
              <Route path='/explorar' element={<Explorar />} />
              <Route path='/explorar/sol' element={<Sol />} />
              <Route path='/explorar/mercurio' element={<Mercurio />} />
              <Route path='/explorar/venus' element={<Venus />} />
              <Route path='/explorar/luna' element={<Luna />} />
              <Route path='/explorar/tierra' element={<Tierra />} />
              <Route path='/explorar/marte' element={<Marte />} />
              <Route path='/explorar/jupiter' element={<Jupiter />} />
              <Route path='/explorar/saturno' element={<Saturno />} />
              <Route path='/explorar/urano' element={<Urano />} />
              <Route path='/explorar/neptuno' element={<Neptuno />} />
              <Route path='/galeria-de-imagenes' element={<GaleriaDeImagenes />} />
              <Route path='/historia-astronomica' element={<Historia />} />
              <Route path='/noticias-espaciales' element={<Noticias />} />
            </Routes>
          </main>
          <footer>
            <div className='footer-links'>
              <div className='container'>
                <div style={{ userSelect: 'none' }}>
                <h1>PlanetarioX</h1>
                </div>
                <div className='social-icons'>
                  <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                    <GrFacebook />
                  </a>
                  <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                    <GrInstagram />
                  </a>
                  <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                    <GrTwitter />
                  </a>
                  <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
                    <GrYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className='copyright'>
              © 2023 Alfredo García. Todos los derechos reservados.
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
