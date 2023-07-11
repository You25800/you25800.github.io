import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"PostgreSQL DISTINCT 用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/DISTINCT.md","filePath":"database/postgreSQL/base/DISTINCT.md","lastUpdated":1689061386000}'),p={name:"database/postgreSQL/base/DISTINCT.md"},e=l(`<h1 id="postgresql-distinct-用法与实例" tabindex="-1">PostgreSQL DISTINCT 用法与实例 <a class="header-anchor" href="#postgresql-distinct-用法与实例" aria-label="Permalink to &quot;PostgreSQL DISTINCT 用法与实例&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中如何使用 <code>DISTINCT</code> 返回一个没有重复行的结果集。</p><p>在 PostgreSQL 中，<code>DISTINCT</code> 语句用于 <code>SELECT</code> 语句中，以使其返回一个没有重复行的结果集。</p><h2 id="postgresql-distinct-语法" tabindex="-1">PostgreSQL <code>DISTINCT</code> 语法 <a class="header-anchor" href="#postgresql-distinct-语法" aria-label="Permalink to &quot;PostgreSQL \`DISTINCT\` 语法&quot;">​</a></h2><p>要返回一个没有重复行的结果集，请按如下语法使用带有 <code>DISTINCT</code> 的 <a href="https://www.sjkjc.com/postgresql/select/" target="_blank" rel="noreferrer"><code>SELECT</code></a>语句：</p><p>下面说明了该 <code>DISTINCT</code> 子句的语法 ：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">DISTINCT</span><span style="color:#A6ACCD;"> column1 [, column2, ...]</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">   table_name;</span></span></code></pre></div><p>这里，</p><ul><li>关键字 <code>DISTINCT</code> 要在 <code>SELECT</code> 后指定。</li><li>在关键字 <code>DISTINCT</code> 后指定需要评估是否重复的列。</li><li>多个列名需要使用逗号 <code>,</code> 间隔。如果指定了多个列名， PostgreSQL 将根据这些列的值的组合后的值评估是否重复。</li><li>您可以使用 <code>DISTINCT *</code> 来对所有的列进行评估重复。</li></ul><p>PostgreSQL 还提供了 <code>DISTINCT ON (expression)</code> 使用以下语法保留每组重复项的“第一”行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">DISTINCT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> (column1) column_alias,</span></span>
<span class="line"><span style="color:#A6ACCD;">   column2</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">   table_name</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span></span>
<span class="line"><span style="color:#A6ACCD;">   column1,</span></span>
<span class="line"><span style="color:#A6ACCD;">   column2;</span></span></code></pre></div><p>始终将 <a href="https://www.sjkjc.com/postgresql/order-by/" target="_blank" rel="noreferrer"><code>ORDER BY</code></a> 子句与 the <code>DISTINCT ON(expression)</code> 一起使用以使结果集可预测是一种很好的做法。</p><p>请注意， <code>DISTINCT ON</code> 表达式必须与 <code>ORDER BY</code> 子句中最左边的表达式相匹配。</p><h2 id="postgresql-distinct-实例" tabindex="-1">PostgreSQL DISTINCT 实例 <a class="header-anchor" href="#postgresql-distinct-实例" aria-label="Permalink to &quot;PostgreSQL DISTINCT 实例&quot;">​</a></h2><p>我们将使用 <a href="/database/sakila/">Sakila 示例数据库</a> 中的表进行演示，请您先<a href="./示例数据库.html">在 PostgreSQL 中安装 Sakila 示例数据库</a>。</p><p>要从 <a href="/database/sakila/影片表.html"><code>film</code> 表</a>表中检索所有的影片评级，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">DISTINCT</span><span style="color:#A6ACCD;"> rating</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    film;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating</span></span>
<span class="line"><span style="color:#A6ACCD;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;"> R</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13</span></span>
<span class="line"><span style="color:#A6ACCD;"> G</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17</span></span>
<span class="line"><span style="color:#A6ACCD;">(5 rows)</span></span></code></pre></div><p>这里，为了找到所有的影片评级，我们使用了 <code>DISTINCT rating</code>，让每个影片评级只在结果集中出现一次。</p><p>要从 <code>film</code> 表中检索所有的租金金额，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">DISTINCT</span><span style="color:#A6ACCD;"> rental_rate</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    film;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rental_rate</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------</span></span>
<span class="line"><span style="color:#A6ACCD;">        2.99</span></span>
<span class="line"><span style="color:#A6ACCD;">        4.99</span></span>
<span class="line"><span style="color:#A6ACCD;">        0.99</span></span>
<span class="line"><span style="color:#A6ACCD;">(3 rows)</span></span></code></pre></div><p>这里，为了找到所有的影片租金金额，我们使用了 <code>DISTINCT rental_rate</code>，让每个影片租金金额只在结果集中出现一次。</p><p>要从 <code>film</code> 表中检索所有的影片评级和租金金额的组合，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">DISTINCT</span><span style="color:#A6ACCD;"> rating, rental_rate</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    film</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> rating;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | rental_rate</span></span>
<span class="line"><span style="color:#A6ACCD;">--------+-------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |        0.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |        4.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |        2.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |        2.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |        0.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |        4.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |        4.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |        0.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |        2.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |        0.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |        2.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |        4.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |        0.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |        2.99</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |        4.99</span></span>
<span class="line"><span style="color:#A6ACCD;">(15 rows)</span></span></code></pre></div><p>这里，我们使用了 <code>DISTINCT rating, rental_rate</code> 来查找所有的影片评级和租金金额的组合。为了是让输出更易读，我们使用 <a href="https://www.sjkjc.com/postgresql/order-by/" target="_blank" rel="noreferrer"><code>ORDER BY</code></a> 让结果集按照影片等级正序排序。</p><p>如果您想返回每组影片评级的第一项，请使用以下带有 <code>DISTINCT ON</code> 的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">DISTINCT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> (rating) rating,</span></span>
<span class="line"><span style="color:#A6ACCD;">    film_id,</span></span>
<span class="line"><span style="color:#A6ACCD;">    title</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    film</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> rating, film_id </span><span style="color:#F78C6C;">DESC</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | film_id |      title</span></span>
<span class="line"><span style="color:#A6ACCD;">--------+---------+------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |       2 | ACE GOLDFINGER</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |       1 | ACADEMY DINOSAUR</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |       7 | AIRPLANE SIERRA</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |       8 | AIRPORT POLLOCK</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |       3 | ADAPTATION HOLES</span></span></code></pre></div><h2 id="distinct-与-null" tabindex="-1">DISTINCT 与 NULL <a class="header-anchor" href="#distinct-与-null" aria-label="Permalink to &quot;DISTINCT 与 NULL&quot;">​</a></h2><p>当 <code>DISTINCT</code> 遇到 <code>NULL</code> 值时，只保留一个 <code>NULL</code> 值。因为 <code>DISTINCT</code> 认为所有的 <code>NULL</code> 值都是相同的，这与字段的类型无关。</p><p>例如下面的 SQL 返回多行 <code>NULL</code> 记录：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> nullable_col</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> nullable_col</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> nullable_col;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nullable_col</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">(3 rows)</span></span></code></pre></div><p>这里，我们拥有 3 行，其中每行的 <code>nullable_col</code> 列的值都为 <code>NULL</code>。</p><p>当使用 <code>DISTINCT</code> 之后：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">DISTINCT</span><span style="color:#A6ACCD;"> nullable_col</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> nullable_col</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> nullable_col</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> nullable_col</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) t;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nullable_col</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">(1 row)</span></span></code></pre></div><p>本例使用 <a href="./UNION.html"><code>UNION ALL</code></a> 模拟包含多个 <code>NULL</code> 值的记录集。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>本文介绍了在 PostgreSQL 中如何使用 <code>DISTINCT</code> 子句清除结果集中的重复记录行。 <code>DISTINCT</code> 子句的用法要点如下：</p><ul><li><code>SELECT DISTINCT</code> 返回一个没有重复行的结果集。</li><li><code>DISTINCT</code> 后面可以指定一个列或者多个列，也可以用 <code>*</code>。</li><li><code>DISTINCT</code> 将所有的 <code>NULL</code> 视为相等的，并只保留一个。</li><li><code>DISTINCT ON</code> 子句用来返回每组重复值的第一个行。</li></ul>`,43),o=[e];function c(t,C,r,i,A,d){return a(),n("div",null,o)}const T=s(p,[["render",c]]);export{D as __pageData,T as default};
