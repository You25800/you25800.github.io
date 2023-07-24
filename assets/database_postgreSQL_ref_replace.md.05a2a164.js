import{_ as s,o as a,c as e,R as l}from"./chunks/framework.333b51ca.js";const A=JSON.parse('{"title":"PostgreSQL replace() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/replace.md","filePath":"database/postgreSQL/ref/replace.md","lastUpdated":1689902566000}'),o={name:"database/postgreSQL/ref/replace.md"},p=l(`<h1 id="postgresql-replace-函数" tabindex="-1">PostgreSQL replace() 函数 <a class="header-anchor" href="#postgresql-replace-函数" aria-label="Permalink to &quot;PostgreSQL replace() 函数&quot;">​</a></h1><p>PostgreSQL <code>replace()</code> 函数将一个指定的字符串中出现的所有指定的子字符串替换为新的子字符串并返回结果。</p><h2 id="replace-语法" tabindex="-1"><code>replace()</code> 语法 <a class="header-anchor" href="#replace-语法" aria-label="Permalink to &quot;\`replace()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>replace()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(string, search_string, replacement)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>string</code></em></p><p>必需的。 一个字符串。</p></li><li><p><em><code>search_string</code></em></p><p>必需的。 被替换的字符串</p></li><li><p><em><code>replacement</code></em></p><p>必需的。 替换为的字符串。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>replace()</code> 函数将字符串 <code>string</code> 中的所有的字符串 <code>search_string</code> 使用 <code>replacement</code> 替换，并返回结果。</p><h2 id="replace-示例" tabindex="-1"><code>replace()</code> 示例 <a class="header-anchor" href="#replace-示例" aria-label="Permalink to &quot;\`replace()\` 示例&quot;">​</a></h2><p>这个示例演示了如何使用 <code>replace()</code> 替换字符串中的部分内容：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">l</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">L</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">replace</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">replace</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">replace</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#FFCB6B;">-------------+-------------+-------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Hello</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Alice</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HeLLo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WorLd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Hello</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">World</span></span></code></pre></div>`,13),n=[p];function c(r,t,C,D,y,d){return a(),e("div",null,n)}const F=s(o,[["render",c]]);export{A as __pageData,F as default};