import{_ as e,o as a,c as o,R as s}from"./chunks/framework.318fa179.js";const _=JSON.parse('{"title":"PostgreSQL normalize() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/normalize.md","filePath":"database/postgreSQL/ref/normalize.md","lastUpdated":1689843090000}'),l={name:"database/postgreSQL/ref/normalize.md"},n=s('<h1 id="postgresql-normalize-函数" tabindex="-1">PostgreSQL normalize() 函数 <a class="header-anchor" href="#postgresql-normalize-函数" aria-label="Permalink to &quot;PostgreSQL normalize() 函数&quot;">​</a></h1><p>PostgreSQL <code>normalize()</code> 将给定的字符串转换为指定的 Unicode 规范化形式。</p><h2 id="normalize-语法" tabindex="-1"><code>normalize()</code> 语法 <a class="header-anchor" href="#normalize-语法" aria-label="Permalink to &quot;`normalize()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>normalize()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">normalize(str[, form])</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>str</code></em></p><p>必需的。 一个字符串。</p></li><li><p><em><code>form</code></em></p><p>可选的。 Unicode 规范化形式。 Unicode 标准规定了 4 中规范化形式: <code>NFC</code>, <code>NFD</code>, <code>NFKC</code>, 或者 <code>NFKD</code>。 默认值是 <code>NFC</code>。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>normalize()</code> 函数返回一个字符串，它是给定字符串的指定的 Unicode 规范化形式。</p><p>若任意一个参数为 <code>NULL</code>，该函数将返回 <code>NULL</code>。</p><h2 id="normalize-示例" tabindex="-1"><code>normalize()</code> 示例 <a class="header-anchor" href="#normalize-示例" aria-label="Permalink to &quot;`normalize()` 示例&quot;">​</a></h2><p>这个示例说明了如果使用 <code>normalize()</code> 函数。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> normalize(U&amp;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\\0061\\0308bc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, NFC);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">normalize</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#FFCB6B;">-----------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">äbc</span></span></code></pre></div>',14),t=[n];function r(c,i,p,d,m,h){return a(),o("div",null,t)}const u=e(l,[["render",r]]);export{_ as __pageData,u as default};