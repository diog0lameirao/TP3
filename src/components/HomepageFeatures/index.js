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
    // Sem link para este cartão
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
    // ADICIONADO: Link específico para circuitos
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
    // Sem link para este cartão
  },
];

function Feature({img, title, description, link}) {
  // Criamos o conteúdo da imagem
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
        {/* Se existir um link, envolvemos a imagem com <a>, senão mostramos apenas a imagem */}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
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