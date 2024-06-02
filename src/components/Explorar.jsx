import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Routes, Route } from 'react-router-dom';
import Sol from './star/Sol';
import Mercurio from './planets/Mercurio';
import Venus from './planets/Venus';
import Tierra from './planets/Tierra';
import Luna from './natural_satellite/Luna';
import Marte from './planets/Marte';
import Jupiter from './planets/Jupiter';
import Saturno from './planets/Saturno';
import Urano from './planets/Urano';
import Neptuno from './planets/Neptuno';
import '../styles/Explorar.css';

function Explorar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='explorar-container'>
      <Helmet>
        <title>Explorar</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background-color: #000;
          }
        `}
      </style>
      <div className='sistema-solar'>
        <div className='planeta'>
          <Link to='/explorar/sol'>
            <div className='sol'>
              <h2>Sol</h2>
            </div>
          </Link>
        </div>
        <div className='planeta'>
          <Link to='/explorar/mercurio'>
            <div className='mercurio'>
              <h2>Mercurio</h2>
            </div>
          </Link>
        </div>
        <div className='planeta'>
          <Link to='/explorar/venus'>
            <div className='venus'>
              <h2>Venus</h2>
            </div>
          </Link>
        </div>
        <div className='satelite-natural'>
          <Link to='/explorar/luna'>
            <div className='luna'>
              <h2>Luna</h2>
            </div>
          </Link>
        </div>
        <div className='planeta'>
          <Link to='/explorar/tierra'>
            <div className='tierra'>
              <h2>Tierra</h2>
            </div>
          </Link>
        </div>
        <div className='planeta'>
          <Link to='/explorar/marte'>
            <div className='marte'>
              <h2>Marte</h2>
            </div>
          </Link>
        </div>
        <div className='planeta'>
          <Link to='/explorar/jupiter'>
            <div className='jupiter'>
              <h2>Júpiter</h2>
            </div>
          </Link>
        </div>
        <div className='planeta'>
          <Link to='/explorar/saturno'>
            <div className='saturno'>
              <h2>Saturno</h2>
            </div>
          </Link>
        </div>
        <div className='planeta'>
          <Link to='/explorar/urano'>
            <div className='urano'>
              <h2>Urano</h2>
            </div>
          </Link>
        </div>
        <div className='planeta'>
          <Link to='/explorar/neptuno'>
            <div className='neptuno'>
              <h2>Neptuno</h2>
            </div>
          </Link>
        </div>
        <Routes>
          <Route path='/explorar/sol' element={<Sol />} />
          <Route path='/explorar/mercurio' element={<Mercurio />} />
          <Route path='/explorar/venus' element={<Venus />} />
          <Route path='/explorar/tierra' element={<Tierra />} />
          <Route path='/explorar/luna' element={<Luna />} />
          <Route path='/explorar/marte' element={<Marte />} />
          <Route path='/explorar/jupiter' element={<Jupiter />} />
          <Route path='/explorar/saturno' element={<Saturno />} />
          <Route path='/explorar/urano' element={<Urano />} />
          <Route path='/explorar/neptuno' element={<Neptuno />} />
        </Routes>
      </div>
    </div>
  );
}

export default Explorar;
