import{_ as s,o as n,c as a,R as e}from"./chunks/framework.333b51ca.js";const _=JSON.parse('{"title":"PostgreSQL pg_listening_channels() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/pg_listening_channels.md","filePath":"database/postgreSQL/ref/pg_listening_channels.md","lastUpdated":1690341661000}'),l={name:"database/postgreSQL/ref/pg_listening_channels.md"},p=e(`<h1 id="postgresql-pg-listening-channels-函数" tabindex="-1">PostgreSQL pg_listening_channels() 函数 <a class="header-anchor" href="#postgresql-pg-listening-channels-函数" aria-label="Permalink to &quot;PostgreSQL pg_listening_channels() 函数&quot;">​</a></h1><p>PostgreSQL <code>pg_listening_channels()</code> 函数返回当前会话正在侦听的异步通知通道的名称。</p><h2 id="pg-listening-channels-语法" tabindex="-1"><code>pg_listening_channels()</code> 语法 <a class="header-anchor" href="#pg-listening-channels-语法" aria-label="Permalink to &quot;\`pg_listening_channels()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>pg_listening_channels()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pg_listening_channels</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>PostgreSQL <code>pg_listening_channels()</code> 函数无需任何参数。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>pg_listening_channels()</code> 函数返回一个数组，包含了当前会话正在侦听的异步通知通道的名称。</p><h2 id="pg-listening-channels-示例" tabindex="-1"><code>pg_listening_channels()</code> 示例 <a class="header-anchor" href="#pg-listening-channels-示例" aria-label="Permalink to &quot;\`pg_listening_channels()\` 示例&quot;">​</a></h2><p>以下语句说明了 PostgreSQL <code>pg_listening_channels()</code> 函数的基本用法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> pg_listening_channels</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pg_listening_channels</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>这里，当前会话并没有侦听任何异步通知频道，所以 <code>pg_listening_channels()</code> 函数返回了空的结果集。</p><p>要让当前会话侦听一个异步通知频道 <code>channel1</code>，请使用以下 <code>LISTEN</code> 命令：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">LISTEN channel1;</span></span></code></pre></div><p>要让当前会话侦听一个异步通知频道 <code>channel2</code>，请使用以下 <code>LISTEN</code> 命令：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">LISTEN channel2;</span></span></code></pre></div><p>要查看当前会话正在侦听的异步通知频道，请使用 <code>pg_listening_channels()</code> 函数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> pg_listening_channels</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pg_listening_channels</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">channel1</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">channel2</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>这里，我们看到，当前会话正在侦听两个异步通知频道： <code>channel1</code> 和 <code>channel2</code>。</p><p>如果不想继续侦听 <code>channel2</code> 频道，请使用以下 <code>UNLISTEN</code> 命令：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">UNLISTEN channel2;</span></span></code></pre></div><p>要查看当前会话正在侦听的异步通知频道，请使用 <code>pg_listening_channels()</code> 函数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> pg_listening_channels</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pg_listening_channels</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">channel1</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div>`,27),o=[p];function c(t,i,r,d,g,h){return n(),a("div",null,o)}const y=s(l,[["render",c]]);export{_ as __pageData,y as default};
