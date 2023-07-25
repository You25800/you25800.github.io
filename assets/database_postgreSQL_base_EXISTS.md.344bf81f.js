import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"PostgreSQL EXISTS 运算符用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/EXISTS.md","filePath":"database/postgreSQL/base/EXISTS.md","lastUpdated":1690289709000}'),p={name:"database/postgreSQL/base/EXISTS.md"},o=l(`<h1 id="postgresql-exists-运算符用法与实例" tabindex="-1">PostgreSQL EXISTS 运算符用法与实例 <a class="header-anchor" href="#postgresql-exists-运算符用法与实例" aria-label="Permalink to &quot;PostgreSQL EXISTS 运算符用法与实例&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中如何使用 <code>EXISTS</code> 运算符检查子查询中是否存在满足条件的行。</p><p>在 PostgreSQL 中，<code>EXISTS</code> 运算符用来判断一个<a href="/database/postgreSQL/base/子查询.html">子查询</a>是否返回行。如果一个子查询返回了至少一个行，则 <code>EXISTS</code> 返回真，否则返回假。</p><h2 id="postgresql-exists-语法" tabindex="-1">PostgreSQL EXISTS 语法 <a class="header-anchor" href="#postgresql-exists-语法" aria-label="Permalink to &quot;PostgreSQL EXISTS 语法&quot;">​</a></h2><p>PostgreSQL <code>EXISTS</code> 运算符用在 <a href="/database/postgreSQL/base/WHERE.html">WHERE</a>子句中构造判断条件，它的用法如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">EXISTS</span><span style="color:#A6ACCD;">(subquery);</span></span></code></pre></div><p><code>EXISTS</code> 使用说明：</p><ul><li><code>EXISTS</code> 一般用在 <code>WHERE</code> 子句中。</li><li><code>EXISTS</code> 是一个单目操作符，它需要一个子查询 <code>subquery</code> 作为参数。</li><li>如果子查询 <code>subquery</code> 返回了至少一行（不论行中的值是否为 <code>NULL</code>），则 <code>EXISTS</code> 的计算结果为 <code>TRUE</code>，否则计算结果为 <code>FALSE</code>。</li><li><code>EXISTS</code> 运算时，一旦子查询找到一个匹配的行，<code>EXISTS</code> 运算就会返回。这对提高查询新能很有帮助。</li><li><code>EXISTS</code> 不关心子查询中的列的数量或者名称，它只在乎子查询是否返回行。所以在 <code>EXISTS</code> 的子查询中，无论你是使用 <code>SELECT 1</code> 还是 <code>SELECT *</code>，亦或是 <code>SELECT column_list</code>，都不影响 <code>EXISTS</code> 运算的结果。</li><li><code>NOT EXISTS</code> 则是 <code>EXISTS</code> 的否定操作。</li></ul><h2 id="postgresql-exists-示例" tabindex="-1">PostgreSQL EXISTS 示例 <a class="header-anchor" href="#postgresql-exists-示例" aria-label="Permalink to &quot;PostgreSQL EXISTS 示例&quot;">​</a></h2><p>我们将使用 <a href="/database/sakila/">Sakila 示例数据库</a> 中的表进行演示，请您先<a href="./示例数据库.html">在 PostgreSQL 中安装 Sakila 示例数据库</a>。</p><h3 id="实例-1" tabindex="-1">实例 1 <a class="header-anchor" href="#实例-1" aria-label="Permalink to &quot;实例 1&quot;">​</a></h3><p>在 Sakila 示例数据库中， <a href="/database/sakila/影片表.html"><code>film</code></a> 表存储了所有的影片， <a href="/database/sakila/库存表.html"><code>inventory</code></a> 表中存储影片的库存信息。 <code>film</code> 表和 <code>inventory</code> 表是一对多的关系，也就是说，一个影片可能有多个库存信息。</p><p>要从 <code>film</code> 表中查找拥有库存记录的影片数量，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    film_id,</span></span>
<span class="line"><span style="color:#A6ACCD;">    title</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film f</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">EXISTS</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> inventory i</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> i.film_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> f.film_id</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">film_id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">title</span></span>
<span class="line"><span style="color:#FFCB6B;">---------+-----------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ACADEMY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DINOSAUR</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ACE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GOLDFINGER</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ADAPTATION</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HOLES</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AFFAIR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PREJUDICE</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AFRICAN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">EGG</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AGENT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TRUMAN</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AIRPLANE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SIERRA</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">999</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ZOOLANDER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FICTION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">1000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ZORRO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ARK</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">958</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>这里，对于影片表中的每一个影片（也就是每一行），子查询检查 <code>inventory</code> 以查找该影片是否有库存记录 (<code>i.film_id = f.film_id</code>)。</p><p>要从 <code>film</code> 表中查找没有库存记录的影片，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    film_id,</span></span>
<span class="line"><span style="color:#A6ACCD;">    title</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film f</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">EXISTS</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> inventory i</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> i.film_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> f.film_id</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">film_id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">title</span></span>
<span class="line"><span style="color:#FFCB6B;">---------+------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALICE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FANTASIA</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">33</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">APOLLO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TEEN</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">36</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ARGONAUTS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TOWN</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">38</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ARK</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RIDGEMONT</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">41</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ARSENIC</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INDEPENDENCE</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">87</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BOONDOCK</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BALLROOM</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">954</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WAKE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JAWS</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">955</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WALLS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ARTIST</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">42</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="实例-2" tabindex="-1">实例 2 <a class="header-anchor" href="#实例-2" aria-label="Permalink to &quot;实例 2&quot;">​</a></h3><p>在 Sakila 示例数据库中， <a href="/database/sakila/客户表.html"><code>customer</code></a> 表存储了客户的信息，<a href="/database/sakila/支付表.html"><code>payment</code></a> 表中存储客户的付款记录。 <code>customer</code> 表和 <code>payment</code> 表是一对多的关系，也就是说，一个客户可能存在多个付款记录。</p><p>要从 <code>customer</code> 表中查询那些至少支付了一次且金额大于 11 的客户，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    first_name,</span></span>
<span class="line"><span style="color:#A6ACCD;">    last_name</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> customer c</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">EXISTS</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> payment p</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> p.customer_id </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> c.customer_id</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">AND</span><span style="color:#A6ACCD;"> amount </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> first_name, last_name;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">first_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">last_name</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALMA</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AUSTIN</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">KAREN</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">JACKSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">KENT</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ARSENAULT</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NICHOLAS</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BARFIELD</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RICHARD</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MCCRARY</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ROSEMARY</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SCHMIDT</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TANYA</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GILBERT</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TERRANCE</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ROUSH</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VANESSA</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SIMS</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VICTORIA</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GIBSON</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在 PostgreSQL 中，<code>EXISTS</code> 运算符用来判断一个子查询是否返回行。如果一个子查询返回了至少一个行，则 <code>EXISTS</code> 的计算结果为真，否则计算结果为假。</p>`,26),e=[o];function c(t,C,r,A,y,D){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
