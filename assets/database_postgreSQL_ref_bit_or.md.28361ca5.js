import{_ as s,o as a,c as n,R as o}from"./chunks/framework.333b51ca.js";const b=JSON.parse('{"title":"PostgreSQL bit_or() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/bit_or.md","filePath":"database/postgreSQL/ref/bit_or.md","lastUpdated":1690289709000}'),l={name:"database/postgreSQL/ref/bit_or.md"},e=o(`<h1 id="postgresql-bit-or-函数" tabindex="-1">PostgreSQL bit_or() 函数 <a class="header-anchor" href="#postgresql-bit-or-函数" aria-label="Permalink to &quot;PostgreSQL bit_or() 函数&quot;">​</a></h1><p>PostgreSQL <code>bit_or()</code> 函数是一个聚合函数，它对所有的非 null 输入值执行&quot;按位或&quot;运算。</p><p><strong>按位或</strong>处理两个长度相同的二进制数，两个相应的二进位都为 0，该位的结果值为 0，否则为 1。</p><h2 id="bit-or-语法" tabindex="-1"><code>bit_or()</code> 语法 <a class="header-anchor" href="#bit-or-语法" aria-label="Permalink to &quot;\`bit_or()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>bit_or()</code> 的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bit_or(expr)</span></span></code></pre></div><p>我们通常在 SQLite 中按如下方式使用 <code>bit_or()</code> 函数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> bit_or(expr), ...</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">[GROUP BY group_expr1, group_expr2, ...];</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>expr</code></em></p><p>必需的。一个列名或者表达式。它接受一个整数或者 bit 类型的值。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>bit_or()</code> 函数返回值的类型与输入参数的类型相同，它返回 对所有的非 null 输入值执行&quot;按位或&quot;运算的结果。</p><p>注意，<code>bit_or()</code> 函数只处理那些非 null 的值。也就是说, null 值会被 <code>bit_or()</code> 函数忽略。</p><h2 id="bit-or-示例" tabindex="-1"><code>bit_or()</code> 示例 <a class="header-anchor" href="#bit-or-示例" aria-label="Permalink to &quot;\`bit_or()\` 示例&quot;">​</a></h2><p>为了演示 PostgreSQL <code>bit_or()</code> 的用法，我们使用以下 <a href="/database/postgreSQL/base/UNION.html"><code>UNION</code></a> 和 <a href="/database/postgreSQL/base/select.html"><code>SELECT</code></a> 语句模拟一个表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> x;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">x</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">6</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">5</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>下面的语句对 <code>x</code> 列执行了 <code>bit_or()</code> 运算：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> bit_or(x)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) t;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bit_or</span></span>
<span class="line"><span style="color:#FFCB6B;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">7</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>这里， <code>bit_or()</code> 函数对 <code>x</code> 列中的值（<code>4</code>，<code>5</code>，<code>6</code>）进行了 “按位或” 运算，运算步骤如下:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">101</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> -</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">110</span></span>
<span class="line"><span style="color:#82AAFF;">bit_or</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> = 111 = 7</span></span></code></pre></div><p>所以 <code>bit_or()</code> 函数 返回了 <code>7</code>。</p>`,23),p=[e];function t(c,r,C,i,d,y){return a(),n("div",null,p)}const F=s(l,[["render",t]]);export{b as __pageData,F as default};
