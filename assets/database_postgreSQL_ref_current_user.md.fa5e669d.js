import{_ as e,o as s,c as a,R as r}from"./chunks/framework.333b51ca.js";const g=JSON.parse('{"title":"PostgreSQL current_user","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/current_user.md","filePath":"database/postgreSQL/ref/current_user.md","lastUpdated":1690341661000}'),t={name:"database/postgreSQL/ref/current_user.md"},n=r('<h1 id="postgresql-current-user" tabindex="-1">PostgreSQL current_user <a class="header-anchor" href="#postgresql-current-user" aria-label="Permalink to &quot;PostgreSQL current_user&quot;">​</a></h1><p>PostgreSQL <code>current_user</code> 返回当前用户(当前执行上下文的用户)的名称。</p><p><code>current_user</code> 与 <a href="./current_role.html"><code>current_role()</code></a> 等效。</p><h2 id="current-user-语法" tabindex="-1"><code>current_user</code> 语法 <a class="header-anchor" href="#current-user-语法" aria-label="Permalink to &quot;`current_user` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>current_user</code> 的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">current_user </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>PostgreSQL <code>current_user</code> 无需任何参数。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>current_user</code> 返回当前用户(当前执行上下文的用户)的名称。</p><h2 id="current-user-示例" tabindex="-1"><code>current_user</code> 示例 <a class="header-anchor" href="#current-user-示例" aria-label="Permalink to &quot;`current_user` 示例&quot;">​</a></h2><p>要获取当前执行上下文的用户，请使用下面带有 <code>current_user</code> 的 <a href="/database/postgreSQL/base/select.html"><code>SELECT</code></a> 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> current_user;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">current_user</span></span>\n<span class="line"><span style="color:#FFCB6B;">--------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sql</span></span></code></pre></div>',14),o=[n];function c(l,p,u,d,i,_){return s(),a("div",null,o)}const C=e(t,[["render",c]]);export{g as __pageData,C as default};
