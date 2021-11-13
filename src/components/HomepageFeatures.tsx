/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Components',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Explore frontend components in context, featuring pictures and high level descriptions
      </>
    ),
    link: '/docs/uCredit/components/dashboard'
  },
  {
    title: 'Redux State',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Find information relating to the uCredit frontend's state management
      </>
    ),
    link: '/docs/uCredit/redux/store'
  },
  {
    title: 'Types',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Read about the underlying structure of the data used by uCredit components and state
      </>
    ),
    link: '/docs/uCredit/types'
  },
];

function Feature({ title, image, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {link ?
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to={link}>
              {title}
            </Link>
          </div>
          : <></>}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
