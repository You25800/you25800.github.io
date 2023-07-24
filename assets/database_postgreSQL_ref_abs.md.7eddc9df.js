import{_ as s,o as a,c as o,R as n}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"PostgreSQL abs() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/abs.md","filePath":"database/postgreSQL/ref/abs.md","lastUpdated":1690000770000}'),l={name:"database/postgreSQL/ref/abs.md"},p=n(`<h1 id="postgresql-abs-函数" tabindex="-1">PostgreSQL abs() 函数 <a class="header-anchor" href="#postgresql-abs-函数" aria-label="Permalink to &quot;PostgreSQL abs() 函数&quot;">​</a></h1><p>PostgreSQL <code>abs()</code> 函数返回指定数字的绝对值。</p><h2 id="abs-语法" tabindex="-1"><code>abs()</code> 语法 <a class="header-anchor" href="#abs-语法" aria-label="Permalink to &quot;\`abs()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>abs()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">abs</span><span style="color:#A6ACCD;">(numeric_value) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">numeric</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">type</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>numeric_value</code></em></p><p>必需的。 一个数字，它可以是正数、负数、或者零，它可以是整数，也可以是小数。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>abs()</code> 函数返回指定参数的绝对值。</p><p>如果参数为 <code>NULL</code>，<code>abs()</code> 函数将返回 <code>NULL</code>。</p><p>如果您提供了一个不是数字类型的参数，PostgreSQL 将给出一个错误。</p><h2 id="abs-示例" tabindex="-1"><code>abs()</code> 示例 <a class="header-anchor" href="#abs-示例" aria-label="Permalink to &quot;\`abs()\` 示例&quot;">​</a></h2><p>这里有几个 <code>abs()</code> 函数的示例。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">abs</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abs(0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">abs</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abs(7)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">abs</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">7</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abs(-7)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">abs</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abs(1.2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">abs</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abs(-1.2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">abs(0</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">abs(7</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">abs(-7</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">abs(1.2</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">abs(-1.2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">--------+--------+---------+----------+-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">7</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">1.2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">1.2</span></span></code></pre></div><p>如果您使用了一个不是数字类型的参数，PostgreSQL 将给出一个错误：无效的类型 double precision 输入语法。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">abs</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">错误:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">无效的类型</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">precision</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">输入语法:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">第1行SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">abs</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">&#39;abc&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">^</span></span></code></pre></div>`,18),e=[p];function t(c,r,C,y,A,D){return a(),o("div",null,e)}const d=s(l,[["render",t]]);export{i as __pageData,d as default};