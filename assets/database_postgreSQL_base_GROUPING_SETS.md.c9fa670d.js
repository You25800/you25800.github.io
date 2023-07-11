import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"PostgreSQL GROUPING SETS 用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/GROUPING_SETS.md","filePath":"database/postgreSQL/base/GROUPING_SETS.md","lastUpdated":1689061386000}'),p={name:"database/postgreSQL/base/GROUPING_SETS.md"},e=l(`<h1 id="postgresql-grouping-sets-用法与实例" tabindex="-1">PostgreSQL GROUPING SETS 用法与实例 <a class="header-anchor" href="#postgresql-grouping-sets-用法与实例" aria-label="Permalink to &quot;PostgreSQL GROUPING SETS 用法与实例&quot;">​</a></h1><p>本文介绍了如何在 PostgreSQL 中的 <code>GROUP BY</code> 子句中使用 <code>GROUPING SETS</code> 以在一次查询中生成多个维度的报表。</p><p>在 PostgreSQL 中，<code>GROUPING SETS</code> 是 <code>GROUP BY</code> 子句的参数，允许您在一次查询中生成多个维度的报表。</p><p>比如，要想在一个销售报表中即有每个年份销售额的行，又有每个部门销售额的行，您可以在 <code>GROUP BY</code> 子句中使用 <code>GROUPING SETS</code> 实现它。</p><h2 id="postgresql-grouping-sets-语法" tabindex="-1">PostgreSQL <code>GROUPING SETS</code> 语法 <a class="header-anchor" href="#postgresql-grouping-sets-语法" aria-label="Permalink to &quot;PostgreSQL \`GROUPING SETS\` 语法&quot;">​</a></h2><p>下面的语法说明了如何在 <code>GROUP BY</code> 子句中使用 <code>GROUPING SETS</code>：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE ...]</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span></span>
<span class="line"><span style="color:#A6ACCD;">  GROUPING </span><span style="color:#F78C6C;">SETS</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    (group_expr_list_1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    [, (group_expr_list_2), ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>这里，</p><ul><li><code>GROUPING SETS</code> 是 <code>GROUP BY</code> 子句的参数，它必须在 <code>GROUP BY</code> 关键字的后面。</li><li><code>(group_expr_list_N)</code> 是一个用于分组的表达式列表，其中可以包含零个或者多个列或表达式，就像在 <code>GROUP BY</code> 子句中直接使用的那些列一样。</li><li>您可以为 <code>GROUPING SETS</code> 指定一个或者多个分组表达式，每个分组表达式产生的结果集都将合并到最终的结果集中。</li><li><code>(group_expr_list_N)</code> 中没有任何列或者表达式时，即 <code>()</code>，所有符合条件的行都被聚合到一个分组中。</li></ul><h2 id="postgresql-group-by-实例" tabindex="-1">PostgreSQL <code>GROUP BY</code> 实例 <a class="header-anchor" href="#postgresql-group-by-实例" aria-label="Permalink to &quot;PostgreSQL \`GROUP BY\` 实例&quot;">​</a></h2><p>在 Sakila 示例数据库中， <a href="/database/sakila/影片表.html"><code>film</code></a>表存储了 DVD 商店中的所有影片。</p><p>要从 <code>film</code> 表中查找每个影片评级的影片数量，请使用如下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rating, </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> rating</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> rating;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | count</span></span>
<span class="line"><span style="color:#A6ACCD;">--------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |   178</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |   194</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |   223</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |   195</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |   210</span></span>
<span class="line"><span style="color:#A6ACCD;">(5 rows)</span></span></code></pre></div><p>要从 <code>film</code> 表中查找每个租金的影片数量，请使用如下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rental_rate, </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> rental_rate</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> rental_rate;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rental_rate | count</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;">        0.99 |   341</span></span>
<span class="line"><span style="color:#A6ACCD;">        2.99 |   323</span></span>
<span class="line"><span style="color:#A6ACCD;">        4.99 |   336</span></span>
<span class="line"><span style="color:#A6ACCD;">(3 rows)</span></span></code></pre></div><p>要想在一个报表中包含上面的两个报表，您可以使用 <code>UNION ALL</code> 将上面的两个结果集合并起来，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rating, </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> rental_rate, </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> rating</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> rating, rental_rate, </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> rental_rate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> rating, rental_rate;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | rental_rate | count</span></span>
<span class="line"><span style="color:#A6ACCD;">--------+-------------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |             |   178  ┐</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |             |   194  │</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |             |   223  │ &gt; ranting</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |             |   195  │</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |             |   210  ┘</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        0.99 |   341  ┐</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        2.99 |   323  │ &gt; rental_rate</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        4.99 |   336  ┘</span></span>
<span class="line"><span style="color:#A6ACCD;">(8 rows)</span></span></code></pre></div><p>但是，上面使用 <code>UNION ALL</code> 的语句看起来很复杂。如果能用一个简单的语句做到这一切，就太棒了。 PostgreSQL <code>GROUPING SETS</code> 可能帮我们做到这一切：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rating, rental_rate, </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> GROUPING </span><span style="color:#F78C6C;">SETS</span><span style="color:#A6ACCD;"> ((rating), (rental_rate))</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> rating, rental_rate;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | rental_rate | count</span></span>
<span class="line"><span style="color:#A6ACCD;">--------+-------------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |             |   178  ┐</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |             |   194  │</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |             |   223  │ &gt; ranting</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |             |   195  │</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |             |   210  ┘</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        0.99 |   341  ┐</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        2.99 |   323  │ &gt; rental_rate</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        4.99 |   336  ┘</span></span>
<span class="line"><span style="color:#A6ACCD;">(8 rows)</span></span></code></pre></div><p>所以，您可以将 <code>GROUPING SETS</code> 简单的理解为对多个分组结果集执行了 <code>UNION ALL</code> 操作。</p><p>如果您想在上面的报表中添加一行以显示总影片数量，您可以在 <code>GROUPING SETS</code> 中是一个空的分组表达式 <code>()</code>，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rating, rental_rate, </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> GROUPING </span><span style="color:#F78C6C;">SETS</span><span style="color:#A6ACCD;"> ((rating), (rental_rate), </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> rating, rental_rate;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | rental_rate | count</span></span>
<span class="line"><span style="color:#A6ACCD;">--------+-------------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |             |   178</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |             |   194</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |             |   223</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |             |   195</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |             |   210</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        0.99 |   341</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        2.99 |   323</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        4.99 |   336</span></span>
<span class="line"><span style="color:#A6ACCD;">        |             |  1000</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在 PostgreSQL 中的 <code>GROUP BY</code> 子句中，您可以使用 <code>GROUPING SETS</code> 以在一次查询中生成多个分组查询的结果集的集合。</p><p>为了应对更加复杂的需求， PostgreSQL 还提供了 <a href="/database/postgreSQL/base/ROLLUP.html"><code>ROLLUP</code></a> 和 <a href="/database/postgreSQL/base/CUBE.html"><code>CUBE</code></a> 以简化 <code>GROUPING SETS</code>。</p>`,30),o=[e];function t(c,r,C,i,A,y){return a(),n("div",null,o)}const g=s(p,[["render",t]]);export{D as __pageData,g as default};
