import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const B=JSON.parse('{"title":"PostgreSQL lag() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/lag.md","filePath":"database/postgreSQL/ref/lag.md","lastUpdated":1690274793000}'),p={name:"database/postgreSQL/ref/lag.md"},o=l(`<h1 id="postgresql-lag-函数" tabindex="-1">PostgreSQL lag() 函数 <a class="header-anchor" href="#postgresql-lag-函数" aria-label="Permalink to &quot;PostgreSQL lag() 函数&quot;">​</a></h1><p>PostgreSQL <code>lag()</code> 函数返回来自当前行所在的分区内当前行之前的指定行之内的行的值。</p><h2 id="lag-语法" tabindex="-1"><code>lag()</code> 语法 <a class="header-anchor" href="#lag-语法" aria-label="Permalink to &quot;\`lag()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>lag()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">lag</span><span style="color:#A6ACCD;">(expr[, offset[, default]])</span></span>
<span class="line"><span style="color:#F78C6C;">OVER</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  [PARTITION BY partition_column_list]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ORDER BY order_column_list]</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>expr</code></em></p><p>必需的。它可以是一个列名或者表达式。</p></li><li><p><em><code>offset</code></em></p><p>可选的。相对于当前行的偏移的行数。默认值为 1。</p></li><li><p><em><code>default</code></em></p><p>可选的。它可以是一个列名或者表达式。</p></li><li><p><em><code>partition_column_list</code></em></p><p>参与分区的列的列表。</p></li><li><p><em><code>order_column_list</code></em></p><p>参与排序的列的列表。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>lag()</code> 函数返回来自当前行所在的分区内当前行之前的指定行之内的行的值。</p><h2 id="lag-示例" tabindex="-1"><code>lag()</code> 示例 <a class="header-anchor" href="#lag-示例" aria-label="Permalink to &quot;\`lag()\` 示例&quot;">​</a></h2><h3 id="演示数据准备" tabindex="-1">演示数据准备 <a class="header-anchor" href="#演示数据准备" aria-label="Permalink to &quot;演示数据准备&quot;">​</a></h3><p>使用下面的 <code>CREATE TABLE</code> 语句<a href="/database/postgreSQL/databaseAndTable/创建表.html">创建一个表</a> <code>tax_revenue</code> 以存储每季度的税收收益：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">tax_revenue</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  id </span><span style="color:#C792EA;">SERIAL</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">year</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">CHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">quarter</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">CHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  revenue </span><span style="color:#C792EA;">INT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>这里创建了一个 <code>tax_revenue</code> 表，它有 5 个列：</p><ul><li><code>id</code> - 行 ID，主键。</li><li><code>year</code> - 年份。</li><li><code>quarter</code> - 季节，1 - 4。</li><li><code>revenue</code> - 税收收益。</li></ul><p>使用下面的 <code>INSERT</code> 语句向 <code>tax_revenue</code> 表中<a href="/database/postgreSQL/base/INSERT.html">插入一些行</a>：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">INSERT INTO</span><span style="color:#A6ACCD;"> tax_revenue</span></span>
<span class="line"><span style="color:#A6ACCD;">  (</span><span style="color:#F78C6C;">year</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">quarter</span><span style="color:#A6ACCD;">, revenue)</span></span>
<span class="line"><span style="color:#F78C6C;">VALUES</span></span>
<span class="line"><span style="color:#A6ACCD;">  (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2020</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3515</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2020</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3678</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2020</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">4203</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2020</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3924</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2021</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3102</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2021</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3293</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2021</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3602</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2021</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">2901</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>使用下面的 <a href="/database/postgreSQL/base/select.html"><code>SELECT</code></a> 语句检索表中的数据：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> tax_revenue;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">year</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">quarter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">revenue</span></span>
<span class="line"><span style="color:#FFCB6B;">----+------+---------+---------</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3515</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3678</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">4203</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3924</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3102</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3293</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3602</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">2901</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="使用-postgresql-lag-函数和下一季度的收益比较" tabindex="-1">使用 PostgreSQL <code>lag()</code> 函数和下一季度的收益比较 <a class="header-anchor" href="#使用-postgresql-lag-函数和下一季度的收益比较" aria-label="Permalink to &quot;使用 PostgreSQL \`lag()\` 函数和下一季度的收益比较&quot;">​</a></h3><p>下面的语句，在使用 PostgreSQL <code>lag()</code> 函数在每行中添加 <code>next_quarter_revenue</code> 列以比较当前季度和下一季度的收益：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">lag</span><span style="color:#A6ACCD;">(revenue, </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">OVER</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">PARTITION</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">year</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">quarter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DESC</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) next_quarter_revenue</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> tax_revenue;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">year</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">quarter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">revenue</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">next_quarter_revenue</span></span>
<span class="line"><span style="color:#FFCB6B;">----+------+---------+---------+----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3924</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">4203</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">3924</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3678</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">4203</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3515</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">3678</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">2901</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3602</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">2901</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3293</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">3602</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3102</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">3293</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>注意，上面 SQL 语句中的窗口函数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">lag</span><span style="color:#A6ACCD;">(revenue, </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">OVER</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">PARTITION</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">year</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">quarter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DESC</span></span>
<span class="line"><span style="color:#A6ACCD;">) next_quarter_revenue</span></span></code></pre></div><p>在 <code>OVER</code> 子句中，</p><ul><li><code>PARTITION BY year</code> 将所有行按照年份进行分区</li><li><code>ORDER BY quarter DESC</code> 将每个分区内的行按照季度逆序排列。</li><li><code>lag(revenue, 1)</code> 返回每行在其关联的分区内之前一行(<code>1</code>)中的收益(<code>revenue</code>)。</li></ul><p>那么在 <code>next_quarter_revenue</code> 列中存放的就是当前行的下一个季度的收益。所以，每个分区的第一行中的 <code>next_quarter_revenue</code> 列的值为 null。</p><p>当然，您可以为 <code>next_quarter_revenue</code> 列中的 null 值指定要给默认值。下面的语句使用了 <code>0</code> 作为默认值：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">lag</span><span style="color:#A6ACCD;">(revenue, </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">OVER</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">PARTITION</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">year</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">quarter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DESC</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) next_quarter_revenue</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> tax_revenue;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">year</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">quarter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">revenue</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">next_quarter_revenue</span></span>
<span class="line"><span style="color:#FFCB6B;">----+------+---------+---------+----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3924</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                    </span><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">4203</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">3924</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3678</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">4203</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2020</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3515</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">3678</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">2901</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                    </span><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3602</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">2901</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3293</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">3602</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2021</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">3102</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">3293</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,32),e=[o];function C(c,t,r,y,A,D){return a(),n("div",null,e)}const i=s(p,[["render",C]]);export{B as __pageData,i as default};
