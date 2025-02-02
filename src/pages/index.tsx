import type {ReactNode} from 'react';
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
            to="/docs">
            Start Coding Smarter 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Learn how to 10x your coding productivity with AI. Practical tutorials and real-world examples for developers who want to code smarter.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.gettingStarted}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center">
                <Heading as="h2">Ready to Transform Your Workflow?</Heading>
                <p className={styles.tagline}>
                  Join developers from top tech companies who are already using AI to write better code faster.
                </p>
                <div className={styles.buttons}>
                  <Link
                    className="button button--primary button--lg"
                    to="/docs/category/getting-started">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
