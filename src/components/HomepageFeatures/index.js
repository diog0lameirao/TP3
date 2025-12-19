import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Equipas e Pilotos',
    img: require('@site/static/img/equipas.png').default, 
    description: (
      <>
        Conheça a grelha atual, as estatísticas de cada piloto e a história 
        das escuderias lendárias como Ferrari, McLaren e Williams.
      </>
    ),
    link: 'https://www.f1mania.net/formula-1-pilotos-e-equipes/',
  },
  {
    title: 'Circuitos do Mundial',
    img: require('@site/static/img/monaco.png').default,
    description: (
      <>
        Dos muros de Mónaco às retas de Monza. Explore detalhes técnicos, 
        zonas de DRS e os recordes de cada pista do calendário.
      </>
    ),
    link: 'https://www.f1-fansite.com/pt/f1%20circuits/',
  },
  {
    title: 'Engenharia de Ponta',
    img: require('@site/static/img/carro.png').default,
    description: (
      <>
        Entenda como funcionam os motores híbridos, o efeito de solo e a 
        tecnologia que faz estes carros os mais rápidos do mundo.
      </>
    ),
    link: '/enciclopedia_tecnica',
  },
];

function Feature({img, title, description, link}) {
  const ImageElement = (
    <img 
      src={img} 
      className={styles.featureSvg} 
      alt={title} 
      style={link ? { cursor: 'pointer' } : {}} 
    />
  );

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {link ? (
          <a 
            href={link} 
            target={link.startsWith('http') ? "_blank" : "_self"} 
            rel="noopener noreferrer"
          >
            {ImageElement}
          </a>
        ) : (
          ImageElement
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}