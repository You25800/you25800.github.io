import{_ as D,c as k,o as e,b3 as l,B as d,G as h,w as n,j as i,a as s}from"./chunks/framework.CatkIGlB.js";const A={},g={class:"base"};function B(p,t){return e(),k("div",g,[...t[0]||(t[0]=[l('<div class="cube" data-v-c7484fc4><div class="side front" data-v-c7484fc4>1</div><div class="side back" data-v-c7484fc4>6</div><div class="side right" data-v-c7484fc4>4</div><div class="side left" data-v-c7484fc4>3</div><div class="side top" data-v-c7484fc4>5</div><div class="side bottom" data-v-c7484fc4>2</div></div>',1)])])}const y=D(A,[["render",B],["__scopeId","data-v-c7484fc4"]]),c=JSON.parse('{"title":"align","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/attr/perspective-origin.md","filePath":"vue/css/attr/perspective-origin.md","lastUpdated":1691566697000}'),E={name:"vue/css/attr/perspective-origin.md"},o=Object.assign(E,{setup(p){return(t,a)=>{const r=d("demo");return e(),k("div",null,[a[1]||(a[1]=l('<h1 id="align" tabindex="-1">align <a class="header-anchor" href="#align" aria-label="Permalink to &quot;align&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>perspective-origin 属性设置观察者所注视的点的坐标。该属性与视角属性一起使用，并确定视角中线条的汇聚点。</p><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>',4)),h(r,{customClass:"",sourceCode:`<template>
  <div class="base">
    <div class="cube">
      <div class="side front">1</div>
      <div class="side back">6</div>
      <div class="side right">4</div>
      <div class="side left">3</div>
      <div class="side top">5</div>
      <div class="side bottom">2</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base {
  .cube {
    font-size: 5em;
    width: 2em;
    height: 2em;
    margin: 1em auto;
    transform-style: preserve-3d;
    perspective: 500px;
    animation: move-origin infinite 2s;
  }
  .side {
    position: absolute;
    width: 2em;
    height: 2em;
    background: rgba(255, 99, 71, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    line-height: 2em;
  }
  .front {
    transform: translateZ(1em);
  }
  .top {
    transform: rotateX(90deg) translateZ(1em);
  }
  .right {
    transform: rotateY(90deg) translateZ(1em);
  }
  .left {
    transform: rotateY(-90deg) translateZ(1em);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(1em);
  }
  .back {
    transform: rotateY(-180deg) translateZ(1em);
  }
  @keyframes move-origin {
    0% {
      perspective-origin: 0 0;
    }
    25% {
      perspective-origin: 100% 0;
    }
    50% {
      perspective-origin: 100% 100%;
    }
    75% {
      perspective-origin: 0 100%;
    }
    100% {
      perspective-origin: 0 0;
    }
  }
}
</style>
`,options:"{}"},{highlight:n(()=>[...a[0]||(a[0]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"cube"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"side front"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"1"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"side back"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"6"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"side right"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"4"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"side left"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"3"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"side top"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"5"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"side bottom"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"2"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scss"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .cube {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    font-size: 5em;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    width: 2em;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    height: 2em;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    margin: 1em auto;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform-style: preserve-3d;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    perspective: 500px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    animation: move-origin infinite 2s;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .side {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    position: absolute;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    width: 2em;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    height: 2em;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: rgba(255, 99, 71, 0.6);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    border: 1px solid rgba(0, 0, 0, 0.5);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    color: white;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    text-align: center;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    line-height: 2em;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .front {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: translateZ(1em);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .top {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: rotateX(90deg) translateZ(1em);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .right {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: rotateY(90deg) translateZ(1em);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .left {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: rotateY(-90deg) translateZ(1em);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .bottom {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: rotateX(-90deg) translateZ(1em);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .back {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: rotateY(-180deg) translateZ(1em);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  @keyframes move-origin {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    0% {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      perspective-origin: 0 0;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    25% {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      perspective-origin: 100% 0;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    50% {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      perspective-origin: 100% 100%;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    75% {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      perspective-origin: 0 100%;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    100% {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      perspective-origin: 0 0;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:n(()=>[h(y)]),_:1}),a[2]||(a[2]=l(`<h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">perspective-origin</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">[</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> left</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> center</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> right</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> top</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> bottom</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> &lt;percentage&gt; </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">|</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">  &lt;length&gt;</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> [</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> left</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> center</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> right</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> &lt;percentage&gt; </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> &lt;length&gt;</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> [</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> top</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> center</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">  |</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> bottom</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> &lt;percentage&gt; </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">|</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> &lt;length&gt;</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> [</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> center</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ </span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;">left</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> right</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">] &amp;&amp; </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">[</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> center</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">  |</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ </span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;">top</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> |</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> bottom</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">];</span></span></code></pre></div><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><ul><li><code>&lt;length&gt;</code> 长度值给出固定长度作为偏移量。水平和垂直偏移的值表示距边界框左上角的偏移。</li><li><code>&lt;percentage&gt;</code> 水平透视偏移的百分比是相对于边界框的宽度的。垂直偏移的百分比是相对于边界框的高度的。水平和垂直偏移的值表示距边界框左上角的偏移。</li><li>bottom 底部,垂直位置计算为“100%”。</li><li>center 如果未另外指定水平位置，则计算为水平位置的“50%”（“左侧 50%”）；如果指定，则计算为垂直位置的“50%”（“顶部 50%”）。</li><li>left 水平位置计算为“0%”。</li><li>right 计算水平位置的“100%”。</li><li>top 垂直位置计算为“0%”。</li></ul>`,4))])}}});export{c as __pageData,o as default};
