import{_ as s,o,c as a,R as n}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"PostgreSQL to_json() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/to_json.md","filePath":"database/postgreSQL/ref/to_json.md","lastUpdated":1690180485000}'),l={name:"database/postgreSQL/ref/to_json.md"},e=n(`<h1 id="postgresql-to-json-函数" tabindex="-1">PostgreSQL to_json() 函数 <a class="header-anchor" href="#postgresql-to-json-函数" aria-label="Permalink to &quot;PostgreSQL to_json() 函数&quot;">​</a></h1><p>PostgreSQL <code>to_json()</code> 函数将一个 SQL 值转为 JSON 值并返回。</p><h2 id="to-json-语法" tabindex="-1"><code>to_json()</code> 语法 <a class="header-anchor" href="#to-json-语法" aria-label="Permalink to &quot;\`to_json()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>to_json()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">to_json(any_value) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">JSON</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>any_value</code></em></p><p>必需的。 要转为 JSON 的任意值。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>to_json()</code> 函数返回一个从一个任意 SQL 类型的值转换而来的 JSON 值。</p><h2 id="to-json-示例" tabindex="-1"><code>to_json()</code> 示例 <a class="header-anchor" href="#to-json-示例" aria-label="Permalink to &quot;\`to_json()\` 示例&quot;">​</a></h2><h3 id="简单示例" tabindex="-1">简单示例 <a class="header-anchor" href="#简单示例" aria-label="Permalink to &quot;简单示例&quot;">​</a></h3><p>本示例展示了如何使用 PostgreSQL <code>to_json()</code> 函数将一个 SQL 值转为 JSON 值。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    to_json(</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">to_json(20)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    to_json(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::</span><span style="color:#C792EA;">text</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">to_json(&#39;x&#39;::text)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    to_json(true) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">to_json(true)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    to_json(false) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">to_json(false)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">to_json(20</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">to_json(</span><span style="color:#FFCB6B;">&#39;x&#39;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">:text) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">to_json(true</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">to_json(false</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------+--------------------+---------------+----------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">20</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">&quot;x&quot;</span><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">true</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">false</span></span></code></pre></div><h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h3><p>本示例展示了如何使用 PostgreSQL <code>to_json()</code> 函数将一个 SQL 数组转为 JSON 数组。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> to_json(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;">[[1, 2], [3, 4]]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">to_json</span></span>
<span class="line"><span style="color:#FFCB6B;">---------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">,4</span><span style="color:#89DDFF;">]]</span></span></code></pre></div><p>这与 <a href="./array_to_json.html"><code>array_to_json()</code></a> 函数几乎完全相同。</p><h3 id="复合类型" tabindex="-1">复合类型 <a class="header-anchor" href="#复合类型" aria-label="Permalink to &quot;复合类型&quot;">​</a></h3><p>本示例展示了如何使用 PostgreSQL <code>to_json()</code> 函数将一个 SQL 复合类型的值转为 JSON 对象。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> to_json(</span><span style="color:#F78C6C;">row</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">He likes sports.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">));</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">to_json</span></span>
<span class="line"><span style="color:#FFCB6B;">----------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">&quot;f1&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#FFCB6B;">&quot;Tom&quot;</span><span style="color:#FFCB6B;">,</span><span style="color:#FFCB6B;">&quot;f2&quot;</span><span style="color:#FFCB6B;">:20,</span><span style="color:#FFCB6B;">&quot;f3&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#FFCB6B;">&quot;He likes sports.&quot;</span><span style="color:#FFCB6B;">}</span></span></code></pre></div><p>这里，我们使用 <code>row</code> 表达式构造了一个复合类型的值 <code>row(&#39;Tom&#39;, 20, &#39;He likes sports.&#39;)</code>。这个复合的类型的值包含了 3 个元素: <code>&#39;Tom&#39;</code>, <code>20</code> 和 <code>&#39;He likes sports.&#39;</code>。</p><p>当将复合类型的值转为 JSON 对象时，<code>row_to_json()</code> 函数自动生成了对象中的键，格式为 <code>fn</code>，其中 <code>n</code> 是一个数字，从 1 开始递增。</p><p>这与 <a href="./row_to_json.html"><code>row_to_json()</code></a> 函数几乎完全相同。</p>`,26),p=[e];function t(c,r,C,y,i,F){return o(),a("div",null,p)}const A=s(l,[["render",t]]);export{D as __pageData,A as default};
