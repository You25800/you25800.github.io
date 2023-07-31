import{_ as s,o as a,c as n,R as p}from"./chunks/framework.318fa179.js";const m=JSON.parse('{"title":"PostgreSQL var_samp() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/var_samp.md","filePath":"database/postgreSQL/ref/var_samp.md","lastUpdated":1690289709000}'),l={name:"database/postgreSQL/ref/var_samp.md"},e=p(`<h1 id="postgresql-var-samp-函数" tabindex="-1">PostgreSQL var_samp() 函数 <a class="header-anchor" href="#postgresql-var-samp-函数" aria-label="Permalink to &quot;PostgreSQL var\\_samp() 函数&quot;">​</a></h1><p>PostgreSQL <code>var_samp()</code> 函数是一个聚合函数，它计算所有非 null 输入值的样本方差（样本标准差的平方）。</p><h2 id="var-samp-语法" tabindex="-1"><code>var_samp()</code> 语法 <a class="header-anchor" href="#var-samp-语法" aria-label="Permalink to &quot;\`var_samp()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>var_samp()</code> 的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var_samp(expr)</span></span></code></pre></div><p>我们通常在 SQLite 中按如下方式使用 <code>var_samp()</code> 函数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> var_samp(expr), ...</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">[GROUP BY group_expr1, group_expr2, ...];</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>expr</code></em></p><p>必需的。一个列名或者表达式。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>var_samp()</code> 函数返回所有非 null 输入值的样本方差（样本标准差的平方）。</p><p>注意，<code>var_samp()</code> 函数只处理那些非 null 的值。也就是说, null 值会被 <code>var_samp()</code> 函数忽略。</p><h2 id="var-samp-示例" tabindex="-1"><code>var_samp()</code> 示例 <a class="header-anchor" href="#var-samp-示例" aria-label="Permalink to &quot;\`var_samp()\` 示例&quot;">​</a></h2><p>为了演示 PostgreSQL <code>var_samp()</code> 的用法，我们使用以下 <a href="/database/postgreSQL/base/UNION.html"><code>UNION</code></a> 和 <a href="/database/postgreSQL/base/select.html"><code>SELECT</code></a> 语句模拟一个表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> x;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">x</span></span>
<span class="line"><span style="color:#FFCB6B;">---</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">6</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">5</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>下面的语句使用 <code>var_samp()</code> 函数计算 <code>x</code> 列中的所有的值的样本方差：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> var_samp(x)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> x</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) t;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">var_samp</span></span>
<span class="line"><span style="color:#FFCB6B;">------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1.00000000000000000000</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,19),o=[e];function t(c,r,C,i,d,y){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};