import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.logoContainer}>
          <img 
            src="https://raw.githubusercontent.com/SanctumTerra/Baltica/master/.extra/logo.png" 
            alt="Baltica"
            className={styles.logo}
          />
        </div>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Baltica
          </h1>
          <p className={styles.heroSubtitle}>
            Minecraft Bedrock Toolkit for your needs!
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.primaryButton} to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Baltica - Documentation"
      description="Minecraft Bedrock Toolkit for your needs!">
      <main className={styles.main}>
        <HeroSection />
      </main>
    </Layout>
  );
}
