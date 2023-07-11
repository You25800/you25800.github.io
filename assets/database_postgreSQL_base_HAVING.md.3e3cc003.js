import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const g=JSON.parse('{"title":"PostgreSQL HAVING 用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/HAVING.md","filePath":"database/postgreSQL/base/HAVING.md","lastUpdated":1689061386000}'),o={name:"database/postgreSQL/base/HAVING.md"},e=l(`<ul><li><h1 id="postgresql-having-用法与实例" tabindex="-1">PostgreSQL HAVING 用法与实例 <a class="header-anchor" href="#postgresql-having-用法与实例" aria-label="Permalink to &quot;PostgreSQL HAVING 用法与实例&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中如何使用 <code>HAVING</code> 子句为分组查询指定过滤条件。</p><p>在 PostgreSQL 中， <code>HAVING</code> 子句用于为带有 <code>GROUP BY</code> 子句的分组查询指定过滤条件。</p><p><code>HAVING</code> 看起来与 <code>WHERE</code> 相似，虽然他们都是指定过滤条件，但是他们的区别是： <code>WHERE</code> 子句指定的条件用于过滤表中的行，而 <code>HAVING</code> 子句指定的条件用于过滤分组。</p><h2 id="postgresql-having-语法" tabindex="-1">PostgreSQL HAVING 语法 <a class="header-anchor" href="#postgresql-having-语法" aria-label="Permalink to &quot;PostgreSQL HAVING 语法&quot;">​</a></h2><p>PostgreSQL <code>HAVING</code> 子句必须与 <a href="/database/postgreSQL/base/GROUP_BY.html"><code>GROUP BY</code></a> 子句一起使用。 以下是 PostgreSQL <code>HAVING</code> 子句典型的用法:</p><div class="language-postgres"><button title="Copy Code" class="copy"></button><span class="lang">postgres</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SELECT column1[, column2, ...], aggregate_function(ci)</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM table</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE clause]</span></span>
<span class="line"><span style="color:#A6ACCD;">GROUP BY column1[, column2, ...];</span></span>
<span class="line"><span style="color:#A6ACCD;">HAVING clause</span></span></code></pre></div><p>这里，</p><ul><li><code>GROUP BY</code> 子句用于指定用于分组的列或者表达式。</li><li><code>HAVING</code> 子句用来过滤 <code>GROUP BY</code> 分组的数据，需要使用逻辑表达式作为条件，其中逻辑表达式中的列名或表达式只能使用分组使用的列，表达式，或者应用于分组列或表达式的聚合函数。</li><li>您不能在 <code>HAVING</code> 子句中使用列别名。</li></ul><h2 id="postgresql-having-子句实例" tabindex="-1">PostgreSQL HAVING 子句实例 <a class="header-anchor" href="#postgresql-having-子句实例" aria-label="Permalink to &quot;PostgreSQL HAVING 子句实例&quot;">​</a></h2><p>我们将使用 <a href="/database/sakila/">Sakila 示例数据库</a> 中的表进行演示，请您先<a href="./示例数据库.html">在 PostgreSQL 中安装 Sakila 示例数据库</a>。</p><h3 id="使用带有-count-函数的-postgresql-having-子句示例" tabindex="-1">使用带有 count 函数的 PostgreSQL HAVING 子句示例 <a class="header-anchor" href="#使用带有-count-函数的-postgresql-having-子句示例" aria-label="Permalink to &quot;使用带有 count 函数的 PostgreSQL HAVING 子句示例&quot;">​</a></h3><p>如果您想从 <a href="/database/sakila/影片表.html"><code>film</code></a>表中查找每个影片评级的影片数量，请使用如下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rating, </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> rating</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">DESC</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | count</span></span>
<span class="line"><span style="color:#A6ACCD;">--------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |   223</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |   210</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |   195</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |   194</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |   178</span></span>
<span class="line"><span style="color:#A6ACCD;">(5 rows)</span></span></code></pre></div><p>这个实例返回了所有的影片评级的影片数量。如果您想要查找影片数量大于 200 的影片评级，就要用到 <code>HAVING</code> 子句，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rating, </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> rating</span></span>
<span class="line"><span style="color:#F78C6C;">HAVING</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">DESC</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | count</span></span>
<span class="line"><span style="color:#A6ACCD;">--------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |   223</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |   210</span></span>
<span class="line"><span style="color:#A6ACCD;">(2 rows)</span></span></code></pre></div><h3 id="使用带有-sum-函数示例的-postgresql-having-子句" tabindex="-1">使用带有 SUM 函数示例的 PostgreSQL HAVING 子句 <a class="header-anchor" href="#使用带有-sum-函数示例的-postgresql-having-子句" aria-label="Permalink to &quot;使用带有 SUM 函数示例的 PostgreSQL HAVING 子句&quot;">​</a></h3><p>如果您想从 <a href="/database/sakila/支付表.html"><code>payment</code></a> 表中查找总消费金额在 180 美元以上的客户，请使用以下带有 <code>GROUP BY</code> 子句，<code>HAVING</code> 子句和聚合函数 <code>sum()</code> 的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> customer_id, </span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(amount) total</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> payment</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> customer_id</span></span>
<span class="line"><span style="color:#F78C6C;">HAVING</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(amount) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">180</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> total </span><span style="color:#F78C6C;">DESC</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">customer_id | total</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------+--------</span></span>
<span class="line"><span style="color:#A6ACCD;">         526 | 221.55</span></span>
<span class="line"><span style="color:#A6ACCD;">         148 | 216.54</span></span>
<span class="line"><span style="color:#A6ACCD;">         144 | 195.58</span></span>
<span class="line"><span style="color:#A6ACCD;">         178 | 194.61</span></span>
<span class="line"><span style="color:#A6ACCD;">         137 | 194.61</span></span>
<span class="line"><span style="color:#A6ACCD;">         459 | 186.62</span></span>
<span class="line"><span style="color:#A6ACCD;">(6 rows)</span></span></code></pre></div><p>本例中，执行的顺序如下：</p><ol><li>首先使用 <code>GROUP BY</code> 子句按照 <code>customer_id</code> 字段对数据进行分组，也就是按照客户分组。</li><li>然后使用聚合函数 <code>sum(amount)</code> 对每组中的所有行的 <code>amount</code> 字段求和，并使用 <code>total</code> 作为列别名。</li><li>然后使用 <code>HAVING</code> 子句指定只有 <code>sum(amount)</code> 大于 <code>180</code> 的行才会被返回。</li><li>最后使用 <code>ORDER BY</code> 子句按照 <code>total</code> 降序排列。</li></ol><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL <code>HAVING</code> 子句用于为带有 <code>GROUP BY</code> 子句的分组查询指定过滤条件。 <code>HAVING</code> 子句需要使用逻辑表达式作为条件，其中逻辑表达式中的列名或表达式只能使用分组使用的列，表达式，或者应用于分组列或表达式的聚合函数。</p></li></ul>`,1),p=[e];function t(c,r,C,i,A,d){return a(),n("div",null,p)}const D=s(o,[["render",t]]);export{g as __pageData,D as default};