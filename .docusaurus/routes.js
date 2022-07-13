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
    component: ComponentCreator('/Learn/blog', '011'),
    exact: true
  },
  {
    path: '/Learn/blog/2022-07-09-weeklyCall.md',
    component: ComponentCreator('/Learn/blog/2022-07-09-weeklyCall.md', '985'),
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
    component: ComponentCreator('/Learn/blog/tags/community', 'de1'),
    exact: true
  },
  {
    path: '/Learn/blog/tags/weekly-call',
    component: ComponentCreator('/Learn/blog/tags/weekly-call', '82f'),
    exact: true
  },
  {
    path: '/Learn/markdown-page',
    component: ComponentCreator('/Learn/markdown-page', '0e0'),
    exact: true
  },
  {
    path: '/Learn/docs',
    component: ComponentCreator('/Learn/docs', '0b3'),
    routes: [
      {
        path: '/Learn/docs/category/tutorial---basics',
        component: ComponentCreator('/Learn/docs/category/tutorial---basics', 'b91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/category/tutorial---extras',
        component: ComponentCreator('/Learn/docs/category/tutorial---extras', '284'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/intro',
        component: ComponentCreator('/Learn/docs/intro', 'd7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/TinyML',
        component: ComponentCreator('/Learn/docs/TinyML', '010'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/Learn/docs/tutorial-basics/congratulations', '71d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/Learn/docs/tutorial-basics/create-a-blog-post', '8f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/Learn/docs/tutorial-basics/create-a-document', '0a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/Learn/docs/tutorial-basics/create-a-page', '937'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/Learn/docs/tutorial-basics/deploy-your-site', '2bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/Learn/docs/tutorial-basics/markdown-features', '051'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/Learn/docs/tutorial-extras/manage-docs-versions', '08b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Learn/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/Learn/docs/tutorial-extras/translate-your-site', '1c9'),
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
