import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const d=JSON.parse('{"title":"PostgreSQL ORDER BY 运算符用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/ORDER_BY.md","filePath":"database/postgreSQL/base/ORDER_BY.md","lastUpdated":1688717707000}'),p={name:"database/postgreSQL/base/ORDER_BY.md"},o=l(`<h1 id="postgresql-order-by-运算符用法与实例" tabindex="-1">PostgreSQL ORDER BY 运算符用法与实例 <a class="header-anchor" href="#postgresql-order-by-运算符用法与实例" aria-label="Permalink to &quot;PostgreSQL ORDER BY 运算符用法与实例&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中如何使用 <code>ORDER BY</code> 子句排序 <code>SELECT</code> 语句返回的结果集。</p><p>在 PostgreSQL 中，<code>ORDER BY</code> 子句用来对 <code>SELECT</code> 语句返回的结果集排序。如果您没有为 <code>SELECT</code> 语句指定 <code>ORDER BY</code> 子句，<code>SELECT</code> 语句返回的结果集是按照数据库默认的规则排序的。</p><h2 id="postgresql-order-by-子句介绍" tabindex="-1">PostgreSQL <code>ORDER BY</code> 子句介绍 <a class="header-anchor" href="#postgresql-order-by-子句介绍" aria-label="Permalink to &quot;PostgreSQL \`ORDER BY\` 子句介绍&quot;">​</a></h2><p>使用 <code>ORDER BY</code> 子句可以让我们对 <code>SELECT</code> 语句返回的结果集按照一个或这多个列升序或者降序排序。 <code>ORDER BY</code> 子句的语法如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">   column1, column2, ...</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">   table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE clause]</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span></span>
<span class="line"><span style="color:#A6ACCD;">   column1 [ASC|DESC],</span></span>
<span class="line"><span style="color:#A6ACCD;">   [column2 [ASC|DESC],</span></span>
<span class="line"><span style="color:#A6ACCD;">   ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">   [NULLS FIRST | NULLS LAST]</span></span>
<span class="line"><span style="color:#A6ACCD;">   ;</span></span></code></pre></div><p>说明：</p><ul><li><p>您可以为 <code>ORDER BY</code> 子句指定一个或多个列或者表达式。</p></li><li><p><code>ASC</code> 代表升序，<code>DESC</code> 代表降序。这是可选的，默认值是 <code>ASC</code>。</p></li><li><p>当指定多个排序表达式时，首先按照前面的表达式排序，其次按照后面的列排序。</p></li><li><p><code>NULLS FIRST</code> 和 <code>NULLS LAST</code> 用来指定对 null 值排序规则：</p><ul><li><code>NULLS FIRST</code>： null 值在非 null 值之前。</li><li><code>NULLS LAST</code>： null 值在非 null 值之后。</li></ul><p>默认情况下，PostgreSQL 采用升序排序时采用 <code>NULLS LAST</code>，降序排序时采用 <code>NULLS FIRST</code>。 也就是说， PostgreSQL 默认 null 值比非 null 值大。</p></li></ul><h2 id="postgresql-order-by-排序规则说明" tabindex="-1">PostgreSQL ORDER BY 排序规则说明 <a class="header-anchor" href="#postgresql-order-by-排序规则说明" aria-label="Permalink to &quot;PostgreSQL ORDER BY 排序规则说明&quot;">​</a></h2><p>下面说明多种情况下的排序规则：</p><ul><li><p><code>ORDER BY column ASC;</code></p><p>此 <code>ORDER BY</code> 子句对结果集按 <code>column</code> 列的值升序排序。</p></li><li><p><code>ORDER BY column DESC;</code></p><p>此 <code>ORDER BY</code> 子句对结果集按 <code>column</code> 列的值降序排序。</p></li><li><p><code>ORDER BY column;</code></p><p>此 <code>ORDER BY</code> 子句对结果集按 <code>column</code> 列的值升序排序。这个语句等效于： <code>ORDER BY column ASC;</code>。</p></li><li><p><code>ORDER BY column1, column2;</code></p><p>此 <code>ORDER BY</code> 子句对结果集先按 <code>column1</code> 列的值升序排序，然后再按 <code>column2</code> 列的值升序排序。</p><p>也就是说主排序按 <code>column1</code> 列升序排序，在主排序的基础上，那些 <code>column1</code> 列值相同的行，再按 <code>column2</code> 列升序排序。</p></li><li><p><code>ORDER BY column1 DESC, column2;</code></p><p>此 <code>ORDER BY</code> 子句对结果集先按 <code>column1</code> 列的值降序排序，然后再按按 <code>column2</code> 列的值升序排序。</p><p>也就是说主排序按 <code>column1</code> 列降序排序，在主排序的基础上，那些 <code>column1</code> 列值相同的行，再按 <code>column2</code> 列升序排序。</p></li></ul><h2 id="postgresql-order-by-实例" tabindex="-1">PostgreSQL ORDER BY 实例 <a class="header-anchor" href="#postgresql-order-by-实例" aria-label="Permalink to &quot;PostgreSQL ORDER BY 实例&quot;">​</a></h2><p>我们将使用 <a href="/database/sakila/">Sakila 示例数据库</a> 中的表进行演示，请您先<a href="./示例数据库.html">在 PostgreSQL 中安装 Sakila 示例数据库</a>。</p><p>在以下实例中，<a href="/database/sakila/演员表.html"><code>actor</code></a> 表中存储了演员的信息。</p><h3 id="按字段升序排序" tabindex="-1">按字段升序排序 <a class="header-anchor" href="#按字段升序排序" aria-label="Permalink to &quot;按字段升序排序&quot;">​</a></h3><p>以下 SQL 语句使用 <code>ORDER BY</code> 子句按演员姓氏升序进行排序。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    actor_id, first_name, last_name</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    actor</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> last_name;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">actor_id | first_name  |  last_name</span></span>
<span class="line"><span style="color:#A6ACCD;">----------+-------------+--------------</span></span>
<span class="line"><span style="color:#A6ACCD;">      182 | DEBBIE      | AKROYD</span></span>
<span class="line"><span style="color:#A6ACCD;">       92 | KIRSTEN     | AKROYD</span></span>
<span class="line"><span style="color:#A6ACCD;">       58 | CHRISTIAN   | AKROYD</span></span>
<span class="line"><span style="color:#A6ACCD;">      194 | MERYL       | ALLEN</span></span>
<span class="line"><span style="color:#A6ACCD;">      145 | KIM         | ALLEN</span></span>
<span class="line"><span style="color:#A6ACCD;">      118 | CUBA        | ALLEN</span></span>
<span class="line"><span style="color:#A6ACCD;">       76 | ANGELINA    | ASTAIRE</span></span>
<span class="line"><span style="color:#A6ACCD;">      112 | RUSSELL     | BACALL</span></span>
<span class="line"><span style="color:#A6ACCD;">      190 | AUDREY      | BAILEY</span></span>
<span class="line"><span style="color:#A6ACCD;">       67 | JESSICA     | BAILEY</span></span>
<span class="line"><span style="color:#A6ACCD;">      115 | HARRISON    | BALE</span></span>
<span class="line"><span style="color:#A6ACCD;">      187 | RENEE       | BALL</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">(200 rows)</span></span></code></pre></div><h3 id="按字段降序排序" tabindex="-1">按字段降序排序 <a class="header-anchor" href="#按字段降序排序" aria-label="Permalink to &quot;按字段降序排序&quot;">​</a></h3><p>以下 SQL 语句使用 <code>ORDER BY</code> 子句按演员姓氏降序进行排序。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    actor_id, first_name, last_name</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    actor</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> last_name </span><span style="color:#F78C6C;">DESC</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-fallback"><button title="Copy Code" class="copy"></button><span class="lang">fallback</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">actor_id | first_name  |  last_name</span></span>
<span class="line"><span style="color:#A6ACCD;">----------+-------------+--------------</span></span>
<span class="line"><span style="color:#A6ACCD;">      186 | JULIA       | ZELLWEGER</span></span>
<span class="line"><span style="color:#A6ACCD;">      111 | CAMERON     | ZELLWEGER</span></span>
<span class="line"><span style="color:#A6ACCD;">       85 | MINNIE      | ZELLWEGER</span></span>
<span class="line"><span style="color:#A6ACCD;">       63 | CAMERON     | WRAY</span></span>
<span class="line"><span style="color:#A6ACCD;">       13 | UMA         | WOOD</span></span>
<span class="line"><span style="color:#A6ACCD;">      156 | FAY         | WOOD</span></span>
<span class="line"><span style="color:#A6ACCD;">      144 | ANGELA      | WITHERSPOON</span></span>
<span class="line"><span style="color:#A6ACCD;">       68 | RIP         | WINSLET</span></span>
<span class="line"><span style="color:#A6ACCD;">      147 | FAY         | WINSLET</span></span>
<span class="line"><span style="color:#A6ACCD;">      168 | WILL        | WILSON</span></span>
<span class="line"><span style="color:#A6ACCD;">      164 | HUMPHREY    | WILLIS</span></span>
<span class="line"><span style="color:#A6ACCD;">       96 | GENE        | WILLIS</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">(200 rows)</span></span></code></pre></div><h3 id="按多字段排序" tabindex="-1">按多字段排序 <a class="header-anchor" href="#按多字段排序" aria-label="Permalink to &quot;按多字段排序&quot;">​</a></h3><p>以下 SQL 语句使用 <code>ORDER BY</code> 子句先按演员姓氏升序排序，再按演员名字升序排序。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    actor_id, first_name, last_name</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    actor</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> last_name, first_name;</span></span></code></pre></div><div class="language-fallback"><button title="Copy Code" class="copy"></button><span class="lang">fallback</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">actor_id | first_name  |  last_name</span></span>
<span class="line"><span style="color:#A6ACCD;">----------+-------------+--------------</span></span>
<span class="line"><span style="color:#A6ACCD;">       58 | CHRISTIAN   | AKROYD</span></span>
<span class="line"><span style="color:#A6ACCD;">      182 | DEBBIE      | AKROYD</span></span>
<span class="line"><span style="color:#A6ACCD;">       92 | KIRSTEN     | AKROYD</span></span>
<span class="line"><span style="color:#A6ACCD;">      118 | CUBA        | ALLEN</span></span>
<span class="line"><span style="color:#A6ACCD;">      145 | KIM         | ALLEN</span></span>
<span class="line"><span style="color:#A6ACCD;">      194 | MERYL       | ALLEN</span></span>
<span class="line"><span style="color:#A6ACCD;">       76 | ANGELINA    | ASTAIRE</span></span>
<span class="line"><span style="color:#A6ACCD;">      112 | RUSSELL     | BACALL</span></span>
<span class="line"><span style="color:#A6ACCD;">      190 | AUDREY      | BAILEY</span></span>
<span class="line"><span style="color:#A6ACCD;">       67 | JESSICA     | BAILEY</span></span>
<span class="line"><span style="color:#A6ACCD;">      115 | HARRISON    | BALE</span></span>
<span class="line"><span style="color:#A6ACCD;">      187 | RENEE       | BALL</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">(200 rows)</span></span></code></pre></div><h2 id="按自定义顺序排序" tabindex="-1">按自定义顺序排序 <a class="header-anchor" href="#按自定义顺序排序" aria-label="Permalink to &quot;按自定义顺序排序&quot;">​</a></h2><p>有时候单纯的按照字段的值排序并不能满足要求，我们需要按照自定义的顺序的排序。比如，我们需要按照电影分级 <code>&#39;G&#39;, &#39;PG&#39;, &#39;PG-13&#39;, &#39;R&#39;, &#39;NC-17&#39;</code> 的顺序对影片进行排序。</p><p>对于这样的需求，它可以理解为按照列表中元素的索引位置进行排序。我们使用 <code>CASE</code> 子句函数实现它。</p><p>在以下实例中，我们使用 Sakila 示例数据库中的 <a href="/database/sakila/影片表.html"><code>film</code> 表</a>作为演示。</p><p>假设您要根据影片的分级按照的 <code>&#39;G&#39;, &#39;PG&#39;, &#39;PG-13&#39;, &#39;R&#39;, &#39;NC-17&#39;</code> 顺序对影片进行排序。</p><h3 id="使用-case-实现自定义排序" tabindex="-1">使用 <code>CASE</code> 实现自定义排序 <a class="header-anchor" href="#使用-case-实现自定义排序" aria-label="Permalink to &quot;使用 \`CASE\` 实现自定义排序&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    film_id, title, rating</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    film</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">CASE</span><span style="color:#A6ACCD;"> rating</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">G</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PG</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PG-13</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">R</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NC-17</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#F78C6C;">END</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">357 | GILBERT PELICAN             | G</span></span>
<span class="line"><span style="color:#A6ACCD;">     597 | MOONWALKER FOOL             | G</span></span>
<span class="line"><span style="color:#A6ACCD;">     354 | GHOST GROUNDHOG             | G</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">     595 | MOON BUNCH                  | PG</span></span>
<span class="line"><span style="color:#A6ACCD;">       6 | AGENT TRUMAN                | PG</span></span>
<span class="line"><span style="color:#A6ACCD;">     600 | MOTIONS DETAILS             | PG</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">       9 | ALABAMA DEVIL               | PG-13</span></span>
<span class="line"><span style="color:#A6ACCD;">     657 | PARADISE SABRINA            | PG-13</span></span>
<span class="line"><span style="color:#A6ACCD;">     956 | WANDA CHAMBER               | PG-13</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">     749 | RULES HUMAN                 | R</span></span>
<span class="line"><span style="color:#A6ACCD;">       8 | AIRPORT POLLOCK             | R</span></span>
<span class="line"><span style="color:#A6ACCD;">      17 | ALONE TRIP                  | R</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">     520 | LICENSE WEEKEND             | NC-17</span></span>
<span class="line"><span style="color:#A6ACCD;">     517 | LESSON CLEOPATRA            | NC-17</span></span>
<span class="line"><span style="color:#A6ACCD;">     114 | CAMELOT VACATION            | NC-17</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">(1000 rows)</span></span></code></pre></div><p>在这个例子中，我们使用 <code>CASE</code> 子句将电影的分级转换为一个数字。然后使用 <code>ORDER BY</code> 按照这个数字进行排序。</p><h2 id="order-by-和-null" tabindex="-1">ORDER BY 和 NULL <a class="header-anchor" href="#order-by-和-null" aria-label="Permalink to &quot;ORDER BY 和 NULL&quot;">​</a></h2><p>在 PostgreSQL 中的升序排序中， <code>NULL</code> 值出现在非 NULL 值之前。</p><p>我们下面的实例使用以下临时数据作为演示：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">v</span></span>
<span class="line"><span style="color:#A6ACCD;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;"> A</span></span>
<span class="line"><span style="color:#A6ACCD;"> B</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> 0</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;">(5 rows)</span></span></code></pre></div><p>当我们使用 <code>ORDER BY</code> 子句升序 <code>ASC</code> 排序时， <code>NULL</code> 值默认排在非 <code>NULL</code> 值的后面。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> v;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">v</span></span>
<span class="line"><span style="color:#A6ACCD;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;"> 0</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;"> A</span></span>
<span class="line"><span style="color:#A6ACCD;"> B</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;null&gt;</span></span></code></pre></div><p>这里，<code>ASC</code> 排序采用 <code>NULLS LAST</code> 规则，所以 <code>NULL</code> 值在最后。 如果您想要改用 <code>NULLS FIRST</code>，请执行以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> v </span><span style="color:#F78C6C;">NULLS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FIRST</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">v</span></span>
<span class="line"><span style="color:#A6ACCD;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> 0</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;"> A</span></span>
<span class="line"><span style="color:#A6ACCD;"> B</span></span></code></pre></div><p>当我们使用 <code>ORDER BY</code> 子句降序 <code>DESC</code> 排序时， <code>NULL</code> 值排在非 <code>NULL</code> 值的前面。这是因为 <code>DESC</code> 排序默认采用 <code>NULLS FIRST</code> 规则。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">UNION ALL</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> v</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> v </span><span style="color:#F78C6C;">DESC</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">v</span></span>
<span class="line"><span style="color:#A6ACCD;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> B</span></span>
<span class="line"><span style="color:#A6ACCD;"> A</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#A6ACCD;"> 0</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL <code>ORDER BY</code> 子句用来对 <code>SELECT</code> 语句返回的结果集排序。如果您没有为 <code>SELECT</code> 语句指定 <code>ORDER BY</code> 子句，<code>SELECT</code> 语句返回的结果集是按照数据库默认的规则排序的。</p><p><code>ORDER BY</code> 子句的用法要点如下：</p><ul><li>使用 <code>ORDER BY</code> 子句按一列或多列对结果集进行排序。</li><li>使用 <code>ASC</code> 选项对结果集进行升序排序，使用 <code>DESC</code> 选项对结果集进行降序排序。</li><li>使用 <code>NULLS FIRST</code> 或者 <code>NULLS LAST</code> 改变对 <code>NULL</code> 值的处理规则。</li></ul>`,53),e=[o];function c(C,t,r,A,y,i){return a(),n("div",null,e)}const E=s(p,[["render",c]]);export{d as __pageData,E as default};
