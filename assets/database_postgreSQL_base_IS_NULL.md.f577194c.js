import{_ as s,o as a,c as o,R as l}from"./chunks/framework.333b51ca.js";const d=JSON.parse('{"title":"PostgreSQL IS NULL 运算符用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/IS_NULL.md","filePath":"database/postgreSQL/base/IS_NULL.md","lastUpdated":1690289709000}'),n={name:"database/postgreSQL/base/IS_NULL.md"},p=l(`<h1 id="postgresql-is-null-运算符用法与实例" tabindex="-1">PostgreSQL IS NULL 运算符用法与实例 <a class="header-anchor" href="#postgresql-is-null-运算符用法与实例" aria-label="Permalink to &quot;PostgreSQL IS NULL 运算符用法与实例&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中如何使用 <code>IS NULL</code> 运算符检查一个值是不是 <code>NULL</code>。</p><p>PostgreSQL <code>IS NULL</code> 是一个布尔运算符，它检查一个值是不是 <code>NULL</code>。 <code>NULL</code> 值是一个特殊的值，它表示什么都没有，它即不是空字符串也不是假(false)。</p><h2 id="postgresql-is-null-语法" tabindex="-1">PostgreSQL IS NULL 语法 <a class="header-anchor" href="#postgresql-is-null-语法" aria-label="Permalink to &quot;PostgreSQL IS NULL 语法&quot;">​</a></h2><p>PostgreSQL <code>IS NULL</code> 是一个单目比较运算符，只需要一个操作数。<code>IS NULL</code> 运算符的语法是：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">expr </span><span style="color:#F78C6C;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span></span>
<span class="line"><span style="color:#A6ACCD;">expr </span><span style="color:#F78C6C;">IS NOT NULL</span></span></code></pre></div><p>说明：</p><ul><li><code>expr</code> 可以是一个字段名、一个值或者一个表达式。</li><li><code>IS NOT NULL</code> 是 <code>IS NULL</code> 的否定运算。</li></ul><p><code>IS NULL</code> 和 <code>IS NOT NULL</code> 可以用在 <a href="/database/postgreSQL/base/SELECT.html"><code>SELECT</code></a>语句或者 <a href="/database/postgreSQL/base/WHERE.html">WHERE</a>子句中。</p><h2 id="postgresql-is-null-运算规则" tabindex="-1">PostgreSQL <code>IS NULL</code> 运算规则 <a class="header-anchor" href="#postgresql-is-null-运算规则" aria-label="Permalink to &quot;PostgreSQL \`IS NULL\` 运算规则&quot;">​</a></h2><p>当 PostgreSQL <code>IS NULL</code> 运算符左侧的操作数是 <code>NULL</code> 时，<code>IS NULL</code> 运算符返回 <code>t</code>，否则返回 <code>f</code>。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NULL IS NULL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 IS NULL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1 IS NULL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NULL</span></span>
<span class="line"><span style="color:#FFCB6B;">--------------+-----------+-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">f</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">f</span></span></code></pre></div><p><code>IS NOT NULL</code> 是 <code>IS NULL</code> 的否定运算。如果 <code>IS NOT NULL</code> 左侧的操作数不是 <code>NULL</code> 时，<code>IS NOT NULL</code> 运算符返回 <code>t</code>，否则返回 <code>f</code>。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IS NOT NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NULL IS NOT NULL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IS NOT NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 IS NOT NULL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IS NOT NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1 IS NOT NULL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NOT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NULL</span></span>
<span class="line"><span style="color:#FFCB6B;">------------------+---------------+---------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">f</span><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span></code></pre></div><h2 id="postgresql-is-null-实例" tabindex="-1">PostgreSQL IS NULL 实例 <a class="header-anchor" href="#postgresql-is-null-实例" aria-label="Permalink to &quot;PostgreSQL IS NULL 实例&quot;">​</a></h2><p>我们将使用 <a href="/database/sakila/">Sakila 示例数据库</a> 中的表进行演示，请您先<a href="./示例数据库.html">在 PostgreSQL 中安装 Sakila 示例数据库</a>。</p><p>在 Sakila 示例数据库中， <a href="/database/sakila/员工表.html"><code>staff</code></a> 表存储了 DVD 租赁商店中的职员信息。</p><p>在 <code>staff</code> 表中， <code>picture</code> 中存储了职员的照片文件， 要从 <code>staff</code> 表中查询那些没有上传图片的职员， 需要检查 <code>picture</code> 是否为 <code>NULL</code>, 请使用以下带有 <code>IS NULL</code> 的 SQL 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    first_name, last_name, picture</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    staff</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">    picture </span><span style="color:#F78C6C;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">first_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">last_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">picture</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+-----------+---------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Mike</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Hillyer</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Jon</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Stephens</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">null&gt;</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在本文中，我们学习了 PostgreSQL 中 <code>IS NULL</code> 和 <code>IS NOT NULL</code> 比较运算符的语法和用法。本文要点如下：</p><ul><li><code>IS NULL</code> 和 <code>IS NOT NULL</code> 是单目比较运算符。</li><li>使用 <code>IS NULL</code> 运算符检查一个值是否是 <code>NULL</code>。</li><li><code>IS NOT NULL</code> 运算符是 <code>IS NULL</code> 的否定操作。</li><li><code>NULL IS NULL</code> 的结果是真。</li></ul>`,25),e=[p];function c(t,r,C,y,L,A){return a(),o("div",null,e)}const i=s(n,[["render",c]]);export{d as __pageData,i as default};
