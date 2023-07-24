import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const A=JSON.parse('{"title":"PostgreSQL INTERVAL 数据类型介绍","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/dataType/INTERVAL.md","filePath":"database/postgreSQL/dataType/INTERVAL.md","lastUpdated":1689294581000}'),o={name:"database/postgreSQL/dataType/INTERVAL.md"},p=l(`<h1 id="postgresql-interval-数据类型介绍" tabindex="-1">PostgreSQL INTERVAL 数据类型介绍 <a class="header-anchor" href="#postgresql-interval-数据类型介绍" aria-label="Permalink to &quot;PostgreSQL INTERVAL 数据类型介绍&quot;">​</a></h1><p>本文介绍在 PostgreSQL 中如何使用 <code>INTERVAL</code> 类型。</p><p>在 PostgreSQL 中， <code>INTERVAL</code> 类型用于存储时间间隔值，比如 N 年 N 月 N 日 N 时 N 分 N 秒。时间间隔不是一个时间点，而是一个时间段。</p><p>PostgreSQL <code>INTERVAL</code> 类型占用 16 个字节的存储空间，其取值范围从 <code>-178000000 years</code> 到 <code>178000000 years</code>。</p><h2 id="postgresql-interval-语法" tabindex="-1">PostgreSQL <code>INTERVAL</code> 语法 <a class="header-anchor" href="#postgresql-interval-语法" aria-label="Permalink to &quot;PostgreSQL \`INTERVAL\` 语法&quot;">​</a></h2><p>要定义一个 PostgreSQL <code>INTERVAL</code> 类型的值，请使用如下法：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">@</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INTERVAL</span><span style="color:#A6ACCD;"> [ </span><span style="color:#C3E88D;">fields</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]</span><span style="color:#A6ACCD;"> [ (p) ]</span></span></code></pre></div><p>说明：</p><ul><li><p><code>@</code> 是可选的。</p></li><li><p><code>fields</code> 定义一个时间段。您可以采用以下两种输入格式：</p><ul><li><p><code>quantity unit [quantity unit...] [direction]</code></p><p>其中， <code>quantity</code> 是一个数字，可能有符号； <code>unit</code> 是 <code>microsecond</code>, <code>millisecond</code>, <code>second</code>, <code>minute</code>, <code>hour</code>, <code>day</code>, <code>week</code>, <code>month</code>, <code>year</code>, <code>decade</code>, <code>century</code>, <code>millennium</code> 中的值，或者他们的缩写或者复数形式； <code>direction</code> 可以是 <code>ago</code> 或者空。</p><p>例如： <code>INTERVAL &#39;1 years 2 months 3 days 4 hours 5 minutes 6 seconds&#39;</code></p></li><li><p>ISO 8601 时间间隔格式</p><p><code>P quantity unit [ quantity unit ...] [ T [ quantity unit ...]]</code></p><p>或者</p><p><code>P [ years-months-days ] [ T hours:minutes:seconds ]</code></p><p>其中， <code>unit</code> 您可以使用以下表中的值：</p><table><thead><tr><th>缩写</th><th>含义</th></tr></thead><tbody><tr><td><code>Y</code></td><td>年</td></tr><tr><td><code>M</code></td><td>月 (日期部分)</td></tr><tr><td><code>W</code></td><td>周</td></tr><tr><td><code>D</code></td><td>天</td></tr><tr><td><code>H</code></td><td>小时</td></tr><tr><td><code>M</code></td><td>分钟 (时间部分)</td></tr><tr><td><code>S</code></td><td>秒</td></tr></tbody></table><p>例如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">P1Y2M3DT4H5M6S</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">P1-2-3T4:5:6</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div></li></ul></li><li><p><code>p</code> 是小数秒的精度。 <code>p</code> 的允许范围是从 0 到 6。</p></li></ul><p>比如， <code>interval &#39;1 years 2 months 3 days&#39;</code> 意思是 1 年 2 月零 3 天。</p><h2 id="postgresql-interval-输出格式" tabindex="-1">PostgreSQL <code>INTERVAL</code> 输出格式 <a class="header-anchor" href="#postgresql-interval-输出格式" aria-label="Permalink to &quot;PostgreSQL \`INTERVAL\` 输出格式&quot;">​</a></h2><p>PostgreSQL <code>INTERVAL</code> 类型的输出格式可以被设置为 <code>sql_standard</code>， <code>postgres</code>（默认）， <code>postgres_verbose</code> ，或 <code>iso_8601</code>。</p><p>您可以使用 <code>SET intervalstyle</code> 命令设置<code>INTERVAL</code> 类型的输出格式。</p><p>下面的示例展示了不同的输出格式：</p><p>以下代表 <code>1 years 2 months 3 days 4 hours 5 minutes 6 second</code> 四种风格中的区间：</p><ul><li><p><code>sql_standard</code></p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> intervalstyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sql_standard</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">P1Y2M3DT4H5M6S</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">interval</span></span>
<span class="line"><span style="color:#FFCB6B;">------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">+1-2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+4:05:06</span></span></code></pre></div></li><li><p><code>sql_standard</code></p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> intervalstyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">postgres</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">P1Y2M3DT4H5M6S</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">interval</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">year</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mons</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">days</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">04</span><span style="color:#C3E88D;">:05:06</span></span></code></pre></div></li><li><p><code>postgres_verbose</code></p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> intervalstyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">postgres_verbose</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">P1Y2M3DT4H5M6S</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">interval</span></span>
<span class="line"><span style="color:#FFCB6B;">----------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">@</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">year</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mons</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">days</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hours</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mins</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">secs</span></span></code></pre></div></li><li><p><code>iso_8601</code></p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> intervalstyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">iso_8601</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">P1Y2M3DT4H5M6S</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">interval</span></span>
<span class="line"><span style="color:#FFCB6B;">----------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">P1Y2M3DT4H5M6S</span></span></code></pre></div></li></ul><h2 id="postgresql-区间相关的运算符和函数" tabindex="-1">PostgreSQL 区间相关的运算符和函数 <a class="header-anchor" href="#postgresql-区间相关的运算符和函数" aria-label="Permalink to &quot;PostgreSQL 区间相关的运算符和函数&quot;">​</a></h2><h3 id="算数运算" tabindex="-1">算数运算 <a class="header-anchor" href="#算数运算" aria-label="Permalink to &quot;算数运算&quot;">​</a></h3><p>您可以将算术运算符（<code>+</code> 、 <code>-</code>）应用于区间值，例如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1 day 12h 50m</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10m</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">column</span><span style="color:#89DDFF;">?</span></span>
<span class="line"><span style="color:#FFCB6B;">----------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">day</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#C3E88D;">:00:00</span></span></code></pre></div><p>您可以将算术运算符（<code>+</code> 、 <code>-</code>）应用于时间值和区间值，例如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  current_timestamp </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Now</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  current_timestamp </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10m</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Ten minutes ago</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RECORD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]---+------------------------------</span></span>
<span class="line"><span style="color:#FFCB6B;">Now</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2022-09-02</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#C3E88D;">:08:29.933843+08</span></span>
<span class="line"><span style="color:#FFCB6B;">Ten</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minutes</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ago</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2022-09-02</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#C3E88D;">:58:29.933843+08</span></span></code></pre></div><h3 id="从-postgresql-间隔中提取数据" tabindex="-1">从 PostgreSQL 间隔中提取数据 <a class="header-anchor" href="#从-postgresql-间隔中提取数据" aria-label="Permalink to &quot;从 PostgreSQL 间隔中提取数据&quot;">​</a></h3><p>你可以使用 <a href="/database/postgreSQL_ref/date_part.html"><code>date_part()</code></a> 函数从一个间隔值的提取指定的字段。下面语句提取间隔值中天数、小时数和分钟数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">day</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2 days 10 minutes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">day</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hour</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2 days 10 minutes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hour</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">minutes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2 days 10 minutes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">minutes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">day</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">hour</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">minutes</span></span>
<span class="line"><span style="color:#FFCB6B;">-----+------+---------</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">10</span></span></code></pre></div><h3 id="转换时间值" tabindex="-1">转换时间值 <a class="header-anchor" href="#转换时间值" aria-label="Permalink to &quot;转换时间值&quot;">​</a></h3><p>PostgreSQL 提供三个函数用于转换时间值：</p><ul><li><a href="/database/postgreSQL_ref/justify_days.html"><code>justify_days()</code></a> 将超过 30 天的天数转为月数。</li><li><a href="/database/postgreSQL_ref/justify_hours.html"><code>justify_hours()</code></a> 将超过 24 小时的小时数转为天数。</li><li><a href="/database/postgreSQL_ref/justify_interval.html"><code>justify_interval()</code></a> 将超过 24 小时的小时数转为天数，并且将超过 30 天的天数转为月数。</li></ul><p>比如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> justify_days(INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1 year 40 days</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">justify_days</span></span>
<span class="line"><span style="color:#FFCB6B;">----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">year</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mon</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">days</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> justify_hours(INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">60 hours</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">justify_hours</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">days</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#C3E88D;">:00:00</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> justify_interval(INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">6000 hours</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">justify_interval</span></span>
<span class="line"><span style="color:#FFCB6B;">------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mons</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">days</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在 PostgreSQL 中， <code>INTERVAL</code> 类型用于存储表示时间段的时间间隔值。</p>`,40),e=[p];function t(c,r,C,y,d,i){return a(),n("div",null,e)}const F=s(o,[["render",t]]);export{A as __pageData,F as default};