import{_ as d,c as h,o as k,j as i,B as A,b3 as t,G as l,w as e,a as s}from"./chunks/framework.CatkIGlB.js";const o={},D={class:"base"};function g(p,n){return k(),h("div",D,[...n[0]||(n[0]=[i("div",{class:"progress"},null,-1)])])}const B=d(o,[["render",g],["__scopeId","data-v-e3c20c63"]]),y=JSON.parse('{"title":"animation-timing-function","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/attr/animation-timing-function.md","filePath":"vue/css/attr/animation-timing-function.md","lastUpdated":1690527082000}'),c={name:"vue/css/attr/animation-timing-function.md"},m=Object.assign(c,{setup(p){return(n,a)=>{const r=A("demo");return k(),h("div",null,[a[1]||(a[1]=t('<h1 id="animation-timing-function" tabindex="-1">animation-timing-function <a class="header-anchor" href="#animation-timing-function" aria-label="Permalink to &quot;animation-timing-function&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>该 animation-timing-function 属性确定动画的速度曲线（使用数学函数 - 三次贝塞尔曲线）。速度曲线定义用于将一组 CSS 样式更改为另一组 CSS 样式的动画时间。</p><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>',4)),l(r,{customClass:"",sourceCode:`<template>
  <div class="base"><div class="progress"></div></div>
</template>

<style lang="scss" scoped>
.base {
  .progress {
    background: #333;
    border: 2px solid #333;
    height: 20px;
    position: relative;
  }
  .progress::before {
    animation: progress 5s;
    animation-timing-function: linear;
    animation-duration: 5s;
    animation-fill-mode: forwards;
    -webkit-animation-name: progress;
    -webkit-animation-timing-function: linear;
    -webkit-animation-duration: 5s;
    -webkit-animation-fill-mode: forwards;
    content: "";
    position: absolute;
    height: 100%;
    background: #ffa600;
  }
  @-webkit-keyframes progress {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes progress {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
}
</style>
`,options:"{}"},{highlight:e(()=>[...a[0]||(a[0]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"><"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"progress"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scss"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .progress {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: #333;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    border: 2px solid #333;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    height: 20px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    position: relative;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .progress::before {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    animation: progress 5s;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    animation-timing-function: linear;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    animation-duration: 5s;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    animation-fill-mode: forwards;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-animation-name: progress;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-animation-timing-function: linear;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-animation-duration: 5s;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-animation-fill-mode: forwards;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},'    content: "";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    position: absolute;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    height: 100%;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: #ffa600;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  @-webkit-keyframes progress {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    from {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      width: 0;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    to {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      width: 100%;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  @keyframes progress {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    from {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      width: 0;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    to {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      width: 100%;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:e(()=>[l(B)]),_:1}),a[2]||(a[2]=t(`<h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">animation-timing-function</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: ease </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> linear </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;"> ease-in</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;"> ease-out</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;"> ease-in-out</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">  step-start</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;"> step-end</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> steps(&lt;integer</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&gt;[</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">, [ </span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;">start</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> end</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">]?) | cubic-bezier(</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">    &lt;number</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">    &lt;number</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">    &lt;number</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">    &lt;number</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">  );</span></span></code></pre></div><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><ul><li>ease 缓动函数等效于 cubic-bezier(0.25， 0.1， 0.25， 1)。</li><li>linear 线性函数等价于 cubic-bezier(0， 0， 1， 1)。</li><li>ease-in 缓入函数等效于 cubic-bezier(0.42， 0， 1， 1)。</li><li>ease-out 缓出函数等效于 cubic-bezier(0， 0， 0.58， 1).</li><li>ease-in-out 缓入函数相当于 cubic-bezier(0.42， 0， 0.58， 1)</li><li>step-start 步进启动函数等效于 steps(1， start)。</li><li>step-end 步进结束函数等效于 steps(1， end)。</li><li>steps(<code>&lt;integer&gt;</code>[, [ start | end ] ]?) 指定采用两个参数的上述步进函数。第一个参数指定函数中的间隔数。它必须是正整数（大于 0）。第二个参数是可选的，是值“开始”或“结束”，并指定值在间隔内发生更改的点。如果省略第二个参数，则为其赋值“end”。</li><li>cubic-bezier(<code>&lt;number&gt;, &lt;number&gt;, &lt;number&gt;, &lt;number&gt;</code>) 指定三次贝塞尔曲线。这四个值将曲线的点 P1 和 P2 指定为 （x1， y1， x2， y2）。两个 x 值都必须在 [0， 1] 范围内，否则定义无效。y 值可以超出此范围。</li></ul>`,4))])}}});export{y as __pageData,m as default};
