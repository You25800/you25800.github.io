import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const d=JSON.parse('{"title":"PostgreSQL CASE 条件表达式","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/CASE.md","filePath":"database/postgreSQL/base/CASE.md","lastUpdated":1690289709000}'),p={name:"database/postgreSQL/base/CASE.md"},o=l(`<h1 id="postgresql-case-条件表达式" tabindex="-1">PostgreSQL CASE 条件表达式 <a class="header-anchor" href="#postgresql-case-条件表达式" aria-label="Permalink to &quot;PostgreSQL CASE 条件表达式&quot;">​</a></h1><p>本文介绍如何使用 PostgreSQL CASE 条件表达式实现逻辑处理。</p><p>PostgreSQL <code>CASE</code> 表达式是一个条件表达式，它与其他编程语言中的 if-else 语句作用相同。</p><p>您可以在 <a href="/database/postgreSQL/base/select.html"><code>SELECT</code></a> 语句以及 <a href="/database/postgreSQL/base/WHERE.html"><code>WHERE</code></a>, <a href="/database/postgreSQL/base/GROUP_BY.html"><code>GROUP BY</code></a>, 和 <a href="/database/postgreSQL/base/HAVING.html"><code>HAVING</code></a> 子句中使用 <code>CASE</code> 表达式。</p><h2 id="postgresql-case-语法" tabindex="-1">PostgreSQL <code>CASE</code> 语法 <a class="header-anchor" href="#postgresql-case-语法" aria-label="Permalink to &quot;PostgreSQL \`CASE\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>CASE</code> 表达式的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CASE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> condition1 </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> result1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> condition2 </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> result2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ELSE</span><span style="color:#A6ACCD;"> value3</span></span>
<span class="line"><span style="color:#F78C6C;">END</span></span></code></pre></div><p>解释：</p><ul><li><code>condition1</code>, <code>condition2</code> 是一些布尔表达式，返回值为 <code>true</code> 或 <code>false</code>。</li><li>这个表达式可以理解为：如果 <code>condition1</code> 为真返回 <code>result1</code>，如果 <code>condition2</code> 为真返回 <code>result2</code>，否则返回 <code>result3</code>。</li><li>您可以指定一个或者多个 <code>WHEN ... THEN</code> 判断。</li><li><code>ELSE</code> 部分是可以省略的，您只能指定一个 <code>ELSE</code> 语句。</li><li>所有的判断从上向下依次判断，直到遇到条件为真，并返回此条件对应的值。如果没有条件为真，则返回 <code>ELSE</code> 指定的值。如果没有指定 <code>ELSE</code>，则返回 <code>NULL</code>。</li></ul><p>如果所有的条件都是针对同一个字段或者表达式进行等值判断，则可以将 <code>CASE</code> 表达式简写为如下形式：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CASE</span><span style="color:#A6ACCD;"> expr</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> value1 </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> result1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> value2 </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> result2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ELSE</span><span style="color:#A6ACCD;"> result3</span></span>
<span class="line"><span style="color:#F78C6C;">END</span></span></code></pre></div><p>这个表达式的含义是：如果 <code>expr</code> 等于 <code>value1</code>，则返回 <code>result1</code>，如果 <code>expr</code> 等于 <code>value2</code>，则返回 <code>result2</code>，否则返回 <code>result3</code>。</p><h2 id="postgresql-case-实例" tabindex="-1">PostgreSQL <code>CASE</code> 实例 <a class="header-anchor" href="#postgresql-case-实例" aria-label="Permalink to &quot;PostgreSQL \`CASE\` 实例&quot;">​</a></h2><h3 id="简单示例" tabindex="-1">简单示例 <a class="header-anchor" href="#简单示例" aria-label="Permalink to &quot;简单示例&quot;">​</a></h3><p>先看一个简单的示例。</p><p>比如，您想要获取当前日期是星期几的名称：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  current_date </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Today</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">CASE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> extract(DOW </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> current_date) </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Monday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> extract(DOW </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> current_date) </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tuesday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> extract(DOW </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> current_date) </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Wednesday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> extract(DOW </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> current_date) </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Thursday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> extract(DOW </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> current_date) </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Friday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> extract(DOW </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> current_date) </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Saturday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ELSE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Sunday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">END</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Day of Week</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Today</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Day</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Week</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+-------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2022-09-19</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Monday</span></span></code></pre></div><p>这里，我们使用 <code>current_date</code> 获得当前的日期，并使用 <a href="/database/postgreSQL_ref/日期时间函数/extract.html"><code>extract()</code></a> 函数获取当前日期的工作日编号。</p><p>由于上面的 <code>CASE</code> 表达式中的条件都是等值判断，因此我们可以将 <code>CASE</code> 表达式简化为：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  current_date </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Today</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">CASE</span><span style="color:#A6ACCD;"> extract(DOW </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> current_date)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Monday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tuesday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Wednesday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Thursday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Friday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Saturday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ELSE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Sunday</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">END</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Day of Week</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Today</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Day</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Week</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+-------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2022-09-19</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Monday</span></span></code></pre></div><h3 id="使用-case-表达式实现自定义排序" tabindex="-1">使用 <code>CASE</code> 表达式实现自定义排序 <a class="header-anchor" href="#使用-case-表达式实现自定义排序" aria-label="Permalink to &quot;使用 \`CASE\` 表达式实现自定义排序&quot;">​</a></h3><p>有时候单纯的按照字段的值排序并不能满足要求，我们需要按照自定义的顺序的排序。比如，我们需要按照电影分级 <code>&#39;G&#39;, &#39;PG&#39;, &#39;PG-13&#39;, &#39;R&#39;, &#39;NC-17&#39;</code> 的顺序对影片进行排序。</p><p>对于这样的需求，它可以理解为按照列表中元素的索引位置进行排序。我们使用 <code>CASE</code> 子句函数实现它。</p><p>在以下实例中，我们使用 Sakila 示例数据库中的 <a href="/database/sakila/影片表.html"><code>film</code></a>表作为演示。</p><p>假设您要根据影片的分级按照的 <code>&#39;G&#39;, &#39;PG&#39;, &#39;PG-13&#39;, &#39;R&#39;, &#39;NC-17&#39;</code> 顺序对影片进行排序。 下面使用 <code>CASE</code> 表达式实现自定义排序：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    film_id, title, rating</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    film</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">CASE</span><span style="color:#A6ACCD;"> rating</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">G</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PG</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PG-13</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">R</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">WHEN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NC-17</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">THEN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#F78C6C;">END</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">357</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GILBERT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PELICAN</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">G</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">597</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MOONWALKER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FOOL</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">G</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">354</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GHOST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GROUNDHOG</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">G</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">595</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MOON</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BUNCH</span><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PG</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AGENT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TRUMAN</span><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PG</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">600</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MOTIONS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DETAILS</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PG</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">9</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALABAMA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DEVIL</span><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PG-13</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">657</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PARADISE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SABRINA</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PG-13</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">956</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">WANDA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CHAMBER</span><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PG-13</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">749</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RULES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HUMAN</span><span style="color:#A6ACCD;">                 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">R</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AIRPORT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POLLOCK</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">R</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">17</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ALONE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TRIP</span><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">R</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">520</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LICENSE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WEEKEND</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NC-17</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">517</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LESSON</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CLEOPATRA</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NC-17</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">114</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CAMELOT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VACATION</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">NC-17</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">1000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>在这个例子中，我们使用 <code>CASE</code> 子句将电影的分级转换为一个数字。然后使用 <code>ORDER BY</code> 按照这个数字进行排序。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在本文中，我们讨论了 PostgreSQL <code>CASE</code> 条件表达式的语法，并提供了几个示例。</p>`,32),e=[o];function c(C,t,r,y,A,D){return a(),n("div",null,e)}const i=s(p,[["render",c]]);export{d as __pageData,i as default};