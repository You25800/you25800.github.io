import{_ as a,o as s,c as e,R as p}from"./chunks/framework.333b51ca.js";const y=JSON.parse('{"title":"PostgreSQL regexp_match() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/regexp_match.md","filePath":"database/postgreSQL/ref/regexp_match.md","lastUpdated":1689902566000}'),l={name:"database/postgreSQL/ref/regexp_match.md"},o=p(`<h1 id="postgresql-regexp-match-函数" tabindex="-1">PostgreSQL regexp_match() 函数 <a class="header-anchor" href="#postgresql-regexp-match-函数" aria-label="Permalink to &quot;PostgreSQL regexp_match() 函数&quot;">​</a></h1><p>PostgreSQL <code>regexp_match()</code> 函数从一个字符串中返回指定的正则表达式的第一个匹配的结果。</p><p><code>regexp_match()</code> 函数使用 POSIX 正则表达式。</p><h2 id="regexp-match-语法" tabindex="-1"><code>regexp_match()</code> 语法 <a class="header-anchor" href="#regexp-match-语法" aria-label="Permalink to &quot;\`regexp_match()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>regexp_match()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">regexp_match(string, regex[, flags]) → </span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;">[]</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>string</code></em></p><p>必需的。 一个字符串。</p></li><li><p><em><code>regex</code></em></p><p>必需的。 正则表达式。</p></li><li><p><em><code>flags</code></em></p><p>可选的。 正则表达式的匹配模式。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>regexp_match()</code> 函数返回一个字符串数组，它是一个字符串中使用指定的正则表达式的第一次匹配结果。</p><p>如果字符串中没有包含和正则匹配的内容，则此函数返回 <code>NULL</code>。</p><p>如果正则表达式中包含分组，那么每个分组匹配的内容将成为返回数组的一个元素。</p><p><code>regexp_match()</code> 函数不能使用 <code>g</code> 标识，否则将引发一个错误： “错误: regexp_match() 不支持 “global&quot;选项 提示: 改用 regexp_matches 函数”。</p><h2 id="regexp-match-示例" tabindex="-1"><code>regexp_match()</code> 示例 <a class="header-anchor" href="#regexp-match-示例" aria-label="Permalink to &quot;\`regexp_match()\` 示例&quot;">​</a></h2><p>这个示例演示了如何使用 <code>regexp_match()</code> 函数从字符串中返回由正则表达式捕获的结果：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> regexp_match(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Abcd abCd aBcd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ab.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">regexp_match</span></span>
<span class="line"><span style="color:#FFCB6B;">--------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">abC}</span></span></code></pre></div><p>这里， 在 POSIX 正则表达式中，<code>.</code> 意味着任何一个字符。</p><p>您可以在参数 <code>flags</code> 中使用 <code>i</code> 标识在使用正则表达式匹配的时候忽略大小写。比如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> regexp_match(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Abcd abCd aBcd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ab.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">regexp_match</span></span>
<span class="line"><span style="color:#FFCB6B;">--------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Abc}</span></span></code></pre></div><p>您可以在正则表达式中使用多个分组，比如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> regexp_match(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Abcd abCd aBcd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(a.)(c.)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">regexp_match</span></span>
<span class="line"><span style="color:#FFCB6B;">--------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Ab,cd}</span></span></code></pre></div>`,24),n=[o];function t(c,r,d,i,h,g){return s(),e("div",null,n)}const m=a(l,[["render",t]]);export{y as __pageData,m as default};
