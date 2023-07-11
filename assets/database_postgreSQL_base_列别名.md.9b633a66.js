import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/列别名.md","filePath":"database/postgreSQL/base/列别名.md","lastUpdated":1689061386000}'),p={name:"database/postgreSQL/base/列别名.md"},e=l(`<p>PostgreSQL 允许您为 <code>SELECT</code> 返回的列指定别名，以提高可读性和使用的便利性。</p><h2 id="postgresql-列别名语法" tabindex="-1">PostgreSQL 列别名语法 <a class="header-anchor" href="#postgresql-列别名语法" aria-label="Permalink to &quot;PostgreSQL 列别名语法&quot;">​</a></h2><p>要在 <code>SELECT</code> 语句为指定的列分配别名，请使用以下的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> expr </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> alias_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[FROM table_name];</span></span></code></pre></div><p>这里：</p><ul><li><code>expr</code> 是一个表达式或者列名。</li><li><code>alias_name</code> 是 <code>expr</code> 列的别名。 <code>SELECT</code> 语句返回的结果集中将使用别名。</li><li>如果列别名中包含空格，请使用双引号 <code>&quot;</code> 将列别名包围起来。</li><li><code>AS</code> 是一个关键字，它是可选的。您可以省略它。</li></ul><p>您可以像下面的语句为多个列设置别名：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">   expr1 </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> alias_name1,</span></span>
<span class="line"><span style="color:#A6ACCD;">   expr2 </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> alias_name2,</span></span>
<span class="line"><span style="color:#A6ACCD;">   ...</span></span>
<span class="line"><span style="color:#A6ACCD;">[FROM table_name];</span></span></code></pre></div><h2 id="postgresql-列别名示例" tabindex="-1">PostgreSQL 列别名示例 <a class="header-anchor" href="#postgresql-列别名示例" aria-label="Permalink to &quot;PostgreSQL 列别名示例&quot;">​</a></h2><p>我们将使用 <a href="/database/sakila/">Sakila 示例数据库</a> 中的表进行演示，请您先<a href="./示例数据库.html">在 PostgreSQL 中安装 Sakila 示例数据库</a>。</p><h3 id="简单示例" tabindex="-1">简单示例 <a class="header-anchor" href="#简单示例" aria-label="Permalink to &quot;简单示例&quot;">​</a></h3><p>要从 <a href="/database/sakila/演员表.html"><code>actor</code></a> 表中检索演员的名字和姓氏，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">   first_name,</span></span>
<span class="line"><span style="color:#A6ACCD;">   last_name</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> actor</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">first_name |  last_name</span></span>
<span class="line"><span style="color:#A6ACCD;">------------+--------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> PENELOPE   | GUINESS</span></span>
<span class="line"><span style="color:#A6ACCD;"> NICK       | WAHLBERG</span></span>
<span class="line"><span style="color:#A6ACCD;"> ED         | CHASE</span></span>
<span class="line"><span style="color:#A6ACCD;"> JENNIFER   | DAVIS</span></span>
<span class="line"><span style="color:#A6ACCD;"> JOHNNY     | LOLLOBRIGIDA</span></span>
<span class="line"><span style="color:#A6ACCD;"> BETTE      | NICHOLSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> GRACE      | MOSTEL</span></span>
<span class="line"><span style="color:#A6ACCD;"> MATTHEW    | JOHANSSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> JOE        | SWANK</span></span>
<span class="line"><span style="color:#A6ACCD;"> CHRISTIAN  | GABLE</span></span></code></pre></div><p>要为 <code>last_name</code> 指定一个别名 <code>surname</code>，请使用如下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">   first_name,</span></span>
<span class="line"><span style="color:#A6ACCD;">   last_name </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> surname</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">   actor</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">first_name |   surname</span></span>
<span class="line"><span style="color:#A6ACCD;">------------+--------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> PENELOPE   | GUINESS</span></span>
<span class="line"><span style="color:#A6ACCD;"> NICK       | WAHLBERG</span></span>
<span class="line"><span style="color:#A6ACCD;"> ED         | CHASE</span></span>
<span class="line"><span style="color:#A6ACCD;"> JENNIFER   | DAVIS</span></span>
<span class="line"><span style="color:#A6ACCD;"> JOHNNY     | LOLLOBRIGIDA</span></span>
<span class="line"><span style="color:#A6ACCD;"> BETTE      | NICHOLSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> GRACE      | MOSTEL</span></span>
<span class="line"><span style="color:#A6ACCD;"> MATTHEW    | JOHANSSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> JOE        | SWANK</span></span>
<span class="line"><span style="color:#A6ACCD;"> CHRISTIAN  | GABLE</span></span></code></pre></div><p>这里， 结果集中的列名 <code>last_name</code> 已经被替换为 <code>surname</code>。</p><h3 id="为表达式示例分配列别名" tabindex="-1">为表达式示例分配列别名 <a class="header-anchor" href="#为表达式示例分配列别名" aria-label="Permalink to &quot;为表达式示例分配列别名&quot;">​</a></h3><p>要从 <code>actor</code> 表中检索演员的全名，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">   first_name </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> last_name</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">   actor</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">?column?</span></span>
<span class="line"><span style="color:#A6ACCD;">---------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> PENELOPE GUINESS</span></span>
<span class="line"><span style="color:#A6ACCD;"> NICK WAHLBERG</span></span>
<span class="line"><span style="color:#A6ACCD;"> ED CHASE</span></span>
<span class="line"><span style="color:#A6ACCD;"> JENNIFER DAVIS</span></span>
<span class="line"><span style="color:#A6ACCD;"> JOHNNY LOLLOBRIGIDA</span></span>
<span class="line"><span style="color:#A6ACCD;"> BETTE NICHOLSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> GRACE MOSTEL</span></span>
<span class="line"><span style="color:#A6ACCD;"> MATTHEW JOHANSSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> JOE SWANK</span></span>
<span class="line"><span style="color:#A6ACCD;"> CHRISTIAN GABLE</span></span></code></pre></div><p>这里，我们使用了 <code>||</code> 操作符连接两个字符串。 表达式 <code>first_name || &#39; &#39; || last_name</code> 将 <code>first_name</code>, 空格 和 <code>last_name</code> 连接在一起。</p><p>我看可以看到，表达式输出的列名为 <code>?column?</code>，这是没有意义的。为了让表达式的输出列名更易读，我们需要为表达式指定一个列名，例如 <code>full_name</code>：</p><p>要解决此问题，您可以为表达式分配 <code>first_name || &#39; &#39; || last_name</code> 一个列别名，例如 <code>full_name</code> ：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    first_name </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> last_name full_name</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    actor</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">full_name</span></span>
<span class="line"><span style="color:#A6ACCD;">---------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> PENELOPE GUINESS</span></span>
<span class="line"><span style="color:#A6ACCD;"> NICK WAHLBERG</span></span>
<span class="line"><span style="color:#A6ACCD;"> ED CHASE</span></span>
<span class="line"><span style="color:#A6ACCD;"> JENNIFER DAVIS</span></span>
<span class="line"><span style="color:#A6ACCD;"> JOHNNY LOLLOBRIGIDA</span></span>
<span class="line"><span style="color:#A6ACCD;"> BETTE NICHOLSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> GRACE MOSTEL</span></span>
<span class="line"><span style="color:#A6ACCD;"> MATTHEW JOHANSSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> JOE SWANK</span></span>
<span class="line"><span style="color:#A6ACCD;"> CHRISTIAN GABLE</span></span></code></pre></div><h3 id="包含空格的列别名" tabindex="-1">包含空格的列别名 <a class="header-anchor" href="#包含空格的列别名" aria-label="Permalink to &quot;包含空格的列别名&quot;">​</a></h3><p>在上面的例子中，如果您要使用 <code>Full Name</code> 作为列别名，因为它包含了空格，请使用双引号引用起来，即：<code>&quot;Full Name&quot;</code>。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    first_name </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> last_name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Full Name</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    actor</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Full Name</span></span>
<span class="line"><span style="color:#A6ACCD;">---------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> PENELOPE GUINESS</span></span>
<span class="line"><span style="color:#A6ACCD;"> NICK WAHLBERG</span></span>
<span class="line"><span style="color:#A6ACCD;"> ED CHASE</span></span>
<span class="line"><span style="color:#A6ACCD;"> JENNIFER DAVIS</span></span>
<span class="line"><span style="color:#A6ACCD;"> JOHNNY LOLLOBRIGIDA</span></span>
<span class="line"><span style="color:#A6ACCD;"> BETTE NICHOLSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> GRACE MOSTEL</span></span>
<span class="line"><span style="color:#A6ACCD;"> MATTHEW JOHANSSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> JOE SWANK</span></span>
<span class="line"><span style="color:#A6ACCD;"> CHRISTIAN GABLE</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><ul><li>使用语法 <code>expr AS alias_name</code> or 为列或表达式分配列别名 <code>expression AS alias_name</code> 。</li><li>该 <code>AS</code> 关键字是可选的。</li><li>使用双引号 (&quot;) 将包含空格的列别名括起来。</li></ul>`,33),o=[e];function c(t,C,r,A,i,y){return a(),n("div",null,o)}const E=s(p,[["render",c]]);export{D as __pageData,E as default};
