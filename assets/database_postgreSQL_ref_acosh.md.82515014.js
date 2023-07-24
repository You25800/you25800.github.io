import{_ as s,o as a,c as o,R as e}from"./chunks/framework.333b51ca.js";const A=JSON.parse('{"title":"PostgreSQL acosh() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/acosh.md","filePath":"database/postgreSQL/ref/acosh.md","lastUpdated":1690000770000}'),n={name:"database/postgreSQL/ref/acosh.md"},l=e(`<h1 id="postgresql-acosh-函数" tabindex="-1">PostgreSQL acosh() 函数 <a class="header-anchor" href="#postgresql-acosh-函数" aria-label="Permalink to &quot;PostgreSQL acosh() 函数&quot;">​</a></h1><p>PostgreSQL <code>acosh()</code> 函数返回指定数值的反双曲余弦。</p><h2 id="acosh-语法" tabindex="-1"><code>acosh()</code> 语法 <a class="header-anchor" href="#acosh-语法" aria-label="Permalink to &quot;\`acosh()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>acosh()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">acosh(</span><span style="color:#C792EA;">number</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>number</code></em></p><p>必需的。 一个用于计算反双曲余弦的数值。它必须是要给大于等于 1 的值。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>acosh()</code> 函数返回指定数值的反双曲余弦。</p><p>如果参数的值小于 1，<code>acosh()</code> 函数将抛出一个错误：”输入超出范围“。</p><p>如果参数 <code>number</code> 为 <code>NULL</code>，<code>acosh()</code> 函数将会返回 <code>NULL</code>。</p><h2 id="acosh-示例" tabindex="-1"><code>acosh()</code> 示例 <a class="header-anchor" href="#acosh-示例" aria-label="Permalink to &quot;\`acosh()\` 示例&quot;">​</a></h2><p>这里有几个 <code>acosh()</code> 函数的示例。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    acosh(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">acosh(1)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    acosh(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">acosh(2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    acosh(</span><span style="color:#F78C6C;">2000</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">acosh(2000)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RECORD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]-------------------</span></span>
<span class="line"><span style="color:#FFCB6B;">acosh(1</span><span style="color:#A6ACCD;">)    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#FFCB6B;">acosh(2</span><span style="color:#A6ACCD;">)    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1.3169578969248166</span></span>
<span class="line"><span style="color:#FFCB6B;">acosh(2000</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">8.294049577602022</span></span></code></pre></div>`,15),p=[l];function c(t,r,C,h,d,i){return a(),o("div",null,p)}const D=s(n,[["render",c]]);export{A as __pageData,D as default};