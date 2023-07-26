import{_ as s,o as a,c as o,R as e}from"./chunks/framework.333b51ca.js";const y=JSON.parse('{"title":"PostgreSQL point(box) 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/point(box).md","filePath":"database/postgreSQL/ref/point(box).md","lastUpdated":1690352360000}'),n={name:"database/postgreSQL/ref/point(box).md"},p=e('<h1 id="postgresql-point-box-函数" tabindex="-1">PostgreSQL point(box) 函数 <a class="header-anchor" href="#postgresql-point-box-函数" aria-label="Permalink to &quot;PostgreSQL point(box) 函数&quot;">​</a></h1><p>PostgreSQL <code>point(box)</code> 函数计算指定的矩形的中心点并返回。</p><h2 id="point-box-语法" tabindex="-1"><code>point(box)</code> 语法 <a class="header-anchor" href="#point-box-语法" aria-label="Permalink to &quot;`point(box)` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>point(box)</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">point</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">box</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">point</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>box</code></em></p><p>必需的。 一个矩形。例如： <code>box &#39;(1,1),(-1,-1)&#39;</code></p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>point(box)</code> 函数返回由参数指定的矩形的中心点。</p><h2 id="point-box-示例" tabindex="-1"><code>point(box)</code> 示例 <a class="header-anchor" href="#point-box-示例" aria-label="Permalink to &quot;`point(box)` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>point(box)</code> 函数返回矩形 <code>box &#39;(1,1),(-1,-1)&#39;</code> 的中心点。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">point</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(1,1),(-1,-1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">point</span></span>\n<span class="line"><span style="color:#FFCB6B;">-------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">0,0</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>下面的语句示例展示了如何使用 PostgreSQL <code>point(box)</code> 函数返回矩形 <code>box &#39;(2,2),(1,1)&#39;</code> 的中心点。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">point</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(2,2),(1,1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">point</span></span>\n<span class="line"><span style="color:#FFCB6B;">-----------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">1.5,1.5</span><span style="color:#89DDFF;">)</span></span></code></pre></div>',16),l=[p];function t(c,r,i,d,C,b){return a(),o("div",null,l)}const x=s(n,[["render",t]]);export{y as __pageData,x as default};
