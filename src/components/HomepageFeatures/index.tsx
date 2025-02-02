import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  Svg: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Code Smarter, Not Harder',
    Svg: 'img/code-smarter.svg',
    description: (
      <>
        Stop wrestling with boilerplate. Learn how to leverage AI to handle the 
        repetitive work while you focus on solving interesting problems.
      </>
    ),
  },
  {
    title: 'Real-World AI Applications',
    Svg: 'img/real-world.svg',
    description: (
      <>
        Discover practical ways to integrate AI into your development workflow. 
        From automated testing to intelligent code generation, take your skills beyond tutorials.
      </>
    ),
  },
  {
    title: 'Built By Developers, For Developers',
    Svg: 'img/developer-focused.svg',
    description: (
      <>
        No fluff, no hype. Just practical strategies and real examples of how 
        AI can supercharge your development process and make you more productive.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  const imgUrl = useBaseUrl(Svg);
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img 
          className={styles.featureSvg} 
          role="img" 
          src={imgUrl}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
