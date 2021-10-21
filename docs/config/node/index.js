// title、themeConfig、head参考官网配置
// https://vitepress.vuejs.org/config/basics.html
const { version, name } = require('../../../package.json');
const nav = require('./nav');
const sidebar = require('./sidebar');

const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  title: name,
  base: isProd ? `/${name}/${version}/website/` : '/', // 部署路径
  themeConfig: {
    theme: false,
    repo: 'infinitasx/easi-packages-antd',
    logo: '/images/logo.png',
    agolia: {
      apiKey: '',
      appId: '',
    },
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: nav,
    sidebar: sidebar,
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/${name}/${version}/website/images/favicon.ico`,
      },
    ],
  ],
};
