import{_ as d,c as e,o as k,j as s,B as D,b3 as n,G as h,w as t,a as i}from"./chunks/framework.CatkIGlB.js";const A={},g={class:"base"};function c(r,l){return k(),e("div",g,[...l[0]||(l[0]=[s("div",{class:"scroller"},[s("div",null,"1"),s("div",null,"2"),s("div",null,"3"),s("div",null,"4")],-1)])])}const o=d(A,[["render",c],["__scopeId","data-v-30888d4e"]]),F=JSON.parse('{"title":"scroll-margin","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/attr/scroll-margin.md","filePath":"vue/css/attr/scroll-margin.md","lastUpdated":1691547431000}'),y={name:"vue/css/attr/scroll-margin.md"},E=Object.assign(y,{setup(r){return(l,a)=>{const p=D("demo");return k(),e("div",null,[a[1]||(a[1]=n('<h1 id="scroll-margin" tabindex="-1">scroll-margin <a class="header-anchor" href="#scroll-margin" aria-label="Permalink to &quot;scroll-margin&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>scroll-margin 简写属性一次设置元素的所有滚动边距，其分配值与 margin 属性为元素边距所做的操作非常相似。</p><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>',4)),h(p,{customClass:"",sourceCode:`<template>
  <div class="base">
    <div class="scroller">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base {
  .scroller {
    text-align: left;
    width: 250px;
    height: 250px;
    overflow-y: scroll;
    box-sizing: border-box;
    border: 1px solid #000;
    scroll-snap-type: y mandatory;
  }
  .scroller > div {
    width: 230px;
    height: 250px;
    background-color: #663399;
    color: #fff;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
  }

  .scroller > div:nth-child(2n) {
    background-color: #fff;
    color: #663399;
    scroll-margin: 20px;
  }
}
</style>
`,options:"{}"},{highlight:t(()=>[...a[0]||(a[0]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scroller"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"1"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"2"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"3"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"4"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  </"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scss"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .scroller {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    text-align: left;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    width: 250px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    height: 250px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    overflow-y: scroll;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    box-sizing: border-box;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    border: 1px solid #000;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    scroll-snap-type: y mandatory;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .scroller > div {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    width: 230px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    height: 250px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background-color: #663399;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    color: #fff;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    font-size: 30px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    display: flex;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    align-items: center;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    justify-content: center;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    scroll-snap-align: start;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .scroller > div:nth-child(2n) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background-color: #fff;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    color: #663399;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    scroll-margin: 20px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:t(()=>[h(o)]),_:1}),a[2]||(a[2]=n(`<h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* &lt;length&gt; values */</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">scroll-margin</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: 10px;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">scroll-margin</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: 1em 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">5em</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 1em 1em;</span></span></code></pre></div><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><ul><li><code>&lt;length&gt;</code> 从滚动容器的相应边缘开始。</li></ul>`,4))])}}});export{F as __pageData,E as default};
