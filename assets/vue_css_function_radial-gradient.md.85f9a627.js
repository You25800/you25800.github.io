import{_ as r,o as e,c as t,O as D,Q as y,z as s,D as F,G as o,B as n,R as C,a as l}from"./chunks/framework.318fa179.js";const i={},A=a=>(D("data-v-c2c7cdfa"),a=a(),y(),a),d={class:"base"},g=A(()=>s("div",{class:"radial"},"Radial gradient example.",-1)),h=[g];function _(a,p){return e(),t("div",d,h)}const u=r(i,[["render",_],["__scopeId","data-v-c2c7cdfa"]]),m=C(`<h1 id="radial-gradient" tabindex="-1">radial-gradient() <a class="header-anchor" href="#radial-gradient" aria-label="Permalink to &quot;radial-gradient()&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>radial-gradient() CSS 函数向元素的背景添加径向渐变。径向渐变原则上类似于线性渐变，但一种颜色不会沿着直线变为另一种颜色，而是像水面上围绕一个点的圆圈一样。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">radial-gradient</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> = radial-gradient(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> [ </span><span style="color:#C792EA;">circle</span><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> &lt;length&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">                          </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> at &lt;position&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">? </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ellipse</span><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> [ &lt;length&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;percentage&gt; </span><span style="color:#89DDFF;">]{</span><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> ]    </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> at &lt;position&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">? </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> [ </span><span style="color:#C792EA;">circle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">ellipse</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">| &lt;</span><span style="color:#FFCB6B;">extent-keyword</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ]                  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> at &lt;position&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">? </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">    at &lt;position</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]?</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;</span><span style="color:#FFCB6B;">color-stop</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> , &lt;color-stop&gt; </span><span style="color:#89DDFF;">]+</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* where.. */</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">extent-keyword</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> = </span><span style="color:#FFCB6B;">closest-corner</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">closest-side</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">farthest-corner</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">farthest-side</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* and */</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">color-stop</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> = &lt;color</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> &lt;percentage&gt; </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> &lt;length&gt; </span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">?</span></span></code></pre></div><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><ul><li><code>&lt;position&gt;</code> 渐变的位置，其解释方式与背景位置或变换原点相同。如果未指定，则默认居中。</li><li><code>&lt;shape&gt;</code> 渐变的形状。该值可以是圆形（意味着渐变的形状是具有恒定半径的圆形）或椭圆形（意味着形状是与轴对齐的椭圆）。如果未指定，则默认为椭圆形。</li><li><code>&lt;extent-keyword&gt;</code> 描述结束形状必须有多大的关键字。可能的值为： <ul><li>closest-side 最近侧</li><li>closest-corner 最近角点</li><li>farthest-side 最远边</li><li>farthest-corner 最远角</li></ul></li><li><code>&lt;linear-color-stop&gt;</code> 颜色停止点的 值，后跟一个或两个可选停止位置（沿渐变轴的 或 ）。百分比为 0%，或者长度为 0，代表渐变的中心；值 100% 表示结束形状与虚拟梯度射线的交集。之间的百分比值线性定位在梯度射线上。包含两个停止位置相当于在两个位置声明两个具有相同颜色的颜色停止点。</li><li><code>&lt;color-hint&gt;</code> 颜色提示是一个插值提示，定义相邻颜色停止点之间的渐变如何进行。长度定义了渐变颜色应在两个颜色停止之间的哪个点到达颜色过渡的中点。如果省略，则颜色过渡的中点是两个颜色停止点之间的中点。</li></ul><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>`,8),B=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"base"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"><"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"radial"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"Radial gradient example."),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#F07178"}},"div"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"scss"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"scoped"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"base"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#FFCB6B"}},"radial"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"background"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"radial-gradient"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"yellow"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#A6ACCD"}}," green"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"color"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," white"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"padding"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"30px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"margin"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"10px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"height"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"160px"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"font-size"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1.5em"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#B2CCD6"}},"text-align"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," center"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"style"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),b=JSON.parse('{"title":"radial-gradient()","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/function/radial-gradient.md","filePath":"vue/css/function/radial-gradient.md","lastUpdated":1691713347000}'),f={name:"vue/css/function/radial-gradient.md"},E=Object.assign(f,{setup(a){return(p,v)=>{const c=F("demo");return e(),t("div",null,[m,o(c,{customClass:"",sourceCode:`<template>
  <div class="base"><div class="radial">Radial gradient example.</div></div>
</template>

<style lang="scss" scoped>
.base {
  .radial {
    background: radial-gradient(yellow, green);
    color: white;
    padding: 30px;
    margin: 10px;
    height: 160px;
    font-size: 1.5em;
    text-align: center;
  }
}
</style>
`},{highlight:n(()=>[B]),default:n(()=>[o(u)]),_:1})])}}});export{b as __pageData,E as default};