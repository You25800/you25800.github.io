import{_ as s,o as a,c as e,R as n}from"./chunks/framework.333b51ca.js";const A=JSON.parse('{"title":"PostgreSQL current_time 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/current_time.md","filePath":"database/postgreSQL/ref/current_time.md","lastUpdated":1690159250000}'),l={name:"database/postgreSQL/ref/current_time.md"},t=n(`<h1 id="postgresql-current-time-函数" tabindex="-1">PostgreSQL current_time 函数 <a class="header-anchor" href="#postgresql-current-time-函数" aria-label="Permalink to &quot;PostgreSQL current_time 函数&quot;">​</a></h1><p>PostgreSQL <code>current_time</code> 函数返回带有时区信息的系统时间，格式为 <code>HH:MI:SS.ssssss{+|-}ZZ</code>。</p><h2 id="current-time-语法" tabindex="-1"><code>current_time</code> 语法 <a class="header-anchor" href="#current-time-语法" aria-label="Permalink to &quot;\`current_time\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>current_time</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">current_time </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TIME WITH TIME ZONE</span></span></code></pre></div><p>或</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">current_time</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">precision</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">INTEGER</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TIME WITH TIME ZONE</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>precision</code></em></p><p>必需的。 一个整数，它指示了小数秒的位数。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>current_time</code> 函数返回带有时区信息的系统时间，格式为 <code>HH:MI:SS.ssssss{+|-}ZZ</code>。</p><p>注意，<code>current_time</code> 函数返回的是所属的事务开始的时间，而不是函数执行时刻的时间。</p><h2 id="current-time-示例" tabindex="-1"><code>current_time</code> 示例 <a class="header-anchor" href="#current-time-示例" aria-label="Permalink to &quot;\`current_time\` 示例&quot;">​</a></h2><p>本示例展示了如何使用 PostgreSQL <code>current_time</code> 函数获取当前的系统日期。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> current_time;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">current_time</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">37</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">44</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">688689</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span></code></pre></div><p>您可以通过参数指定小数秒的位数。下面的例子，返回一个带有 2 位小数秒的当前时间值：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">current_time</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">current_time</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">----------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">38</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">57</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">61</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span></code></pre></div><p><code>current_time</code> 函数返回的是所属的事务开始的时间，而不是函数执行时刻的时间。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> current_time, pg_sleep(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">), current_time;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">[ RECORD 1 ]</span><span style="color:#89DDFF;">+</span><span style="color:#676E95;font-style:italic;">-------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">current_time | </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">09</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">088746</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">08</span></span>
<span class="line"><span style="color:#A6ACCD;">pg_sleep     |</span></span>
<span class="line"><span style="color:#A6ACCD;">current_time | </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">09</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">088746</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">08</span></span></code></pre></div><p>我们可以看到，虽然我们在两个 <code>current_time</code> 函数之间使用了 <a href="./pg_sleep.html"><code>pg_sleep(1)</code></a> 函数暂停了 1 秒，但是两个 <code>current_time</code> 函数仍然返回了同样的值。</p>`,23),o=[t];function p(c,r,i,C,d,y){return a(),e("div",null,o)}const m=s(l,[["render",p]]);export{A as __pageData,m as default};
