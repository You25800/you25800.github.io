import{_ as e,o as a,c as t,R as s}from"./chunks/framework.333b51ca.js";const g=JSON.parse('{"title":"PostgreSQL current_date 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/current_date.md","filePath":"database/postgreSQL/ref/current_date.md","lastUpdated":1690159250000}'),r={name:"database/postgreSQL/ref/current_date.md"},n=s('<h1 id="postgresql-current-date-函数" tabindex="-1">PostgreSQL current_date 函数 <a class="header-anchor" href="#postgresql-current-date-函数" aria-label="Permalink to &quot;PostgreSQL current_date 函数&quot;">​</a></h1><p>PostgreSQL <code>current_date</code> 函数返回当前的系统日期，格式为 <code>YYYY-MM-DD</code>。</p><h2 id="current-date-语法" tabindex="-1"><code>current_date</code> 语法 <a class="header-anchor" href="#current-date-语法" aria-label="Permalink to &quot;`current_date` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>current_date</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">current_date </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">date</span></span></code></pre></div><p>注意，该函数名称的后面没有小括号。</p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>PostgreSQL <code>current_date</code> 函数没有任何参数。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>current_date</code> 函数以格式 <code>YYYY-MM-DD</code> 返回当前的系统日期。</p><h2 id="current-date-示例" tabindex="-1"><code>current_date</code> 示例 <a class="header-anchor" href="#current-date-示例" aria-label="Permalink to &quot;`current_date` 示例&quot;">​</a></h2><p>本示例展示了如何使用 PostgreSQL <code>current_date</code> 函数获取当前的系统日期。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> current_date;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">current_date</span></span>\n<span class="line"><span style="color:#FFCB6B;">--------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2022-05-14</span></span></code></pre></div>',14),o=[n];function c(l,d,p,i,u,_){return a(),t("div",null,o)}const C=e(r,[["render",c]]);export{g as __pageData,C as default};