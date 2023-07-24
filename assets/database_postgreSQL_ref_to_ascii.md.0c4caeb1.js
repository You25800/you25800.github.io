import{_ as s,o as a,c as o,R as e}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"PostgreSQL to_ascii() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/to_ascii.md","filePath":"database/postgreSQL/ref/to_ascii.md","lastUpdated":1689930032000}'),l={name:"database/postgreSQL/ref/to_ascii.md"},n=e('<h1 id="postgresql-to-ascii-函数" tabindex="-1">PostgreSQL to_ascii() 函数 <a class="header-anchor" href="#postgresql-to-ascii-函数" aria-label="Permalink to &quot;PostgreSQL to_ascii() 函数&quot;">​</a></h1><p>PostgreSQL <code>to_ascii()</code> 函数将指定的字符串从一个指定的编码转为 ASCII。</p><h2 id="to-ascii-语法" tabindex="-1"><code>to_ascii()</code> 语法 <a class="header-anchor" href="#to-ascii-语法" aria-label="Permalink to &quot;`to_ascii()` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>to_ascii()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">to_ascii(string, </span><span style="color:#F78C6C;">encoding</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>string</code></em></p><p>必需的。 一个字符串。</p></li><li><p><em><code>encoding</code></em></p><p>可选的。 字符编码。 它可以是编码名称或者一个数字。支持的编码包括：<code>LATIN1</code>, <code>LATIN2</code>, <code>LATIN9</code>, 和 <code>WIN1250</code>。默认值是当前数据库的编码。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>to_ascii()</code> 函数将字符串 <code>string</code> 从编码 <code>encoding</code> 转为 ASCII，并返回。</p><p>如果您提供了一个不支持的编码，将会发生一个错误。</p><h2 id="to-ascii-示例" tabindex="-1"><code>to_ascii()</code> 示例 <a class="header-anchor" href="#to-ascii-示例" aria-label="Permalink to &quot;`to_ascii()` 示例&quot;">​</a></h2><p>这个示例演示了如何使用 <code>to_ascii()</code> 函数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> to_ascii(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">LATIN1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">to_ascii</span></span>\n<span class="line"><span style="color:#FFCB6B;">----------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Hello</span></span></code></pre></div><p>让我们再看一个使用错误编码的例子：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> to_ascii(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">UTF8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ERROR:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">encoding</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">conversion</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">UTF8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ASCII</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">supported</span></span></code></pre></div><p>这里，因为 <code>to_ascii()</code> 函数不支持将字符串从 <code>UTF8</code> 编码转为 ASCII，PostgreSQL 报告了一个错误。</p>',18),t=[n];function c(p,i,r,d,C,y){return a(),o("div",null,t)}const _=s(l,[["render",c]]);export{D as __pageData,_ as default};