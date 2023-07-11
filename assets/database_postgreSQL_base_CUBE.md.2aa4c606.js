import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"PostgreSQL CUBE 用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/CUBE.md","filePath":"database/postgreSQL/base/CUBE.md","lastUpdated":1689061386000}'),p={name:"database/postgreSQL/base/CUBE.md"},e=l(`<h1 id="postgresql-cube-用法与实例" tabindex="-1">PostgreSQL CUBE 用法与实例 <a class="header-anchor" href="#postgresql-cube-用法与实例" aria-label="Permalink to &quot;PostgreSQL CUBE 用法与实例&quot;">​</a></h1><p>本文介绍了如何在 PostgreSQL 中的 <code>GROUP BY</code> 子句中使用 <code>CUBE</code> 以在一次查询中生成多个维度的报表。</p><p>在 PostgreSQL 中， <code>CUBE</code> 是 <code>GROUP BY</code> 子句的参数，允许您在一次查询中生成多个维度的报表。和 <a href="/database/postgreSQL/base/ROLLUP.html"><code>ROLLUP</code></a> 一样， 在某些特定的场景下， <code>CUBE</code> 可以简化 <a href="/database/postgreSQL/base/GROUPING_SETS.html"><code>GROUPING SETS</code></a>。</p><h2 id="postgresql-cube-语法" tabindex="-1">PostgreSQL <code>CUBE</code> 语法 <a class="header-anchor" href="#postgresql-cube-语法" aria-label="Permalink to &quot;PostgreSQL \`CUBE\` 语法&quot;">​</a></h2><p>下面的语法说明了如何在 <code>GROUP BY</code> 子句中使用 <code>CUBE</code>：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE ...]</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">CUBE</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    group_expr_1</span></span>
<span class="line"><span style="color:#A6ACCD;">    [, group_expr_2, ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>这里， <code>CUBE</code> 是 <code>GROUP BY</code> 子句的参数，它必须在 <code>GROUP BY</code> 关键字的后面。</p><p><code>CUBE</code> 子句都可以使用 <code>GROUPING SETS</code> 子句实现，比如：</p><ul><li><code>CUBE(a, b)</code> 等效于 <code>GROUPING SETS((a,b), (a), (b), ())</code>。</li><li><code>CUBE(a, b, c)</code> 等效于 <code>GROUPING SETS((a,b,c), (a,b), (a,c), (a), (b,c), (b), (c), ())</code>。</li></ul><p><code>CUBE</code> 子句比 <code>GROUPING SETS</code> 子句更加的简单和易读。但是，它的的适应性不如 <code>GROUPING SETS</code> 广泛。</p><h2 id="postgresql-group-by-实例" tabindex="-1">PostgreSQL <code>GROUP BY</code> 实例 <a class="header-anchor" href="#postgresql-group-by-实例" aria-label="Permalink to &quot;PostgreSQL \`GROUP BY\` 实例&quot;">​</a></h2><p>在 Sakila 示例数据库中， <a href="/database/sakila/影片表.html"><code>film</code></a> 表存储了 DVD 商店中的所有影片。</p><p>要从 <code>film</code> 表中查找每个影片评级中每个租金的影片的数量，每个影片评级中的影片的数量，每个租金的影片的数量，以及所有影片的总数量，您可以使用如下带有 <code>GROUPING SETS</code> 的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  rating,</span></span>
<span class="line"><span style="color:#A6ACCD;">  rental_rate,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">  film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span></span>
<span class="line"><span style="color:#A6ACCD;">  GROUPING </span><span style="color:#F78C6C;">SETS</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    (rating, rental_rate),</span></span>
<span class="line"><span style="color:#A6ACCD;">    (rating),</span></span>
<span class="line"><span style="color:#A6ACCD;">    (rental_rate),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span></span>
<span class="line"><span style="color:#A6ACCD;">  rating, rental_rate;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | rental_rate | count </span></span>
<span class="line"><span style="color:#A6ACCD;">--------+-------------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |        0.99 |    64</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |        2.99 |    59</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |        4.99 |    55</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |             |   178</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |        0.99 |    62</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |        2.99 |    64</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |        4.99 |    68</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |             |   194</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |        0.99 |    72</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |        2.99 |    74</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |        4.99 |    77</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |             |   223</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |        0.99 |    70</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |        2.99 |    60</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |        4.99 |    65</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |             |   195</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |        0.99 |    73</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |        2.99 |    66</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |        4.99 |    71</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |             |   210</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        0.99 |   341</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        2.99 |   323</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        4.99 |   336</span></span>
<span class="line"><span style="color:#A6ACCD;">        |             |  1000</span></span>
<span class="line"><span style="color:#A6ACCD;">(24 rows)</span></span></code></pre></div><p>这里，我们 <code>GROUPING SETS</code> 使用了 3 个表达式，如下：</p><ul><li><code>(rating, rental_rate)</code>: 按照影片评级和租金统计影片的数量。</li><li><code>(rating)</code>: 按照影片评级统计数量。</li><li><code>(rental_rate)</code>: 按照租金统计数量。</li><li><code>()</code>: 统计所有影片的数量。</li></ul><p>在这种情况下， 这个 <code>GROUPING SETS</code> 可以使用 <code>CUBE</code> 来简化，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  rating,</span></span>
<span class="line"><span style="color:#A6ACCD;">  rental_rate,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">  film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">CUBE</span><span style="color:#A6ACCD;"> (rating, rental_rate)</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span></span>
<span class="line"><span style="color:#A6ACCD;">  rating, rental_rate;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | rental_rate | count </span></span>
<span class="line"><span style="color:#A6ACCD;">--------+-------------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |        0.99 |    64</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |        2.99 |    59</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |        4.99 |    55</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |             |   178</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |        0.99 |    62</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |        2.99 |    64</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |        4.99 |    68</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |             |   194</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |        0.99 |    72</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |        2.99 |    74</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |        4.99 |    77</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |             |   223</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |        0.99 |    70</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |        2.99 |    60</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |        4.99 |    65</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |             |   195</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |        0.99 |    73</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |        2.99 |    66</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |        4.99 |    71</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |             |   210</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        0.99 |   341</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        2.99 |   323</span></span>
<span class="line"><span style="color:#A6ACCD;">        |        4.99 |   336</span></span>
<span class="line"><span style="color:#A6ACCD;">        |             |  1000</span></span>
<span class="line"><span style="color:#A6ACCD;">(24 rows)</span></span></code></pre></div><p>在上面的语句中，我们使用 <code>CUBE (rating, rental_rate)</code> 代替了 <code>GROUPING SETS ((rating, rental_rate), (rating), (rental_rate),())</code>。这让语句更加简单，可读性更好。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在 PostgreSQL 中的 <code>GROUP BY</code> 子句中，您可以在特定的场景下使用 <code>CUBE</code> 简化 <code>GROUPING SETS</code>。</p>`,23),o=[e];function c(t,C,r,i,A,d){return a(),n("div",null,o)}const G=s(p,[["render",c]]);export{D as __pageData,G as default};
