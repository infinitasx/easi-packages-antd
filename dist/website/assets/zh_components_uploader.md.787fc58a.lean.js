import{_ as t,c as n,a,l as e}from"./app.e9e757be.js";const k='{"title":"EASIUploader - \u56FE\u7247\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Types","slug":"types"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"zh/components/uploader.md","lastUpdated":1636600595486}',s={},l=e(`__VP_STATIC_START__<h1 id="easiuploader-\u56FE\u7247\u9009\u62E9\u5668" tabindex="-1">EASIUploader - \u56FE\u7247\u9009\u62E9\u5668 <a class="header-anchor" href="#easiuploader-\u56FE\u7247\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EASIProvider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zhCN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EASIUploader</span> <span class="token attr-name">:aspectRatio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:minCropBoxWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:minCropBoxHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>18<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EASIButton</span> <span class="token attr-name">link</span><span class="token punctuation">&gt;</span></span>\u4E0A\u4F20\u56FE\u7247<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EASIButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EASIUploader</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>EASIProvider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/es/locale/zh_CN&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      zhCN<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.table</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">props</th><th style="text-align:left;">type</th><th style="text-align:left;">default</th><th style="text-align:left;">required</th><th style="text-align:left;">remark</th></tr></thead><tbody><tr><td style="text-align:left;">system</td><td style="text-align:left;">string</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F</td><td style="text-align:left;">\u7CFB\u7EDF\u5728 IAM \u5185\u7684\u6807\u793A\uFF0C\u4F8B\u5982 IAM \u7CFB\u7EDF\u6807\u793A\u4E3A iam\uFF0C\u53EF\u54A8\u8BE2\u540E\u7AEF\u7CFB\u7EDF\u5177\u4F53\u6807\u793A</td></tr><tr><td style="text-align:left;">authorization</td><td style="text-align:left;">string or function</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F</td><td style="text-align:left;">IAM \u4E0B\u53D1\u7684 token\uFF0C\u683C\u5F0F\u4E3A Bearer <strong>**</strong></td></tr><tr><td style="text-align:left;">authorizationKey</td><td style="text-align:left;">string</td><td style="text-align:left;">&#39;authorization&#39;</td><td style="text-align:left;">\u662F</td><td style="text-align:left;">\u4E0A\u4F20\u65F6header\u643A\u5E26\u7684token\u952E\u540D\uFF0C\u4E00\u822C\u4E3Aauthorization\u6216\u8005easi-upload-token</td></tr><tr><td style="text-align:left;">env</td><td style="text-align:left;">development or production</td><td style="text-align:left;"></td><td style="text-align:left;">\u662F</td><td style="text-align:left;">\u9ED8\u8BA4\u53D6 window.$EASI_BUILD_ENV \u7684\u503C</td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;">boolean or number</td><td style="text-align:left;">false</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u53EF\u4EE5\u4E0A\u4F20/\u9009\u62E9\u7684\u56FE\u7247\u6570\u91CF\uFF0C\u4E3A true \u65F6\uFF0C\u4E0D\u9650\u5236\u6570\u91CF\uFF0C\u4E3A false \u6216 1 \u65F6\u53EA\u80FD\u4E0A\u4F20/\u9009\u62E9\u4E00\u5F20\u56FE\u7247\uFF0C\u4E3A 0 \u65F6\u4E0D\u53EF\u4E0A\u4F20/\u9009\u62E9\u56FE\u7247</td></tr><tr><td style="text-align:left;">maxFilesSize</td><td style="text-align:left;">number</td><td style="text-align:left;">5</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u5355\u5F20\u56FE\u7247\u4E0A\u4F20\u5185\u5B58\u5927\u5C0F\u9650\u5236\uFF0C\u5355\u4F4D M\uFF0C\u9ED8\u8BA4\u4E0D\u8D85\u8FC7 5M</td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u7981\u7528\u56FE\u7247\u9009\u62E9\u5668</td></tr><tr><td style="text-align:left;">crop</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u56FE\u7247\u662F\u5426\u53EF\u88C1\u526A\uFF0C\u9ED8\u8BA4\u53EF\u88C1\u526A\uFF0Cgif \u56FE\u7247\u4E0D\u80FD\u4F7F\u7528\u88C1\u526A\u529F\u80FD</td></tr><tr><td style="text-align:left;">maxWidth</td><td style="text-align:left;">number</td><td style="text-align:left;">2000</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u56FE\u7247\u6700\u5927\u5BBD\u5EA6\uFF0C\u5982\u679C\u9009\u62E9\u7684\u56FE\u7247\u8D85\u8FC7\u6B64\u503C\uFF0C\u4F1A\u6309\u6BD4\u4F8B\u538B\u7F29\u5BBD\u5EA6\u5230\u6B64\u503C\uFF0Cgif \u4E0D\u53D7\u6B64\u7EA6\u675F\uFF0C\u9ED8\u8BA4\u6700\u5927 2000px</td></tr><tr><td style="text-align:left;">maxHeight</td><td style="text-align:left;">number</td><td style="text-align:left;">2000</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u56FE\u7247\u6700\u5927\u9AD8\u5EA6\uFF0C\u5982\u679C\u9009\u62E9\u7684\u56FE\u7247\u8D85\u8FC7\u6B64\u503C\uFF0C\u4F1A\u6309\u6BD4\u4F8B\u538B\u7F29\u9AD8\u5EA6\u5230\u6B64\u503C\uFF0Cgif \u4E0D\u53D7\u6B64\u7EA6\u675F\uFF0C\u9ED8\u8BA4\u6700\u5927 2000px</td></tr><tr><td style="text-align:left;">aspectRatio</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u88C1\u526A\u56FE\u7247\u7684\u5BBD\u9AD8\u6BD4\uFF0C\u5982\u679C\u4E0D\u9650\u5236\u5BBD\u9AD8\u6BD4\u5219\u4E0D\u4F20\u5165\u6B64\u503C\uFF0C\u6216\u4F20\u5165 0\uFF0C\u5982\u679C\u60F3\u8981\u6B63\u65B9\u5F62\u56FE\u7247\u53EF\u4F20\u5165 1\uFF0C\u4F20\u5165\u7684\u503C\u5E94\u662F\u5BBD\u5EA6\u9664\u4EE5\u9AD8\u5EA6\u7684\u7ED3\u679C\uFF0C\u4F8B\u5982\u60F3\u8981\u5BBD\u9AD8\u6BD4 3\uFF1A2 \u7684\u5C3A\u5BF8\uFF0C\u5219\u4F20\u5165 3/2 \u7684\u7ED3\u679C</td></tr><tr><td style="text-align:left;">minCropBoxWidth</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u53EF\u88C1\u526A\u5230\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C\u4F20 0 \u4E0D\u9650\u5236</td></tr><tr><td style="text-align:left;">minCropBoxHeight</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u53EF\u88C1\u526A\u5230\u7684\u6700\u5C0F\u9AD8\u5EA6\uFF0C\u4F20 0 \u4E0D\u9650\u5236</td></tr><tr><td style="text-align:left;">timeout</td><td style="text-align:left;">number</td><td style="text-align:left;">20000</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u4E0A\u4F20\u8D85\u65F6\u65F6\u95F4\uFF0C\u9ED8\u8BA4 20 \u79D2\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr><tr><td style="text-align:left;">emptyTitle</td><td style="text-align:left;">string</td><td style="text-align:left;">\u70B9\u51FB\u6216\u5C06\u56FE\u7247\u62D6\u62FD\u5230\u8FD9\u91CC\u4E0A\u4F20</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u672C\u5730\u4E0A\u4F20\u65E0\u56FE\u7247\u7684\u65F6\u5019\u7A7A\u72B6\u6001\u7684\u6807\u9898</td></tr><tr><td style="text-align:left;">emptySubTitle</td><td style="text-align:left;">string</td><td style="text-align:left;">\u652F\u6301\u6269\u5C55\u540D\uFF1A.jpg\u3001.jpeg\u3001.png\u3001.webp\u3001.gif \u7B49</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u672C\u5730\u4E0A\u4F20\u65E0\u56FE\u7247\u7684\u65F6\u5019\u7A7A\u72B6\u6001\u7684\u4E8C\u7EA7\u6807\u9898</td></tr><tr><td style="text-align:left;">v-model:visible</td><td style="text-align:left;">boolean</td><td style="text-align:left;"></td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u5982\u679C\u5199\u5165\u4E86 slot#default \u63D2\u69FD\uFF0C\u5219\u7531\u63D2\u69FD\u5185\u7684 dom \u81EA\u52A8\u89E6\u53D1\u663E\u793A</td></tr><tr><td style="text-align:left;">maskClosable</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u70B9\u51FB\u8499\u5C42\u662F\u5426\u53EF\u4EE5\u5173\u95ED\u6587\u4EF6\u9009\u62E9\u5668\uFF0C\u9ED8\u8BA4\u4E0D\u53EF\u4EE5</td></tr><tr><td style="text-align:left;">destroyOnClose</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u5173\u95ED\u6587\u4EF6\u9009\u62E9\u5668\u662F\u5426\u6E05\u9664\u5185\u90E8\u72B6\u6001\uFF0C\u9ED8\u8BA4\u8981\u6E05\u9664</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;">string</td><td style="text-align:left;">\u4E0A\u4F20\u56FE\u7247</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u6587\u4EF6\u9009\u62E9\u5668\u5F39\u6846\u7684\u6807\u9898</td></tr><tr><td style="text-align:left;">extType</td><td style="text-align:left;">string[]</td><td style="text-align:left;">[&#39;jpg&#39;, &#39;png&#39;, &#39;webp&#39;, &#39;jpeg&#39;, &#39;gif&#39;, &#39;tif&#39;, &#39;tiff&#39;]</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u540E\u7F00\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u9632\u6B62\u62D6\u52A8\u4E0A\u4F20\u65F6\u53EF\u4EE5\u8DF3\u8FC7 accept \u6821\u9A8C</td></tr><tr><td style="text-align:left;">accept</td><td style="text-align:left;">string[]</td><td style="text-align:left;">[&#39;image/gif&#39;,&#39;image/jpeg&#39;,&#39;image/png&#39;,&#39;image/tiff&#39;,&#39;image/webp&#39;]</td><td style="text-align:left;">\u5426</td><td style="text-align:left;">input \u8F93\u5165\u6846\u7684 accept \u53C2\u6570,\u9650\u5236\u6587\u4EF6\u7C7B\u578B</td></tr></tbody></table><h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><div class="language-Typescript"><pre><code><span class="token keyword">type</span> <span class="token class-name">FileList</span> <span class="token operator">=</span> File<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u6587\u4EF6\u6570\u7EC4</span>

<span class="token comment">// FILE_TYPE_ERROR: \u6587\u4EF6\u7C7B\u578B\u6216\u540E\u7F00\u6821\u9A8C\u5931\u8D25</span>
<span class="token comment">// FILE_MAX_COUNT: \u9009\u62E9\u7684\u6587\u4EF6\u8D85\u8FC7\u6570\u91CF\u9650\u5236</span>
<span class="token comment">// FILE_MIN_WITH_HEIGHT\uFF1A\u5F85\u4E0A\u4F20\u7684\u6587\u4EF6\u5BBD\u9AD8\u5C0F\u4E8E\u6700\u5C0F\u5BBD\u9AD8</span>
<span class="token comment">// FILE_UPLOAD_ERROR: \u4E0A\u4F20\u6587\u4EF6\u5931\u8D25\uFF0C\u53EF\u80FD\u539F\u56E0\u662F\u63A5\u53E3\u8D85\u65F6\uFF0Ctoken\u5931\u6548</span>
<span class="token comment">// FILE_LIST_ERROR\uFF1A \u83B7\u53D6\u56FE\u7247\u5E93\u6570\u636E\u5931\u8D25\uFF0C\u53EF\u80FD\u539F\u56E0\u662F\u63A5\u53E3\u8D85\u65F6\uFF0Ctoken\u5931\u6548</span>
<span class="token comment">// fileList\u6709\u53EF\u80FD\u4E3A\u7A7A\u6570\u7EC4</span>
<span class="token keyword">interface</span> <span class="token class-name">IValidateError</span><span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token string">&#39;FILE_TYPE_ERROR&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;FILE_MAX_COUNT&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;FILE_MAX_SIZE&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;FILE_MIN_WITH_HEIGHT&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;FILE_UPLOAD_ERROR&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;FILE_LIST_ERROR&#39;</span><span class="token punctuation">;</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  fileList<span class="token operator">:</span> FileList<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ISelect</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u5DF2\u9009\u62E9\u7684\u56FE\u7247\u94FE\u63A5</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u5DF2\u9009\u62E9\u7684\u56FE\u7247\u6587\u4EF6\u540D</span>
  size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u5DF2\u9009\u62E9\u7684\u56FE\u7247\u5185\u5B58\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282</span>
  width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u5DF2\u9009\u62E9\u56FE\u7247\u7684\u771F\u5B9E\u5BBD\u5EA6</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u5DF2\u9009\u62E9\u56FE\u7247\u7684\u771F\u5B9E\u9AD8\u5EA6</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">event name</th><th style="text-align:left;">params</th><th style="text-align:left;">return value</th><th style="text-align:left;"></th><th style="text-align:left;">remark</th></tr></thead><tbody><tr><td style="text-align:left;">show</td><td style="text-align:left;"></td><td style="text-align:left;">void</td><td style="text-align:left;"></td><td style="text-align:left;">\u663E\u793A\u6587\u4EF6\u9009\u62E9\u5668\u5F39\u6846\u4E8B\u4EF6 <img width="500/"></td></tr><tr><td style="text-align:left;">cancel</td><td style="text-align:left;"></td><td style="text-align:left;">void</td><td style="text-align:left;"></td><td style="text-align:left;">\u5173\u95ED\u6587\u4EF6\u9009\u62E9\u5668\u5F39\u6846\u4E8B\u4EF6</td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;"></td><td style="text-align:left;">FileList</td><td style="text-align:left;"></td><td style="text-align:left;">\u672C\u5730\u4E0A\u4F20\u9009\u62E9\u6587\u4EF6\u4E8B\u4EF6</td></tr><tr><td style="text-align:left;">error</td><td style="text-align:left;"></td><td style="text-align:left;">IValidateError</td><td style="text-align:left;"></td><td style="text-align:left;">\u5305\u542B\u63A5\u53E3\u8C03\u7528\u5931\u8D25\uFF0C\u6587\u4EF6\u6821\u9A8C\u5931\u8D25\u4E8B\u4EF6</td></tr><tr><td style="text-align:left;">ok</td><td style="text-align:left;"></td><td style="text-align:left;">ISelect[]</td><td style="text-align:left;"></td><td style="text-align:left;">\u7528\u6237\u786E\u8BA4\u9009\u62E9\u4E8B\u4EF6\uFF0C\u8C03\u7528\u65B9\u5E94\u76D1\u542C\u6B64\u4E8B\u4EF6\u83B7\u53D6\u7528\u6237\u9009\u62E9\u7684\u56FE\u7247</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><p>\u672A\u5728\u4E0B\u9762\u7279\u522B\u8BF4\u660E\u7684\u5219\u4E0E ant-design-vue v2.2.2 <a href="https://2x.antdv.com/components/table-cn" target="_blank" rel="noopener noreferrer">Table \u7EC4\u4EF6</a> \u4E00\u81F4</p><table><thead><tr><th style="text-align:left;">name</th><th style="text-align:left;"></th><th style="text-align:left;"></th><th style="text-align:left;"></th><th style="text-align:left;">remark</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">\u89E6\u53D1\u6587\u4EF6\u9009\u62E9\u5668\u5F39\u6846\u7684\u63D2\u69FD\uFF0C\u63D2\u69FD\u5185\u5BB9\u5FC5\u987B\u8981\u6709 root dom\u3002\u4E0D\u5199\u6B64\u63D2\u69FD\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 v-model:visible \u63A7\u5236\u5F39\u6846\u663E\u793A\u9690\u85CF</td></tr></tbody></table>__VP_STATIC_END__`,12),p=[l];function o(i,d,c,r,g,u){return a(),n("div",null,p)}var y=t(s,[["render",o]]);export{k as __pageData,y as default};