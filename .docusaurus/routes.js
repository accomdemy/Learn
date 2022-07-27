import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Learn/__docusaurus/debug',
    component: ComponentCreator('/Learn/__docusaurus/debug', '3c7'),
    exact: true
  },
  {
    path: '/Learn/__docusaurus/debug/config',
    component: ComponentCreator('/Learn/__docusaurus/debug/config', '7e6'),
    exact: true
  },
  {
    path: '/Learn/__docusaurus/debug/content',
    component: ComponentCreator('/Learn/__docusaurus/debug/content', 'b49'),
    exact: true
  },
  {
    path: '/Learn/__docusaurus/debug/globalData',
    component: ComponentCreator('/Learn/__docusaurus/debug/globalData', '5d5'),
    exact: true
  },
  {
    path: '/Learn/__docusaurus/debug/metadata',
    component: ComponentCreator('/Learn/__docusaurus/debug/metadata', '75e'),
    exact: true
  },
  {
    path: '/Learn/__docusaurus/debug/registry',
    component: ComponentCreator('/Learn/__docusaurus/debug/registry', 'b74'),
    exact: true
  },
  {
    path: '/Learn/__docusaurus/debug/routes',
    component: ComponentCreator('/Learn/__docusaurus/debug/routes', 'f94'),
    exact: true
  },
  {
    path: '/Learn/blog',
    component: ComponentCreator('/Learn/blog', '35a'),
    exact: true
  },
  {
    path: '/Learn/blog/2022-07-09-weeklyCall.md',
    component: ComponentCreator('/Learn/blog/2022-07-09-weeklyCall.md', '985'),
    exact: true
  },
  {
    path: '/Learn/blog/2022-22-09-weeklyCall.md',
    component: ComponentCreator('/Learn/blog/2022-22-09-weeklyCall.md', '68e'),
    exact: true
  },
  {
    path: '/Learn/blog/archive',
    component: ComponentCreator('/Learn/blog/archive', '387'),
    exact: true
  },
  {
    path: '/Learn/blog/tags',
    component: ComponentCreator('/Learn/blog/tags', '740'),
    exact: true
  },
  {
    path: '/Learn/blog/tags/community',
    component: ComponentCreator('/Learn/blog/tags/community', 'adc'),
    exact: true
  },
  {
    path: '/Learn/blog/tags/weekly-call',
    component: ComponentCreator('/Learn/blog/tags/weekly-call', '7e0'),
    exact: true
  },
  {
    path: '/Learn/markdown-page',
    component: ComponentCreator('/Learn/markdown-page', '0e0'),
    exact: true
  },
  {
    path: '/Learn/docs',
    component: ComponentCreator('/Learn/docs', '35f'),
    routes: [
      {
        path: '/Learn/docs/TinyML',
        component: ComponentCreator('/Learn/docs/TinyML', '010'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/weekFive',
        component: ComponentCreator('/Learn/docs/weekFive', '9a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/weekFour',
        component: ComponentCreator('/Learn/docs/weekFour', '439'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/weekOne',
        component: ComponentCreator('/Learn/docs/weekOne', 'fa5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/weekThree',
        component: ComponentCreator('/Learn/docs/weekThree', '8f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/weekTwo',
        component: ComponentCreator('/Learn/docs/weekTwo', '05e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Learn/',
    component: ComponentCreator('/Learn/', '5c8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
