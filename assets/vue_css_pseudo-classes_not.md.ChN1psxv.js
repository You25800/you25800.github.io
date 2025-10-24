import{_ as r,c as e,o as h,j as s,B as d,b3 as D,G as t,w as l,a as i}from"./chunks/framework.CatkIGlB.js";const o={},A={class:"base"};function c(k,n){return h(),e("div",A,[...n[0]||(n[0]=[s("p",null,"I am a paragraph.",-1),s("p",{class:"fancy"},"I am so very fancy!",-1),s("div",null,"I am NOT a paragraph.",-1)])])}const g=r(o,[["render",c],["__scopeId","data-v-b78d3e43"]]),F=JSON.parse('{"title":":not","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/pseudo-classes/not.md","filePath":"vue/css/pseudo-classes/not.md","lastUpdated":1691635753000}'),y={name:"vue/css/pseudo-classes/not.md"},E=Object.assign(y,{setup(k){return(n,a)=>{const p=d("demo");return h(),e("div",null,[a[1]||(a[1]=D(`<h1 id="not" tabindex="-1">:not <a class="header-anchor" href="#not" aria-label="Permalink to &quot;:not&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>:not 伪类为不包含指定选择器的元素设置样式规则，称为否定伪类。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">element</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;">not</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">&lt;selector </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&gt;)</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">  ...</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>`,6)),t(p,{customClass:"",sourceCode:`<template>
  <div class="base">
    <p>I am a paragraph.</p>
    <p class="fancy">I am so very fancy!</p>
    <div>I am NOT a paragraph.</div>
  </div>
</template>

<style lang="scss" scoped>
.base {
  .fancy {
    text-shadow: 2px 2px 3px gold;
  }

  /* <p> elements that are not in the class '.fancy' */
  p:not(.fancy) {
    color: green;
  }

  /* Elements that are not <p> elements */
  body :not(p) {
    text-decoration: underline;
  }

  /* Elements that are not <div> and not <span> elements */
  body :not(div):not(span) {
    font-weight: bold;
  }
}
</style>
`,options:"{}"},{highlight:l(()=>[...a[0]||(a[0]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"I am a paragraph."),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"fancy"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"I am so very fancy!"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"I am NOT a paragraph."),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  </"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scss"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .fancy {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    text-shadow: 2px 2px 3px gold;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  /* <p> elements that are not in the class '.fancy' */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  p:not(.fancy) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    color: green;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  /* Elements that are not <p> elements */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  body :not(p) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    text-decoration: underline;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  /* Elements that are not <div> and not <span> elements */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  body :not(div):not(span) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    font-weight: bold;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:l(()=>[t(g)]),_:1})])}}});export{F as __pageData,E as default};
