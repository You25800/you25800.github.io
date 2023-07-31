import{_ as s,o as a,c as e,R as l}from"./chunks/framework.318fa179.js";const y=JSON.parse('{"title":"PostgreSQL regexp_split_to_table() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/regexp_split_to_table.md","filePath":"database/postgreSQL/ref/regexp_split_to_table.md","lastUpdated":1689902566000}'),p={name:"database/postgreSQL/ref/regexp_split_to_table.md"},o=l(`<h1 id="postgresql-regexp-split-to-table-函数" tabindex="-1">PostgreSQL regexp_split_to_table() 函数 <a class="header-anchor" href="#postgresql-regexp-split-to-table-函数" aria-label="Permalink to &quot;PostgreSQL regexp\\_split\\_to\\_table() 函数&quot;">​</a></h1><p>PostgreSQL <code>regexp_split_to_table()</code> 函数将一个指定的字符串按照通过 POSIX 正则表达式指定的分隔符拆分成一个结果集并返回。</p><p>此函数和 <a href="./string_to_table.html"><code>string_to_table()</code></a> 函数类似。</p><h2 id="regexp-split-to-table-语法" tabindex="-1"><code>regexp_split_to_table()</code> 语法 <a class="header-anchor" href="#regexp-split-to-table-语法" aria-label="Permalink to &quot;\`regexp_split_to_table()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>regexp_split_to_table()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">regexp_split_to_table(string, regex[, flags]) → </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> of </span><span style="color:#C792EA;">text</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>string</code></em></p><p>必需的。 一个要拆分的字符串。</p></li><li><p><em><code>regex</code></em></p><p>必需的。 用作分隔符的正则表达式。</p></li><li><p><em><code>flags</code></em></p><p>可选的。 正则表达式的匹配模式。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>regexp_split_to_table()</code> 函数返回一个结果集，该集合中的元素就是字符串 <code>string</code> 按照正则表达式 <code>regex</code> 拆分的所有部分。</p><p>如果 <code>regex</code> 为 <code>NULL</code>，此函数将返回 <code>NULL</code>。</p><p>如果 <code>regex</code> 是一个空字符串，那么整个字符串中的所有字符都将成为结果集的成员。</p><p>如果 <code>null_string</code> 不为 <code>NULL</code>，那么拆分后的数组中的与它匹配的成员将被替换为 <code>NULL</code>。</p><h2 id="regexp-split-to-table-示例" tabindex="-1"><code>regexp_split_to_table()</code> 示例 <a class="header-anchor" href="#regexp-split-to-table-示例" aria-label="Permalink to &quot;\`regexp_split_to_table()\` 示例&quot;">​</a></h2><p>这个示例演示了如何使用 <code>regexp_split_to_table()</code> 函数将一个字符串根据分隔符拆分成结果集：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> regexp_split_to_table(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ab cd ef  gh</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\\s+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">regexp_split_to_table</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ab</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ef</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">gh</span></span></code></pre></div><p>如果 <code>delimiter</code> 是一个空字符串，那么整个字符串的所有字符都将成为结果集中的成员。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> regexp_split_to_table(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ab,cd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">regexp_split_to_table</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">a</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">b</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">c</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">d</span></span></code></pre></div><p>您可以在参数 <code>flags</code> 中使用 <code>i</code> 标识在使用正则表达式匹配分隔符的时候忽略大小写。比如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> regexp_split_to_table(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">AbcdefghabCDefGh</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cd.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">regexp_split_to_table</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ab</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">fghab</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">fGh</span></span></code></pre></div>`,23),n=[o];function t(c,r,i,d,C,_){return a(),e("div",null,n)}const b=s(p,[["render",t]]);export{y as __pageData,b as default};