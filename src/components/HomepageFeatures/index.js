import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Atualizamos a lista com temas de F1
const FeatureList = [
  {
    title: 'Equipas e Pilotos',
    // Pode manter estes SVGs temporariamente ou substituí-los por ícones de carros/capacetes
    img: require('@site/static/img/equipas.png').default, 
    description: (
      <>
        Conheça a grelha atual, as estatísticas de cada piloto e a história 
        das escuderias lendárias como Ferrari, McLaren e Williams.
      </>
    ),
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
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Aqui usamos a tag <img> normal */}
        <img src={img} className={styles.featureSvg} alt={title} />
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
