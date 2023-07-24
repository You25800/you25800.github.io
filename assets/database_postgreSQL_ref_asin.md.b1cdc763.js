import{_ as s,o as a,c as n,R as o}from"./chunks/framework.333b51ca.js";const F=JSON.parse('{"title":"PostgreSQL asin() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/asin.md","filePath":"database/postgreSQL/ref/asin.md","lastUpdated":1690000770000}'),l={name:"database/postgreSQL/ref/asin.md"},p=o(`<h1 id="postgresql-asin-函数" tabindex="-1">PostgreSQL asin() 函数 <a class="header-anchor" href="#postgresql-asin-函数" aria-label="Permalink to &quot;PostgreSQL asin() 函数&quot;">​</a></h1><p>PostgreSQL <code>asin()</code> 函数以弧度为单位返回指定数值的反正弦。</p><h2 id="asin-语法" tabindex="-1"><code>asin()</code> 语法 <a class="header-anchor" href="#asin-语法" aria-label="Permalink to &quot;\`asin()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>asin()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">asin</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>number</code></em></p><p>必需的。 一个用于计算反正弦的数值。它应该介于 -1 和 1 之间（包含 -1 和 1）。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>asin()</code> 函数以弧度为单位返回指定数值的反正弦。</p><p>如果参数 <code>number</code> 不在 -1 到 1 之间，<code>asin()</code> 函数将抛出一个错误。</p><p>如果参数 <code>number</code> 为 <code>NULL</code>，<code>asin()</code> 函数将会返回 <code>NULL</code>。</p><h2 id="asin-示例" tabindex="-1"><code>asin()</code> 示例 <a class="header-anchor" href="#asin-示例" aria-label="Permalink to &quot;\`asin()\` 示例&quot;">​</a></h2><p>这里有几个 <code>asin()</code> 函数的示例。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">asin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">asin(-1)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">asin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">asin(-0.5)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">asin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">asin(-0.2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">asin</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">asin(0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">asin</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">asin(0.2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">asin</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">asin(0.5)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">asin</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">asin(1)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RECORD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]-------------------</span></span>
<span class="line"><span style="color:#FFCB6B;">asin(-1</span><span style="color:#A6ACCD;">)   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-1.5707963267948966</span></span>
<span class="line"><span style="color:#FFCB6B;">asin(-0.5</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-0.5235987755982989</span></span>
<span class="line"><span style="color:#FFCB6B;">asin(-0.2</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-0.2013579207903308</span></span>
<span class="line"><span style="color:#FFCB6B;">asin(0</span><span style="color:#A6ACCD;">)    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">asin(0.2</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0.2013579207903308</span></span>
<span class="line"><span style="color:#FFCB6B;">asin(0.5</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0.5235987755982989</span></span>
<span class="line"><span style="color:#FFCB6B;">asin(1</span><span style="color:#A6ACCD;">)    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1.5707963267948966</span></span></code></pre></div>`,15),e=[p];function t(c,r,C,A,y,i){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{F as __pageData,d as default};
