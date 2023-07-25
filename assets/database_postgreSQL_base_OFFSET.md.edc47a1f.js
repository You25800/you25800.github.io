import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"PostgreSQL OFFSET 用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/OFFSET.md","filePath":"database/postgreSQL/base/OFFSET.md","lastUpdated":1690289709000}'),p={name:"database/postgreSQL/base/OFFSET.md"},o=l(`<h1 id="postgresql-offset-用法与实例" tabindex="-1">PostgreSQL OFFSET 用法与实例 <a class="header-anchor" href="#postgresql-offset-用法与实例" aria-label="Permalink to &quot;PostgreSQL OFFSET 用法与实例&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中如何在 <code>SELECT</code> 语句中使用 <code>OFFSET</code> 子句跳过指定的行数。</p><p>有时候，您可能想让 <code>SELECT</code> 语句跳过指定的行数，返回剩余的行。比如，您想要获取除成绩前 10 名之外的所有人的信息。</p><p>在 PostgreSQL 中，您可以在 <code>SELECT</code> 语句中使用 <code>OFFSET</code> 子句跳过指定的行数。</p><h2 id="postgresql-offset-子句介绍" tabindex="-1">PostgreSQL <code>OFFSET</code> 子句介绍 <a class="header-anchor" href="#postgresql-offset-子句介绍" aria-label="Permalink to &quot;PostgreSQL \`OFFSET\` 子句介绍&quot;">​</a></h2><p>PostgreSQL <code>OFFSET</code> 是 <a href="./SELECT.html"><code>SELECT</code></a> 语句的可选子句，用于将查询跳过指定的行数。</p><p>下面说明了 <code>OFFSET</code> 子句的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">OFFSET skipped_rows</span></span></code></pre></div><p>这里，<code>skipped_rows</code> 指定要跳过的行数。比如 <code>OFFSET 10</code> 表示跳过 10 行。</p><p>带有 <code>OFFSET</code> 子句的 <code>SELECT</code> 语句完整用法如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> column_list</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[other_clauses]</span></span>
<span class="line"><span style="color:#A6ACCD;">OFFSET skipped_rows;</span></span></code></pre></div><p><code>other_clauses</code> 表示可以在 <code>SELECT</code> 语句中使用的其他子句，比如 <a href="./WHERE.html"><code>WHERE</code></a>, <a href="./ORDER_BY.html"><code>ORDER BY</code></a>, <a href="./LIMIT.html"><code>LIMIT</code></a> 等</p><p>通常，您需要在带有 <code>OFFSET</code> 子句的 <code>SELECT</code> 语句中一同使用 <code>ORDER BY</code> 子句，这样您可以得到一个按照指定的顺序排序的结果集。这是一个好的实践。</p><p>在一些分页的查询的应用中，您需要在 <code>SELECT</code> 语句使用 <a href="./LIMIT.html"><code>LIMIT</code></a>子句和 <code>OFFSET</code> 子句。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> column_list</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> rows_count OFFSET skipped_rows;</span></span></code></pre></div><p>比如:</p><ul><li>第一页可以使用： <code>LIMIT 10 OFFSET 0</code> 表示最多返回 10 行。</li><li>第二页可以使用： <code>LIMIT 10 OFFSET 10</code> 表示跳过第一页的 10 行后最多返回 10 行。</li><li>第三页可以使用： <code>LIMIT 10 OFFSET 20</code> 表示跳过前两页的 20 行后最多返回 10 行。</li><li>以此类推…</li></ul><h2 id="postgresql-offset-示例" tabindex="-1">PostgreSQL <code>OFFSET</code> 示例 <a class="header-anchor" href="#postgresql-offset-示例" aria-label="Permalink to &quot;PostgreSQL \`OFFSET\` 示例&quot;">​</a></h2><p>我们将使用 <a href="./示例数据库.html">PostgreSQL Sakila 示例数据库</a>中的 <a href="/database/sakila/影片表.html"><code>film</code> 表</a>来演示 PostgreSQL <code>OFFSET</code> 的用法。</p><h3 id="使用-postgresql-offset-跳过示例" tabindex="-1">使用 PostgreSQL OFFSET 跳过示例 <a class="header-anchor" href="#使用-postgresql-offset-跳过示例" aria-label="Permalink to &quot;使用 PostgreSQL OFFSET 跳过示例&quot;">​</a></h3><p>要从 <code>film</code> 表查询时跳过前面的 995 行，请使用下面的带有 <code>OFFSET</code> 子句的 <code>SELECT</code> 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  film_id,</span></span>
<span class="line"><span style="color:#A6ACCD;">  title,</span></span>
<span class="line"><span style="color:#A6ACCD;">  release_year</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> film_id</span></span>
<span class="line"><span style="color:#A6ACCD;">OFFSET </span><span style="color:#F78C6C;">995</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">film_id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">release_year</span></span>
<span class="line"><span style="color:#FFCB6B;">---------+-------------------+--------------</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">996</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">YOUNG</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">LANGUAGE</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">997</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">YOUTH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KICK</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">998</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ZHIVAGO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CORE</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">999</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ZOOLANDER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FICTION</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">1000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ZORRO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ARK</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span></code></pre></div><h3 id="使用-postgresql-limit-和-offset-分页查询示例" tabindex="-1">使用 PostgreSQL LIMIT 和 OFFSET 分页查询示例 <a class="header-anchor" href="#使用-postgresql-limit-和-offset-分页查询示例" aria-label="Permalink to &quot;使用 PostgreSQL LIMIT 和 OFFSET 分页查询示例&quot;">​</a></h3><p><code>film</code> 表中共有 1000 行关于影片的信息。您可以通过以下带有 <a href="./COUNT.html"><code>COUNT(*)</code></a> 表达式的 <code>SELECT</code> 语句得到验证：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">COUNT</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">count</span></span>
<span class="line"><span style="color:#FFCB6B;">-------</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">1000</span></span></code></pre></div><p>假设你有一个系统需要在前端展示所有的影片信息，将 1000 行信息全部展示在一页上并不是一个好的方案。因为这个方案如下的缺点：</p><ul><li>数据库性能。 一个语句中返回大量的数据会带给数据库服务器更大的内存开销和 IO 消耗。</li><li>应用性能。大量的数据会导致应用占用更大的内容，甚至回导致应用卡顿、卡死。</li><li>用户的体验。用户面对大量的数据会眩晕。</li></ul><p>一个更好的方案是分页显示所有的影片。您可以很轻松地使用 带有 <code>LIMIT</code> 和 <code>OFFSET</code> 子句的 <code>SELECt</code> 语句实现分页查询。</p><p>假设您需要每页显示 10 个影片信息，那么您可以使用如下的语句获取第一页的所有行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  film_id,</span></span>
<span class="line"><span style="color:#A6ACCD;">  title,</span></span>
<span class="line"><span style="color:#A6ACCD;">  release_year</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> film_id</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>这里，我们使用 <code>LIMIT 10</code> 限制了此查询最多返回 10 行。以下是输出：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">film_id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">release_year</span></span>
<span class="line"><span style="color:#FFCB6B;">---------+------------------+--------------</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ACADEMY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DINOSAUR</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ACE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GOLDFINGER</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ADAPTATION</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HOLES</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AFFAIR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PREJUDICE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AFRICAN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">EGG</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AGENT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TRUMAN</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AIRPLANE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SIERRA</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AIRPORT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POLLOCK</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">9</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALABAMA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DEVIL</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALADDIN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CALENDAR</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span></code></pre></div><p>您可以使用如下的语句获取第二页的所有行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  film_id,</span></span>
<span class="line"><span style="color:#A6ACCD;">  title,</span></span>
<span class="line"><span style="color:#A6ACCD;">  release_year</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> film_id</span></span>
<span class="line"><span style="color:#A6ACCD;">OFFSET </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>这里，我们使用 <code>OFFSET 10</code> 指示了跳过第一页的 10 行，并使用 <code>LIMIT 10</code> 限制了此查询最多返回 10 行。以下是输出：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">film_id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">release_year</span></span>
<span class="line"><span style="color:#FFCB6B;">---------+---------------------+--------------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">11</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALAMO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VIDEOTAPE</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">12</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALASKA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PHANTOM</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALI</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FOREVER</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALICE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FANTASIA</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">15</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALIEN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CENTER</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">16</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALLEY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">EVOLUTION</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">17</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALONE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TRIP</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">18</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VICTORY</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">19</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AMADEUS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HOLY</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AMELIE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HELLFIGHTERS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">2006</span></span></code></pre></div><p>同样的，您可以使用如下的语句获取第三页的所有行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  film_id,</span></span>
<span class="line"><span style="color:#A6ACCD;">  title,</span></span>
<span class="line"><span style="color:#A6ACCD;">  release_year</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> film_id</span></span>
<span class="line"><span style="color:#A6ACCD;">OFFSET </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>这里，我们使用 <code>OFFSET 20</code> 指示了跳过前两页的 20 行，并使用 <code>LIMIT 10</code> 限制了此查询最多返回 10 行。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在本文中，您学习了如何使用 PostgreSQL <code>OFFSET</code> 子句跳过指定的行数。 <code>LIMIT</code> 子句，<code>OFFSET</code> 子句和 <code>ORDER BY</code> 子句经常用于解决分页查询问题。</p>`,43),e=[o];function c(t,C,r,A,y,F){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};