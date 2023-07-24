import{_ as a,o as e,c as s,R as o}from"./chunks/framework.333b51ca.js";const y=JSON.parse('{"title":"PostgreSQL make_time() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/make_time.md","filePath":"database/postgreSQL/ref/make_time.md","lastUpdated":1690159250000}'),t={name:"database/postgreSQL/ref/make_time.md"},l=o('<h1 id="postgresql-make-time-函数" tabindex="-1">PostgreSQL make_time() 函数 <a class="header-anchor" href="#postgresql-make-time-函数" aria-label="Permalink to &quot;PostgreSQL make_time() 函数&quot;">​</a></h1><p>PostgreSQL <code>make_time()</code> 函数从给定的时、分、秒字段创建一个时间。</p><h2 id="make-time-语法" tabindex="-1"><code>make_time()</code> 语法 <a class="header-anchor" href="#make-time-语法" aria-label="Permalink to &quot;`make_time()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>make_time()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">make_time(</span><span style="color:#F78C6C;">hour</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">INT</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">minute</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">INT</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">second</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DOUBLE PRECISION</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TIME</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>hour</code></em></p><p>必需的。 一个指示小时的整数。</p></li><li><p><em><code>minute</code></em></p><p>必需的。 一个指示分钟的整数。</p></li><li><p><em><code>second</code></em></p><p>必需的。 一个指示秒的双精度浮点数。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>make_time()</code> 函数返回一个时间值，它由给定的时、分、秒字段创建而来。</p><h2 id="make-time-示例" tabindex="-1"><code>make_time()</code> 示例 <a class="header-anchor" href="#make-time-示例" aria-label="Permalink to &quot;`make_time()` 示例&quot;">​</a></h2><p>这个示例展示了 <code>make_time()</code> 函数的基本用法。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> make_time(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">517606</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">make_time</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">-----------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">517606</span></span></code></pre></div>',13),n=[l];function p(c,r,i,m,C,d){return e(),s("div",null,n)}const A=a(t,[["render",p]]);export{y as __pageData,A as default};