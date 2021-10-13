// title、themeConfig、head参考官网配置
// https://vitepress.vuejs.org/config/basics.html
const { version, name } = require('../../../package.json');
module.exports = {
  title: name,
  base: `/${name}/${version}/website/`, // 部署路径
  themeConfig: {
    theme: false,
    repo: 'huyanhai/vite-docs',
    logo: '/images/logo.png',
    agolia: {
      apiKey: '',
      appId: '',
    },
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '指南', link: '/guide/base' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: [
      {
        '/guide/': [
          {
            text: '基础',
            children: [
              {
                text: '安装',
                link: '/zh/guide/base',
              },
              {
                text: '快速开始',
                link: '/zh/guide/begin',
              },
            ],
          },
        ],
      },
      {
        '/components/': [
          {
            text: '基础组件',
            children: [
              {
                text: 'Button 按钮',
                link: '/zh/components/button',
              },
              {
                text: 'Drawer 抽屉',
                link: '/zh/components/drawer',
              },
              {
                text: 'Loading 加载',
                link: '/zh/components/loading',
              },
              {
                text: 'Modal 对话框',
                link: '/zh/components/modal',
              },
              {
                text: 'Table 表格',
                link: '/zh/components/table',
              },
              {
                text: 'Uploader 图片选择器',
                link: '/zh/components/uploader',
              },
            ],
          },
          {
            text: '页面组件',
            children: [
              {
                text: 'Provider 根组件',
                link: '/zh/components/provider',
              },
              {
                text: 'Error 错误页',
                link: '/zh/components/error',
              },
              {
                text: 'Layout 布局',
                link: '/zh/components/layout',
              },
              {
                text: 'Page 页面',
                link: '/zh/components/page',
              },
              {
                text: 'Setting 用户设置抽屉',
                link: '/zh/components/setting',
              },
            ],
          },
        ],
      },
    ],
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
