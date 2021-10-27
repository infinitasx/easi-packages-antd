import{_ as n,c as a,a as s,l as t}from"./app.e4a56ecb.js";const h='{"title":"EASISetting - \u7528\u6237\u62BD\u5C49\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"zh/components/setting.md","lastUpdated":1635307274823}',p={},e=t(`<h1 id="easisetting-\u7528\u6237\u62BD\u5C49\u7EC4\u4EF6" tabindex="-1">EASISetting - \u7528\u6237\u62BD\u5C49\u7EC4\u4EF6 <a class="header-anchor" href="#easisetting-\u7528\u6237\u62BD\u5C49\u7EC4\u4EF6" aria-hidden="true">#</a></h1><blockquote><p>\u6B64\u7EC4\u4EF6\u662F\u70B9\u51FB\u7528\u6237\u540D\u79F0\u663E\u793A\u51FA\u6765\u7684\u8BBE\u7F6E\u76F8\u5173\u5185\u5BB9\u7684\u62BD\u5C49\uFF0C\u5982\u679C\u5DF2\u4F7F\u7528 EASILayout \u7EC4\u4EF6\uFF0C\u5219\u4E0D\u9700\u8981\u518D\u4F7F\u7528\u6B64\u7EC4\u4EF6\u3002</p></blockquote><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EASIProvider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lang === <span class="token punctuation">&#39;</span>zh_CN<span class="token punctuation">&#39;</span> ? zhCN : enUS<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EASIButton</span> <span class="token attr-name">link</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show = true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u663E\u793A\u8BBE\u7F6E\u62BD\u5C49\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EASIButton</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EASISetting</span> <span class="token attr-name"><span class="token namespace">v-model:</span>visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:userInfo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name: <span class="token punctuation">&#39;</span>\u7528\u6237\u6635\u79F0<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:onLogout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLogout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#action-render</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!--  \u5207\u6362\u8BED\u8A00  --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-typography-text</span> <span class="token attr-name">strong</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block mb-32<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{ otherText.title }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-typography-text</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex items-center mb-32<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-typography-text</span><span class="token punctuation">&gt;</span></span> {{ otherText.subTitle }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-typography-text</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setLang<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lang<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 120px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-select-option</span>
                    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.lang<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.name<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.disabled<span class="token punctuation">&quot;</span></span>
                    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in langOption<span class="token punctuation">&quot;</span></span>
                <span class="token punctuation">&gt;</span></span>
                  {{ item.flag }}
                  {{ item.name }}
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select-option</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-select</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EASISetting</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EASIProvider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/es/locale/zh_CN&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/es/locale/en_US&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> lang <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> langOption <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        lang<span class="token operator">:</span> <span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">,</span>
        flag<span class="token operator">:</span> <span class="token string">&#39;\u{1F1E8}\u{1F1F3}&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;\u7B80\u4F53\u4E2D\u6587&#39;</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        lang<span class="token operator">:</span> <span class="token string">&#39;en_US&#39;</span><span class="token punctuation">,</span>
        flag<span class="token operator">:</span> <span class="token string">&#39;\u{1F1FA}\u{1F1F8}&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> otherText <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;\u8BED\u8A00\u8BBE\u7F6E&#39;</span><span class="token punctuation">,</span>
      subTitle<span class="token operator">:</span> <span class="token string">&#39;\u5F53\u524D\u8BED\u8A00&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      zhCN<span class="token punctuation">,</span>
      enUS<span class="token punctuation">,</span>
      show<span class="token punctuation">,</span>
      lang<span class="token punctuation">,</span>
      langOption<span class="token punctuation">,</span>
      otherText<span class="token punctuation">,</span>
      <span class="token function">onLogout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u70B9\u4E86\u9000\u51FA\u767B\u5F55\uFF01&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">setLang</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        lang<span class="token punctuation">.</span>value <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          otherText<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;\u8BED\u8A00\u8BBE\u7F6E&#39;</span><span class="token punctuation">;</span>
          otherText<span class="token punctuation">.</span>subTitle <span class="token operator">=</span> <span class="token string">&#39;\u5F53\u524D\u8BED\u8A00&#39;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          otherText<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;Language Settings&#39;</span><span class="token punctuation">;</span>
          otherText<span class="token punctuation">.</span>subTitle <span class="token operator">=</span> <span class="token string">&#39;Current Language&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.table</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><blockquote><p>\u672A\u7279\u522B\u8BF4\u660E\u7684\u4E0E ant-design-vue Drawer \u7EC4\u4EF6\u4E00\u81F4</p></blockquote><table><thead><tr><th style="text-align:center;">props</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">required</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">userInfo</td><td style="text-align:center;">UserInfo</td><td style="text-align:center;"></td><td style="text-align:center;">\u662F</td><td>\u7528\u6237\u4FE1\u606F</td></tr><tr><td style="text-align:center;">showTabSetting</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">\u5426</td><td>\u662F\u5426\u663E\u793A tab \u76F8\u5173\u7684\u8BBE\u7F6E\u5F00\u5173\uFF0C\u9ED8\u8BA4\u663E\u793A</td></tr><tr><td style="text-align:center;">onLogout</td><td style="text-align:center;">() =&gt; <code>Promise&lt;any&gt;</code></td><td style="text-align:center;">() =&gt; Promise.resolve()</td><td style="text-align:center;">\u662F</td><td>\u9000\u51FA\u767B\u5F55\u7684\u65B9\u6CD5\uFF0C\u8FD4\u56DE Promise</td></tr><tr><td style="text-align:center;">toDashboard</td><td style="text-align:center;">() =&gt; void</td><td style="text-align:center;"></td><td style="text-align:center;">\u5426</td><td>\u70B9\u51FB\u8DF3\u8F6C\u5230 dashboard \u8981\u6267\u884C\u7684\u51FD\u6570\uFF0C\u4E0D\u4F20\u5219\u4E0D\u663E\u793A\u8DF3\u8F6C\u6309\u94AE</td></tr><tr><td style="text-align:center;">editPassword</td><td style="text-align:center;">() =&gt; void</td><td style="text-align:center;"></td><td style="text-align:center;">\u5426</td><td>\u70B9\u51FB\u4FEE\u6539\u5BC6\u7801\u8981\u6267\u884C\u7684\u51FD\u6570\uFF0C\u4E0D\u4F20\u5219\u4E0D\u663E\u793A\u4FEE\u6539\u5BC6\u7801\u6309\u94AE</td></tr></tbody></table>`,7),o=[e];function c(l,u,k,i,r,g){return s(),a("div",null,o)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
