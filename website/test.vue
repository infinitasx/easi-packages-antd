<template><div class="markdown"><p><strong id="EASIButton" style="font-size: 18px">EASIButton - 按钮</strong></p>

<a-typography-title :level="4">Props</a-typography-title><a-typography-text>与ant-design-vue v2.2.2 <a-typography-link href="https://2x.antdv.com/components/button-cn" target="_blank">Button组件</a-typography-link> 一致</a-typography-text><a-typography-title :level="4">Event</a-typography-title><a-typography-text>与ant-design-vue v2.2.2 <a-typography-link href="https://2x.antdv.com/components/button-cn" target="_blank">Button组件</a-typography-link> 一致 </a-typography-text></div></template><script>

export default {
  components: {
    
  },
  setup () {
    return {
    }
  }
}
</script>
result <template><div class="markdown"><p><strong id="EASILayout" style="font-size: 18px">EASILayout - 布局基础组件</strong></p>

<p><a-typography-text>此组件是根路由挂载的基础布局组件，包含侧边栏 menu，顶部栏，tab 切换栏，用户自定义抽屉</a-typography-text></p><a-typography-title :level="4">Props</a-typography-title><table><thead><tr>
<th align="center">props</th>
<th align="center">type</th>
<th align="center">default</th>
<th align="center">required</th>
<th>remark</th>
</tr>
</thead><tbody><tr>
<td align="center">logo</td>
<td align="center">string</td>
<td align="center"></td>
<td align="center">是</td>
<td>系统 Logo 图片</td>
</tr>
<tr>
<td align="center">title</td>
<td align="center">string</td>
<td align="center"></td>
<td align="center">是</td>
<td>系统名称</td>
</tr>
<tr>
<td align="center">subTitle</td>
<td align="center">string</td>
<td align="center"></td>
<td align="center">否</td>
<td>系统二级名称，一般用来放城市名称</td>
</tr>
<tr>
<td align="center">nav</td>
<td align="center">NavItem[]</td>
<td align="center">[]</td>
<td align="center">是</td>
<td>需要渲染的侧边栏菜单数据</td>
</tr>
<tr>
<td align="center">userInfo</td>
<td align="center">UserInfo</td>
<td align="center"></td>
<td align="center">是</td>
<td>用户信息</td>
</tr>
<tr>
<td align="center">onLogout</td>
<td align="center">() =&gt; Promise<any></td>
<td align="center">() =&gt; Promise.resolve()</td>
<td align="center">是</td>
<td>退出登录的方法，返回 Promise</td>
</tr>
<tr>
<td align="center">toDashboard</td>
<td align="center">() =&gt; void</td>
<td align="center"></td>
<td align="center">否</td>
<td>跳转到 dashboard 的方法</td>
</tr>
</tbody></table><a-typography-text><strong>NavItem</strong> <br/></a-typography-text><table><thead><tr>
<th align="center">props</th>
<th align="center">type</th>
<th align="center">default</th>
<th align="center">required</th>
<th>remark</th>
</tr>
</thead><tbody><tr>
<td align="center">path</td>
<td align="center">string</td>
<td align="center"></td>
<td align="center">是</td>
<td>菜单对应的路由</td>
</tr>
<tr>
<td align="center">name</td>
<td align="center">string</td>
<td align="center"></td>
<td align="center">是</td>
<td>菜单对应的组件名</td>
</tr>
<tr>
<td align="center">meta</td>
<td align="center">MenuMeta</td>
<td align="center"></td>
<td align="center">是</td>
<td>菜单的额外信息</td>
</tr>
</tbody></table><a-typography-text><strong>MenuMeta</strong> <br/></a-typography-text><table><thead><tr>
<th align="center">props</th>
<th align="center">type</th>
<th align="center">default</th>
<th align="center">required</th>
<th>remark</th>
</tr>
</thead><tbody><tr>
<td align="center">title</td>
<td align="center">string</td>
<td align="center"></td>
<td align="center">是</td>
<td>菜单名称</td>
</tr>
<tr>
<td align="center">icon</td>
<td align="center">string</td>
<td align="center">&#39;iconfont icon-file&#39;</td>
<td align="center">是</td>
<td>菜单的 icon</td>
</tr>
<tr>
<td align="center">cached</td>
<td align="center">boolean</td>
<td align="center">true</td>
<td align="center">否</td>
<td>是否缓存组件，应该默认全部缓存，除非有特殊需求，可以传 false</td>
</tr>
<tr>
<td align="center">permission</td>
<td align="center">string</td>
<td align="center"></td>
<td align="center">是</td>
<td>菜单对应的权限点</td>
</tr>
<tr>
<td align="center">breadcrumb</td>
<td align="center">{name: string, path: string, breadcrumbName: string}[]</td>
<td align="center">[]</td>
<td align="center">否</td>
<td>name: 路由组件名称，path: 路由 path，breadcrumbName: 显示的路由名字</td>
</tr>
</tbody></table><a-typography-text><strong>UserInfo</strong> <br/></a-typography-text><table><thead><tr>
<th align="center">props</th>
<th align="center">type</th>
<th align="center">default</th>
<th align="center">required</th>
<th>remark</th>
</tr>
</thead><tbody><tr>
<td align="center">name</td>
<td align="center">string</td>
<td align="center"></td>
<td align="center">是</td>
<td>用户名称</td>
</tr>
<tr>
<td align="center">avatar</td>
<td align="center">string</td>
<td align="center"></td>
<td align="center">否</td>
<td>用户头像地址</td>
</tr>
</tbody></table><a-typography-title :level="4">Methods</a-typography-title><table><thead><tr>
<th align="center">name</th>
<th>remark</th>
</tr>
</thead><tbody><tr>
<td align="center">onReloadPage( refreshAll: = false ) =&gt; Promise<void></td>
<td>刷新当前页面或刷新 tab 下所有页面缓存，默认只刷新当前页面</td>
</tr>
</tbody></table></div></template><script>

export default {
  components: {
    
  },
  setup () {
    return {
    }
  }
}
</script>