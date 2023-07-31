import{_ as s,o as a,c as e,R as n}from"./chunks/framework.318fa179.js";const y=JSON.parse('{"title":"PostgreSQL upper_inf() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/upper_inf.md","filePath":"database/postgreSQL/ref/upper_inf.md","lastUpdated":1690339391000}'),p={name:"database/postgreSQL/ref/upper_inf.md"},l=n(`<h1 id="postgresql-upper-inf-函数" tabindex="-1">PostgreSQL upper_inf() 函数 <a class="header-anchor" href="#postgresql-upper-inf-函数" aria-label="Permalink to &quot;PostgreSQL upper\\_inf() 函数&quot;">​</a></h1><p>PostgreSQL <code>upper_inf()</code> 函数检查一个给定范围的上限是否是无穷大。</p><h2 id="postgresql-upper-inf-语法" tabindex="-1">PostgreSQL <code>upper_inf()</code> 语法 <a class="header-anchor" href="#postgresql-upper-inf-语法" aria-label="Permalink to &quot;PostgreSQL \`upper_inf()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>upper_inf()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">upper_inf(anyrange) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">upper_inf(anymultirange) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>anyrange</code></em></p><p>必需的。 一个范围值。</p></li><li><p><em><code>anymultirange</code></em></p><p>必需的。 一个多值范围值。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>upper_inf()</code> 函数返回一个布尔值，表示给定范围的上限是否是无穷大。</p><h2 id="postgresql-upper-inf-实例" tabindex="-1">PostgreSQL <code>upper_inf()</code> 实例 <a class="header-anchor" href="#postgresql-upper-inf-实例" aria-label="Permalink to &quot;PostgreSQL \`upper_inf()\` 实例&quot;">​</a></h2><p>这里整理了一些 PostgreSQL <code>upper_inf()</code> 函数的示例。</p><h3 id="示例-1" tabindex="-1">示例 1 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例 1&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  upper_inf(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(1, 5)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::int4range),</span></span>
<span class="line"><span style="color:#A6ACCD;">  upper_inf(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(1,)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::int4range);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">upper_inf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">upper_inf</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------+-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">f</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span></code></pre></div><h3 id="示例-2" tabindex="-1">示例 2 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例 2&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> upper_inf(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{(,), (2, 4)}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::int4multirange);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">upper_inf</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span></code></pre></div>`,17),o=[l];function t(r,c,i,d,u,C){return a(),e("div",null,o)}const g=s(p,[["render",t]]);export{y as __pageData,g as default};