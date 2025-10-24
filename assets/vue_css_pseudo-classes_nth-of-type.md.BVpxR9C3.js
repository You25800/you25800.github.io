import{_ as r,c as n,o as e,j as s,B as d,b3 as D,G as l,w as t,a as i}from"./chunks/framework.CatkIGlB.js";const g={},A={class:"base"};function F(k,h){return e(),n("div",A,[...h[0]||(h[0]=[s("div",null,[s("div",null,"This element isn't counted."),s("p",null,"1st paragraph."),s("p",null,"2nd paragraph."),s("div",null,"This element isn't counted."),s("p",null,"3rd paragraph."),s("p",null,"4th paragraph.")],-1)])])}const y=r(g,[["render",F],["__scopeId","data-v-17be0dc4"]]),c=JSON.parse('{"title":":nth-of-type","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/pseudo-classes/nth-of-type.md","filePath":"vue/css/pseudo-classes/nth-of-type.md","lastUpdated":1691635753000}'),B={name:"vue/css/pseudo-classes/nth-of-type.md"},E=Object.assign(B,{setup(k){return(h,a)=>{const p=d("demo");return e(),n("div",null,[a[1]||(a[1]=D(`<h1 id="nth-of-type" tabindex="-1">:nth-of-type <a class="header-anchor" href="#nth-of-type" aria-label="Permalink to &quot;:nth-of-type&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>:nth-of-type 伪类用于根据元素树中的编号向指定类型的元素添加样式。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">element</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">nth-of-type</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> (odd </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> even </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> &lt;number</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> &lt;expression</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">) </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">{</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">  ...</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">;</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><ul><li>odd 所有奇数项目编号。</li><li>even 所有项目编号均为偶数。</li><li><code>&lt;number&gt;</code> 子项相对于其父项的序列号。编号从 1 开始，这将是列表中的第一项。</li><li><code>&lt;expression&gt;</code> 它以 an ± b 的形式给出，其中 a 和 b 是整数，n 是一个计数器，自动取值 0、1、2 ... 如果 a 为零，则不写入并且记录减少到 b。如果 b 为零，则也未指定，并且表达式以 an 形式编写。 a 和 b 可以是负数，在这种情况下，加号变为减号，例如：5n-1。 通过使用 a 和 b 的负值，某些结果也可能变为负数或等于零。但是，由于元素编号从 1 开始，元素仅受正值影响。</li></ul><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>`,8)),l(p,{customClass:"",sourceCode:`<template>
  <div class="base">
    <div>
      <div>This element isn't counted.</div>
      <p>1st paragraph.</p>
      <p>2nd paragraph.</p>
      <div>This element isn't counted.</div>
      <p>3rd paragraph.</p>
      <p>4th paragraph.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base {
  /* Odd paragraphs */
  p:nth-of-type(2n + 1) {
    color: red;
  }

  /* Even paragraphs */
  p:nth-of-type(2n) {
    color: blue;
  }

  /* First paragraph */
  p:nth-of-type(1) {
    font-weight: bold;
  }
}
</style>
`,options:"{}"},{highlight:t(()=>[...a[0]||(a[0]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"This element isn't counted."),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"1st paragraph."),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"2nd paragraph."),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"This element isn't counted."),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"3rd paragraph."),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"4th paragraph."),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  </"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scss"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  /* Odd paragraphs */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  p:nth-of-type(2n + 1) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    color: red;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  /* Even paragraphs */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  p:nth-of-type(2n) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    color: blue;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  /* First paragraph */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  p:nth-of-type(1) {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    font-weight: bold;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:t(()=>[l(y)]),_:1})])}}});export{c as __pageData,E as default};
