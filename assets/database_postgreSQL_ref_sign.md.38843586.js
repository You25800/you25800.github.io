import{_ as s,o as a,c as n,R as e}from"./chunks/framework.333b51ca.js";const A=JSON.parse('{"title":"PostgreSQL sign() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/sign.md","filePath":"database/postgreSQL/ref/sign.md","lastUpdated":1690011227000}'),o={name:"database/postgreSQL/ref/sign.md"},l=e(`<h1 id="postgresql-sign-函数" tabindex="-1">PostgreSQL sign() 函数 <a class="header-anchor" href="#postgresql-sign-函数" aria-label="Permalink to &quot;PostgreSQL sign() 函数&quot;">​</a></h1><p>PostgreSQL <code>sign()</code> 函数返回给定数字的符号（<code>-1</code> 或 <code>0</code> 或 <code>+1</code>）。</p><h2 id="sign-语法" tabindex="-1"><code>sign()</code> 语法 <a class="header-anchor" href="#sign-语法" aria-label="Permalink to &quot;\`sign()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>sign()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">sign</span><span style="color:#A6ACCD;">(numeric_value) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> | </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> | </span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>numeric_value</code></em></p><p>必需的。 一个数字。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>sign(numeric_value)</code> 函数返回给定数字 <code>numeric_value</code> 的符号：</p><ul><li>如果参数是一个正数，<code>sign()</code> 函数将会返回 <code>1</code>。</li><li>如果参数是一个负数，<code>sign()</code> 函数将会返回 <code>-1</code>。</li><li>如果参数是零，<code>sign()</code> 函数将会返回 <code>0</code>。</li></ul><p>如果参数为 <code>NULL</code>，<code>sign()</code> 函数将返回 <code>NULL</code>。</p><p>如果您提供了一个不是数字类型的参数，PostgreSQL 将给出一个错误。</p><h2 id="sign-示例" tabindex="-1"><code>sign()</code> 示例 <a class="header-anchor" href="#sign-示例" aria-label="Permalink to &quot;\`sign()\` 示例&quot;">​</a></h2><p>本示例演示了如何使用 <code>sign()</code> 函数获取 <code>-10</code> 的符号。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sign</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sign(-10)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">sign</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span></code></pre></div><p>本示例演示了如何使用 <code>sign()</code> 函数获取 <code>10</code> 的符号。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sign</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sign(10)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">sign</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">----------</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">1</span></span></code></pre></div><p>本示例演示了如何使用 <code>sign()</code> 函数获取 <code>0</code> 的符号。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sign</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sign(0)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">sign</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">---------</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">0</span></span></code></pre></div>`,22),p=[l];function c(t,r,i,d,C,y){return a(),n("div",null,p)}const D=s(o,[["render",c]]);export{A as __pageData,D as default};
