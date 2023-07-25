import{_ as s,o as a,c as l,R as n}from"./chunks/framework.333b51ca.js";const d=JSON.parse('{"title":"使用 PostgreSQL ALTER TABLE 语句向表在添加列","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/添加列.md","filePath":"database/postgreSQL/databaseAndTable/添加列.md","lastUpdated":1690289709000}'),o={name:"database/postgreSQL/databaseAndTable/添加列.md"},p=n(`<h1 id="使用-postgresql-alter-table-语句向表在添加列" tabindex="-1">使用 PostgreSQL ALTER TABLE 语句向表在添加列 <a class="header-anchor" href="#使用-postgresql-alter-table-语句向表在添加列" aria-label="Permalink to &quot;使用 PostgreSQL ALTER TABLE 语句向表在添加列&quot;">​</a></h1><p>在本文中，您将了解如何使用 PostgreSQL <code>ALTER TABLE ... ADD COLUMN</code> 语句向表中添加一个或多个列。</p><p>有时候，您需要向一个已有的表中添加一个新的列以保存一些必要的信息。</p><p>假设，您有一个用户表，它用来存储用户名，邮件，密码等信息。但是随着系统的需求的变动，您需要在用户表中保存手机号码。要做到这些，您不需要重新创建一个表，只需要在现有的表上添加一个列即可。</p><p>PostgreSQL 允许您使用 <code>ALTER TABLE</code> 语句来修改一个现有的表。要向一个表中添加一列或多列，请使用 <code>ALTER TABLE ... ADD COLUMN</code> 语句。</p><h2 id="postgresql-add-column-语法" tabindex="-1">PostgreSQL <code>ADD COLUMN</code> 语法 <a class="header-anchor" href="#postgresql-add-column-语法" aria-label="Permalink to &quot;PostgreSQL \`ADD COLUMN\` 语法&quot;">​</a></h2><p>要将新列添加到现有表，请按照如下语法使用 <code>ALTER TABLE ... ADD COLUMN</code> 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> [COLUMN] [IF NOT EXISTS] column_name data_type column_contraint</span></span>
<span class="line"><span style="color:#A6ACCD;">[, ADD [COLUMN] ...];</span></span></code></pre></div><p>解释说明：</p><ul><li><code>table_name</code> 是要在其中添加列的表。</li><li><code>ADD [COLUMN] ...</code> 子句用来添加一个列。其中 <code>COLUMN</code> 关键字是可以省略的。如果要在一个语句中添加多个列，请使用多个逗号分隔的 <code>ADD [COLUMN] ...</code> 子句。</li><li><code>column_name</code> 是要添加的列的名字。 列名应该符合以下规则： <ul><li>列名可由字母、数字、下划线和美元符号组成，列名最大长度为 63 个字符。</li><li>列名在一个表中是唯一的。</li></ul></li><li><code>data_type</code> 是要添加的列要存储的数据的数据类型， 比如：<a href="/database/postgreSQL/dataType/字符类型.html"><code>VARCHAR</code></a>, <a href="/database/postgreSQL/dataType/整数类型.html"><code>INTEGER</code></a>, <a href="/database/postgreSQL/dataType/布尔类型.html"><code>BOOLEAN</code></a>, <a href="/database/postgreSQL/dataType/DATE.html"><code>DATE</code></a>, <a href="/database/postgreSQL/dataType/TIME.html"><code>TIME</code></a>, <a href="/database/postgreSQL/dataType/时间戳.html"><code>TIMESTAMP</code></a>, <a href="/database/postgreSQL/dataType/ARRAY.html"><code>ARRAY</code></a>, <a href="https://www.sjkjc.com/postgresql/json-type/" target="_blank" rel="noreferrer"><code>JSON</code></a> 等。</li><li><code>column_contraint</code> 是要添加的列的约束，比如 <a href="./NOT_NULL.html"><code>NOT NULL</code></a>, <a href="/database/postgreSQL/databaseAndTable/主键.html"><code>PRIMARY KEY</code></a>, <a href="/database/postgreSQL/databaseAndTable/外键.html"><code>FOREIGN KEY</code></a>, <a href="/database/postgreSQL/databaseAndTable/唯一约束.html"><code>UNIQUE</code></a> 和 <a href="https://www.sjkjc.com/postgresql/check-constraint/" target="_blank" rel="noreferrer"><code>CHECK</code></a> 等。</li><li><code>IF NOT EXISTS</code> 可以避免因为给出的重复的列名而导致的错误。它是可选的。</li></ul><p>新的列将会被添加到表的末尾。您不能为新的列指定位置。</p><p>如果表中已有一些行，新的列的约束可能会导致错误，您可以在列定义上添加默认值，或者通过以下步骤解决：</p><ol><li>添加不带约束的列。</li><li>更新新加的列的数据。</li><li>为新的列添加约束。</li></ol><h2 id="查看表中所有的列" tabindex="-1">查看表中所有的列 <a class="header-anchor" href="#查看表中所有的列" aria-label="Permalink to &quot;查看表中所有的列&quot;">​</a></h2><p>在向表中添加一个列之前，您可以需要首先确定此表中是否存在同名的列。</p><p>在 PostgreSQL 中， 要查看一个表中的所有列的信息，您可以使用 <code>\\d</code> 命令列出表的定义，或者从 <code>information_schema.columns</code> 表中查找出来。</p><p><code>\\d</code> 命令的用法如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d table_name</span></span></code></pre></div><p>要从 <code>information_schema.columns</code> 表中查找一个表中所有的列，请使用下面的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> column_name</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> information_schema.columns</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> table_schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> table_name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">table_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><h2 id="postgresql-add-column-实例" tabindex="-1">PostgreSQL <code>ADD COLUMN</code> 实例 <a class="header-anchor" href="#postgresql-add-column-实例" aria-label="Permalink to &quot;PostgreSQL \`ADD COLUMN\` 实例&quot;">​</a></h2><p>这个实例演示了如何使用 <code>ALTER TABLE ... ADD COLUMN</code> 语句向表中添加一个或两个列。</p><p>假设，有一个用户表，其中有 ID 和 用户名 两列。</p><p>使用以下语句在 <code>testdb</code> 数据库中 <a href="./创建表.html">创建一个表</a> <code>users</code> 用以存储用户信息：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">users</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  id </span><span style="color:#C792EA;">SERIAL</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>如果您没有 <code>testdb</code> 数据库，请先使用如下语句<a href="./创建数据库.html">创建数据库</a> 并切换到数据库：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">testdb</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">\\c testdb;</span></span></code></pre></div><p>创建表后，您可以使用 <code>\\d</code> 命令查看此表中的所有列：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d users;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public.users</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Collation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Nullable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">Default</span></span>
<span class="line"><span style="color:#FFCB6B;">--------+------------------------+-----------+----------+-----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">integer</span><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">nextval(</span><span style="color:#FFCB6B;">&#39;users_id_seq&#39;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">:regclass)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">character</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">varying</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">100</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">Indexes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;users_pkey&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIMARY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KEY,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">btree</span><span style="color:#A6ACCD;"> (id)</span></span></code></pre></div><p>向用户表中插入一行数据，如下；</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">INSERT INTO</span><span style="color:#A6ACCD;"> users (</span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">values</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><h3 id="使用-postgresql-add-column-向表中添加一列" tabindex="-1">使用 PostgreSQL <code>ADD COLUMN</code> 向表中添加一列 <a class="header-anchor" href="#使用-postgresql-add-column-向表中添加一列" aria-label="Permalink to &quot;使用 PostgreSQL \`ADD COLUMN\` 向表中添加一列&quot;">​</a></h3><p>要想在 <code>users</code> 表保存用户的年龄，你需要使用以下语句向 <code>users</code> 表中添加 <code>age</code> 列，</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> users</span></span>
<span class="line"><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> COLUMN age </span><span style="color:#C792EA;">INTEGER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ERROR:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">column</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">contains</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">values</span></span></code></pre></div><p>这里， PostgreSQL 给出了一个错误。 这是因为表不是一个空表，它已经有了一行。 要添加的 <code>age</code> 列是 <code>NOT NULL</code> 的 导致了这个错误的发生。要避免这个错误，您可以为 <code>age</code> 列指定一个默认值，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> users</span></span>
<span class="line"><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> COLUMN age </span><span style="color:#C792EA;">INTEGER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>这里，我们添加了一个 <code>age</code> 列，它的类型是 <code>INTEGER</code>，并且是非空列，默认值是 <code>18</code>。</p><p>添加了 <code>age</code> 列后，原有行中的 <code>age</code> 列的值都是 <code>18</code>。下面语句检索了 <code>users</code> 表中的所有的行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> users;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">age</span></span>
<span class="line"><span style="color:#FFCB6B;">----+------+-----</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tim</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">18</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">row</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="使用-postgresql-add-column-向表中添加二列" tabindex="-1">使用 PostgreSQL <code>ADD COLUMN</code> 向表中添加二列 <a class="header-anchor" href="#使用-postgresql-add-column-向表中添加二列" aria-label="Permalink to &quot;使用 PostgreSQL \`ADD COLUMN\` 向表中添加二列&quot;">​</a></h3><p>随着系统的发展，您可能需要在用户表中保存用户的电子邮件和手机号信息。这几乎已经是用户的必备信息。</p><p>要向 <code>users</code> 表中添加 <code>email</code> 和 <code>cellphone</code> 列，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> users</span></span>
<span class="line"><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> COLUMN email </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> COLUMN cellphone </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>这里，我们向 <code>users</code> 表中添加了两个列： <code>email</code> 用于电子邮件地址 和 <code>cellphone</code> 用于手机号码。</p><p>让我们检查 <code>users</code> 表的行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> users;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">age</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cellphone</span></span>
<span class="line"><span style="color:#FFCB6B;">----+------+-----+-------+-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tim</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">18</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">row</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>最后，让我们使用 <code>\\d</code> 命令查看此表中的所有列：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d users;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public.users</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Collation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Nullable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">Default</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------+------------------------+-----------+----------+-----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">integer</span><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">nextval(</span><span style="color:#FFCB6B;">&#39;users_id_seq&#39;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">:regclass)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">character</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">varying</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">100</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">age</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">integer</span><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">18</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">email</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">character</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">varying</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">100</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cellphone</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">character</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">varying</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">100</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">Indexes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;users_pkey&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIMARY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KEY,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">btree</span><span style="color:#A6ACCD;"> (id)</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL 提供了 <code>ALTER TABLE ... ADD COLUMN</code> 语句向表中添加一个或多个列。 通过 <code>ALTER TABLE</code> 语句，您还可以<a href="./重命名表.html">重命名表</a>、<a href="./重命名列.html">重命名列</a>、<a href="./删除列.html">删除列</a>、<a href="./修改列.html">修改列</a>的属性等。</p>`,55),e=[p];function c(t,r,C,A,y,D){return a(),l("div",null,e)}const i=s(o,[["render",c]]);export{d as __pageData,i as default};
