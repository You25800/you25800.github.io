import{_ as s,o as a,c as n,R as e}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"PostgreSQL UPDATE ... FROM 用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/UPDATE_FROM.md","filePath":"database/postgreSQL/base/UPDATE_FROM.md","lastUpdated":1689061386000}'),o={name:"database/postgreSQL/base/UPDATE_FROM.md"},l=e(`<h1 id="postgresql-update-from-用法与实例" tabindex="-1">PostgreSQL UPDATE ... FROM 用法与实例 <a class="header-anchor" href="#postgresql-update-from-用法与实例" aria-label="Permalink to &quot;PostgreSQL UPDATE ... FROM 用法与实例&quot;">​</a></h1><p>PostgreSQL <code>UPDATE...FROM</code> 语句允许您根据另一个表中的值更新表中的行。</p><p>有时候，你需要根据另一个表中的数据更新一个表中的数据。比如：根据产品销量明细表更新销量统计表。</p><p>在 PostgreSQL，您可以使用<a href="/database/postgreSQL/base/子查询.html">子查询</a>做到一点，也可以更加方便地使用 <code>UPDATE...FROM</code> 语句完成它。</p><h2 id="postgresql-update-from-语法" tabindex="-1">PostgreSQL UPDATE…FROM 语法 <a class="header-anchor" href="#postgresql-update-from-语法" aria-label="Permalink to &quot;PostgreSQL UPDATE…FROM 语法&quot;">​</a></h2><p>要使用 PostgreSQL <code>UPDATE...FROM</code> 语句根据另一个表中的数据更新一个表中的数据，请遵循以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> [IGNORE] table_name</span></span>
<span class="line"><span style="color:#F78C6C;">SET</span></span>
<span class="line"><span style="color:#A6ACCD;">    column_name1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    column_name2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> another_table[, ...]</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> clause</span></span>
<span class="line"><span style="color:#A6ACCD;">[RETURNING expr];</span></span></code></pre></div><p>这里，</p><ul><li>和普通的 <a href="/database/postgreSQL/base/UPDATE.html"><code>UPDATE</code></a> 语句相比，此语句多了 <code>FROM</code> 子句，并且 <code>WHERE</code> 子句是必须的。</li><li>您需要在 <code>WHERE</code> 子句中指定两个表连接的条件。</li></ul><p>比如下面的语句：</p><div class="language-postgres"><button title="Copy Code" class="copy"></button><span class="lang">postgres</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">UPDATE a</span></span>
<span class="line"><span style="color:#A6ACCD;">SET a.c1 = b.c2</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM b</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE a.b_id = b.id;</span></span></code></pre></div><p>对于 <code>a</code> 表的每一行，该 <code>UPDATE</code> 语句都检查 <code>b</code> 表的每一行。如果值 <code>a</code> 表的 <code>b_id</code> 列的值等于在 <code>b</code> 表的 <code>id</code> 列，该 <code>UPDATE</code> 语句将更新 <code>b</code> 的表 <code>c2</code> 列的值到 <code>a</code> 表的 <code>c1</code> 列。</p><h2 id="postgresql-update-from-实例" tabindex="-1">PostgreSQL UPDATE…FROM 实例 <a class="header-anchor" href="#postgresql-update-from-实例" aria-label="Permalink to &quot;PostgreSQL UPDATE…FROM 实例&quot;">​</a></h2><p>下面我们将通过几个实例来展示 <code>UPDATE</code> 的具体用法。</p><p>这里的实例用到了以下表：</p><ul><li><a href="/database/sakila/城市表.html"><code>city</code></a> 表中存储了城市的信息。</li><li><a href="/database/sakila/国家表.html"><code>country</code></a> 表中存储了国家的信息。</li></ul><p>假设现在有一个需求，需要更新 <code>city</code> 表中的城市名称，在其后添加 <code>@</code> 和国家名，请运行以下语句：</p><div class="language-postgres"><button title="Copy Code" class="copy"></button><span class="lang">postgres</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">UPDATE city_copy a</span></span>
<span class="line"><span style="color:#A6ACCD;">SET city = city || &#39;@&#39; || b.country</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM country b</span></span>
<span class="line"><span style="color:#A6ACCD;">WHERE b.country_id = 1 or b.country_id = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">RETURNING city_id, city;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">city_id |                       city</span></span>
<span class="line"><span style="color:#A6ACCD;">---------+--------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">       1 | A Corua (La Corua)@Spain</span></span>
<span class="line"><span style="color:#A6ACCD;">       2 | Abha@Saudi Arabia</span></span>
<span class="line"><span style="color:#A6ACCD;">       3 | Abu Dhabi@United Arab Emirates</span></span>
<span class="line"><span style="color:#A6ACCD;">       4 | Acua@Mexico</span></span>
<span class="line"><span style="color:#A6ACCD;">       5 | Adana@Turkey</span></span>
<span class="line"><span style="color:#A6ACCD;">       6 | Addis Abeba@Ethiopia</span></span>
<span class="line"><span style="color:#A6ACCD;">       7 | Aden@Yemen</span></span>
<span class="line"><span style="color:#A6ACCD;">       8 | Adoni@India</span></span>
<span class="line"><span style="color:#A6ACCD;">       9 | Ahmadnagar@India</span></span>
<span class="line"><span style="color:#A6ACCD;">      10 | Akishima@Japan</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">(600 rows)</span></span></code></pre></div><p>这里，我们在 <code>UPDATE</code> 语句中使用 <code>FROM country b</code> 子句从 <code>country</code> 表中获取满足条件 <code>a.country_id = b.country_id</code> 的行，并将该行中的 <code>country</code> 列的值应用到表达式 <code>city || &#39;@&#39; || b.country</code> 中。</p><p>您也可以使用子查询实现上面的需求，如下：</p><div class="language-postgres"><button title="Copy Code" class="copy"></button><span class="lang">postgres</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">UPDATE city_copy a</span></span>
<span class="line"><span style="color:#A6ACCD;">SET city = (</span></span>
<span class="line"><span style="color:#A6ACCD;">  SELECT a.city || &#39;@&#39; || b.country</span></span>
<span class="line"><span style="color:#A6ACCD;">  FROM country b</span></span>
<span class="line"><span style="color:#A6ACCD;">    WHERE a.country_id = b.country_id</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">RETURNING city_id, city;</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL <code>UPDATE...FROM</code> 语句允许您根据另一个表中的值更新表中的行。</p>`,24),p=[l];function c(t,r,i,d,A,C){return a(),n("div",null,p)}const u=s(o,[["render",c]]);export{D as __pageData,u as default};