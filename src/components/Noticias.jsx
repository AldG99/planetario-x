import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Noticias.css';

function Noticias() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const noticias2023 = [
    {
      id: 1,
      fecha: 'Junio 2023',
      titulo: 'Descubrimiento de un nuevo sistema solar con planetas similares a la Tierra',
      contenido: 'Un equipo internacional de astrónomos ha anunciado el descubrimiento de un nuevo sistema solar en el cual se han identificado varios planetas con características similares a la Tierra. Estos exoplanetas, denominados PSR 12345-ABCDE, se encuentran en la zona habitable de su estrella y podrían tener condiciones adecuadas para la existencia de agua líquida y vida tal como la conocemos. Este hallazgo amplía nuestras perspectivas sobre la abundancia de planetas similares a la Tierra en la galaxia y plantea nuevas preguntas sobre la posibilidad de vida extraterrestre.'
    },
    {
      id: 2,
      fecha: 'Junio 2023',
      titulo: 'Observación de una lluvia de estrellas fugaces',
      contenido: 'Durante el mes de junio, los observadores del cielo tuvieron la oportunidad de presenciar una espectacular lluvia de estrellas fugaces. Este fenómeno, conocido como las Perseidas de junio, ocurre anualmente cuando la Tierra atraviesa la órbita del cometa Swift-Tuttle. Los fragmentos de polvo y hielo dejados por el cometa crean un impresionante espectáculo celeste, donde se pueden observar decenas de estrellas fugaces por hora. Los entusiastas de la astronomía tuvieron la oportunidad de disfrutar de este fenómeno natural único en el firmamento.'
    },
    {
      id: 3,
      fecha: 'Mayo 2023',
      titulo: 'Descubrimiento de un nuevo exoplaneta rocoso',
      contenido: 'Científicos del Observatorio Espacial han anunciado el emocionante descubrimiento de un nuevo exoplaneta rocoso en una zona habitable alrededor de una estrella en la constelación de Libra. Este exoplaneta, denominado HD 123456b, presenta características atmosféricas similares a las de la Tierra y podría albergar las condiciones necesarias para la existencia de vida. Este hallazgo abre nuevas perspectivas en la búsqueda de mundos habitables más allá de nuestro sistema solar.'
    },
    {
      id: 4,
      fecha: 'Mayo 2023',
      titulo: 'Lanzamiento exitoso de la misión espacial "Explorador-1"',
      contenido: 'La agencia espacial anunció el exitoso lanzamiento de la misión "Explorador-1", la cual tiene como objetivo explorar los asteroides cercanos a la Tierra. Esta misión enviará una sonda espacial equipada con instrumentos de última generación para recopilar datos sobre la composición, estructura y origen de estos cuerpos celestes. Se espera que los resultados de esta misión brinden información invaluable sobre el sistema solar y su evolución.'
    },
    {
      id: 5,
      fecha: 'Abril 2023',
      titulo: 'Descubrimiento de un agujero negro supermasivo en el centro de una galaxia lejana',
      contenido: 'Un equipo internacional de astrónomos ha anunciado el emocionante descubrimiento de un agujero negro supermasivo en el centro de una galaxia lejana. Este agujero negro, que tiene una masa equivalente a millones de soles, está devorando material circundante y emitiendo poderosos chorros de radiación. Este hallazgo proporciona nueva información sobre la formación y evolución de las galaxias, así como sobre los mecanismos que impulsan los núcleos galácticos activos.'
    },
    {
      id: 6,
      fecha: 'Abril 2023',
      titulo: 'Lanzamiento exitoso de la misión espacial "Explorador-2"',
      contenido: 'La agencia espacial celebró el exitoso lanzamiento de la misión "Explorador-2", la cual tiene como objetivo explorar las lunas de Júpiter en busca de signos de vida. Esta misión enviará una nave espacial equipada con instrumentos de alta precisión para analizar la composición química y la habitabilidad de las lunas jovianas. Se espera que esta misión proporcione datos cruciales para futuras exploraciones espaciales y avance en nuestro conocimiento sobre los mundos más allá de la Tierra.'
    },
    {
      id: 7,
      fecha: 'Marzo 2023',
      titulo: 'Descubrimiento de un nuevo tipo de galaxia',
      contenido: 'Un equipo de astrónomos ha anunciado el descubrimiento de una nueva clase de galaxias en el universo. Estas galaxias, llamadas "galaxias espirales gigantes", presentan una estructura única y tamaños mucho mayores que las galaxias espirales regulares. Este hallazgo desafía las teorías actuales sobre la formación y evolución de las galaxias y proporciona nuevas pistas sobre los misterios del cosmos.',
    },
    {
      id: 8,
      fecha: 'Marzo 2023',
      titulo: 'Observación de una supernova en tiempo real',
      contenido: 'Por primera vez en la historia, los astrónomos han podido presenciar el estallido de una supernova en tiempo real. Gracias a avanzados telescopios y técnicas de observación, se pudo capturar el evento desde sus etapas iniciales hasta su explosión completa. Esta observación sin precedentes brinda valiosa información sobre los procesos estelares y nos acerca a comprender mejor los fenómenos extremos del universo.',
    },
    {
      id: 9,
      fecha: 'Febrero 2023',
      titulo: 'Descubrimiento de un nuevo sistema estelar binario',
      contenido: 'Los astrónomos han anunciado el descubrimiento de un fascinante sistema estelar binario en la constelación de Orión. Este sistema está compuesto por dos estrellas masivas que orbitan entre sí, creando un espectáculo celestial impresionante. El estudio de este sistema binario proporcionará información valiosa sobre la formación y evolución de las estrellas en el universo.',
    },
    {
      id: 10,
      fecha: 'Febrero 2023',
      titulo: 'Investigación revela indicios de vida microbiana en Marte',
      contenido: 'Un equipo de científicos ha analizado detalladamente muestras tomadas por rovers en la superficie de Marte y ha encontrado indicios prometedores de vida microbiana. Los análisis químicos y biológicos indican la presencia de compuestos orgánicos y patrones morfológicos que podrían ser atribuidos a microorganismos. Aunque se necesitan más investigaciones y pruebas, este descubrimiento podría significar un gran avance en la búsqueda de vida más allá de la Tierra.',
    },
    {
      id: 11,
      fecha: 'Enero 2023',
      titulo: 'Descubrimiento de un nuevo sistema planetario',
      contenido: 'Un equipo de astrónomos ha anunciado el emocionante descubrimiento de un nuevo sistema planetario en la Vía Láctea. Este sistema alberga varios planetas de diferentes tamaños y composiciones, incluyendo uno que se encuentra en la zona habitable de su estrella. Los estudios iniciales sugieren que estos planetas podrían tener las condiciones adecuadas para la existencia de agua líquida y, potencialmente, vida. Este hallazgo amplía nuestro conocimiento sobre la diversidad de sistemas planetarios en nuestra galaxia.',
    },
    {
      id: 12,
      fecha: 'Enero 2023',
      titulo: 'Misión exitosa de exploración lunar',
      contenido: 'La agencia espacial ha celebrado el éxito de su última misión de exploración lunar. Un rover especialmente diseñado ha recorrido la superficie lunar durante varias semanas, recopilando datos científicos y capturando imágenes de alta resolución. Esta misión ha proporcionado valiosa información sobre la geología y la composición de la Luna, así como posibles ubicaciones para futuras misiones humanas. Los datos recopilados contribuirán a los esfuerzos de exploración espacial y a la comprensión de nuestro vecino celestial más cercano.',
    },
    {
      id: 13,
      fecha: 'Diciembre 2022',
      titulo: 'Lanzamiento exitoso del telescopio espacial de última generación',
      contenido: 'La agencia espacial ha celebrado el exitoso lanzamiento del telescopio espacial de última generación. Este avanzado instrumento permitirá a los astrónomos observar el universo con una precisión sin precedentes y capturar imágenes de alta resolución de objetos celestes distantes. Se espera que este telescopio revele nuevos descubrimientos sobre la formación de estrellas, galaxias lejanas, exoplanetas y otros fenómenos cósmicos. Con este logro, la humanidad da un paso más hacia la comprensión del vasto cosmos que nos rodea.',
    },
    {
      id: 14,
      fecha: 'Diciembre 2022',
      titulo: 'Hallazgo de un nuevo cometa',
      contenido: 'Los astrónomos han anunciado el emocionante hallazgo de un nuevo cometa en nuestro sistema solar. Este cometa, denominado C/2022 XZ1, ha capturado la atención de la comunidad científica debido a su inusual trayectoria y características. Se espera que este cometa proporcione información valiosa sobre la composición y el origen de los cuerpos celestes en nuestro sistema solar. Los observadores del cielo también tendrán la oportunidad de disfrutar de su brillante aparición durante las próximas semanas.',
    },
  ];

  return (
    <div className='noticias-container'>
      <Helmet>
        <title>Noticias</title>
      </Helmet>
      <style scoped>
        {`
          body {
            background-color: #000;
          }
        `}
      </style>
      <div>
        <h2>Noticias Espaciales</h2>
        <div className='noticias-list'>
          {noticias2023.map((noticia) => (
            <div className='noticia' key={noticia.id}>
              <h3>{noticia.fecha}</h3>
              <h4>{noticia.titulo}</h4>
              <p>{noticia.contenido}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Noticias;
