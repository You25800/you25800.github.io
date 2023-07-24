import{_ as s,o as a,c as o,R as l}from"./chunks/framework.333b51ca.js";const g=JSON.parse('{"title":"PostgreSQL log() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/log.md","filePath":"database/postgreSQL/ref/log.md","lastUpdated":1690010418000}'),n={name:"database/postgreSQL/ref/log.md"},e=l(`<h1 id="postgresql-log-函数" tabindex="-1">PostgreSQL log() 函数 <a class="header-anchor" href="#postgresql-log-函数" aria-label="Permalink to &quot;PostgreSQL log() 函数&quot;">​</a></h1><p>PostgreSQL <code>log()</code> 函数返回由参数指定的数字的指定的底的对数。</p><h2 id="log-语法" tabindex="-1"><code>log()</code> 语法 <a class="header-anchor" href="#log-语法" aria-label="Permalink to &quot;\`log()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>log()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(base, numeric_value) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">double precision</span></span></code></pre></div><p><code>log(10, numeric_value)</code> 等同于 <a href="https://www.sjkjc.com/postgresql-ref/log10/" target="_blank" rel="noreferrer"><code>log10(numeric_value)</code></a>。</p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>base</code></em></p><p>必需的。 底数。</p></li><li><p><em><code>numeric_value</code></em></p><p>必需的。 一个需要获取其对数的数字。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>log()</code> 函数返回由参数指定的数字的指定的底的对数。</p><p>如果参数为 <code>NULL</code>，<code>log()</code> 函数将返回 <code>NULL</code>。</p><p>如果您的参数为零，PostgreSQL 将给出一个错误：”无法取零的对数“。 如果您的参数为负数，PostgreSQL 将给出一个错误：”无法取负数的对数“。</p><p>如果您提供了一个不是数字类型的参数，PostgreSQL 将给出一个错误。</p><h2 id="log-示例" tabindex="-1"><code>log()</code> 示例 <a class="header-anchor" href="#log-示例" aria-label="Permalink to &quot;\`log()\` 示例&quot;">​</a></h2><p>这里有几个 <code>log()</code> 函数的示例。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log(2, 3)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log(10, 4)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)      |     </span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--------------------+--------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5849625007211562</span><span style="color:#A6ACCD;"> | </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">6020599913279624</span></span></code></pre></div><p><code>log(10, numeric_value)</code> 等同于 <a href="https://www.sjkjc.com/postgresql-ref/log10/" target="_blank" rel="noreferrer"><code>log10(numeric_value)</code></a>。例如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log(10, 4)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">log10</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">log10(4)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)     |      </span><span style="color:#82AAFF;">log10</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--------------------+--------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">6020599913279624</span><span style="color:#A6ACCD;"> | </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">6020599913279624</span></span></code></pre></div>`,20),p=[e];function t(c,r,C,A,y,i){return a(),o("div",null,p)}const D=s(n,[["render",t]]);export{g as __pageData,D as default};
