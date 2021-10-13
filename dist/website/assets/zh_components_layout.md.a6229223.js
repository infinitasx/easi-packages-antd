import{_ as t,c as e,a as d,l}from"./app.4c4007bd.js";const n='{"title":"EASILayout - 布局基础组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"方法","slug":"方法"}],"relativePath":"zh/components/layout.md","lastUpdated":1634105568923}',r={},a=[l('<h1 id="easilayout-布局基础组件" tabindex="-1">EASILayout - 布局基础组件 <a class="header-anchor" href="#easilayout-布局基础组件" aria-hidden="true">#</a></h1><blockquote><p>此组件是根路由挂载的基础布局组件，包含侧边栏 menu，顶部栏，tab 切换栏，用户自定义抽屉</p></blockquote><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">props</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">required</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">logo</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>系统 Logo 图片</td></tr><tr><td style="text-align:center;">title</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>系统名称</td></tr><tr><td style="text-align:center;">subTitle</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">否</td><td>系统二级名称，一般用来放城市名称</td></tr><tr><td style="text-align:center;">nav</td><td style="text-align:center;">NavItem[]</td><td style="text-align:center;">[]</td><td style="text-align:center;">是</td><td>需要渲染的侧边栏菜单数据</td></tr><tr><td style="text-align:center;">userInfo</td><td style="text-align:center;">UserInfo</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>用户信息</td></tr><tr><td style="text-align:center;">showTabSetting</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">否</td><td>是否显示 tab 相关的设置开关，默认显示</td></tr><tr><td style="text-align:center;">v-model:setting</td><td style="text-align:center;">boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">否</td><td>控制显示 EASISetting 组件（设置抽屉）</td></tr><tr><td style="text-align:center;">startYear</td><td style="text-align:center;">string or number</td><td style="text-align:center;">2021</td><td style="text-align:center;">否</td><td>系统第一次发布的年份，用于在布局组件底部显示 copyright</td></tr><tr><td style="text-align:center;">onLogout</td><td style="text-align:center;">() =&gt; <code>Promise&lt;any&gt;</code></td><td style="text-align:center;">() =&gt; Promise.resolve()</td><td style="text-align:center;">是</td><td>退出登录的方法，返回 Promise</td></tr><tr><td style="text-align:center;">toDashboard</td><td style="text-align:center;">() =&gt; void</td><td style="text-align:center;"></td><td style="text-align:center;">否</td><td>点击跳转到 dashboard 要执行的函数，不传则不显示跳转按钮</td></tr><tr><td style="text-align:center;">editPassword</td><td style="text-align:center;">() =&gt; void</td><td style="text-align:center;"></td><td style="text-align:center;">否</td><td>点击修改密码要执行的函数，不传则不显示修改密码按钮</td></tr></tbody></table><blockquote><p>NavItem</p></blockquote><table><thead><tr><th style="text-align:center;">props</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">required</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">path</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>菜单对应的路由</td></tr><tr><td style="text-align:center;">name</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>菜单对应的组件名</td></tr><tr><td style="text-align:center;">meta</td><td style="text-align:center;">MenuMeta</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>菜单的额外信息</td></tr></tbody></table><blockquote><p>MenuMeta</p></blockquote><table><thead><tr><th style="text-align:center;">props</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">required</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">title</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>菜单名称</td></tr><tr><td style="text-align:center;">icon</td><td style="text-align:center;">string</td><td style="text-align:center;">&#39;iconfont icon-file&#39;</td><td style="text-align:center;">是</td><td>菜单的 icon</td></tr><tr><td style="text-align:center;">cached</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">否</td><td>是否缓存组件，应该默认全部缓存，除非有特殊需求，可以传 false</td></tr><tr><td style="text-align:center;">permission</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>菜单对应的权限点</td></tr><tr><td style="text-align:center;">breadcrumb</td><td style="text-align:center;">{name: string, path: string, breadcrumbName: string}[]</td><td style="text-align:center;">[]</td><td style="text-align:center;">否</td><td>name: 路由组件名称，path: 路由 path，breadcrumbName: 显示的路由名字</td></tr></tbody></table><blockquote><p>UserInfo</p></blockquote><table><thead><tr><th style="text-align:center;">props</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">required</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>用户名称</td></tr><tr><td style="text-align:center;">avatar</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">否</td><td>用户头像地址</td></tr><tr><td style="text-align:center;">devices</td><td style="text-align:center;">DeviceInfo[]</td><td style="text-align:center;"></td><td style="text-align:center;">否</td><td>用户历史登录设备，不存在既不会显示相关内容</td></tr></tbody></table><blockquote><p>DeviceInfo</p></blockquote><table><thead><tr><th style="text-align:center;">props</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">required</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">device_type</td><td style="text-align:center;">Desktop or Mobile or Tablet</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>客户端类型</td></tr><tr><td style="text-align:center;">id</td><td style="text-align:center;">number</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>数据表 ID</td></tr><tr><td style="text-align:center;">ip</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>登录 IP</td></tr><tr><td style="text-align:center;">active_at</td><td style="text-align:center;">number</td><td style="text-align:center;"></td><td style="text-align:center;">是</td><td>时间戳</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">name</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">onReloadPage( refreshAll: = false ) =&gt; <code>Promise&lt;void&gt;</code></td><td>刷新当前页面或刷新 tab 下所有页面缓存，默认只刷新当前页面</td></tr></tbody></table>',14)];var i=t(r,[["render",function(t,l,n,r,i,s){return d(),e("div",null,a)}]]);export{n as __pageData,i as default};
