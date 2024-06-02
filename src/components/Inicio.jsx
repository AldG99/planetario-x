import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Inicio.css';

function Inicio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const contentRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {
      const sections = Array.from(contentRef.current.getElementsByTagName('section'));

      sections.forEach((section) => {
        const sectionOffset = section.offsetTop;
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (scrollPosition >= sectionOffset - viewportHeight / 2) {
          section.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className='inicio-container'>
      <style scoped>
        {`
          body {
            background: #000000;
          }
        `}
      </style>
      <Helmet>
        <title>PlanetarioX</title>
      </Helmet>
      <div className='background-image-container'>
        <img
          src={require('../images/space.jpg')}
          alt='Imagen de espacio'
          className='background-image'
        />
      </div>
      <div className='inicio-content'>
        <h1>Bienvenido a PlanetarioX</h1>
        <p>
          Explora el fascinante mundo del sistema solar y adéntrate en los misterios del universo. En PlanetarioX, nos dedicamos apasionadamente a brindar información educativa y emocionante sobre el espacio, con el objetivo de despertar la curiosidad y el interés por el vasto cosmos que nos rodea.
        </p>
        <p>
          ¡Únete a nosotros en esta aventura cósmica y desvela los secretos ocultos en los confines del espacio sideral en PlanetarioX!
        </p>
      </div>
      <div className='content' ref={contentRef}>
        <section>
          <h2>Exploración Espacial</h2>
          <p>Sumérgete en la emocionante historia de la exploración espacial y descubre los logros y descubrimientos más importantes que han llevado al ser humano más allá de la Tierra. Desde las primeras misiones pioneras hasta los avances tecnológicos más recientes, esta sección te llevará a un viaje a través del tiempo y el espacio.</p>
          <p>Explora cómo la curiosidad y el deseo de comprender nuestro lugar en el universo han impulsado a la humanidad a explorar lo desconocido. Desde los primeros vuelos espaciales tripulados hasta la conquista de la Luna y más allá, cada hito en la historia de la exploración espacial ha sido un testimonio del ingenio humano, la valentía y la determinación.</p>
          <p>Descubre las misiones emblemáticas que han dejado una huella imborrable en la historia, como el Apolo 11, que llevó a los primeros astronautas a pisar la superficie lunar, o el telescopio espacial Hubble, que ha revolucionado nuestra comprensión del cosmos. Conoce a los valientes astronautas y científicos que se aventuraron en el espacio, enfrentando desafíos extremos y abriendo nuevos horizontes para la exploración humana.</p>
          <p>Además de explorar los logros pasados, también te mantendremos al día con los avances más recientes en la exploración espacial. Desde las misiones actuales que buscan responder preguntas fundamentales sobre la vida en otros planetas hasta los proyectos futuros que nos acercarán aún más a las estrellas, te mantendremos informado sobre las últimas noticias y descubrimientos.</p>
        </section>
        <section>
          <h2>Curiosidades Astronómicas</h2>
          <p>¡Prepárate para sorprenderte! Aprende datos curiosos y fascinantes sobre el espacio y el sistema solar. Descubre fenómenos astronómicos intrigantes, eventos celestes especiales y los últimos descubrimientos científicos que desafían nuestra comprensión del universo.</p>
          <br />
          <ul>
            <li>Descubre por qué Plutón ya no es considerado un planeta.</li>
            <li>Conoce cómo se forman las estrellas y cómo mueren.</li>
            <li>Explora las curiosidades sobre la Vía Láctea, nuestra galaxia.</li>
            <li>Aprende sobre los agujeros negros y su influencia en el tiempo y el espacio.</li>
            <li>Descubre cómo se forman las auroras boreales y cuál es su origen.</li>
            <li>Explora las teorías sobre la existencia de vida extraterrestre.</li>
            <li>Averigua cuál es el objeto más lejano en el universo observable.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Inicio;
