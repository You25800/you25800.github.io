import{_ as a,o as e,c as s,R as p}from"./chunks/framework.333b51ca.js";const h=JSON.parse('{"title":"PostgreSQL pg_backend_pid() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/pg_backend_pid.md","filePath":"database/postgreSQL/ref/pg_backend_pid.md","lastUpdated":1690341661000}'),n={name:"database/postgreSQL/ref/pg_backend_pid.md"},o=p('<h1 id="postgresql-pg-backend-pid-函数" tabindex="-1">PostgreSQL pg_backend_pid() 函数 <a class="header-anchor" href="#postgresql-pg-backend-pid-函数" aria-label="Permalink to &quot;PostgreSQL pg_backend_pid() 函数&quot;">​</a></h1><p>PostgreSQL <code>pg_backend_pid()</code> 函数返回当前会话连接的服务端进程的进程 ID。</p><h2 id="pg-backend-pid-语法" tabindex="-1"><code>pg_backend_pid()</code> 语法 <a class="header-anchor" href="#pg-backend-pid-语法" aria-label="Permalink to &quot;`pg_backend_pid()` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>pg_backend_pid()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pg_backend_pid</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">integer</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>PostgreSQL <code>pg_backend_pid()</code> 函数无需任何参数。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>pg_backend_pid()</code> 函数返回一个数字，它是当前会话连接的服务端进程的进程 ID。</p><h2 id="pg-backend-pid-示例" tabindex="-1"><code>pg_backend_pid()</code> 示例 <a class="header-anchor" href="#pg-backend-pid-示例" aria-label="Permalink to &quot;`pg_backend_pid()` 示例&quot;">​</a></h2><p>要获取当前会话连接的服务端进程的进程 ID，请使用下面带有 <code>pg_backend_pid()</code> 函数的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> pg_backend_pid</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pg_backend_pid</span></span>\n<span class="line"><span style="color:#FFCB6B;">----------------</span></span>\n<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">1152</span></span></code></pre></div><p>注意， 您的值可能会不同。</p>',14),d=[o];function t(c,l,i,r,_,g){return e(),s("div",null,d)}const k=a(n,[["render",t]]);export{h as __pageData,k as default};
