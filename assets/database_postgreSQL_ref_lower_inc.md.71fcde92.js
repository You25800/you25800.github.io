import{_ as a,o as s,c as e,R as l}from"./chunks/framework.333b51ca.js";const y=JSON.parse('{"title":"PostgreSQL lower_inc() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/lower_inc.md","filePath":"database/postgreSQL/ref/lower_inc.md","lastUpdated":1690339391000}'),n={name:"database/postgreSQL/ref/lower_inc.md"},o=l(`<h1 id="postgresql-lower-inc-函数" tabindex="-1">PostgreSQL lower_inc() 函数 <a class="header-anchor" href="#postgresql-lower-inc-函数" aria-label="Permalink to &quot;PostgreSQL lower_inc() 函数&quot;">​</a></h1><p>PostgreSQL <code>lower_inc()</code> 函数检查一个给定范围的下限是否是包含在内的。</p><h2 id="postgresql-lower-inc-语法" tabindex="-1">PostgreSQL <code>lower_inc()</code> 语法 <a class="header-anchor" href="#postgresql-lower-inc-语法" aria-label="Permalink to &quot;PostgreSQL \`lower_inc()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>lower_inc()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">lower_inc(anyrange) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">lower_inc(anymultirange) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>anyrange</code></em></p><p>必需的。 一个范围值。</p></li><li><p><em><code>anymultirange</code></em></p><p>必需的。 一个多值范围值。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>lower_inc()</code> 函数返回一个布尔值，表示范围的下限是否是包含的。</p><p>只有空的范围值才返回 <code>false</code>。</p><h2 id="postgresql-lower-inc-实例" tabindex="-1">PostgreSQL <code>lower_inc()</code> 实例 <a class="header-anchor" href="#postgresql-lower-inc-实例" aria-label="Permalink to &quot;PostgreSQL \`lower_inc()\` 实例&quot;">​</a></h2><p>这里整理了一些 PostgreSQL <code>lower_inc()</code> 函数的示例。</p><h3 id="示例-1" tabindex="-1">示例 1 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例 1&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> lower_inc(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 4]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::int4range);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lower_inc</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span></code></pre></div><h3 id="示例-2" tabindex="-1">示例 2 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例 2&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> lower_inc(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(1, 2]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::int4range);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lower_inc</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span></code></pre></div><h3 id="示例-3" tabindex="-1">示例 3 <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例 3&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> lower_inc(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(1, 1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::int4range);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lower_inc</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">f</span></span></code></pre></div>`,21),t=[o];function p(c,r,i,d,h,C){return s(),e("div",null,t)}const _=a(n,[["render",p]]);export{y as __pageData,_ as default};
