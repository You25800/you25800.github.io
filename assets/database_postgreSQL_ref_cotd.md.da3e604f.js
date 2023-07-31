import{_ as s,o as a,c as o,R as n}from"./chunks/framework.318fa179.js";const F=JSON.parse('{"title":"PostgreSQL cotd() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/cotd.md","filePath":"database/postgreSQL/ref/cotd.md","lastUpdated":1690010418000}'),l={name:"database/postgreSQL/ref/cotd.md"},p=n(`<h1 id="postgresql-cotd-函数" tabindex="-1">PostgreSQL cotd() 函数 <a class="header-anchor" href="#postgresql-cotd-函数" aria-label="Permalink to &quot;PostgreSQL cotd() 函数&quot;">​</a></h1><p>PostgreSQL <code>cotd()</code> 函数返回指定的以度为单位的数值的余切。</p><h2 id="cotd-语法" tabindex="-1"><code>cotd()</code> 语法 <a class="header-anchor" href="#cotd-语法" aria-label="Permalink to &quot;\`cotd()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>cotd()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cotd(</span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>number</code></em></p><p>必需的。 一个用于计算余切的数值，以度为单位。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>cotd()</code> 函数返回指定弧度的余切。</p><p>如果参数 <code>number</code> 为 <code>NULL</code>，<code>cotd()</code> 函数将会返回 <code>NULL</code>。</p><h2 id="cotd-示例" tabindex="-1"><code>cotd()</code> 示例 <a class="header-anchor" href="#cotd-示例" aria-label="Permalink to &quot;\`cotd()\` 示例&quot;">​</a></h2><p>这里有几个 <code>cotd()</code> 函数的示例。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    cotd(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cotd(0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    cotd(</span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cotd(15)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    cotd(</span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cotd(30)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    cotd(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cotd(45)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    cotd(</span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cotd(60)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    cotd(</span><span style="color:#F78C6C;">90</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cotd(90)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    cotd(</span><span style="color:#F78C6C;">180</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cotd(180)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RECORD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]-----------------</span></span>
<span class="line"><span style="color:#FFCB6B;">cotd(0</span><span style="color:#A6ACCD;">)   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Infinity</span></span>
<span class="line"><span style="color:#FFCB6B;">cotd(15</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">3.7320508075688767</span></span>
<span class="line"><span style="color:#FFCB6B;">cotd(30</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1.7320508075688774</span></span>
<span class="line"><span style="color:#FFCB6B;">cotd(45</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#FFCB6B;">cotd(60</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0.5773502691896257</span></span>
<span class="line"><span style="color:#FFCB6B;">cotd(90</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">cotd(180</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-Infinity</span></span></code></pre></div>`,14),e=[p];function t(c,r,C,y,d,A){return a(),o("div",null,e)}const i=s(l,[["render",t]]);export{F as __pageData,i as default};