import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Historia.css';

function Historia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='historia-container'>
      <Helmet>
        <title>Historia</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background-color: #000;
          }
        `}
      </style>
      <div className='historia-inicio'>
        <h1>Historia de la Astronomía</h1>
        <p>
          Los orígenes de la astronomía se remontan a tiempos ancestrales, cuando las civilizaciones primitivas miraban hacia el cielo y se maravillaban con los misterios celestiales. Desde las primeras observaciones de las estrellas y los patrones en el movimiento de los astros, el ser humano ha sentido una conexión profunda con el universo.
        </p>
        <p>
          En las antiguas culturas, la astronomía estaba estrechamente vinculada a la religión, la agricultura y la navegación. Civilizaciones como la egipcia, la mesopotámica, la griega y la china desarrollaron sofisticados sistemas para rastrear los movimientos de los cuerpos celestes y utilizarlos en la orientación temporal y espacial.
        </p>
        <p>
          Los primeros observadores astronómicos utilizaban su conocimiento del cielo para marcar las estaciones, predecir eclipses y determinar los momentos adecuados para sembrar y cosechar. Las pirámides de Egipto, por ejemplo, se alineaban con precisión hacia los puntos cardinales y las estrellas, sirviendo como monumentos astronómicos y sagrados.
        </p>
        <p>
          Con el tiempo, las observaciones astronómicas se volvieron más precisas y detalladas. En la antigua Grecia, filósofos como Tales de Mileto y Pitágoras comenzaron a desarrollar teorías sobre la naturaleza de los astros y su relación con la Tierra. Fue Aristóteles quien propuso que la Tierra era el centro del universo y que los planetas y el Sol giraban a su alrededor.
        </p>
        <p>
          Sin embargo, fue el astrónomo griego Claudio Ptolomeo quien sistematizó y amplió estos conocimientos en su obra "Almagesto", que se convirtió en la principal referencia astronómica durante la Edad Media. Ptolomeo introdujo la idea de las esferas celestiales y los epiciclos para explicar los movimientos planetarios.
        </p>
      </div>
      <section>
        <div className='historia'>
          <h2>Astronomía en la Antigüedad</h2>
          <img className='imagen' src={require('../images/historia-1.jpg')} alt='Vista Panorámica De La Montaña Durante La Noche' />
            <div className='texto'>
            <p>           
              La astronomía en la antigüedad fue un campo de estudio fundamental para las civilizaciones que se desarrollaron en diferentes partes del mundo. En esta época, el conocimiento astronómico se entrelazaba con la religión, la agricultura y la navegación, y era utilizado para comprender el mundo que los rodeaba y establecer calendarios precisos.
            </p>
            <p>
              Una de las civilizaciones más destacadas en cuanto a los avances astronómicos fue la antigua Mesopotamia. Los sumerios y babilonios registraron meticulosamente las observaciones celestiales y crearon tablillas cuneiformes que contenían información detallada sobre los movimientos planetarios, las fases de la Luna y los eclipses. Estos registros astronómicos permitieron a los mesopotámicos predecir fenómenos celestiales con una notable precisión.
            </p>
            <p>
              En Egipto, la astronomía también desempeñó un papel fundamental en la vida cotidiana. Los antiguos egipcios utilizaron sus conocimientos astronómicos para desarrollar un calendario basado en las fases de la estrella Sirio y los ciclos del Nilo. Además, las pirámides y templos egipcios se construyeron alineados con las estrellas y los planetas, reflejando una profunda conexión entre la arquitectura y la astronomía.
            </p>
            <p>
              En la antigua Grecia, la astronomía fue objeto de estudio y reflexión filosófica. Filósofos como Tales de Mileto, Pitágoras y Platón especularon sobre la naturaleza de los astros y su relación con la Tierra. Fue Aristóteles quien propuso un modelo geocéntrico del universo, en el cual la Tierra se encontraba en el centro y los planetas, el Sol y las estrellas orbitaban a su alrededor.
            </p>
            <p>
              En la India antigua, los astrónomos hindúes desarrollaron un sistema de astronomía conocido como Jyotish, que se basaba en la observación de los cuerpos celestes para predecir eventos y establecer calendarios astrológicos. Estos conocimientos fueron codificados en textos sagrados como los Vedas y los Puranas.
            </p>
            <p>
              La astronomía en la antigüedad también se desarrolló en otras culturas, como la china y la maya. Los astrónomos chinos realizaron observaciones detalladas de los astros y crearon calendarios lunisolares precisos. Por su parte, los mayas construyeron elaborados observatorios y desarrollaron complejos sistemas de calendarios basados en los movimientos celestiales.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='historia'>
          <h2>Astronomía en la Edad Media</h2>
          <img className='imagen' src={require('../images/historia-2.jpg')} alt='Strasbourg, Grand Est, France' />
          <div className='texto'>
            <p>      
              Durante la Edad Media, la astronomía experimentó un período de cambio y continuidad. En Europa, el conocimiento astronómico se vio influido por la combinación de la tradición greco-romana y la influencia de las ideas islámicas y persas. Aunque la astronomía medieval estuvo fuertemente ligada a la religión y a menudo se centró en la astrología, también hubo avances significativos en el estudio científico de los cuerpos celestes.
            </p>
            <p>
              En el mundo islámico, astrónomos como Al-Jwarizmi y Al-Battani realizaron observaciones precisas y contribuyeron a la mejora de los modelos astronómicos existentes. A través de sus trabajos, se estableció la base para el desarrollo de la trigonometría y la astronomía esférica. Además, los astrónomos islámicos construyeron instrumentos astronómicos avanzados, como el astrolabio, que permitieron mediciones precisas de la posición de los cuerpos celestes.
            </p>
            <p>
              Además, durante la Edad Media se construyeron grandes catedrales góticas que incorporaban elementos astronómicos en su diseño. Los vitrales y rosetones representaban eventos celestiales, y se construyeron relojes astronómicos en las torres de las iglesias para marcar la hora y las posiciones de los astros.
            </p>
            <p>
              La astronomía medieval estuvo fuertemente influenciada por la astrología, que postulaba una conexión entre los movimientos celestiales y los acontecimientos en la Tierra. Los astrólogos medievales creían que los cuerpos celestes influían en la vida y el destino de las personas, y se realizaron muchas predicciones astrológicas basadas en la posición de los planetas y las estrellas.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='historia'>
          <h2>Revolución Científica y la Astronomía</h2>
          <img className='imagen' src={require('../images/historia-3.jpg')} alt='Galileo, Telescopio y Invención' />
          <div className='texto'>
            <p>
              La Revolución Científica fue un período de transformación en el pensamiento científico que tuvo lugar aproximadamente entre los siglos XVI y XVII. Durante este tiempo, se produjeron avances significativos en diversos campos de la ciencia, incluida la astronomía.
            </p>
            <p>
              Uno de los principales hitos de la Revolución Científica en la astronomía fue la propuesta heliocéntrica de Nicolás Copérnico. Copérnico argumentó que la Tierra y los demás planetas orbitaban alrededor del Sol, desafiando así la visión geocéntrica dominante en ese momento. Esta idea, conocida como heliocentrismo, proporcionó una explicación más precisa y coherente de los movimientos planetarios.
            </p>
            <p>
              La Revolución Científica en la astronomía fue el desarrollo de nuevos instrumentos y técnicas de observación. Astrónomos como Galileo Galilei utilizaron el telescopio para realizar observaciones revolucionarias, como la detección de las lunas de Júpiter, las fases de Venus y las manchas solares. Estas observaciones respaldadas por evidencia directa cuestionaron las creencias establecidas y dieron paso a una nueva comprensión del cosmos.
            </p>
            <p>
              Se caracterizó por el uso de métodos rigurosos y basados en la observación empírica. Matemáticos y astrónomos como Johannes Kepler y Isaac Newton formularon leyes precisas que describían los movimientos planetarios y la interacción de los cuerpos celestes. Las leyes de Kepler y la ley de la gravitación universal de Newton sentaron las bases para una comprensión matemática y física más profunda de la astronomía.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='historia'>
          <h2>Telescopios y Observatorios</h2>
          <img className='imagen' src={require('../images/historia-4.jpg')} alt='Vista De ángulo Alta, De, Un, Hombre' />
          <div className='texto'>
            <p>
              Los telescopios y observatorios han sido herramientas fundamentales en el avance de la astronomía, permitiendo a los astrónomos observar y estudiar el universo con mayor detalle y precisión. A lo largo de la historia, se han desarrollado diferentes tipos de telescopios y se han construido numerosos observatorios en todo el mundo.
            </p>
            <p>
              El telescopio refractor, inventado en el siglo XVII, fue uno de los primeros tipos de telescopios utilizados en la astronomía. Consistía en una lente objetiva que enfocaba la luz y la dirigía hacia un ocular para su observación. Este tipo de telescopio permitió a los astrónomos realizar importantes descubrimientos, como las lunas de Júpiter por Galileo Galilei.
            </p>
            <p>
              Posteriormente, se desarrollaron los telescopios reflectores, que utilizan espejos en lugar de lentes para recolectar y enfocar la luz. Uno de los telescopios reflectores más famosos es el Telescopio de Isaac Newton, diseñado por el propio Newton en el siglo XVII. Este tipo de telescopio ha sido utilizado en muchos observatorios y ha permitido realizar descubrimientos astronómicos significativos.
            </p>
            <p>
              En la actualidad, los telescopios han experimentado grandes avances tecnológicos. Se han desarrollado telescopios espaciales, como el Telescopio Espacial Hubble, que ha proporcionado imágenes y datos espectaculares del universo sin la interferencia de la atmósfera terrestre. Además, se han construido telescopios de gran tamaño y potencia, como el Telescopio Keck y el Telescopio Espacial James Webb, que han permitido realizar observaciones más detalladas y precisas.
            </p>
            <p>
              En cuanto a los observatorios, estos son lugares especialmente diseñados para la observación astronómica. Pueden ser observatorios terrestres, ubicados en lugares con condiciones atmosféricas favorables y alejados de la contaminación lumínica, o observatorios espaciales, como el mencionado Telescopio Espacial Hubble. Los observatorios suelen contar con múltiples telescopios y equipos científicos para llevar a cabo investigaciones astronómicas en diversas longitudes de onda, desde el espectro visible hasta las ondas de radio y los rayos X.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='historia'>
          <h2>Exploración Espacial</h2>
          <img className='imagen' src={require('../images/historia-5.jpg')} alt='Kennedy Space Center, United States' />
          <div className='texto'>
            <p>
              La exploración espacial es un campo fascinante de la astronomía que ha permitido a los seres humanos expandir sus fronteras más allá de la Tierra y adentrarse en el vasto universo. A lo largo de la historia, hemos enviado sondas espaciales, satélites y astronautas al espacio para explorar y estudiar otros planetas, lunas, asteroides y más allá.
            </p>
            <p>
              El comienzo de la exploración espacial moderna se remonta al siglo XX, cuando la Unión Soviética y los Estados Unidos protagonizaron la famosa "Carrera Espacial". En 1957, la Unión Soviética lanzó el primer satélite artificial, el Sputnik 1, marcando el inicio de la era espacial. Luego, en 1961, el cosmonauta soviético Yuri Gagarin se convirtió en el primer ser humano en orbitar la Tierra.
            </p>
            <p>
              Desde entonces, se han realizado numerosas misiones espaciales destacadas. La NASA de Estados Unidos ha llevado a cabo misiones icónicas, como el programa Apolo que logró que el ser humano pisara la Luna por primera vez en 1969, con la misión del Apolo 11 y los astronautas Neil Armstrong y Buzz Aldrin.
            </p>
            <p>
              Además de la Luna, otros planetas y cuerpos celestes han sido objeto de exploración. Las misiones robóticas, como las sondas Voyager de la NASA, han recorrido el sistema solar, proporcionando imágenes y datos valiosos de planetas como Júpiter, Saturno, Urano y Neptuno. La sonda Cassini-Huygens, por ejemplo, estudió en detalle el planeta Saturno y sus lunas durante más de una década.
            </p>
            <p>
              Más recientemente, la exploración espacial se ha centrado en la búsqueda de vida fuera de la Tierra. La misión del rover Perseverance de la NASA en Marte, lanzado en 2020, tiene como objetivo buscar signos de vida pasada y estudiar la habitabilidad del planeta rojo. Además, la Agencia Espacial Europea (ESA) ha llevado a cabo misiones a la luna de Júpiter, Europa, con la esperanza de encontrar evidencia de océanos subterráneos y condiciones propicias para la vida.
            </p>
            <p>
              La exploración espacial también ha dado lugar a la construcción de la Estación Espacial Internacional (EEI), un proyecto de colaboración internacional que ha permitido a astronautas de diferentes países vivir y trabajar en el espacio durante largos periodos de tiempo.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='historia'>
          <h2>Futuro de la Astronomía</h2>
          <img className='imagen' src={require('../images/historia-6.jpg')} alt='Futuro de la Astronomía' />
          <div className='texto'>
            <p>
              El futuro de la astronomía es un apasionante viaje hacia el desconocido, donde la humanidad se embarca en la búsqueda de respuestas fundamentales sobre el universo en el que habitamos. A medida que avanzamos en el siglo XXI, nos encontramos al borde de una nueva era de descubrimientos astronómicos y avances tecnológicos que transformarán nuestra comprensión del cosmos.
            </p>
            <p>
              Imaginemos un futuro en el que los telescopios espaciales, dotados de tecnología de vanguardia, nos permitan adentrarnos en regiones aún inexploradas del universo. Estos observatorios cósmicos nos brindarán imágenes de una claridad y detalle sin precedentes, revelando galaxias distantes y sus procesos de formación, así como la vida efervescente que pulula en ellas.
            </p>
            <p>
              En nuestra travesía por el universo, también desvelaremos los misterios que envuelven a la materia oscura y la energía oscura, dos componentes predominantes pero esquivos que conforman la estructura del cosmos. Mediante experimentos terrestres y observaciones desde el espacio, nos adentraremos en las profundidades del universo para comprender su naturaleza y cómo influyen en la evolución y expansión cósmica.
            </p>
            <p>
              Los exoplanetas se convierten en protagonistas de un fascinante viaje de descubrimiento. Estos mundos situados más allá de nuestro sistema solar despiertan nuestra curiosidad y nos invitan a explorar lo desconocido.
            </p>
            <p>
              Estos mundos distantes nos presentan paisajes y condiciones nunca antes imaginados: desde exoplanetas rocosos y potencialmente habitables hasta gigantes gaseosos de proporciones épicas.
            </p>
            <p>
              El futuro de la astronomía nos ofrece la oportunidad de profundizar en el conocimiento de los exoplanetas, desentrañar sus historias y comprender cómo se formaron y evolucionaron. Con cada nueva misión y tecnología desarrollada, nos acercamos a comprender la diversidad de mundos que existen más allá de nuestro sistema solar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Historia;
