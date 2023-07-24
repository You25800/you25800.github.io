import{_ as s,o as a,c as o,R as n}from"./chunks/framework.333b51ca.js";const F=JSON.parse('{"title":"PostgreSQL concat_ws() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/concat_ws.md","filePath":"database/postgreSQL/ref/concat_ws.md","lastUpdated":1689843090000}'),l={name:"database/postgreSQL/ref/concat_ws.md"},p=n('<h1 id="postgresql-concat-ws-函数" tabindex="-1">PostgreSQL concat_ws() 函数 <a class="header-anchor" href="#postgresql-concat-ws-函数" aria-label="Permalink to &quot;PostgreSQL concat_ws() 函数&quot;">​</a></h1><p>PostgreSQL <code>concat_ws()</code> 函数使用分隔符连接一个或多个参数的字符串表示并返回结果。</p><h2 id="concat-ws-语法" tabindex="-1"><code>concat_ws()</code> 语法 <a class="header-anchor" href="#concat-ws-语法" aria-label="Permalink to &quot;`concat_ws()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>concat_ws()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">concat_ws(separator, param1[, param2] ...)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>separator</code></em></p><p>必需的。 分隔符。</p></li><li><p><em><code>param1</code></em></p><p>必需的。 任何数据类型的值。</p></li><li><p><em><code>param2...</code></em></p><p>可选的。 任何数据类型的值。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>concat_ws()</code> 函数使用分隔符连接一个或多个参数的字符串表示并返回结果。 参数中的 <code>NULL</code> 会被忽略。</p><h2 id="concat-ws-示例" tabindex="-1"><code>concat_ws()</code> 示例 <a class="header-anchor" href="#concat-ws-示例" aria-label="Permalink to &quot;`concat_ws()` 示例&quot;">​</a></h2><p>这个示例说明了如果通过 <code>concat_ws()</code> 函数将多个参数拼接成一个字符串。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> concat_ws(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">concat_ws(&#39; &#39;, &#39;Hello&#39;, &#39;World&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">concat_ws(</span><span style="color:#FFCB6B;">&#39; &#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#FFCB6B;">----------------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Hello</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">World</span></span></code></pre></div><p>您可以使用 <code>concat_ws()</code> 函数生成一个逗号分隔的集合：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> concat_ws(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">concat_ws(&#39;,&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">concat_ws(</span><span style="color:#FFCB6B;">&#39;,&#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#FFCB6B;">-------------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">a,b,c</span></span></code></pre></div>',16),e=[p];function c(t,r,D,C,y,d){return a(),o("div",null,e)}const A=s(l,[["render",c]]);export{F as __pageData,A as default};