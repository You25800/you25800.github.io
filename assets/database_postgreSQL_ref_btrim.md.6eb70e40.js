import{_ as s,o as a,c as l,R as n}from"./chunks/framework.318fa179.js";const A=JSON.parse('{"title":"PostgreSQL btrim() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/btrim.md","filePath":"database/postgreSQL/ref/btrim.md","lastUpdated":1690180485000}'),o={name:"database/postgreSQL/ref/btrim.md"},e=n(`<h1 id="postgresql-btrim-函数" tabindex="-1">PostgreSQL btrim() 函数 <a class="header-anchor" href="#postgresql-btrim-函数" aria-label="Permalink to &quot;PostgreSQL btrim() 函数&quot;">​</a></h1><p>PostgreSQL <code>btrim()</code> 函数从一个字符的开头和结尾删除一个包含了由参数指定的所有字符（默认为空格）的最长的字符串。</p><p>您还可以使用 <a href="./ltrim.html"><code>ltrim()</code></a> 从一个字符串的开头删除指定的字符，或使用 <a href="./rtrim.html"><code>rtrim()</code></a> 从一个字符串的结尾删除。</p><h2 id="btrim-语法" tabindex="-1"><code>btrim()</code> 语法 <a class="header-anchor" href="#btrim-语法" aria-label="Permalink to &quot;\`btrim()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>btrim()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">btrim(</span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>或</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">btrim(</span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;">, characters)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>text</code></em></p><p>必需的。 一个字符串。</p></li><li><p><em><code>characters</code></em></p><p>可选的。 一个包含了需要删除的字符的字符串。默认是一个空格。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>btrim()</code> 函数从一个字符的开头和结尾删除一个包含了由参数指定的所有字符（默认为一个空格）的最长的字符串，然后返回删除了字符后的字符串。</p><h2 id="btrim-示例" tabindex="-1"><code>btrim()</code> 示例 <a class="header-anchor" href="#btrim-示例" aria-label="Permalink to &quot;\`btrim()\` 示例&quot;">​</a></h2><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">(btrim(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">length(btrim(&#39;a  &#39;))</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">(btrim(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">  a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">length(btrim(&#39;  a&#39;))</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">(btrim(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> a </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">length(btrim(&#39; a &#39;))</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">length(btrim(</span><span style="color:#FFCB6B;">&#39;a  &#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">length(btrim(</span><span style="color:#FFCB6B;">&#39;  a&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">length(btrim(</span><span style="color:#FFCB6B;">&#39; a &#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#FFCB6B;">----------------------+----------------------+----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                    </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                    </span><span style="color:#FFCB6B;">1</span></span></code></pre></div><p>这里，</p><ul><li>我们只使用了一个参数，那么 <code>btrim()</code> 将删除字符串两端的空格。</li><li>为了让结果看起来更加直观，我们使用 <a href="./length.html"><code>length()</code></a> 函数字符串处理后显示了长度。</li></ul><p>让我们再使用 <code>btrim()</code> 从一个字符串的两端删除指定字符：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    btrim(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxyHELLOzxy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xyz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;xxyHELLOzxy&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">&#39;xxyHELLOzxy&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">---------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HELLO</span></span></code></pre></div><p>这里，由于我们指定了删除的字符为 <code>xyz</code>，那么 <code>xxyHELLOzxy</code> 两端的 <code>xxy</code> 和 <code>zxy</code> 被删除了。</p>`,21),p=[e];function t(r,c,i,C,y,d){return a(),l("div",null,p)}const F=s(o,[["render",t]]);export{A as __pageData,F as default};