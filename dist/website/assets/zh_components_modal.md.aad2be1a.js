import{m as A,r as B,_ as g,g as a,a as d,c as i,h as n,i as l,F as u,j as r,d as e,u as D,l as m}from"./app.380eb180.js";const f=A({setup(){return{visible:B(!1)}}}),_=r("\u6253\u5F00\u5F39\u7A97"),F=e("br",null,null,-1),b=r("\u5185\u5BB9");function y(s,t,c,p,o,q){const E=a("EASIButton"),C=a("EASIModal");return d(),i(u,null,[n(E,{onClick:t[0]||(t[0]=h=>s.visible=!0)},{default:l(()=>[_]),_:1}),F,n(C,{visible:s.visible,title:"\u5F39\u7A97\u6807\u9898",onCancel:t[1]||(t[1]=h=>s.visible=!1)},{default:l(()=>[b]),_:1},8,["visible"])],64)}var x=g(f,[["render",y]]),j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});const v=e("h1",{id:"easimodal-\u5F39\u6846",tabindex:"-1"},[r("EASIModal - \u5F39\u6846 "),e("a",{class:"header-anchor",href:"#easimodal-\u5F39\u6846","aria-hidden":"true"},"#")],-1),S=e("blockquote",null,[e("p",null,"\u6240\u6709\u7684\u4E8C\u7EA7\u9875\u9762\uFF0C\u5982\u65B0\u589E/\u7F16\u8F91/\u67E5\u770B\u8BE6\u60C5\u7B49\u90FD\u5E94\u653E\u5728\u5F39\u6846\u5C55\u793A\uFF0C\u800C\u4E0D\u662F\u65B0\u5F00\u4E00\u4E2A page \u9875\u9762")],-1),k=e("p",null,"modal/index",-1),I=m('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><p>\u672A\u5728\u4E0B\u9762\u7279\u522B\u8BF4\u660E\u7684\u5219\u4E0E ant-design-vue v2.2.2 <a href="https://2x.antdv.com/components/modal-cn" target="_blank" rel="noopener noreferrer">Modal \u7EC4\u4EF6</a> \u4E00\u81F4</p><table><thead><tr><th style="text-align:center;">props</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">required</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">showOk</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">\u5426</td><td>\u662F\u5426\u663E\u793A\u786E\u8BA4\u6309\u94AE\uFF0C\u9ED8\u8BA4\u663E\u793A</td></tr><tr><td style="text-align:center;">showCancel</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">\u5426</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE\uFF0C\u9ED8\u8BA4\u663E\u793A</td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">string or number</td><td style="text-align:center;">1000</td><td style="text-align:center;">\u5426</td><td>\u4FEE\u6539\u4E86\u9ED8\u8BA4\u7684\u5BBD\u5EA6\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u9700\u8981\u4FEE\u6539\u8FD9\u4E2A\u53C2\u6570</td></tr><tr><td style="text-align:center;">handleOk</td><td style="text-align:center;">() =&gt; <code>Promise&lt;any&gt;</code></td><td style="text-align:center;"></td><td style="text-align:center;">\u5426</td><td>\u5982\u679C\u6CA1\u6709\u4F20\u5165 footer slot\uFF0C\u5219\u70B9\u51FB\u9ED8\u8BA4 footer \u5185\u7684\u786E\u8BA4\u6309\u94AE\uFF0C\u4F1A\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u5982\u679C\u6B64\u65B9\u6CD5\u72B6\u6001\u4E3A resolve \u5219\u4F1A\u81EA\u52A8\u5173\u95ED\u5F39\u6846\uFF0C\u5982\u679C\u4E3A reject \u5219\u4E0D\u4F1A\u5173\u95ED\u5F39\u6846\u3002\u4F20\u5165\u6B64\u65B9\u6CD5\u540E\u786E\u8BA4\u6309\u94AE\u7684 loading \u72B6\u6001\u5728\u7EC4\u4EF6\u5185\u90E8\u7BA1\u7406\uFF0C\u65E0\u9700\u4F20\u5165 confirmLoading \u53C2\u6570\u3002</td></tr><tr><td style="text-align:center;">autoHeight</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">\u5426</td><td>\u662F\u5426\u6491\u5F00\u5F39\u6846\uFF0C\u5982\u679C\u4F20\u5165 false\uFF0C\u5F39\u6846\u7684 body \u4F1A\u6709\u6EDA\u52A8\u6761\uFF0C\u5F39\u6846\u4E0D\u4F1A\u8D85\u8FC7\u5C4F\u5E55\u9AD8\u5EA6</td></tr><tr><td style="text-align:center;">footer</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">\u5426</td><td>\u662F\u5426\u663E\u793A footer slot\uFF0C\u4F20\u5165 false \u5219\u4F1A\u9690\u85CF\u5F39\u6846\u5E95\u90E8\u7684 footer \u7EC4\u4EF6</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">name</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">ok</td><td>\u70B9\u51FB\u786E\u5B9A\u7684\u56DE\u8C03</td></tr><tr><td style="text-align:center;">cancel</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u53F3\u4E0A\u89D2\u53C9\u6216\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03</td></tr><tr><td style="text-align:center;">show</td><td>\u5F39\u6846\u663E\u793A\u7684\u56DE\u8C03</td></tr></tbody></table><h2 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">name</th><th>remark</th></tr></thead><tbody><tr><td style="text-align:center;">default</td><td>\u5F39\u6846\u5185\u5BB9\u63D2\u69FD</td></tr><tr><td style="text-align:center;">footer</td><td>\u5F39\u6846\u56FA\u5B9A\u5728\u5E95\u90E8\u7684\u63D2\u69FD\uFF0C\u4E00\u822C\u7528\u4E8E\u653E\u7F6E\u6309\u94AE\uFF0C\u5982\u65E0\u7279\u6B8A\u9700\u6C42\u5219\u4E0D\u9700\u8981\u4F20\u5165</td></tr></tbody></table>',7),T='{"title":"EASIModal - \u5F39\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"}],"relativePath":"zh/components/modal.md","lastUpdated":1634106817609}',w={};function M(s){const t={"../../examples/modal/index.vue":j};return(c,p)=>{const o=a("Demo");return d(),i("div",null,[v,S,n(o,{demos:D(t),source:"%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3EEASIButton%3C%2Fspan%3E%20%40%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvisible%20%3D%20true%26quot%3B%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%E6%89%93%E5%BC%80%E5%BC%B9%E7%AA%97%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3EEASIButton%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ebr%3C%2Fspan%3E%20%2F%26gt%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3EEASIModal%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avisible%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvisible%26quot%3B%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3B%E5%BC%B9%E7%AA%97%E6%A0%87%E9%A2%98%26quot%3B%3C%2Fspan%3E%20%40%3Cspan%20class%3D%22hljs-attr%22%3Ecancel%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%26quot%3Bvisible%20%3D%20false%26quot%3B%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3EEASIModal%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Etemplate%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22language-javascript%22%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C%2Fspan%3E%20%7B%20defineComponent%2C%20ref%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%26%23x27%3Bvue%26%23x27%3B%3C%2Fspan%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%20function_%22%3EdefineComponent%3C%2Fspan%3E(%7B%0A%20%20%3Cspan%20class%3D%22hljs-title%20function_%22%3Esetup%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3E%3C%2Fspan%3E)%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20visible%20%3D%20%3Cspan%20class%3D%22hljs-title%20function_%22%3Eref%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C%2Fspan%3E)%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%7B%20visible%20%7D%3B%0A%20%20%7D%2C%0A%7D)%3B%0A%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Escript%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Estyle%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Estyle%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A",path:"modal/index",html:"%0A%20%20%3CEASIButton%20%40click%3D%22visible%20%3D%20true%22%3E%E6%89%93%E5%BC%80%E5%BC%B9%E7%AA%97%3C%2FEASIButton%3E%0A%20%20%3Cbr%20%2F%3E%0A%20%20%3CEASIModal%20%3Avisible%3D%22visible%22%20title%3D%22%E5%BC%B9%E7%AA%97%E6%A0%87%E9%A2%98%22%20%40cancel%3D%22visible%20%3D%20false%22%3E%E5%86%85%E5%AE%B9%3C%2FEASIModal%3E%0A",js:"%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20visible%20%3D%20ref(false)%3B%0A%20%20%20%20return%20%7B%20visible%20%7D%3B%0A%20%20%7D%2C%0A%7D)%3B%0A",css:"","css-pre-processor":"none","js-pre-processor":"none","raw-source":"%3Ctemplate%3E%0A%20%20%3CEASIButton%20%40click%3D%22visible%20%3D%20true%22%3E%E6%89%93%E5%BC%80%E5%BC%B9%E7%AA%97%3C%2FEASIButton%3E%0A%20%20%3Cbr%20%2F%3E%0A%20%20%3CEASIModal%20%3Avisible%3D%22visible%22%20title%3D%22%E5%BC%B9%E7%AA%97%E6%A0%87%E9%A2%98%22%20%40cancel%3D%22visible%20%3D%20false%22%3E%E5%86%85%E5%AE%B9%3C%2FEASIModal%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20defineComponent%2C%20ref%20%7D%20from%20'vue'%3B%0A%0Aexport%20default%20defineComponent(%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20visible%20%3D%20ref(false)%3B%0A%20%20%20%20return%20%7B%20visible%20%7D%3B%0A%20%20%7D%2C%0A%7D)%3B%0A%3C%2Fscript%3E%0A%0A%3Cstyle%3E%3C%2Fstyle%3E%0A",description:""},{default:l(()=>[k]),_:1},8,["demos"]),I])}}const P=Object.assign(w,{setup:M});export{T as __pageData,P as default};
