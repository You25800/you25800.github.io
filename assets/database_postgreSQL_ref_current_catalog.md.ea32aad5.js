import{_ as a,o as e,c as t,R as o}from"./chunks/framework.333b51ca.js";const h=JSON.parse('{"title":"PostgreSQL current_catalog","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/current_catalog.md","filePath":"database/postgreSQL/ref/current_catalog.md","lastUpdated":1690341661000}'),c={name:"database/postgreSQL/ref/current_catalog.md"},s=o('<h1 id="postgresql-current-catalog" tabindex="-1">PostgreSQL current_catalog <a class="header-anchor" href="#postgresql-current-catalog" aria-label="Permalink to &quot;PostgreSQL current_catalog&quot;">​</a></h1><p>PostgreSQL <code>current_catalog</code> 返回当前数据库的名称。</p><p>在 SQL 标准中，数据库被称作 “catalogs”，因此 <code>current_catalog</code> 是标准的写法。</p><p><code>current_catalog</code> 等同于 <a href="./current_catalog.html"><code>current_database()</code></a> 函数。</p><h2 id="current-catalog-语法" tabindex="-1"><code>current_catalog</code> 语法 <a class="header-anchor" href="#current-catalog-语法" aria-label="Permalink to &quot;`current_catalog` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>current_catalog</code> 的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">current_catalog </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>PostgreSQL <code>current_catalog</code> 无需任何参数。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>current_catalog</code> 返回一个代表当前数据库的名称的字符串。</p><h2 id="current-catalog-示例" tabindex="-1"><code>current_catalog</code> 示例 <a class="header-anchor" href="#current-catalog-示例" aria-label="Permalink to &quot;`current_catalog` 示例&quot;">​</a></h2><p>要获取当前数据库的名字，请使用下面带有 <code>current_catalog</code> 的 <a href="/database/postgreSQL/base/select.html"><code>SELECT</code></a> 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> current_catalog;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">current_catalog</span></span>\n<span class="line"><span style="color:#FFCB6B;">-----------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">testdb</span></span></code></pre></div>',15),r=[s];function l(n,p,d,i,g,u){return e(),t("div",null,r)}const b=a(c,[["render",l]]);export{h as __pageData,b as default};
