import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const F=JSON.parse('{"title":"PostgreSQL UNION 用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/UNION.md","filePath":"database/postgreSQL/base/UNION.md","lastUpdated":1690289709000}'),e={name:"database/postgreSQL/base/UNION.md"},p=l(`<h1 id="postgresql-union-用法与实例" tabindex="-1">PostgreSQL UNION 用法与实例 <a class="header-anchor" href="#postgresql-union-用法与实例" aria-label="Permalink to &quot;PostgreSQL UNION 用法与实例&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中如何使用 <code>UNION</code> 运算符合并两个结果集。</p><p>在 PostgreSQL 中， <code>UNION</code> 是一个集合运算符，它返回两个集合的并集，它用于合并两个结果集。</p><p>其他的集合操作运算符还有： <a href="/database/postgreSQL/base/EXCEPT.html"><code>EXCEPT</code></a> 和 <a href="/database/postgreSQL/base/INTERSECT.html"><code>INTERSECT</code></a>。</p><h2 id="postgresql-union-语法" tabindex="-1">PostgreSQL UNION 语法 <a class="header-anchor" href="#postgresql-union-语法" aria-label="Permalink to &quot;PostgreSQL UNION 语法&quot;">​</a></h2><p>要合并两个结果集，请按照以下语法使用使用 <code>UNION</code> 运算符：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SELECT_statement_1</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span><span style="color:#A6ACCD;"> [ALL]</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT_statement_2</span></span>
<span class="line"><span style="color:#A6ACCD;">[ORDER BY ...];</span></span></code></pre></div><p>或者您可以同时合并多个结果集，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SELECT_statement_1</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span><span style="color:#A6ACCD;"> [ALL]</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT_statement_2</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span><span style="color:#A6ACCD;"> [ALL]</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT_statement_3</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span><span style="color:#A6ACCD;"> [ALL]</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">[ORDER BY ...];</span></span></code></pre></div><p>这里：</p><ul><li><code>SELECT_statement_N</code> 都是个独立 <code>SELECT</code> 语句。</li><li>参与 <code>UNION</code> 运算的所有的结果集应该具有相同的列，并且列的数据类型和顺序应该相同。</li><li><code>UNION</code> 与 <code>UNION ALL</code> 具有不同的逻辑： <ul><li><code>UNION</code> 合并两个结果集，并删除重复的行。</li><li><code>UNION ALL</code> 合并两个结果，保留所有的行。</li></ul></li><li><a href="/database/postgreSQL/base/ORDER_BY.html"><code>ORDER BY</code></a> 子句用于对最终结果进行排序，它是可选的。</li></ul><h2 id="postgresql-union-实例" tabindex="-1">PostgreSQL UNION 实例 <a class="header-anchor" href="#postgresql-union-实例" aria-label="Permalink to &quot;PostgreSQL UNION 实例&quot;">​</a></h2><p>在本示例中，我们将使用 <a href="/database/postgreSQL_ref/返回集合的函数/generate_series.html"><code>generate_series()</code></a> 函数用来生成结果集。</p><p>我们需要用到两个结果集，先看第一个结果集：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_series</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">generate_series</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">5</span></span></code></pre></div><p>再看一下第二个结果集：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_series</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">generate_series</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">6</span></span></code></pre></div><p>现在，我们对两个结果集进行 <code>UNION</code> 运算：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_series</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_series</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> generate_series;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">generate_series</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">6</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>从结果看出，<code>UNION</code> 运算符合并了第一个结果集和第二个结果集后删除了其中的重复的行，并返回了合并后的所有行。</p><p>如果你不想要删除重复的行，请使用 <code>UNION ALL</code> 运算符，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_series</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_series</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> generate_series;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">generate_series</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">6</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">9</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在 PostgreSQL 中， <code>UNION</code> 和 <code>UNION ALL</code> 用来合并两个或者结果集合并为一个结果集。不同的地方在于， <code>UNION</code> 会删除其中的重复的行。</p>`,28),o=[p];function t(c,r,C,i,y,A){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{F as __pageData,D as default};
