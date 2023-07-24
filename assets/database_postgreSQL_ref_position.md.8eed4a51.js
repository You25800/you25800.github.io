import{_ as s,o,c as e,R as a}from"./chunks/framework.333b51ca.js";const u=JSON.parse('{"title":"PostgreSQL position() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/position.md","filePath":"database/postgreSQL/ref/position.md","lastUpdated":1689843090000}'),t={name:"database/postgreSQL/ref/position.md"},n=a('<h1 id="postgresql-position-函数" tabindex="-1">PostgreSQL position() 函数 <a class="header-anchor" href="#postgresql-position-函数" aria-label="Permalink to &quot;PostgreSQL position() 函数&quot;">​</a></h1><p>PostgreSQL <code>position()</code> 函数返回一个指定的子字符串在一个字符串中的起始索引。</p><p><code>position()</code> 函数与 <a href="./strpos.html"><code>strpos()</code></a> 函数相同，但是参数的顺序不同。</p><h2 id="position-语法" tabindex="-1"><code>position()</code> 语法 <a class="header-anchor" href="#position-语法" aria-label="Permalink to &quot;`position()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>position()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">position(substring </span><span style="color:#F78C6C;">IN</span><span style="color:#A6ACCD;"> string)</span></span></code></pre></div><p><code>position(substring IN string)</code> 等同于 <code>strpos(string, substring)</code>。</p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>substring</code></em></p><p>必需的。 一个搜索的子字符串。</p></li><li><p><em><code>string</code></em></p><p>必需的。 一个字符串。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>position()</code> 函数返回字符串 <code>string</code> 中的子字符串 <code>substring</code> 第一次出现的起始索引。如果字符串 <code>string</code> 中没有出现子字符串 <code>substring</code>，此函数将返回 <code>0</code>。</p><p>若参数为 <code>NULL</code>，该函数将返回 <code>NULL</code>。</p><h2 id="position-示例" tabindex="-1"><code>position()</code> 示例 <a class="header-anchor" href="#position-示例" aria-label="Permalink to &quot;`position()` 示例&quot;">​</a></h2><p>这个示例说明了如果使用 <code>position()</code> 函数在一个字符串中查找子字符串的索引。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> position(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IN</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">position</span></span>\n<span class="line"><span style="color:#FFCB6B;">----------</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">7</span></span></code></pre></div>',16),p=[n];function i(l,c,r,d,h,g){return o(),e("div",null,p)}const b=s(t,[["render",i]]);export{u as __pageData,b as default};
