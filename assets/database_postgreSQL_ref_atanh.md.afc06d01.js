import{_ as a,o as s,c as n,R as o}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"PostgreSQL atanh() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/atanh.md","filePath":"database/postgreSQL/ref/atanh.md","lastUpdated":1690000770000}'),l={name:"database/postgreSQL/ref/atanh.md"},p=o(`<h1 id="postgresql-atanh-函数" tabindex="-1">PostgreSQL atanh() 函数 <a class="header-anchor" href="#postgresql-atanh-函数" aria-label="Permalink to &quot;PostgreSQL atanh() 函数&quot;">​</a></h1><p>PostgreSQL <code>atanh()</code> 函数返回指定数值的反双曲正切。</p><h2 id="atanh-语法" tabindex="-1"><code>atanh()</code> 语法 <a class="header-anchor" href="#atanh-语法" aria-label="Permalink to &quot;\`atanh()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>atanh()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">atanh(</span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>number</code></em></p><p>必需的。 一个用于计算反双曲正切的数值。它必须是介于 -1 和 1 之间（包括 -1 和 1）。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>atanh()</code> 函数返回指定数值的反双曲正切。</p><p>如果参数的值不是介于 -1 和 1 之间（包括 -1 和 1），<code>atanh()</code> 函数将抛出一个错误：”输入超出范围“。</p><p>如果参数 <code>number</code> 为 <code>NULL</code>，<code>atanh()</code> 函数将会返回 <code>NULL</code>。</p><h2 id="atanh-示例" tabindex="-1"><code>atanh()</code> 示例 <a class="header-anchor" href="#atanh-示例" aria-label="Permalink to &quot;\`atanh()\` 示例&quot;">​</a></h2><p>这里有几个 <code>atanh()</code> 函数的示例。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    atanh(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atanh(-1)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    atanh(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atanh(-0.5)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    atanh(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atanh(0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    atanh(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atanh(0.5)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    atanh(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">atanh(1)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RECORD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]--------------------</span></span>
<span class="line"><span style="color:#FFCB6B;">atanh(-1</span><span style="color:#A6ACCD;">)   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-Infinity</span></span>
<span class="line"><span style="color:#FFCB6B;">atanh(-0.5</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">-0.5493061443340549</span></span>
<span class="line"><span style="color:#FFCB6B;">atanh(0</span><span style="color:#A6ACCD;">)    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">atanh(0.5</span><span style="color:#A6ACCD;">)  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0.5493061443340549</span></span>
<span class="line"><span style="color:#FFCB6B;">atanh(1</span><span style="color:#A6ACCD;">)    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Infinity</span></span></code></pre></div>`,15),e=[p];function t(c,r,C,y,A,h){return s(),n("div",null,e)}const d=a(l,[["render",t]]);export{i as __pageData,d as default};
