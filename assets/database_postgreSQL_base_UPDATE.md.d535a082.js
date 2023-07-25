import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"PostgreSQL UPDATE 用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/UPDATE.md","filePath":"database/postgreSQL/base/UPDATE.md","lastUpdated":1690289709000}'),o={name:"database/postgreSQL/base/UPDATE.md"},p=l(`<h1 id="postgresql-update-用法与实例" tabindex="-1">PostgreSQL UPDATE 用法与实例 <a class="header-anchor" href="#postgresql-update-用法与实例" aria-label="Permalink to &quot;PostgreSQL UPDATE 用法与实例&quot;">​</a></h1><p>在本文中，我们讨论了在 PostgreSQL 中使用 <code>UPDATE</code> 语句更新表中的行。</p><p>在 PostgreSQL 中，<code>UPDATE</code> 语句允许你更新表中的已有的数据行。</p><h2 id="update-语法" tabindex="-1">UPDATE 语法 <a class="header-anchor" href="#update-语法" aria-label="Permalink to &quot;UPDATE 语法&quot;">​</a></h2><p>PostgreSQL <code>UPDATE</code> 语句可以更新表中的一行或者多行数据，可以更新表中的一个或者多个列的值。 以下是 <code>UPDATE</code> 语句的基本语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> [IGNORE] table_name</span></span>
<span class="line"><span style="color:#F78C6C;">SET</span></span>
<span class="line"><span style="color:#A6ACCD;">    column_name1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    column_name2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> value2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE clause]</span></span>
<span class="line"><span style="color:#A6ACCD;">[RETURNING expr];</span></span></code></pre></div><p>用法说明：</p><ul><li><p><code>UPDATE</code> 关键字后指定要更新数据的表名。</p></li><li><p>使用 <code>SET</code> 子句设置列的新值。多个列使用逗号分隔。列的值可以是普通的字面值，也可以是表达式运算，还可以是子查询。</p></li><li><p>使用 <a href="/database/postgreSQL/base/WHERE.html">WHERE</a> 子句指定要更新的行的条件。只有符合 <code>WHERE</code> 条件的行才会被更新。</p></li><li><p><code>WHERE</code> 子句是可选的。如果不指定 <code>WHERE</code> 子句，则更新表中的所有行。</p></li><li><p><code>RETURNING</code> 子句是可选的。它用于返回更新的行的信息。</p><p><code>expr</code> 可以是列名或者表达式，多个列或者表达式请使用逗号分隔。 您还可以使用 <code>*</code> 表示表中的所有的列。</p><p>如果不指定 <code>RETURNING</code> 子句， <code>UPDATE</code> 语句将返回更新的行数。</p></li></ul><p><code>UPDATE</code> 语句中的 <code>WHERE</code> 子句非常重要。除非您特意，否则不要省略 <code>WHERE</code> 子句。</p><h2 id="postgresql-update-实例" tabindex="-1">PostgreSQL UPDATE 实例 <a class="header-anchor" href="#postgresql-update-实例" aria-label="Permalink to &quot;PostgreSQL UPDATE 实例&quot;">​</a></h2><p>下面我们将通过几个实例来展示 <code>UPDATE</code> 的具体用法。</p><p>在以下实例中，<a href="/database/sakila/客户表.html"><code>customer</code></a> 表中存储了客户的信息。</p><h3 id="使用-update-修改单列值" tabindex="-1">使用 UPDATE 修改单列值 <a class="header-anchor" href="#使用-update-修改单列值" aria-label="Permalink to &quot;使用 UPDATE 修改单列值&quot;">​</a></h3><p>在这个例子中，我们将把 <code>customer_id</code> 等于 <code>1</code> 的客户的电子邮件修改为 <code>NEW.MARY.SMITH@sakilacustomer.org</code>。</p><ol><li><p>使用以下 <a href="/database/postgreSQL/base/select.html"><code>SELECT</code></a> 语句查看更新前的数据。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> first_name, last_name, email</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> customer</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> customer_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">first_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">last_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">             </span><span style="color:#FFCB6B;">email</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+-----------+-------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MARY</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SMITH</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MARY.SMITH@sakilacustomer.org</span></span></code></pre></div></li><li><p>使用以下 <code>UPDATE</code> 语句更新 <code>email</code> 列的值。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> customer</span></span>
<span class="line"><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> email </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NEW.MARY.SMITH@sakilacustomer.org</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> customer_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">UPDATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span></code></pre></div><p>在此 <code>UPDATE</code> 语句中：</p><ul><li>通过 <a href="/database/postgreSQL/base/WHERE.html">WHERE</a> 子句指定更新的条件为 <code>customer_id = 1</code>。</li><li>通过 <code>SET</code> 子句将 <code>email</code> 列的值设置为新电子邮件。</li></ul><p><code>UPDATE</code> 返回了 <code>UPDATE 1</code>，它表示更新了一行。</p></li><li><p>或者，您可以使用以下 <code>RETURNING</code> 子句直接查看更新后的数据：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> customer</span></span>
<span class="line"><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> email </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NEW.MARY.SMITH@sakilacustomer.org</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> customer_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">RETURNING first_name, last_name, email;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">first_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">last_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">               </span><span style="color:#FFCB6B;">email</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+-----------+-----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MARY</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SMITH</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NEW.MARY.SMITH@sakilacustomer.org</span></span></code></pre></div></li></ol><h3 id="使用-update-修改多列值" tabindex="-1">使用 UPDATE 修改多列值 <a class="header-anchor" href="#使用-update-修改多列值" aria-label="Permalink to &quot;使用 UPDATE 修改多列值&quot;">​</a></h3><p>在这个例子中，我们将同时更新 <code>customer_id</code> 等于 <code>1</code> 的客户的 <code>first_name</code>, <code>last_name</code>, <code>email</code> 列。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> customer</span></span>
<span class="line"><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> first_name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    last_name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Duncan</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    email </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim.Duncan@sakilacustomer.org</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> customer_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">RETURNING first_name, last_name, email;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">first_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">last_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">             </span><span style="color:#FFCB6B;">email</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+-----------+-------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tim</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Duncan</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tim.Duncan@sakilacustomer.org</span></span></code></pre></div><h3 id="使用表达式更新" tabindex="-1">使用表达式更新 <a class="header-anchor" href="#使用表达式更新" aria-label="Permalink to &quot;使用表达式更新&quot;">​</a></h3><p>使用 <code>UPDATE</code> 更新时，列的值可以设置为表达式的运算结果，比如函数或其他的运算。</p><p>下面的 <code>UPDATE</code> 更新所有客户的电子邮件的域名部分：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> customer</span></span>
<span class="line"><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> email </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">REPLACE</span><span style="color:#A6ACCD;">(email, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sakilacustomer.org</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sjkjc.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">RETURNING first_name, last_name, email;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">first_name</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">last_name</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">email</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------+--------------+---------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PATRICIA</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">JOHNSON</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PATRICIA.JOHNSON@sjkjc.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LINDA</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WILLIAMS</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LINDA.WILLIAMS@sjkjc.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BARBARA</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">JONES</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BARBARA.JONES@sjkjc.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ELIZABETH</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BROWN</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ELIZABETH.BROWN@sjkjc.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">JENNIFER</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DAVIS</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">JENNIFER.DAVIS@sjkjc.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MARIA</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MILLER</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MARIA.MILLER@sjkjc.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SUSAN</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WILSON</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SUSAN.WILSON@sjkjc.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MARGARET</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MOORE</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MARGARET.MOORE@sjkjc.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DOROTHY</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TAYLOR</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DOROTHY.TAYLOR@sjkjc.com</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LISA</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ANDERSON</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LISA.ANDERSON@sjkjc.com</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">599</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>注意，本例中没有使用 <code>WHERE</code> 子句，所以表中所有的数据都进行了更新。</p><h3 id="使用子查询更新" tabindex="-1">使用子查询更新 <a class="header-anchor" href="#使用子查询更新" aria-label="Permalink to &quot;使用子查询更新&quot;">​</a></h3><p>下面实例展示了如何为没有绑定商店的客户绑定一个随机商店。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> customer</span></span>
<span class="line"><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> store_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> store_id</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> store</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> random</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> store_id </span><span style="color:#F78C6C;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>在本例中，我们通过以下 <code>SELECT</code> 语句返回一个随机的商店 id：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> store_id</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> store</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> random</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span></code></pre></div><p>在 <code>SET</code> 子句中，将 <code>store_id</code> 的值设置为上面的子查询的结果。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL <code>UPDATE</code> 语句用来更新一个表中的一个或者多个已有的行。如果带有 <code>RETURNING</code> 子句， <code>UPDATE</code> 语句将返回更新后的行，否则它将返回被更新的行数。</p>`,33),e=[p];function c(t,r,C,A,y,D){return a(),n("div",null,e)}const d=s(o,[["render",c]]);export{i as __pageData,d as default};
