import{_ as s,o as e,c as a,R as o}from"./chunks/framework.318fa179.js";const g=JSON.parse('{"title":"PostgreSQL session_user","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/session_user.md","filePath":"database/postgreSQL/ref/session_user.md","lastUpdated":1690341661000}'),n={name:"database/postgreSQL/ref/session_user.md"},t=o('<h1 id="postgresql-session-user" tabindex="-1">PostgreSQL session_user <a class="header-anchor" href="#postgresql-session-user" aria-label="Permalink to &quot;PostgreSQL session\\_user&quot;">​</a></h1><p>PostgreSQL <code>session_user</code> 返回当前当前会话的用户名。</p><h2 id="session-user-语法" tabindex="-1"><code>session_user</code> 语法 <a class="header-anchor" href="#session-user-语法" aria-label="Permalink to &quot;`session_user` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>session_user</code> 的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">session_user </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>PostgreSQL <code>session_user</code> 无需任何参数。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>session_user</code> 返回当前当前会话的用户名。</p><h2 id="session-user-示例" tabindex="-1"><code>session_user</code> 示例 <a class="header-anchor" href="#session-user-示例" aria-label="Permalink to &quot;`session_user` 示例&quot;">​</a></h2><p>要获取当前当前会话的用户名，请使用下面带有 <code>session_user</code> 的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> session_user;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">session_user</span></span>\n<span class="line"><span style="color:#FFCB6B;">--------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sql</span></span></code></pre></div>',13),r=[t];function l(i,c,p,d,u,_){return e(),a("div",null,r)}const C=s(n,[["render",l]]);export{g as __pageData,C as default};