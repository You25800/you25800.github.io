import{_ as a,o as s,c as n,R as e}from"./chunks/framework.333b51ca.js";const h=JSON.parse('{"title":"PostgreSQL array_cat() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/array_cat.md","filePath":"database/postgreSQL/ref/array_cat.md","lastUpdated":1690296072000}'),l={name:"database/postgreSQL/ref/array_cat.md"},o=e(`<h1 id="postgresql-array-cat-函数" tabindex="-1">PostgreSQL array_cat() 函数 <a class="header-anchor" href="#postgresql-array-cat-函数" aria-label="Permalink to &quot;PostgreSQL array_cat() 函数&quot;">​</a></h1><p>PostgreSQL <code>array_cat()</code> 函数将两个指定的数组连接为一个数组并返回连接后的数组。</p><h2 id="array-cat-语法" tabindex="-1"><code>array_cat()</code> 语法 <a class="header-anchor" href="#array-cat-语法" aria-label="Permalink to &quot;\`array_cat()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>array_cat()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">array_cat(array1, array2) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>array1</code></em></p><p>必需的。 一个要连接的数组。</p></li><li><p><em><code>array2</code></em></p><p>必需的。 另一个要连接的数组。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>array_cat()</code> 函数返回一个数组，她是两个数组的连接结果。</p><p>要连接的两个数组应具备相同的数据类型，否则 <code>array_cat()</code> 函数将会给出一个错误提示。</p><p>如果其中一个参数为 <code>NULL</code>， <code>array_cat()</code> 函数将返回另一个不为 <code>NULL</code> 的数组。</p><p>如果两个参数都为 <code>NULL</code>， <code>array_cat()</code> 函数将返回 <code>NULL</code>。</p><h2 id="array-cat-示例" tabindex="-1"><code>array_cat()</code> 示例 <a class="header-anchor" href="#array-cat-示例" aria-label="Permalink to &quot;\`array_cat()\` 示例&quot;">​</a></h2><p>本示例展示了如何使用 PostgreSQL <code>array_cat()</code> 函数将数组 <code>{0,1,2}</code> 和数组 <code>{3,4,5}</code> 连接为一个数组。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> array_cat(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[0, 1, 2], </span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[3, 4, 5]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">array_cat</span></span>
<span class="line"><span style="color:#FFCB6B;">---------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">0,1,2,3,4,5}</span></span></code></pre></div><p>您同样可以使用 <code>array_cat()</code> 函数连接两个字符串数组：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    array_cat(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[&#39;zero&#39;, &#39;one&#39;, &#39;two&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[&#39;three&#39;, &#39;four&#39;, &#39;five&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">array_cat</span></span>
<span class="line"><span style="color:#FFCB6B;">--------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">zero,one,two,three,four,five}</span></span></code></pre></div><p>如果其中一个参数为 <code>NULL</code>， <code>array_cat()</code> 函数将返回另一个不为 <code>NULL</code> 的数组。例如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    array_cat(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[0, 1, 2], </span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    array_cat(</span><span style="color:#F78C6C;">NULL</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[3, 4, 5]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">array_cat</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">array_cat</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------+-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">0,1,2}</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">3,4,5}</span></span></code></pre></div><p>您不能连接两个数据类型不同的数组。比如，您不能将一个整形的数组和一个字符串数组连接起来，就像下面一样：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    array_cat(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[0, 1, 2],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[&#39;three&#39;, &#39;four&#39;, &#39;five&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span></code></pre></div><p><code>array_cat()</code> 函数会返回一个错误：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">错误:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">函数</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">array_cat</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">integer[],</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">text[]</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">不存在</span></span>
<span class="line"><span style="color:#FFCB6B;">第2行</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">array_cat</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">^</span></span>
<span class="line"><span style="color:#FFCB6B;">提示:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">没有匹配指定名称和参数类型的函数.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">您也许需要增加明确的类型转换.</span></span></code></pre></div>`,26),p=[o];function c(t,r,C,y,i,d){return s(),n("div",null,p)}const D=a(l,[["render",c]]);export{h as __pageData,D as default};
