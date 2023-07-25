import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"PostgreSQL BETWEEN 运算符的用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/BETWEEN.md","filePath":"database/postgreSQL/base/BETWEEN.md","lastUpdated":1690289709000}'),p={name:"database/postgreSQL/base/BETWEEN.md"},o=l(`<h1 id="postgresql-between-运算符的用法与实例" tabindex="-1">PostgreSQL BETWEEN 运算符的用法与实例 <a class="header-anchor" href="#postgresql-between-运算符的用法与实例" aria-label="Permalink to &quot;PostgreSQL BETWEEN 运算符的用法与实例&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中如何在使用 <code>BETWEEN</code> 运算符检查一个值是否位于一个区间之内。</p><p>假如，在一个应用系统中，您需要判断根据用户的年收入为用户划定等级。比如，要检查用户的年收入是否位于 40100 元和 120400 元之间，您可以使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">annual_income </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40100</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> annual_income </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">120400</span></span></code></pre></div><p>这种情况下，您可以使用 <code>BETWEEN</code> 运算符改写上面的语句，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">annual_income </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40100</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">120400</span></span></code></pre></div><p>PostgreSQL <code>BETWEEN</code> 运算符用于检查一个值是否位于一个值区间之内。</p><h2 id="postgresql-between-语法" tabindex="-1">PostgreSQL BETWEEN 语法 <a class="header-anchor" href="#postgresql-between-语法" aria-label="Permalink to &quot;PostgreSQL BETWEEN 语法&quot;">​</a></h2><p>要检查一个值是否位于一个值区间之内，请按照以下语法使用 <code>BETWEEN</code> 运算符：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">expr </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> low_value </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> high_value;</span></span></code></pre></div><p>这里：</p><ul><li><code>expr</code> 是一个表达式或者列名。</li><li><code>low_value</code> 是值区间的开始， <code>high_value</code> 是值区间的结束。</li><li>如果 <code>expr</code> 的值大于或等于 <code>low_value</code> 值并且小于或等于 <code>high_value</code> 值， <code>BETWEEN</code> 运算符返回真，否则返回假。</li></ul><p><code>BETWEEN</code> 运算符相当于以下使用了 大于等于 (<code>&gt;=</code>) 和 小于等于 (<code>&lt;=</code>) 运算符的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">expr </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> low_value </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> expr </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> high_value</span></span></code></pre></div><p>通常情况下，您在 <a href="/database/postgreSQL/base/WHERE.html">WHERE</a> 子句中使用 <code>BETWEEN</code> 运算符， 如下所示：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> expr </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> low_value </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> expr </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> high_value</span></span></code></pre></div><p>当然，出了 <a href="/database/postgreSQL/base/INSERT.html"><code>INSERT</code></a> 语句外， <code>WHERE</code> 子句同样可以用于 <a href="/database/postgreSQL/base/UPDATE.html"><code>UPDATE</code></a> 或者 <a href="/database/postgreSQL/base/DELETE.html"><code>DELETE</code></a> 语句。</p><p>您可以使用结合 <code>NOT</code> 运算符和 <code>BETWEEN</code> 运算符以检查一个值是否不在一个指定的值区间之内：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">expr </span><span style="color:#F78C6C;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> low_value </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> high_value;</span></span></code></pre></div><p>这相当于以下使用了 大于 (<code>&gt;</code>) 和 小于 (<code>&lt;</code>) 运算符的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">expr </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> low_value </span><span style="color:#F78C6C;">OR</span><span style="color:#A6ACCD;"> expr </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> high_value</span></span></code></pre></div><h2 id="postgresql-between-运算符实例" tabindex="-1">PostgreSQL BETWEEN 运算符实例 <a class="header-anchor" href="#postgresql-between-运算符实例" aria-label="Permalink to &quot;PostgreSQL BETWEEN 运算符实例&quot;">​</a></h2><p>我们将使用 <a href="/database/sakila/">Sakila 示例数据库</a> 中的表进行演示，请您先<a href="./示例数据库.html">在 PostgreSQL 中安装 Sakila 示例数据库</a>。</p><p>要从 <a href="/database/sakila/影片表.html"><code>film</code></a> 表中检索影片时长在在 95 到 98 分钟之间的影片，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    title, </span><span style="color:#F78C6C;">length</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    film</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">95</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">98</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">title</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">length</span></span>
<span class="line"><span style="color:#FFCB6B;">---------------------+--------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BOUND</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CHEAPER</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">98</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CLUELESS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BUCKET</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">95</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DRUMS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DYNAMITE</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">96</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EARLY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HOME</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">96</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EARRING</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INSTINCT</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">98</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EXPENDABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">STALLION</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">97</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FEUD</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FROGMEN</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">98</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HORN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WORKING</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">95</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">INVASION</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CYCLONE</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">97</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LOST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BIRD</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">98</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LUCKY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FLYING</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">97</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MADRE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GABLES</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">98</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PREJUDICE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OLEANDER</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">98</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">REAR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TRADING</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">97</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SENSIBILITY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">REAR</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">98</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WISDOM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WORKER</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">98</span></span></code></pre></div><p>要从 <code>film</code> 表中检索租金在 3 到 5 美元之间的影片的数量，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    film</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">    rental_rate </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">count</span></span>
<span class="line"><span style="color:#FFCB6B;">-------</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">336</span></span></code></pre></div><p>要从 <code>film</code> 表中检索租金不在 3 到 5 美元之间的影片的数量，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    film</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">    rental_rate </span><span style="color:#F78C6C;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">count</span></span>
<span class="line"><span style="color:#FFCB6B;">-------</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">664</span></span></code></pre></div><p>要从 <a href="/database/sakila/支付表.html"><code>payment</code></a> 表中检索金额在 5 到 5.98 之间的付款，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    customer_id,</span></span>
<span class="line"><span style="color:#A6ACCD;">    amount,</span></span>
<span class="line"><span style="color:#A6ACCD;">    payment_date</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    payment</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">    amount </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">98</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">customer_id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">amount</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">payment_date</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------+--------+---------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">42</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">5.98</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2006-02-14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#C3E88D;">:16:03</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">208</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">5.98</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2006-02-14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#C3E88D;">:16:03</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">216</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">5.98</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2006-02-14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#C3E88D;">:16:03</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">284</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">5.98</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2006-02-14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#C3E88D;">:16:03</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">516</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">5.98</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2006-02-14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#C3E88D;">:16:03</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">560</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">5.98</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2006-02-14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#C3E88D;">:16:03</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">576</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">5.98</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2006-02-14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#C3E88D;">:16:03</span></span></code></pre></div><p>要从 <code>payment</code> 表中检索付款日期介于在 <code>2005-05-24</code> 到 <code>2005-05-25</code> 之间的付款，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    customer_id,</span></span>
<span class="line"><span style="color:#A6ACCD;">    amount,</span></span>
<span class="line"><span style="color:#A6ACCD;">    payment_date</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    payment</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">    payment_date </span><span style="color:#F78C6C;">BETWEEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2005-05-24</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2005-05-25</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">customer_id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">amount</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">payment_date</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------+--------+---------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">130</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">2.99</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2005-05-24</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#C3E88D;">:53:30</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">222</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">6.99</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2005-05-24</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">:05:21</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">239</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">4.99</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2005-05-24</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">:31:46</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">269</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">1.99</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2005-05-24</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">:11:53</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">333</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">4.99</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2005-05-24</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">:04:41</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">408</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">3.99</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2005-05-24</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">:03:39</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">459</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">2.99</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2005-05-24</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#C3E88D;">:54:33</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">549</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">0.99</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2005-05-24</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span><span style="color:#C3E88D;">:08:07</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL <code>BETWEEN</code> 运算符用于检查一个值是否位于一个值区间之内，如果这个值介于指定的区间，<code>BETWEEN</code> 运算符返回真，否则返回假。</p>`,40),e=[o];function c(t,C,r,y,A,D){return a(),n("div",null,e)}const B=s(p,[["render",c]]);export{i as __pageData,B as default};