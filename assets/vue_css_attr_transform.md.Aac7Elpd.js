import{_ as D,c as k,o as e,b3 as l,B as A,G as n,w as h,j as s,a as i}from"./chunks/framework.CatkIGlB.js";const d={},B={class:"base"};function g(r,t){return e(),k("div",B,[...t[0]||(t[0]=[l('<h2 data-v-81629df0>2D CSS Conversions</h2><div class="static" data-v-81629df0><div class="test" data-v-81629df0>translate (-20px, -20px)</div></div><div class="static" data-v-81629df0><div class="test2" data-v-81629df0>scaleX (.5)</div></div><div class="static" data-v-81629df0><div class="test3" data-v-81629df0>scale (0, 0.5)</div></div><br data-v-81629df0><div class="static" data-v-81629df0><div class="test4" data-v-81629df0>rotate (2turn)</div></div><div class="static" data-v-81629df0><div class="test5" data-v-81629df0>skewY (20deg)</div></div><div class="static" data-v-81629df0><div class="test6" data-v-81629df0>matrix (.7,0, .5, .7, -99, -99)</div></div>',8)])])}const y=D(d,[["render",g],["__scopeId","data-v-81629df0"]]),c=JSON.parse('{"title":"transform","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/attr/transform.md","filePath":"vue/css/attr/transform.md","lastUpdated":1691547431000}'),E={name:"vue/css/attr/transform.md"},o=Object.assign(E,{setup(r){return(t,a)=>{const p=A("demo");return e(),k("div",null,[a[1]||(a[1]=l('<h1 id="transform" tabindex="-1">transform <a class="header-anchor" href="#transform" aria-label="Permalink to &quot;transform&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>transform CSS 属性允许您旋转、缩放、倾斜或平移元素。它修改 CSS 视觉格式化模型的坐标空间。</p><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2>',4)),n(p,{customClass:"",sourceCode:`<template>
  <div class="base">
    <h2>2D CSS Conversions</h2>
    <div class="static"><div class="test">translate (-20px, -20px)</div></div>
    <div class="static"><div class="test2">scaleX (.5)</div></div>
    <div class="static"><div class="test3">scale (0, 0.5)</div></div>
    <br />
    <div class="static"><div class="test4">rotate (2turn)</div></div>
    <div class="static"><div class="test5">skewY (20deg)</div></div>
    <div class="static">
      <div class="test6">matrix (.7,0, .5, .7, -99, -99)</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base {
  .static {
    margin: 10px;
    background: gray;
    display: inline-block;
  }
  div {
    width: 180px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    transition: 0.3s linear;
    -moz-transition: 0.3s linear;
    -webkit-transition: 0.3s linear;
  }
  .test2,
  .test4,
  .test6 {
    background: orange;
  }
  .test,
  .test3,
  .test5 {
    background: plum;
  }
  .test:hover {
    transform: translate(-20px, -20px);
    -webkit-transform: translate(-20px, -20px);
    -moz-transform: translate(-20px, -20px);
    -ms-transform: translate(-20px, -20px);
  }
  .test2:hover {
    transform: scaleX(0.5);
    -webkit-transform: scaleX(0.5);
    -moz-transform: scaleX(0.5);
    -ms-transform: scaleX(0.5);
  }
  .test3:hover {
    transform: scale(0, 0.5);
    -webkit-transform: scale(0, 0.5);
    -moz-transform: scale(0, 0.5);
    -ms-transform: scale(0, 0.5);
  }
  .test4:hover {
    transform: rotate(2turn);
    -webkit-transform: rotate(2turn);
    -moz-transform: rotate(2turn);
    -ms-transform: rotate(2turn);
  }
  .test5:hover {
    transform: skewY(20deg);
    -webkit-transform: skewY(20deg);
    -moz-transform: skewY(20deg);
    -ms-transform: skewY(20deg);
  }
  .test6:hover {
    transform: matrix(0.7, 0, 0.5, 0.7, -99, -99);
    -webkit-transform: matrix(0.7, 0, 0.5, 0.7, -99, -99);
    -moz-transform: matrix(0.7, 0, 0.5, 0.7, -99, -99);
    -ms-transform: matrix(0.7, 0, 0.5, 0.7, -99, -99);
  }
}
</style>
`,options:"{}"},{highlight:h(()=>[...a[0]||(a[0]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"h2"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"2D CSS Conversions"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"h2"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"static"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"><"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"test"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"translate (-20px, -20px)"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"static"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"><"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"test2"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"scaleX (.5)"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"static"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"><"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"test3"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"scale (0, 0.5)"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"br"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," />")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"static"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"><"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"test4"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"rotate (2turn)"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"static"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"><"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"test5"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"skewY (20deg)"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"static"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"test6"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"matrix (.7,0, .5, .7, -99, -99)"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  </"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scss"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),s("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .static {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    margin: 10px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: gray;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    display: inline-block;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  div {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    width: 180px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    height: 100px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    text-align: center;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    line-height: 100px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transition: 0.3s linear;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -moz-transition: 0.3s linear;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-transition: 0.3s linear;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test2,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test4,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test6 {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: orange;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test3,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test5 {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: plum;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test:hover {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: translate(-20px, -20px);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-transform: translate(-20px, -20px);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -moz-transform: translate(-20px, -20px);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -ms-transform: translate(-20px, -20px);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test2:hover {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: scaleX(0.5);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-transform: scaleX(0.5);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -moz-transform: scaleX(0.5);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -ms-transform: scaleX(0.5);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test3:hover {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: scale(0, 0.5);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-transform: scale(0, 0.5);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -moz-transform: scale(0, 0.5);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -ms-transform: scale(0, 0.5);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test4:hover {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: rotate(2turn);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-transform: rotate(2turn);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -moz-transform: rotate(2turn);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -ms-transform: rotate(2turn);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test5:hover {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: skewY(20deg);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-transform: skewY(20deg);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -moz-transform: skewY(20deg);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -ms-transform: skewY(20deg);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .test6:hover {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: matrix(0.7, 0, 0.5, 0.7, -99, -99);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -webkit-transform: matrix(0.7, 0, 0.5, 0.7, -99, -99);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -moz-transform: matrix(0.7, 0, 0.5, 0.7, -99, -99);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    -ms-transform: matrix(0.7, 0, 0.5, 0.7, -99, -99);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),s("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),s("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:h(()=>[n(y)]),_:1}),a[2]||(a[2]=l(`<h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* Keyword values */</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: none;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* Function values */</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: matrix(1</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 2</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 3</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 4</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 5</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 6);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: matrix3d(1</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 1</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 1</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 1);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: perspective(17px);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: rotate(0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">5turn</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: rotate3d(1</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 2</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 3</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 10deg);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: rotateX(10deg);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: rotateY(10deg);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: rotateZ(10deg);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: translate(12px</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 50%);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: translate3d(12px</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 50%</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 3em);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: translateX(2em);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: translateY(3in);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: translateZ(2px);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: scale(2</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">5</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: scale3d(2</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">5</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 1</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">2</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">3</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: scaleX(2);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: scaleY(0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">5</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: scaleZ(0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">3</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: skew(30deg</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 20deg);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: skewX(30deg);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: skewY(1</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">07rad</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">/* Multiple function values */</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: translateX(10px) rotate(10deg) translateY(5px);</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">transform: perspective(500px) translate(10px</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 20px) rotateY(3</span></span></code></pre></div><h2 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h2><ul><li>matrix(a, b, c, d, e, f) 以六个值 a-f 的变换矩阵的形式指定 2D 变换矩阵。</li><li>matrix3d(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) 将 3D 变换指定为由 16 个值（按列优先顺序）组成的 4x4 齐次矩阵。</li><li>rotate(angle) 指定围绕元素原点按指定角度进行 2D 旋转，如 Transform-origin 属性所定义。</li><li>rotate3d(x, y, z, a) 按最后一个参数中指定的角度指定关于前三个参数描述的 [x,y,z] 方向向量的 3D 旋转。</li><li>rotateX(ax) 按 X 方向指定的角度指定 3D 旋转。相当于 rotate3d(1, 0, 0, ax)。</li><li>rotateY(ay) 按 Y 方向指定的角度指定 3D 旋转。相当于 rotate3d(0, 1, 0, ay)。</li><li>rotateZ(az) 按 Z 方向指定的角度指定 3D 旋转。相当于 rotate3d(0, 0, 1, az)。</li><li>scale(sx[, sy]) 指定由 [sx, sy] 描述的 2D 缩放操作。如果未指定 sy，则假定它等于 sx。</li><li>scale3d(sx, sy, sz) 通过三个参数描述的 [sx,sy,sz] 缩放向量指定 3D 缩放操作。</li><li>scaleX(sx) 使用向量 [sx, 1] 指定缩放运算。</li><li>scaleY(sy) 使用向量 [1, sy] 指定缩放运算。</li><li>scaleZ(sz) 通过缩放向量 [1,1,sz] 指定 3D 缩放操作。</li><li>skew(ax[, ay]) 为 X 和 Y 指定 [ax,ay] 的二维倾斜。如果未提供第二个参数，则假定其为零。</li><li>skewX(angle) 指定沿 X 轴按给定角度进行的 2D 倾斜变换。</li><li>skewY(angle) 指定沿 Y 轴按给定角度进行的 2D 倾斜变换。</li><li>translate(tx[, ty]) 通过向量 [tx, ty] 指定 2D 平移。如果未指定 ty，则假定其值为零。</li><li>translate3d(tx, ty, tz) 指定向量 [tx,ty,tz] 在 X、Y 和 Z 方向上的 3D 平移。</li><li>translateX(tx) 沿 X 轴将元素平移给定量。</li><li>translateY(ty) 沿 Y 轴将元素平移给定量。</li><li>translateZ(tz) 指定 Z 方向上向量 [0,0,tz] 的 3D 平移。</li><li>perspective(<code>&lt;length&gt;</code>) 指定透视投影矩阵，该矩阵根据 Z 值在 X 和 Y 方向上缩放点。因此，具有正 Z 值的点会远离原点，而具有负 Z 值的点则会朝原点缩放。</li><li>none 指定不应应用任何变换。</li></ul>`,4))])}}});export{c as __pageData,o as default};
