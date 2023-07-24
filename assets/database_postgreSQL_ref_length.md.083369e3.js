import{_ as e,o as a,c as s,R as l}from"./chunks/framework.333b51ca.js";const u=JSON.parse('{"title":"PostgreSQL length() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/length.md","filePath":"database/postgreSQL/ref/length.md","lastUpdated":1689834507000}'),t={name:"database/postgreSQL/ref/length.md"},o=l('<h1 id="postgresql-length-函数" tabindex="-1">PostgreSQL length() 函数 <a class="header-anchor" href="#postgresql-length-函数" aria-label="Permalink to &quot;PostgreSQL length() 函数&quot;">​</a></h1><p>PostgreSQL <code>length()</code> 函数返回指定的字符串的长度，即字符的数量。</p><h2 id="length-语法" tabindex="-1"><code>length()</code> 语法 <a class="header-anchor" href="#length-语法" aria-label="Permalink to &quot;`length()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>length()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">(str)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>str</code></em></p><p>必需的。 一个字符串。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>length()</code> 函数返回字符串 <code>str</code> 中的字符数量。</p><p>若参数为 <code>NULL</code>，该函数将返回 <code>NULL</code>。</p><h2 id="length-示例" tabindex="-1"><code>length()</code> 示例 <a class="header-anchor" href="#length-示例" aria-label="Permalink to &quot;`length()` 示例&quot;">​</a></h2><p>这个示例说明了如果使用 <code>length()</code> 函数返回字符串的长度。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">length(&#39;hello world&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">length(</span><span style="color:#FFCB6B;">&#39;hello world&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#FFCB6B;">-----------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#FFCB6B;">11</span></span></code></pre></div>',14),n=[o];function p(c,r,d,h,i,g){return a(),s("div",null,n)}const y=e(t,[["render",p]]);export{u as __pageData,y as default};
