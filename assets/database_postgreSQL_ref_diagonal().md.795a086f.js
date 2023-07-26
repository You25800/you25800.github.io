import{_ as a,o as s,c as o,R as l}from"./chunks/framework.333b51ca.js";const h=JSON.parse('{"title":"PostgreSQL diagonal() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/diagonal().md","filePath":"database/postgreSQL/ref/diagonal().md","lastUpdated":1690352360000}'),e={name:"database/postgreSQL/ref/diagonal().md"},n=l('<h1 id="postgresql-diagonal-函数" tabindex="-1">PostgreSQL diagonal() 函数 <a class="header-anchor" href="#postgresql-diagonal-函数" aria-label="Permalink to &quot;PostgreSQL diagonal() 函数&quot;">​</a></h1><p>PostgreSQL <code>diagonal()</code> 函数提取指定矩形的对角线并将其作为线段返回。</p><h2 id="diagonal-语法" tabindex="-1"><code>diagonal()</code> 语法 <a class="header-anchor" href="#diagonal-语法" aria-label="Permalink to &quot;`diagonal()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>diagonal()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">diagonal(</span><span style="color:#C792EA;">box</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lseg</span></span></code></pre></div><p>此函数 <code>diagonal(box)</code> 等同于 <code>lseg(box)</code> 函数。</p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>box</code></em></p><p>必需的。 一个矩形。例如： <code>box &#39;(1,1),(-1,-1)&#39;</code></p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>diagonal()</code> 函数返回一个线段，它是指定矩形的对角线。</p><h2 id="diagonal-示例" tabindex="-1"><code>diagonal()</code> 示例 <a class="header-anchor" href="#diagonal-示例" aria-label="Permalink to &quot;`diagonal()` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>diagonal()</code> 函数返回矩形 <code>box &#39;(1,1),(-1,-1)&#39;</code> 的对角线。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> diagonal(</span><span style="color:#C792EA;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(1,1),(-1,-1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">diagonal</span></span>\n<span class="line"><span style="color:#FFCB6B;">-----------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,1),(</span><span style="color:#F78C6C;">-1</span><span style="color:#A6ACCD;">,-1)</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>此语句等同于下面的使用 <code>lseg()</code> 函数的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lseg</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(1,1),(-1,-1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">diagonal</span></span>\n<span class="line"><span style="color:#FFCB6B;">-----------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,1),(</span><span style="color:#F78C6C;">-1</span><span style="color:#A6ACCD;">,-1)</span><span style="color:#89DDFF;">]</span></span></code></pre></div>',17),p=[n];function t(c,r,d,i,C,g){return s(),o("div",null,p)}const A=a(e,[["render",t]]);export{h as __pageData,A as default};
