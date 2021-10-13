import{_ as n,c as s,a,l as t}from"./app.380eb180.js";const g='{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5"},{"level":3,"title":"\u6309\u9700\u52A0\u8F7D","slug":"\u6309\u9700\u52A0\u8F7D"}],"relativePath":"zh/guide/begin.md","lastUpdated":1634093362710}',p={},o=t(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u672C\u8282\u4ECB\u7ECD\u5982\u4F55\u5728\u60A8\u7684\u9879\u76EE\u4E2D\u4F7F\u7528 easi-packages-antd\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><div class="language-typescript"><pre><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token constant">EASI</span> <span class="token keyword">from</span> <span class="token string">&#39;easi-packages-antd&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/antd.css&#39;</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>antd<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">EASI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6309\u9700\u52A0\u8F7D" tabindex="-1">\u6309\u9700\u52A0\u8F7D <a class="header-anchor" href="#\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a></h3><blockquote><p>webpack \u9879\u76EE</p></blockquote><ul><li>\u5B89\u88C5 babel-plugin-import \u4F9D\u8D56</li></ul><div class="language-js"><pre><code>yarn add babel<span class="token operator">-</span>plugin<span class="token operator">-</span><span class="token keyword">import</span> <span class="token operator">-</span><span class="token constant">D</span>
</code></pre></div><ul><li>\u914D\u7F6E babel</li></ul><div class="language-js"><pre><code><span class="token comment">//babel.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        libraryName<span class="token operator">:</span> <span class="token string">&#39;easi-packages-antd&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.css</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">customName</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">easi-packages-antd/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// EASIDirectives \u6307\u4EE4 \u6309\u9700\u52A0\u8F7D\u65F6\u4F7F\u7528</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EASIButton<span class="token punctuation">,</span> EASIDirectives <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easi-packages-antd&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5DE5\u5177\u51FD\u6570</span>
<span class="token keyword">import</span> EASIUtils <span class="token keyword">from</span> <span class="token string">&#39;easi-packages-antd/es/utils&#39;</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>EASIButton<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>EASIDirectives<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>vite \u9879\u76EE</p></blockquote><ul><li>\u5B89\u88C5 vite-plugin-importer \u4F9D\u8D56</li></ul><div class="language-js"><pre><code>yarn add vite<span class="token operator">-</span>plugin<span class="token operator">-</span>importer <span class="token operator">-</span><span class="token constant">D</span>
</code></pre></div><ul><li>\u914D\u7F6E vite</li></ul><div class="language-js"><pre><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> usePluginImport <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-importer&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">usePluginImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      libraryName<span class="token operator">:</span> <span class="token string">&#39;easi-packages-antd&#39;</span><span class="token punctuation">,</span>
      libraryDirectory<span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.css</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">customName</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">easi-packages-antd/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// EASIDirectives \u6307\u4EE4 \u6309\u9700\u52A0\u8F7D\u65F6\u4F7F\u7528</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EASIButton<span class="token punctuation">,</span> EASIDirectives <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;easi-packages-antd&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5DE5\u5177\u51FD\u6570</span>
<span class="token keyword">import</span> EASIUtils <span class="token keyword">from</span> <span class="token string">&#39;easi-packages-antd/es/utils&#39;</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>EASIButton<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>EASIDirectives<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,17),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{g as __pageData,f as default};
