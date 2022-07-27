import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '👬 Community-driven',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Accomdemy is owned by Community! There are no teachers here, everyone are learners and tutors at the same time. 
       We want to make everyone enjoy learning just like making good friends.
      </>
    ),
  },
  {
    title: '🙌 Collaboration ',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      We build together. We value teamwork more than working alone. There are always 
      unexpected sparks in the process of cooperating with others. That's the beauty of collaboration
      </>
    ),
  },
  {
    title: '❤️ Value of network',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        There are lots of senior engineers and working professionals in the community. 
        More contribution, more reputation and opportunities you will get naturely.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
