import{_ as s,o as a,c as n,R as o}from"./chunks/framework.333b51ca.js";const F=JSON.parse('{"title":"PostgreSQL atand() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/atand.md","filePath":"database/postgreSQL/ref/atand.md","lastUpdated":1690000770000}'),l={name:"database/postgreSQL/ref/atand.md"},p=o(`<h1 id="postgresql-atand-函数" tabindex="-1">PostgreSQL atand() 函数 <a class="header-anchor" href="#postgresql-atand-函数" aria-label="Permalink to &quot;PostgreSQL atand() 函数&quot;">​</a></h1><p>PostgreSQL <code>atand()</code> 函数以度为单位返回指定数值的反正切。</p><h2 id="atand-语法" tabindex="-1"><code>atand()</code> 语法 <a class="header-anchor" href="#atand-语法" aria-label="Permalink to &quot;\`atand()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>atand()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">atand(</span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p><code>atand(number)</code> 相当于 <a href="./degrees.html"><code>degrees(atan(number))</code></a>。</p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>number</code></em></p><p>必需的。 一个用于计算反正切的数值。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>atand()</code> 函数以度为单位返回指定数值的反正切。</p><p>如果参数 <code>number</code> 为 <code>NULL</code>，<code>atand()</code> 函数将会返回 <code>NULL</code>。</p><h2 id="atand-示例" tabindex="-1"><code>atand()</code> 示例 <a class="header-anchor" href="#atand-示例" aria-label="Permalink to &quot;\`atand()\` 示例&quot;">​</a></h2><p>这里有几个 <code>atand()</code> 函数的示例。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    atand(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atand(-1)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    atand(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atand(-0.5)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    atand(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atand(-0.2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    atand(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atand(0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    atand(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atand(0.2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    atand(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atand(0.5)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    atand(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atand(1)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RECORD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]--------------------</span></span>
<span class="line"><span style="color:#FFCB6B;">atand(-1</span><span style="color:#A6ACCD;">)   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-45</span></span>
<span class="line"><span style="color:#FFCB6B;">atand(-0.5</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-26.565051177077986</span></span>
<span class="line"><span style="color:#FFCB6B;">atand(-0.2</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-11.309932474020215</span></span>
<span class="line"><span style="color:#FFCB6B;">atand(0</span><span style="color:#A6ACCD;">)    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">atand(0.2</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">11.309932474020215</span></span>
<span class="line"><span style="color:#FFCB6B;">atand(0.5</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">26.565051177077986</span></span>
<span class="line"><span style="color:#FFCB6B;">atand(1</span><span style="color:#A6ACCD;">)    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">45</span></span></code></pre></div><p><code>atand(number)</code> 相当于先运算 <a href="https://www.sjkjc.com/postgresql-ref/atan/" target="_blank" rel="noreferrer"><code>atan(number)</code></a>，再将运算的结果使用 <a href="https://www.sjkjc.com/postgresql-ref/degrees/" target="_blank" rel="noreferrer"><code>degrees()</code></a> 函数转为度。比如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    atand(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atand(1)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">degrees</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">atan</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">degrees(atan(1))</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RECORD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]----+---</span></span>
<span class="line"><span style="color:#FFCB6B;">atand(1</span><span style="color:#A6ACCD;">)         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">45</span></span>
<span class="line"><span style="color:#FFCB6B;">degrees(atan(1</span><span style="color:#A6ACCD;">)) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">45</span></span></code></pre></div>`,18),e=[p];function t(c,r,C,y,A,d){return a(),n("div",null,e)}const i=s(l,[["render",t]]);export{F as __pageData,i as default};
