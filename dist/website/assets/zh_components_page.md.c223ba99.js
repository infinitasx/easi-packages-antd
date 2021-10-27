import{_ as t,c as e,a,l as d}from"./app.e4a56ecb.js";const p='{"title":"EASIPage - \u9875\u9762\u57FA\u7840\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"zh/components/page.md","lastUpdated":1635300738549}',r={},n=d('<h1 id="easipage-\u9875\u9762\u57FA\u7840\u7EC4\u4EF6" tabindex="-1">EASIPage - \u9875\u9762\u57FA\u7840\u7EC4\u4EF6 <a class="header-anchor" href="#easipage-\u9875\u9762\u57FA\u7840\u7EC4\u4EF6" aria-hidden="true">#</a></h1><blockquote><p>\u6B64\u7EC4\u4EF6\u662F\u9875\u9762\u7EA7\u7EC4\u4EF6\u7684\u57FA\u7840\u7EC4\u4EF6\uFF0C\u6BCF\u4E2A\u9875\u9762\u7EC4\u4EF6\u90FD\u5E94\u4F7F\u7528\u6B64\u7EC4\u4EF6\u4F5C\u4E3A\u57FA\u7840\u7EC4\u4EF6</p></blockquote><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">props</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">required</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">hasPermission</td><td style="text-align:center;">boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">\u5426</td><td>\u5982\u679C\u4F20\u5165 true\uFF0C\u5219\u4F1A\u8DF3\u8FC7\u6B64\u7EC4\u4EF6 IAM \u9875\u9762\u7EA7\u522B\u7684\u6743\u9650\u68C0\u67E5</td></tr><tr><td style="text-align:center;">showPageHeader</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">\u5426</td><td>\u662F\u5426\u663E\u793A\u9875\u9762\u7684\u9762\u5305\u5C51\u5BFC\u822A\u548C\u9875\u9762\u6807\u9898\uFF0C\u9ED8\u8BA4\u662F\u663E\u793A</td></tr><tr><td style="text-align:center;">breadcrumb</td><td style="text-align:center;">\u89C1 EASILayout \u7EC4\u4EF6\u5185\u7684 MenuMeta</td><td style="text-align:center;">undefined</td><td style="text-align:center;">\u5426</td><td>\u81EA\u5B9A\u4E49\u9762\u5305\u5C51\u5BFC\u822A\uFF0C\u5982\u679C IAM \u7CFB\u7EDF\u4E0B\u53D1\u7684\u7236\u5B50\u7EA7\u5173\u7CFB\u4E0D\u6EE1\u8DB3\u9700\u6C42\uFF0C\u53EF\u5728\u6B64\u7EC4\u4EF6\u4F20\u5165\u81EA\u5B9A\u4E49\u9762\u5305\u5C51\u5BFC\u822A\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E IAM \u7236\u5B50\u7EA7\u5173\u7CFB</td></tr><tr><td style="text-align:center;">title</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">\u5426</td><td>\u5982\u679C IAM \u4E0B\u53D1\u7684\u9875\u9762\u6807\u9898\u4E0D\u6EE1\u8DB3\u9700\u6C42\uFF0C\u53EF\u81EA\u5B9A\u4E49\u9875\u9762\u6807\u9898\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E IAM \u4E0B\u53D1\u7684\u6807\u9898</td></tr><tr><td style="text-align:center;">desc</td><td style="text-align:center;">string</td><td style="text-align:center;"></td><td style="text-align:center;">\u5426</td><td>\u9875\u9762\u6807\u9898\u4E0B\u7684\u63CF\u8FF0\u6587\u6848\uFF0C\u76EE\u524D IAM \u65E0\u6B64\u5B57\u6BB5\uFF0C\u5982\u679C\u6709\u9700\u6C42\u53EF\u4F20\u5165\u81EA\u5B9A\u4E49\u6587\u6848</td></tr><tr><td style="text-align:center;">layoutType</td><td style="text-align:center;">card or customer</td><td style="text-align:center;">customer</td><td style="text-align:center;">\u5426</td><td>\u76EE\u524D UI \u8BBE\u8BA1\u60C5\u51B5\u4E0B\u4F7F\u7528\u9ED8\u8BA4\u503C\u5373\u53EF</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">name</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">initPage</td><td>\u7528\u6237\u5728\u6709\u6743\u9650\u7684\u60C5\u51B5\u4E0B\u8FDB\u5165\u9875\u9762\u7684\u56DE\u8C03\uFF0C\u9700\u5728\u6B64\u4F20\u5165\u521D\u59CB\u5316\u9875\u9762\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u3010\u5FC5\u4F20\u3011\uFF0C\u4E0D\u9700\u8981\u518D\u5728\u9875\u9762\u7EC4\u4EF6\u7684 beforeMounted, onMounted, onActivated \u5185\u8C03\u7528\u9875\u9762\u521D\u59CB\u5316\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u65E0\u6743\u9650\u65F6\u4E5F\u4F1A\u8FDB\u7EC4\u4EF6\u7684\u94A9\u5B50\u51FD\u6570</td></tr></tbody></table>',6),l=[n];function s(i,c,o,h,g,y){return a(),e("div",null,l)}var _=t(r,[["render",s]]);export{p as __pageData,_ as default};
