import{_ as r,c as e,o as k,j as s,B as D,b3 as n,G as t,w as h,a as i}from"./chunks/framework.CatkIGlB.js";const A={},g={class:"base"};function o(p,l){return k(),e("div",g,[...l[0]||(l[0]=[s("div",{class:"main"},[s("div",{class:"left"}),s("div",{class:"right"}),s("p",null," Sometimes a web page's text content appears to be funneling your attention towards a spot on the page to drive you to follow a particular link. Sometimes you don't notice. ")],-1)])])}const B=r(A,[["render",o],["__scopeId","data-v-37f5b573"]]),E=JSON.parse('{"title":"shape-outside","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/attr/shape-outside.md","filePath":"vue/css/attr/shape-outside.md","lastUpdated":1691547431000}'),y={name:"vue/css/attr/shape-outside.md"},F=Object.assign(y,{setup(p){return(l,a)=>{const d=D("demo");return k(),e("div",null,[a[1]||(a[1]=n('<h1 id="shape-outside" tabindex="-1">shape-outside <a class="header-anchor" href="#shape-outside" aria-label="Permalink to &quot;shape-outside&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>shape-outside CSS 属性定义了一个形状（可能是非矩形），相邻的内联内容应环绕该形状。默认情况下，内联内容环绕其边距框； shape-outside 提供了一种自定义这种环绕的方法，使得可以将文本环绕复杂的对象而不是简单的框。</p><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>',4)),t(d,{customClass:"",sourceCode:`<template>
  <div class="base">
    <div class="main">
      <div class="left"></div>
      <div class="right"></div>
      <p>
        Sometimes a web page's text content appears to be funneling your
        attention towards a spot on the page to drive you to follow a particular
        link. Sometimes you don't notice.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base {
  .main {
    width: 530px;
  }

  .left,
  .right {
    background-color: lightgray;
    height: 12ex;
    width: 40%;
  }

  .left {
    clip-path: polygon(0 0, 100% 100%, 0 100%);
    float: left;
    shape-outside: polygon(0 0, 100% 100%, 0 100%);
  }

  .right {
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    float: right;
    shape-outside: polygon(100% 0, 100% 100%, 0 100%);
  }

  p {
    text-align: center;
  }
}
</style>
`,options:"{}"},{highlight:h(()=>[...a[0]||(a[0]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"main"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"left"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"right"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"        Sometimes a web page's text content appears to be funneling your")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"        attention towards a spot on the page to drive you to follow a particular")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"        link. Sometimes you don't notice.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      </"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  </"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scss"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .main {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    width: 530px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .left,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .right {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background-color: lightgray;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    height: 12ex;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    width: 40%;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .left {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    clip-path: polygon(0 0, 100% 100%, 0 100%);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    float: left;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    shape-outside: polygon(0 0, 100% 100%, 0 100%);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .right {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    clip-path: polygon(100% 0, 100% 100%, 0 100%);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    float: right;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    shape-outside: polygon(100% 0, 100% 100%, 0 100%);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  p {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    text-align: center;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:h(()=>[t(B)]),_:1}),a[2]||(a[2]=n(`<h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* Keyword values */</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: none;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">margin-box</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">content-box</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">border-box</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">;</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">padding-box</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* Function values */</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: circle();</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: ellipse();</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: inset(10px 10px 10px 10px);</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: polygon(10px 10px</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 20px 20px</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 30px 30px);</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: path(&quot;M100</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">0 A100</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">100 0 1</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">1 100</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">200 A100</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">100 0 1</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">1 100</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">0&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* &lt;url&gt; value */</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: url(</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">image</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">png</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* &lt;gradient&gt; value */</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">shape-outside</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: linear-gradient(45deg</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> #</span><span style="--shiki-light:#F76D47;--shiki-dark:#F78C6C;">fff</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 150px</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> red 150px);</span></span></code></pre></div><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><ul><li>none 浮动区域不受影响。像往常一样，内联内容环绕元素的边距框。</li><li><code>&lt;shape-box&gt;</code> 浮动区域是根据浮动元素边缘的形状（由 CSS 框模型定义）计算的。这可以是 margin-box 、 border-box 、 padding-box 或 content-box 。该形状包括由 border-radius 属性创建的任何曲率（行为类似于 background-clip ）。</li><li>margin-box 定义由外边距边缘包围的形状。该形状的角半径由相应的 border-radius 和 margin 值确定。如果 border-radius / margin 比率为 1 或更大，则边距框角半径为 border-radius + margin 。如果该比率小于 1 ，则边距框角半径为 border-radius + (margin * (1 + (ratio - 1) ^ 3)) 。</li><li>border-box 定义由外边框边缘包围的形状。该形状遵循边界外部的正常边界半径成形规则。</li><li>padding-box 定义外部填充边缘包围的形状。该形状遵循边框内部的正常边框半径成形规则。</li><li>content-box 定义外部内容边缘包围的形状。该框的每个角半径是 0 或 border-radius - border-width - padding 中较大的一个。</li><li><code>&lt;basic-shape&gt;</code> 浮动区域是根据 inset() 、 circle() 、 ellipse() 、 polygon() 之一创建的形状计算的，或者添加在 2 级规范 path() 。如果还提供了 <code>&lt;shape-box&gt;</code> ，则它定义 <code>&lt;basic-shape&gt;</code> 函数的引用框。否则，引用框默认为 margin-box 。</li><li><code>&lt;image&gt;</code> 根据 shape-image-threshold 定义的指定 <code>&lt;image&gt;</code> 的 Alpha 通道提取和计算浮动区域。</li></ul>`,4))])}}});export{E as __pageData,F as default};
