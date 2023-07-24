import{_ as a,o as s,c as o,R as e}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"PostgreSQL concat() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/concat.md","filePath":"database/postgreSQL/ref/concat.md","lastUpdated":1689843090000}'),n={name:"database/postgreSQL/ref/concat.md"},c=e('<h1 id="postgresql-concat-函数" tabindex="-1">PostgreSQL concat() 函数 <a class="header-anchor" href="#postgresql-concat-函数" aria-label="Permalink to &quot;PostgreSQL concat() 函数&quot;">​</a></h1><p>PostgreSQL <code>concat()</code> 函数将所有参数链接为一个字符串并返回结果。</p><h2 id="concat-语法" tabindex="-1"><code>concat()</code> 语法 <a class="header-anchor" href="#concat-语法" aria-label="Permalink to &quot;`concat()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>concat()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">concat</span><span style="color:#A6ACCD;">(param1[, param2] ...)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>param1</code></em></p><p>必需的。 任何数据类型的值。</p></li><li><p><em><code>param2...</code></em></p><p>可选的。 任何数据类型的值。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>concat()</code> 函数将所有参数链接为一个字符串并返回结果。 参数中的 <code>NULL</code> 会被忽略。</p><h2 id="concat-示例" tabindex="-1"><code>concat()</code> 示例 <a class="header-anchor" href="#concat-示例" aria-label="Permalink to &quot;`concat()` 示例&quot;">​</a></h2><p>这个示例说明了如果通过 <code>concat()</code> 函数将多个参数拼接成一个字符串。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">concat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">concat(&#39;Hello&#39;, &#39;World&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">concat(</span><span style="color:#FFCB6B;">&#39;Hello&#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#FFCB6B;">--------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloWorld</span></span></code></pre></div>',13),l=[c];function t(p,r,d,i,h,C){return s(),o("div",null,l)}const F=a(n,[["render",t]]);export{D as __pageData,F as default};