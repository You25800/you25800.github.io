import{_ as r,o as e,c as t,O as D,Q as y,z as s,D as F,G as a,B as n,R as i,a as l}from"./chunks/framework.318fa179.js";const C={},d=o=>(D("data-v-17be0dc4"),o=o(),y(),o),A={class:"base"},h=d(()=>s("div",null,[s("div",null,"This element isn't counted."),s("p",null,"1st paragraph."),s("p",null,"2nd paragraph."),s("div",null,"This element isn't counted."),s("p",null,"3rd paragraph."),s("p",null,"4th paragraph.")],-1)),_=[h];function u(o,p){return e(),t("div",A,_)}const v=r(C,[["render",u],["__scopeId","data-v-17be0dc4"]]),m=i(`<h1 id="nth-of-type" tabindex="-1">:nth-of-type <a class="header-anchor" href="#nth-of-type" aria-label="Permalink to &quot;:nth-of-type&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>:nth-of-type 伪类用于根据元素树中的编号向指定类型的元素添加样式。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">element</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">nth-of-type</span><span style="color:#A6ACCD;"> (odd </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> even </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;expression</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><ul><li>odd 所有奇数项目编号。</li><li>even 所有项目编号均为偶数。</li><li><code>&lt;number&gt;</code> 子项相对于其父项的序列号。编号从 1 开始，这将是列表中的第一项。</li><li><code>&lt;expression&gt;</code> 它以 an ± b 的形式给出，其中 a 和 b 是整数，n 是一个计数器，自动取值 0、1、2 ... 如果 a 为零，则不写入并且记录减少到 b。如果 b 为零，则也未指定，并且表达式以 an 形式编写。 a 和 b 可以是负数，在这种情况下，加号变为减号，例如：5n-1。 通过使用 a 和 b 的负值，某些结果也可能变为负数或等于零。但是，由于元素编号从 1 开始，元素仅受正值影响。</li></ul><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>`,8),g=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"base"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"This element isn't counted."),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"1st paragraph."),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"2nd paragraph."),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"This element isn't counted."),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"3rd paragraph."),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"4th paragraph."),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"base"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#676E95","font-style":"italic"}},"/* Odd paragraphs */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"p"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#C792EA"}},"nth-of-type"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#A6ACCD"}},"n + "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"color"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," red"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#676E95","font-style":"italic"}},"/* Even paragraphs */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"p"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#C792EA"}},"nth-of-type"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#A6ACCD"}},"n"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"color"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," blue"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#676E95","font-style":"italic"}},"/* First paragraph */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"p"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#C792EA"}},"nth-of-type"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"font-weight"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," bold"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),E=JSON.parse('{"title":":nth-of-type","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/pseudo-classes/nth-of-type.md","filePath":"vue/css/pseudo-classes/nth-of-type.md","lastUpdated":1691635753000}'),f={name:"vue/css/pseudo-classes/nth-of-type.md"},x=Object.assign(f,{setup(o){return(p,b)=>{const c=F("demo");return e(),t("div",null,[m,a(c,{customClass:"",sourceCode:`<template>
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
`},{highlight:n(()=>[g]),default:n(()=>[a(v)]),_:1})])}}});export{E as __pageData,x as default};
