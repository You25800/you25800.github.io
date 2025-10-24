import{_ as d}from"./chunks/fengjing.D2dwtko1.js";import{_ as D,c as n,o as k,j as i,B as c,b3 as t,G as h,w as e,a as s}from"./chunks/framework.CatkIGlB.js";const A={},g={class:"base"};function y(r,l){return k(),n("div",g,[...l[0]||(l[0]=[i("figure",{class:"flip"},[i("div",{class:"card"},[i("img",{src:d,alt:"Sunset",class:"card-face front"}),i("figcaption",{class:"card-face back"},"Image on the flip side.")])],-1)])])}const B=D(A,[["render",y],["__scopeId","data-v-da719310"]]),f=JSON.parse('{"title":"backface-visibility","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/attr/backface-visibility.md","filePath":"vue/css/attr/backface-visibility.md","lastUpdated":1690527082000}'),o={name:"vue/css/attr/backface-visibility.md"},b=Object.assign(o,{setup(r){return(l,a)=>{const p=c("demo");return k(),n("div",null,[a[1]||(a[1]=t("",4)),h(p,{customClass:"",sourceCode:`<template>
  <div class="base">
    <figure class="flip">
      <div class="card">
        <img src="/img/fengjing.svg" alt="Sunset" class="card-face front" />
        <figcaption class="card-face back">Image on the flip side.</figcaption>
      </div>
    </figure>
  </div>
</template>

<style lang="scss" scoped>
.base {
  .flip {
    perspective: 800px;
  }
  .card {
    position: relative;
    width: 250px;
    height: 273px;
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  .card:hover {
    transform: rotateY(180deg);
  }
  .card-face {
    position: absolute;
    top: 0;
    bottom: 0;
    backface-visibility: hidden;
  }
  .card-face.back {
    padding: 20px;
    transform: rotateY(180deg);
    background: #4b846a;
    color: #fff;
  }
}
</style>
`,options:"{}"},{highlight:e(()=>[...a[0]||(a[0]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"figure"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"flip"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"card"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"        <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"img"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," src"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"/img/fengjing.svg"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," alt"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"Sunset"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"card-face front"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"        <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"figcaption"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"card-face back"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"Image on the flip side."),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"figcaption"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"figure"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scss"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .flip {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    perspective: 800px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .card {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    position: relative;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    width: 250px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    height: 273px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transition: transform 1s;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform-style: preserve-3d;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .card:hover {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: rotateY(180deg);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .card-face {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    position: absolute;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    top: 0;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    bottom: 0;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    backface-visibility: hidden;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .card-face.back {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    padding: 20px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    transform: rotateY(180deg);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: #4b846a;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    color: #fff;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:e(()=>[h(B)]),_:1}),a[2]||(a[2]=t("",4))])}}});export{f as __pageData,b as default};
