import{_ as a,o as s,c as e,R as n}from"./chunks/framework.318fa179.js";const h=JSON.parse('{"title":"PostgreSQL array_ndims() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/array_ndims.md","filePath":"database/postgreSQL/ref/array_ndims.md","lastUpdated":1690296072000}'),r={name:"database/postgreSQL/ref/array_ndims.md"},l=n('<h1 id="postgresql-array-ndims-函数" tabindex="-1">PostgreSQL array_ndims() 函数 <a class="header-anchor" href="#postgresql-array-ndims-函数" aria-label="Permalink to &quot;PostgreSQL array\\_ndims() 函数&quot;">​</a></h1><p>PostgreSQL <code>array_ndims()</code> 函数返回指定的数组的维度数。</p><h2 id="array-ndims-语法" tabindex="-1"><code>array_ndims()</code> 语法 <a class="header-anchor" href="#array-ndims-语法" aria-label="Permalink to &quot;`array_ndims()` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>array_ndims()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">array_ndims(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">integer</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>array</code></em></p><p>必需的。 数组。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>array_ndims()</code> 函数返回一个整数，它是指定的数组的维度数。</p><h2 id="array-ndims-示例" tabindex="-1"><code>array_ndims()</code> 示例 <a class="header-anchor" href="#array-ndims-示例" aria-label="Permalink to &quot;`array_ndims()` 示例&quot;">​</a></h2><p>本示例展示了如何使用 PostgreSQL <code>array_ndims()</code> 函数返回一个数组的维度数。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> array_ndims(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[0, 1, 2]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">array_ndims</span></span>\n<span class="line"><span style="color:#FFCB6B;">-------------</span></span>\n<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">1</span></span></code></pre></div><p>您同样可以使用 <code>array_ndims()</code> 函数返回一个多维数组的维度数。比如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> array_ndims(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[2:4][2:3]={{1,1},{1,1},{1,1}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::</span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">[]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">array_ndims</span></span>\n<span class="line"><span style="color:#FFCB6B;">-------------</span></span>\n<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">2</span></span></code></pre></div>',16),o=[l];function t(p,c,i,d,y,m){return s(),e("div",null,o)}const _=a(r,[["render",t]]);export{h as __pageData,_ as default};