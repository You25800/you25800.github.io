import{d as g,c as d,o as r,j as i,a as s,_ as A,B as F,b3 as n,G as e,w as D}from"./chunks/framework.CatkIGlB.js";const y={class:"base"},B=g({__name:"grid-auto-flow.md.demo.93a88378",setup(p){function h(){const l=document.getElementsByClassName("grid-container")[0],a=document.getElementById("direction"),k=document.getElementById("dense");let t=a.value==="row"?"row":"column";k.checked&&(t+=" dense"),l.style.gridAutoFlow=t}return(l,a)=>(r(),d("div",y,[i("select",{id:"direction",onChange:a[0]||(a[0]=k=>h())},[...a[2]||(a[2]=[i("option",{value:"column"},"column",-1),i("option",{value:"row"},"row",-1)])],32),i("label",null,[i("input",{id:"dense",type:"checkbox",onChange:a[1]||(a[1]=k=>h())},null,32),a[3]||(a[3]=s("dense",-1))]),a[4]||(a[4]=i("div",{class:"grid-container"},[i("div",{class:"item-a"},"A"),i("div",{class:"item-b"},"B"),i("div",null,"C"),i("div",null,"D"),i("div",null,"E"),i("div",null,"F")],-1))]))}}),o=A(B,[["__scopeId","data-v-0c647499"]]),u=JSON.parse('{"title":"grid-auto-flow","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/attr/grid-auto-flow.md","filePath":"vue/css/attr/grid-auto-flow.md","lastUpdated":1690962385000}'),E={name:"vue/css/attr/grid-auto-flow.md"},m=Object.assign(E,{setup(p){return(h,l)=>{const a=F("demo");return r(),d("div",null,[l[1]||(l[1]=n("",4)),e(a,{customClass:"",sourceCode:`<template>
  <div class="base">
    <select id="direction" @change="changeGridAutoFlow()">
      <option value="column">column</option>
      <option value="row">row</option>
    </select>
    <label
      ><input
        id="dense"
        type="checkbox"
        @change="changeGridAutoFlow()"
      />dense</label
    >
    <div class="grid-container">
      <div class="item-a">A</div>
      <div class="item-b">B</div>
      <div>C</div>
      <div>D</div>
      <div>E</div>
      <div>F</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
function changeGridAutoFlow() {
  const grid = document.getElementsByClassName("grid-container")[0];
  const direction = document.getElementById("direction");
  const dense = document.getElementById("dense");
  let gridAutoFlow = direction.value === "row" ? "row" : "column";

  if (dense.checked) {
    gridAutoFlow += " dense";
  }

  grid.style.gridAutoFlow = gridAutoFlow;
}
<\/script>

<style lang="less" scoped>
.base {
  .input {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    padding: 14px;
    width: 300px;
    font-size: 16px;
    margin-right: 16px;
  }
  .grid-container {
    display: grid;
    margin-top: 5px;
    padding: 10px;
    background: rgb(0, 150, 208);
  }
  .grid-container > div {
    background: rgb(241, 101, 41);
    border: 1px solid #000;
    text-align: center;
  }
  .grid-container {
    grid-template: repeat(4, 1fr) / 1fr 1fr;
    grid-auto-flow: column;
  }
  .item-a {
    grid-row-start: 2;
    background: red !important;
  }
  .item-b {
    grid-column-start: 2;
    background: yellow !important;
  }
}
</style>
`,options:"{}"},{highlight:D(()=>[...l[0]||(l[0]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"select"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," id"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"direction"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," @change"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"changeGridAutoFlow()"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"option"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," value"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"column"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"column"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"option"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"option"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," value"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"row"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"row"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"option"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"select"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"label")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      ><"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"input")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}},"        id"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"dense"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}},"        type"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"checkbox"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}},"        @change"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"changeGridAutoFlow()"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      />"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"dense"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"label")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    >")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"grid-container"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"item-a"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"A"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"item-b"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"B"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"C"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"D"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"E"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"F"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"script"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"ts"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," setup"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}},"function"),i("span",{style:{"--shiki-light":"#6182B8","--shiki-dark":"#82AAFF"}}," changeGridAutoFlow"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"()"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}},"  const"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}}," grid"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," ="),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}}," document"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"."),i("span",{style:{"--shiki-light":"#6182B8","--shiki-dark":"#82AAFF"}},"getElementsByClassName"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"("),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"grid-container"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},")["),i("span",{style:{"--shiki-light":"#F76D47","--shiki-dark":"#F78C6C"}},"0"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"]"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}},"  const"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}}," direction"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," ="),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}}," document"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"."),i("span",{style:{"--shiki-light":"#6182B8","--shiki-dark":"#82AAFF"}},"getElementById"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"("),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"direction"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},")"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}},"  const"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}}," dense"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," ="),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}}," document"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"."),i("span",{style:{"--shiki-light":"#6182B8","--shiki-dark":"#82AAFF"}},"getElementById"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"("),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"dense"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},")"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}},"  let"),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}}," gridAutoFlow"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," ="),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}}," direction"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"."),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"value"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," ==="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},' "'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"row"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," ?"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},' "'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"row"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," :"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},' "'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"column"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-light-font-style":"italic","--shiki-dark":"#89DDFF","--shiki-dark-font-style":"italic"}},"  if"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}}," ("),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"dense"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"."),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"checked"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},") "),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"{")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    gridAutoFlow"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," +="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},' "'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}}," dense"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  grid"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"."),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"style"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"."),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"gridAutoFlow"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," ="),i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}}," gridAutoFlow"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"script"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"less"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .input {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    border: 1px solid #ebebeb;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    border-radius: 4px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    padding: 14px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    width: 300px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    font-size: 16px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    margin-right: 16px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .grid-container {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    display: grid;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    margin-top: 5px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    padding: 10px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: rgb(0, 150, 208);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .grid-container > div {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: rgb(241, 101, 41);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    border: 1px solid #000;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    text-align: center;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .grid-container {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    grid-template: repeat(4, 1fr) / 1fr 1fr;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    grid-auto-flow: column;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .item-a {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    grid-row-start: 2;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: red !important;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  .item-b {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    grid-column-start: 2;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: yellow !important;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:D(()=>[e(o)]),_:1}),l[2]||(l[2]=n("",4))])}}});export{u as __pageData,m as default};
