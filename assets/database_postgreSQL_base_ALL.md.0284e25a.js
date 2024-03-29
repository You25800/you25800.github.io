import{_ as s,o as a,c as l,R as e}from"./chunks/framework.318fa179.js";const L=JSON.parse('{"title":"PostgreSQL ALL 运算符的用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/ALL.md","filePath":"database/postgreSQL/base/ALL.md","lastUpdated":1690289709000}'),o={name:"database/postgreSQL/base/ALL.md"},n=e(`<h1 id="postgresql-all-运算符的用法与实例" tabindex="-1">PostgreSQL ALL 运算符的用法与实例 <a class="header-anchor" href="#postgresql-all-运算符的用法与实例" aria-label="Permalink to &quot;PostgreSQL ALL 运算符的用法与实例&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中如何在使用 <code>ALL</code> 运算符将一个值与一个子查询返回的所有的值进行比较。</p><p>有时候，您需要将一个值与一个列表中的所有值进行比较，比如：</p><ul><li>给定一个工资值。您需要确认这个值是否高于所有员工的工资。</li><li>给定一个状态值。您需要确定这个状态值是否不等于所有状态值中的任意一个。</li></ul><p>您可以使用 PostgreSQL <code>ALL</code> 运算符来解决这些问题。</p><p>PostgreSQL <code>ALL</code> 运算符用于将一个值与一个值列表进行比较，如果值列表中的所有值满足了指定的条件，表达式就返回真，否则表达式返回假。</p><h2 id="postgresql-all-语法" tabindex="-1">PostgreSQL <code>ALL</code> 语法 <a class="header-anchor" href="#postgresql-all-语法" aria-label="Permalink to &quot;PostgreSQL \`ALL\` 语法&quot;">​</a></h2><p>将一个值与一个子查询返回的所有的值进行比较，请按下面的语法使用 <code>ALL</code> 运算符：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">comparison_operator ALL (</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>这里：</p><ul><li><code>comparison_operator</code> 是一个比较运算符，例如 <code>=</code>, <code>!=</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code> 等。</li><li><code>array</code> 是一个数组或者<a href="/database/postgreSQL/base/子查询.html">子查询</a>，它跟在 <code>ALL</code> 运算符后面。子查询必须用括号括起来。</li><li>如果 <code>array</code> 中的所有值都满足指定的条件，则表达式返回真，否则表达式返回假。</li></ul><p>例如：</p><ul><li><code>value = ALL (array)</code>: 如果列表中的所有的值等于 <code>value</code>，该表达式返回 <code>true</code>, 否则返回 <code>false</code>。</li><li><code>value &gt; ALL (array)</code>: 如果列表中的所有的值小于 <code>value</code>，该表达式返回 <code>true</code>, 否则返回 <code>false</code>。</li><li><code>value &lt; ALL (array)</code>: 如果列表中的所有的值大于 <code>value</code>，该表达式返回 <code>true</code>, 否则返回 <code>false</code>。</li><li><code>value &lt;&gt; ALL (array)</code>: 如果列表中的所有的值不等于 <code>value</code>，该表达式返回 <code>true</code>, 否则返回 <code>false</code>。</li></ul><p>您可以在 <a href="/database/postgreSQL/base/WHERE.html">WHERE</a> 子句中按照如下方式使用 <code>ALL</code> 运算符：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> expr1 </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ALL (subquery)</span></span></code></pre></div><p>如果子查询不返回任何行，则 ALL 运算符的计算结果始终为真。</p><h2 id="postgresql-all-运算符实例" tabindex="-1">PostgreSQL ALL 运算符实例 <a class="header-anchor" href="#postgresql-all-运算符实例" aria-label="Permalink to &quot;PostgreSQL ALL 运算符实例&quot;">​</a></h2><h3 id="postgresql-all-与数组" tabindex="-1">PostgreSQL ALL 与数组 <a class="header-anchor" href="#postgresql-all-与数组" aria-label="Permalink to &quot;PostgreSQL ALL 与数组&quot;">​</a></h3><p>我们经常需要检查一个数组中的所有元素是否都满足指定的条件，比如：</p><ul><li><p>要检查数组 <code>[1, 2, 3]</code> 中的所有元素是否都等于 <code>2</code>，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ALL(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[1, 2, 3]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">?</span></span>
<span class="line"><span style="color:#FFCB6B;">----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">f</span></span></code></pre></div></li><li><p>要检查数组 <code>[1, 2, 3]</code> 中的所有元素是否都大于等于 <code>1</code>，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> ALL(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[1, 2, 3]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">?</span></span>
<span class="line"><span style="color:#FFCB6B;">----------</span></span>
<span class="line"><span style="color:#FFCB6B;">t</span></span></code></pre></div></li><li><p>要检查数组 <code>[1, 2, 3]</code> 中的所有元素是否都不等于 <code>0</code>，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&gt;</span><span style="color:#A6ACCD;"> ALL(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[1, 2, 3]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">?</span></span>
<span class="line"><span style="color:#FFCB6B;">----------</span></span>
<span class="line"><span style="color:#FFCB6B;">t</span></span></code></pre></div></li></ul><h3 id="postgresql-all-与子查询" tabindex="-1">PostgreSQL ALL 与子查询 <a class="header-anchor" href="#postgresql-all-与子查询" aria-label="Permalink to &quot;PostgreSQL ALL 与子查询&quot;">​</a></h3><p>下面我们提供了一些实用的例子来展示 <code>ALL</code> 操作符的威力。</p><p>让我们使用 <a href="./示例数据库.html">PostgreSQL Sakila 示例数据库</a>中的 <a href="/database/sakila/影片表.html"><code>film</code></a>进行演示。</p><p>要判断一个值 <code>99</code> 是否比所有的影片的租金都要高，请使用下面的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">99</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ALL (</span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rental_rate </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">?</span></span>
<span class="line"><span style="color:#FFCB6B;">----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span></code></pre></div><p>要判断一个值 <code>66</code> 是否比所有的影片的租金都要小，请使用下面的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">66</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> ALL (</span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rental_rate </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">?</span></span>
<span class="line"><span style="color:#FFCB6B;">----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">f</span></span></code></pre></div><p>要查找大于等于所有的租金的影片的数量，请使用下面的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> rental_rate </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> ALL (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rental_rate</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">count</span></span>
<span class="line"><span style="color:#FFCB6B;">-------</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">336</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL <code>ALL</code> 运算符用于将一个值与一个子查询返回的所有的值进行比较，并返回一个布尔值。 <code>ALL</code> 运算符可用于 <a href="/database/postgreSQL/base/WHERE.html">WHERE</a>子句中过滤指定条件行。</p>`,34),p=[n];function t(c,r,i,d,C,A){return a(),l("div",null,p)}const h=s(o,[["render",t]]);export{L as __pageData,h as default};
