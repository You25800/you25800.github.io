import{_ as s,o as a,c as o,R as n}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"PostgreSQL cot() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/cot.md","filePath":"database/postgreSQL/ref/cot.md","lastUpdated":1690010418000}'),l={name:"database/postgreSQL/ref/cot.md"},p=n(`<h1 id="postgresql-cot-函数" tabindex="-1">PostgreSQL cot() 函数 <a class="header-anchor" href="#postgresql-cot-函数" aria-label="Permalink to &quot;PostgreSQL cot() 函数&quot;">​</a></h1><p>PostgreSQL <code>cot()</code> 函数返回指定弧度的余切。</p><h2 id="cot-语法" tabindex="-1"><code>cot()</code> 语法 <a class="header-anchor" href="#cot-语法" aria-label="Permalink to &quot;\`cot()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>cot()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cot</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>number</code></em></p><p>必需的。 一个用于计算余切的数值，以弧度为单位。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>cot()</code> 函数返回指定弧度的余切。</p><p>如果参数 <code>number</code> 为 <code>NULL</code>，<code>cot()</code> 函数将会返回 <code>NULL</code>。</p><h2 id="cot-示例" tabindex="-1"><code>cot()</code> 示例 <a class="header-anchor" href="#cot-示例" aria-label="Permalink to &quot;\`cot()\` 示例&quot;">​</a></h2><p>这里有几个 <code>cot()</code> 函数的示例。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">cot</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cot(2.5)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">cot</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cot(0.2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">cot</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cot(-0.5)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">cot</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cot(-0.2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">cot</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cot(0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">cot</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">pi</span><span style="color:#A6ACCD;">()) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cot(pi())</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cot(2.5</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-1.3386481283041516</span></span>
<span class="line"><span style="color:#FFCB6B;">cot(0.2</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4.933154875586893</span></span>
<span class="line"><span style="color:#FFCB6B;">cot(-0.5</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-1.830487721712452</span></span>
<span class="line"><span style="color:#FFCB6B;">cot(-0.2</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-4.933154875586893</span></span>
<span class="line"><span style="color:#FFCB6B;">cot(0</span><span style="color:#A6ACCD;">)    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Infinity</span></span>
<span class="line"><span style="color:#FFCB6B;">cot(pi(</span><span style="color:#A6ACCD;">)) | -8.165619676597685e+15</span></span></code></pre></div><p>这里，我们使用了 <a href="./pi.html"><code>pi()</code></a> 函数获取了圆周率 π 的近似值。</p>`,15),e=[p];function t(c,r,C,A,y,D){return a(),o("div",null,e)}const d=s(l,[["render",t]]);export{i as __pageData,d as default};
