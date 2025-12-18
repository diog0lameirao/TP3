import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🚦 Comece sua jornada na Formula 1
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            🏁 Últimas notícias e corridas
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo ao ${siteConfig.title}`}
      description="Site dedicado à velocidade, tecnologia e emoção da Formula 1">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.heroBanner}>
          <div className="container">
            <h2>Descubra mais sobre:</h2>
            <ul>
              <li>🏎️ Pilotos lendários</li>
              <li>🏆 Equipes e construtores</li>
              <li>🌍 Circuitos icônicos</li>
              <li>⚙️ Tecnologia e inovação</li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
