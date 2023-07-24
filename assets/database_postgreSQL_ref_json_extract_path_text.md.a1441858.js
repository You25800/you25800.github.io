import{_ as s,o as a,c as o,R as n}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"PostgreSQL json_extract_path_text() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/json_extract_path_text.md","filePath":"database/postgreSQL/ref/json_extract_path_text.md","lastUpdated":1690180485000}'),l={name:"database/postgreSQL/ref/json_extract_path_text.md"},p=n(`<h1 id="postgresql-json-extract-path-text-函数" tabindex="-1">PostgreSQL json_extract_path_text() 函数 <a class="header-anchor" href="#postgresql-json-extract-path-text-函数" aria-label="Permalink to &quot;PostgreSQL json_extract_path_text() 函数&quot;">​</a></h1><p>PostgreSQL <code>json_extract_path_text()</code> 函数从一个指定的 JSON 值中提取指定的路径的值，并将结果作为文本返回。</p><p>此函数与 <a href="./json_extract_path.html"><code>json_extract_path()</code></a> 函数类似，不同的是此函数返回一个文本类型的值而不是 JSON 类型。</p><h2 id="json-extract-path-text-语法" tabindex="-1"><code>json_extract_path_text()</code> 语法 <a class="header-anchor" href="#json-extract-path-text-语法" aria-label="Permalink to &quot;\`json_extract_path_text()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>json_extract_path_text()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">json_extract_path_text(from_json </span><span style="color:#F78C6C;">JSON</span><span style="color:#A6ACCD;">, VARIADIC </span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TEXT</span><span style="color:#A6ACCD;">[]) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TEXT</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>from_json</code></em></p><p>必需的。 要从中提取 JSON 值的 JSON 值。</p></li><li><p><em><code>path</code></em></p><p>必需的。 是一个可变的参数列表。它指定了要提取的路径。前面的路径应该包含有序的路径。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>json_extract_path_text()</code> 函数返回一个文本，它是指定的 JSON 值中指定的路径上的 JSON 值的文本表示。</p><p>当可变参数列表 <code>path</code> 中有个多个参数时，前面的路径应该包含后面的路径，这样才能够在 JSON 对象中提取到值。</p><p>如果路径不存在，<code>json_extract_path_text()</code> 函数返回 null。</p><h2 id="json-extract-path-text-示例" tabindex="-1"><code>json_extract_path_text()</code> 示例 <a class="header-anchor" href="#json-extract-path-text-示例" aria-label="Permalink to &quot;\`json_extract_path_text()\` 示例&quot;">​</a></h2><h3 id="json-数组示例" tabindex="-1">JSON 数组示例 <a class="header-anchor" href="#json-数组示例" aria-label="Permalink to &quot;JSON 数组示例&quot;">​</a></h3><p>本示例展示了如何使用 PostgreSQL <code>json_extract_path_text()</code> 函数从一个 JSON 数组的指定索引上提取值。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    json_extract_path_text(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, [3, 4]]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#[0]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    json_extract_path_text(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, [3, 4]]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#[1]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    json_extract_path_text(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, [3, 4]]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#[2]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#[0] | #[1] |  #[2]</span></span>
<span class="line"><span style="color:#FFCB6B;">------+------+--------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>这里，我们分别提取了索引为 0，1，和 2 上值，<code>json_extract_path_text()</code> 函数也给出了正确的反馈。</p><p>如果我们想要提取 索引为 2 的内嵌数组中的值，该怎么做呢？ 请使用下面的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    json_extract_path_text(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, [3, 4]]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#[2][0]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    json_extract_path_text(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, [3, 4]]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#[2][1]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#[2][0] | #[2][1]</span></span>
<span class="line"><span style="color:#FFCB6B;">---------+---------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4</span></span></code></pre></div><p>这里，我们在可变参数 <code>path</code> 中先使用 <code>&#39;2&#39;</code>，再使用 <code>&#39;0&#39;</code>，这相当于如下的计算步骤：</p><ol><li><code>json_extract_path_text(&#39;[1, 2, [3, 4]]&#39;, &#39;2&#39;)</code> 返回了 <code>[3, 4]</code></li><li><code>json_extract_path_text(&#39;[3, 4]&#39;, &#39;0&#39;)</code> 返回了 <code>3</code></li><li>将 <code>3</code> 转为文本并返回</li></ol><h3 id="json-对象示例" tabindex="-1">JSON 对象示例 <a class="header-anchor" href="#json-对象示例" aria-label="Permalink to &quot;JSON 对象示例&quot;">​</a></h3><p>本示例展示了如何使用 PostgreSQL <code>json_extract_path_text()</code> 函数从一个 JSON 对象的指定路径上提取值。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    json_extract_path_text(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;a&quot;: 1, &quot;b&quot;: {&quot;x&quot;: 2, &quot;y&quot;: 3}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#.a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    json_extract_path_text(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;a&quot;: 1, &quot;b&quot;: {&quot;x&quot;: 2, &quot;y&quot;: 3}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#.b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#.a |       #.b</span></span>
<span class="line"><span style="color:#FFCB6B;">-----+------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">&quot;x&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">y</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#C3E88D;">}</span></span></code></pre></div><p>当然，您也可以通过指定多个路径来提取子对象中内嵌的值，比如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    json_extract_path_text(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;a&quot;: 1, &quot;b&quot;: {&quot;x&quot;: 2, &quot;y&quot;: 3}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#.b.x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    json_extract_path_text(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;a&quot;: 1, &quot;b&quot;: {&quot;x&quot;: 2, &quot;y&quot;: 3}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">y</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#.b.y</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#.b.x | #.b.y</span></span>
<span class="line"><span style="color:#FFCB6B;">-------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">3</span></span></code></pre></div>`,30),t=[p];function e(c,r,D,C,y,F){return a(),o("div",null,t)}const d=s(l,[["render",e]]);export{i as __pageData,d as default};