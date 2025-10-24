import{_ as p,c as t,o as h,j as i,B as D,b3 as d,G as e,w as l,a as s}from"./chunks/framework.CatkIGlB.js";const g={},A={class:"base"};function o(k,n){return h(),t("div",A,[...n[0]||(n[0]=[i("p",null," Example of the :in-range pseudo class, try entering a number not between 1 and 10. ",-1),i("p",null,[i("input",{type:"number",min:"1",max:"10",value:"1",id:"inrange"}),i("label",{for:"inrange"})],-1)])])}const y=p(g,[["render",o],["__scopeId","data-v-2a7c1685"]]),c=JSON.parse('{"title":"in-range","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"vue/css/pseudo-classes/in-range.md","filePath":"vue/css/pseudo-classes/in-range.md","lastUpdated":1691635753000}'),F={name:"vue/css/pseudo-classes/in-range.md"},E=Object.assign(F,{setup(k){return(n,a)=>{const r=D("demo");return h(),t("div",null,[a[1]||(a[1]=d("",6)),e(r,{customClass:"",sourceCode:`<template>
  <div class="base">
    <p>
      Example of the :in-range pseudo class, try entering a number not between 1
      and 10.
    </p>
    <p>
      <input type="number" min="1" max="10" value="1" id="inrange" />
      <label for="inrange"></label>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.base {
  input:in-range {
    background: #fff;
    padding: 5px;
    border: 1px solid #333;
  }
  input:in-range + label::after {
    content: "Choose a value between 1 and 10.";
  }
  input[type="number"]:out-of-range {
    border: 1px solid red;
    padding: 5px;
  }
  input:out-of-range + label::after {
    content: "Error! This value is out of range! Pick another one.";
    color: red;
  }
}
</style>
`,options:"{}"},{highlight:l(()=>[...a[0]||(a[0]=[i("div",{class:"language-vue vp-adaptive-theme"},[i("span",{class:"lang"},"vue"),i("pre",{class:"shiki shiki-themes material-theme-lighter material-theme-palenight vp-code",tabindex:"0","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," class"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"base"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      Example of the :in-range pseudo class, try entering a number not between 1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"      and 10.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"input"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," type"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"number"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," min"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"1"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," max"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"10"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," value"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"1"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," id"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"inrange"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"      <"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"label"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," for"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"inrange"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"></"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"label"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"    </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"p"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"  </"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"div"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"template"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"<"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," lang"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"="),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#91B859","--shiki-dark":"#C3E88D"}},"scss"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},'"'),i("span",{style:{"--shiki-light":"#9C3EDA","--shiki-dark":"#C792EA"}}," scoped"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},".base {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  input:in-range {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    background: #fff;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    padding: 5px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    border: 1px solid #333;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  input:in-range + label::after {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},'    content: "Choose a value between 1 and 10.";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},'  input[type="number"]:out-of-range {')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    border: 1px solid red;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    padding: 5px;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  input:out-of-range + label::after {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},'    content: "Error! This value is out of range! Pick another one.";')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"    color: red;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"  }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#90A4AE","--shiki-dark":"#BABED8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},"</"),i("span",{style:{"--shiki-light":"#E53935","--shiki-dark":"#F07178"}},"style"),i("span",{style:{"--shiki-light":"#39ADB5","--shiki-dark":"#89DDFF"}},">")])])])],-1)])]),default:l(()=>[e(y)]),_:1})])}}});export{c as __pageData,E as default};
