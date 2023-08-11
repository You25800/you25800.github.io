import{_ as D,o,c as e,O as y,Q as F,z as s,D as i,G as n,B as t,R as C,a}from"./chunks/framework.318fa179.js";const A={},p=l=>(y("data-v-d5265731"),l=l(),F(),l),d={class:"base"},h=p(()=>s("p",null,"The attr() Function",-1)),_=p(()=>s("a",{href:"https://www.cssportal.com"},"CSSPortal",-1)),u=[h,_];function m(l,c){return o(),e("div",d,u)}const g=D(A,[["render",m],["__scopeId","data-v-d5265731"]]),f=C(`<h1 id="attr" tabindex="-1">attr() <a class="header-anchor" href="#attr" aria-label="Permalink to &quot;attr()&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>attr() CSS 函数返回属性的值。这意味着您可以使用任何自定义属性在 html 标记中定义内容，然后使用 attr() 获取值。目前它仅适用于内容属性，但对其他属性的支持目前处于实验阶段。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">attr( &lt;</span><span style="color:#FFCB6B;">attr-name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">type-or-unit</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">? </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> , &lt;attr-fallback&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">? )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Simple usage */</span></span>
<span class="line"><span style="color:#A6ACCD;">attr(</span><span style="color:#FFCB6B;">data-count</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">attr(</span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* With type */</span></span>
<span class="line"><span style="color:#A6ACCD;">attr(src url);</span></span>
<span class="line"><span style="color:#A6ACCD;">attr(</span><span style="color:#FFCB6B;">data-count</span><span style="color:#A6ACCD;"> number);</span></span>
<span class="line"><span style="color:#A6ACCD;">attr(</span><span style="color:#FFCB6B;">data-width</span><span style="color:#A6ACCD;"> px);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* With fallback */</span></span>
<span class="line"><span style="color:#A6ACCD;">attr(</span><span style="color:#FFCB6B;">data-count</span><span style="color:#A6ACCD;"> number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0);</span></span>
<span class="line"><span style="color:#A6ACCD;">attr(src url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> &quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">attr(</span><span style="color:#FFCB6B;">data-width</span><span style="color:#A6ACCD;"> px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> inherit);</span></span>
<span class="line"><span style="color:#A6ACCD;">attr(</span><span style="color:#FFCB6B;">data-something</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> &quot;default&quot;);</span></span></code></pre></div><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><ul><li><code>&lt;attr-name&gt;</code> 是 CSS 中引用的 HTML 元素的属性名称。</li><li><code>&lt;type-or-unit&gt;</code> 是一个关键字，表示属性值的类型或其单位，如 HTML 中的某些属性具有隐式单位。以下关键字有效： <code>&lt;string&gt;, &lt;color&gt;, &lt;url&gt;, &lt;integer&gt;, &lt;number&gt;, &lt;angle&gt;, &lt;time&gt;, &lt;deg&gt;</code>, 以及 CSS 单位，如 em、ex、px、rem 、vw、vh、vmin、vmax、mm、cm、in、pt 或 pc</li><li><code>&lt;attr-fallback&gt;</code> 如果该属性不存在或浏览器无法接收该属性，则将使用该值。</li></ul><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>`,8),B=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"base"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"The attr() Function"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"a"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"href"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"https://www.cssportal.com"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"CSSPortal"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"a"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"base"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"a"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#C792EA"}},"before"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#FFCB6B"}},"content"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"attr"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"href"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}}," -> "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#FFCB6B"}},"a"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"text-decoration"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," none"),s("span",{style:{color:"#89DDFF"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),x=JSON.parse('{"title":"attr()","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/function/attr.md","filePath":"vue/css/function/attr.md","lastUpdated":1691713347000}'),b={name:"vue/css/function/attr.md"},q=Object.assign(b,{setup(l){return(c,v)=>{const r=i("demo");return o(),e("div",null,[f,n(r,{customClass:"",sourceCode:`<template>
  <div class="base">
    <p>The attr() Function</p>
    <a href="https://www.cssportal.com">CSSPortal</a>
  </div>
</template>

<style lang="scss" scoped>
.base {
  a:before {
    content: attr(href) " -> ";
  }
  a {
    text-decoration: none;
  }
}
</style>
`},{highlight:t(()=>[B]),default:t(()=>[n(g)]),_:1})])}}});export{x as __pageData,q as default};
