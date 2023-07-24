import{_ as a,o as e,c as s,R as n}from"./chunks/framework.333b51ca.js";const y=JSON.parse('{"title":"PostgreSQL jsonb_array_length() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/jsonb_array_length.md","filePath":"database/postgreSQL/ref/jsonb_array_length.md","lastUpdated":1690180485000}'),o={name:"database/postgreSQL/ref/jsonb_array_length.md"},r=n('<h1 id="postgresql-jsonb-array-length-函数" tabindex="-1">PostgreSQL jsonb_array_length() 函数 <a class="header-anchor" href="#postgresql-jsonb-array-length-函数" aria-label="Permalink to &quot;PostgreSQL jsonb_array_length() 函数&quot;">​</a></h1><p>PostgreSQL <code>jsonb_array_length()</code> 函数返回一个指定的 JSONB 数组的长度（数组中顶层元素的数量）。</p><h2 id="jsonb-array-length-语法" tabindex="-1"><code>jsonb_array_length()</code> 语法 <a class="header-anchor" href="#jsonb-array-length-语法" aria-label="Permalink to &quot;`jsonb_array_length()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>jsonb_array_length()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">jsonb_array_length(any_array JSONB) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">INTEGER</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>any_array</code></em></p><p>必需的。 一个 JSONB 数组。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>jsonb_array_length()</code> 函数返回一个 JSONB 数组的长度，也就是数组中顶层元素的数量。</p><h2 id="jsonb-array-length-示例" tabindex="-1"><code>jsonb_array_length()</code> 示例 <a class="header-anchor" href="#jsonb-array-length-示例" aria-label="Permalink to &quot;`jsonb_array_length()` 示例&quot;">​</a></h2><p>本示例展示了如何使用 PostgreSQL <code>jsonb_array_length()</code> 函数获得一个 JSONB 数组的长度。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> jsonb_array_length(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, [3, 4]]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">jsonb_array_length</span></span>\n<span class="line"><span style="color:#FFCB6B;">-------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;">                 </span><span style="color:#FFCB6B;">3</span></span></code></pre></div><p>这里， 数组 <code>[1, 2, [3, 4]]</code> 中含有 3 顶层元素，因此 <code>jsonb_array_length()</code> 函数返回了 3。</p>',14),t=[r];function l(p,c,h,_,d,i){return e(),s("div",null,t)}const b=a(o,[["render",l]]);export{y as __pageData,b as default};
