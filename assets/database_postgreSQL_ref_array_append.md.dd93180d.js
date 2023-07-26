import{_ as a,o as s,c as e,R as p}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"PostgreSQL array_append() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/array_append.md","filePath":"database/postgreSQL/ref/array_append.md","lastUpdated":1690296072000}'),n={name:"database/postgreSQL/ref/array_append.md"},o=p(`<h1 id="postgresql-array-append-函数" tabindex="-1">PostgreSQL array_append() 函数 <a class="header-anchor" href="#postgresql-array-append-函数" aria-label="Permalink to &quot;PostgreSQL array_append() 函数&quot;">​</a></h1><p>PostgreSQL <code>array_append()</code> 函数将指定的元素追加到指定的数组的最后并返回修改后的数组。</p><h2 id="array-append-语法" tabindex="-1"><code>array_append()</code> 语法 <a class="header-anchor" href="#array-append-语法" aria-label="Permalink to &quot;\`array_append()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>array_append()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">array_append(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;">, element) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>array</code></em></p><p>必需的。 要追加元素的数组。</p></li><li><p><em><code>element</code></em></p><p>必需的。 要追加到数组的元素。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>array_append()</code> 函数返回一个在其最后追加了指定元素的数组。</p><p>如果参数 <code>array</code> 为 <code>NULL</code>，<code>array_append()</code> 函数将返回一个只包含元素 <code>element</code> 的数组。</p><p>添加的元素的类型需要和数组中类型相同，否则 <code>array_append()</code> 函数将会给出一个错误提示。</p><h2 id="array-append-示例" tabindex="-1"><code>array_append()</code> 示例 <a class="header-anchor" href="#array-append-示例" aria-label="Permalink to &quot;\`array_append()\` 示例&quot;">​</a></h2><p>本示例展示了如何使用 PostgreSQL <code>array_append()</code> 函数在数组 <code>{0,1,2}</code> 的最后追加一个元素 <code>3</code>。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> array_append(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[0, 1, 2], </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">array_append</span></span>
<span class="line"><span style="color:#FFCB6B;">--------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">0,1,2,3}</span></span></code></pre></div><p>您可以将参数 <code>array</code> 指定为 <code>NULL</code>。例如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> array_append(</span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">array_append</span></span>
<span class="line"><span style="color:#FFCB6B;">--------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">1}</span></span></code></pre></div><p>您不能向一个数组中添加不同数据类型的元素。比如，您不能像一个整形的数组中添加一个字符串类型的元素，就像下面一样：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> array_append(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[0, 1, 2], </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><p><code>array_append()</code> 函数会返回一个错误：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">错误:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">无效的类型</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">integer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">输入语法:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">第1行SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">array_append</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ARRAY[0,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">                                         </span><span style="color:#FFCB6B;">^</span></span></code></pre></div>`,22),l=[o];function r(t,c,d,y,C,i){return s(),e("div",null,l)}const A=a(n,[["render",r]]);export{D as __pageData,A as default};
