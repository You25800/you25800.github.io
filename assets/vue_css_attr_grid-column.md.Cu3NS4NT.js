import{_ as r,c as h,o as k,j as i,B as g,b3 as n,G as t,w as e,a as s}from"./chunks/framework.CatkIGlB.js";const c={},D={class:"base"};function o(p,l){return k(),h("div",D,[...l[0]||(l[0]=[i("div",{id:"grid"},[i("div",{id:"item1"}),i("div",{id:"item2"}),i("div",{id:"item3"})],-1)])])}const A=r(c,[["render",o],["__scopeId","data-v-dc31ccf8"]]),E=JSON.parse('{"title":"grid-column","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/attr/grid-column.md","filePath":"vue/css/attr/grid-column.md","lastUpdated":1690962385000}'),B={name:"vue/css/attr/grid-column.md"},F=Object.assign(B,{setup(p){return(l,a)=>{const d=g("demo");return k(),h("div",null,[a[1]||(a[1]=n('<h1 id="grid-column" tabindex="-1">grid-column <a class="header-anchor" href="#grid-column" aria-label="Permalink to &quot;grid-column&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>该 grid-column 属性控制网格项在网格区域中的位置，特别是网格位置和网格范围。在单个声明中设置网格列开始和网格列结束的简写。</p><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>',4)),t(d,{customClass:"",sourceCode:`<template>
  <div class="base">
    <div id="grid">
      <div id="item1"></div>
      <div id="item2"></div>
      <div id="item3"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base {
  #grid {
    display: grid;
    height: 100px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 100px;
  }
  #item1 {
    background-color: lime;
  }
  #item2 {
    background-color: yellow;
    grid-column: 2 / 4;
  }
  #item3 {
    background-color: blue;
    grid-column: span 2 / 7;
  }
}
</style>
`,options:"{}"},{highlight:e(()=>[...a[0]||(a[0]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," id"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"grid"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," id"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"item1"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," id"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"item2"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," id"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"item3"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scss"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  #grid {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    display: grid;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    height: 100px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    grid-template-columns: repeat(6, 1fr);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    grid-template-rows: 100px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  #item1 {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background-color: lime;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  #item2 {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background-color: yellow;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    grid-column: 2 / 4;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  #item3 {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background-color: blue;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    grid-column: span 2 / 7;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:e(()=>[t(A)]),_:1}),a[2]||(a[2]=n(`<h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* Keyword values */</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: auto;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: auto / auto;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* &lt;custom-ident&gt; values */</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: somegridarea;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: somegridarea / someothergridarea;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* &lt;integer&gt; + &lt;custom-ident&gt; values */</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: somegridarea 4;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: 4 somegridarea / 6;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* span + &lt;integer&gt; + &lt;custom-ident&gt; values */</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">span</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 3;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">span</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> somegridarea;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: 5 somegridarea span;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">span</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 3 / 6;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">span</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> somegridarea / </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">span</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> someothergridarea;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: 5 somegridarea </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">span</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> / 2 span;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* Global values */</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: inherit;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: initial;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: revert;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">revert-layer</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">grid-column</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: unset;</span></span></code></pre></div><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><ul><li>auto 是一个关键字，指示该属性对网格项的放置没有任何贡献，指示自动放置、自动跨度或默认跨度<code>1</code>。</li><li><code>&lt;custom-ident&gt;</code> 如果存在名为<code>&lt;custom-ident&gt;-start</code>/的命名行<code>&lt;custom-ident&gt;-end</code>，则会将第一条此类行贡献给网格项的放置。</li></ul><p>::: waining 注意 命名网格区域会自动生成这种形式的隐式命名线，因此指定<code>grid-column: foo;</code>将选择该命名网格区域的开始/结束边缘（除非在其之前显式指定了另一条名为<code>foo-start</code>/的线）。<code>foo-end</code> 否则，这将被视为整数<code>1</code>已与 一起指定<code>&lt;custom-ident&gt;</code>。 :::</p><ul><li><p><code>&lt;integer&gt; &amp;&amp; &lt;custom-ident&gt;?</code> 将第 n 条网格线贡献给网格项的位置。如果给出负整数，则从显式网格的结束边缘开始反向计数。 如果名称指定为 a <code>&lt;custom-ident&gt;</code>，则仅计算具有该名称的行。如果没有足够的具有该名称的线，则假定所有隐式网格线都具有该名称，以便查找该位置。 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/integer" target="_blank" rel="noreferrer">\`\`</a>的值无效<code>0</code>。</p></li><li><p><code>span &amp;&amp; [ &lt;integer&gt; || &lt;custom-ident&gt; ]</code> 为网格项的放置提供网格跨度，使得网格项的网格区域的相应边缘距相对边缘 n 行。 如果名称指定为 a <code>&lt;custom-ident&gt;</code>，则仅计算具有该名称的行。如果不存在足够多的具有该名称的线，则假定与搜索方向相对应的显式网格一侧的所有隐式网格线都具有该名称，以便计算该跨度。 如果<code>&lt;integer&gt;</code>省略，则默认为<code>1</code>。负整数或 0 无效。</p></li></ul>`,6))])}}});export{E as __pageData,F as default};
