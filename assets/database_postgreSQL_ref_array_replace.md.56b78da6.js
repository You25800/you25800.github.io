import{_ as a,o as e,c as r,R as s}from"./chunks/framework.318fa179.js";const C=JSON.parse('{"title":"PostgreSQL array_replace() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/array_replace.md","filePath":"database/postgreSQL/ref/array_replace.md","lastUpdated":1690296072000}'),o={name:"database/postgreSQL/ref/array_replace.md"},l=s('<h1 id="postgresql-array-replace-函数" tabindex="-1">PostgreSQL array_replace() 函数 <a class="header-anchor" href="#postgresql-array-replace-函数" aria-label="Permalink to &quot;PostgreSQL array\\_replace() 函数&quot;">​</a></h1><p>PostgreSQL <code>array_replace()</code> 函数在指定的数组中使用一个新元素替换指定的元素并返回修改后的数组。</p><h2 id="array-replace-语法" tabindex="-1"><code>array_replace()</code> 语法 <a class="header-anchor" href="#array-replace-语法" aria-label="Permalink to &quot;`array_replace()` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>array_replace()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">array_replace(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;">, from_element, to_element) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">array</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>array</code></em></p><p>必需的。 要从中替换元素的数组。</p></li><li><p><em><code>from_element</code></em></p><p>必需的。 要被替换的元素。</p></li><li><p><em><code>to_element</code></em></p><p>必需的。 要替换为的元素。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>array_replace()</code> 函数将数组 <code>array</code> 中的所有 <code>from_element</code> 元素替换为 <code>to_element</code> 元素，并返回修改后的数组。</p><p><code>from_element</code> 和 <code>to_element</code> 的类型必须和数组的数据类型相同，否则 <code>array_replace()</code> 函数将会给出一个错误提示。</p><p>如果指定的数组为 <code>NULL</code>，<code>array_replace()</code> 函数将返回 <code>NULL</code>。</p><h2 id="array-replace-示例" tabindex="-1"><code>array_replace()</code> 示例 <a class="header-anchor" href="#array-replace-示例" aria-label="Permalink to &quot;`array_replace()` 示例&quot;">​</a></h2><p>本示例展示了如何使用 PostgreSQL <code>array_replace()</code> 函数将数组 <code>[1, 1, 2, 1, 2, 1, 2]</code> 中的 <code>2</code> 全部替换为 <code>1</code>。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> array_replace(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[1, 1, 2, 1, 2, 1, 2], </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">array_replace</span></span>\n<span class="line"><span style="color:#FFCB6B;">-----------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">1,1,1,1,1,1,1}</span></span></code></pre></div>',15),c=[l];function p(t,n,d,i,y,_){return e(),r("div",null,c)}const m=a(o,[["render",p]]);export{C as __pageData,m as default};