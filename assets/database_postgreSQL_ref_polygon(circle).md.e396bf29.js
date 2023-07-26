import{_ as s,o as a,c as o,R as l}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"PostgreSQL polygon(circle) 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/polygon(circle).md","filePath":"database/postgreSQL/ref/polygon(circle).md","lastUpdated":1690352360000}'),n={name:"database/postgreSQL/ref/polygon(circle).md"},p=l('<h1 id="postgresql-polygon-circle-函数" tabindex="-1">PostgreSQL polygon(circle) 函数 <a class="header-anchor" href="#postgresql-polygon-circle-函数" aria-label="Permalink to &quot;PostgreSQL polygon(circle) 函数&quot;">​</a></h1><p>PostgreSQL <code>polygon(circle)</code> 函数将一个圆形转成一个由十二个点表示的多边形并返回。</p><h2 id="polygon-circle-语法" tabindex="-1"><code>polygon(circle)</code> 语法 <a class="header-anchor" href="#polygon-circle-语法" aria-label="Permalink to &quot;`polygon(circle)` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>polygon(circle)</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">polygon</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">circle</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">polygon</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>circle</code></em></p><p>必需的。 一个圆形。例如： <code>circle &#39;&lt;(0,0),2&gt;&#39;</code></p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>polygon(circle)</code> 函数返回一个由参数指定的圆形转成的由十二个点表示的多边形。</p><h2 id="polygon-circle-示例" tabindex="-1"><code>polygon(circle)</code> 示例 <a class="header-anchor" href="#polygon-circle-示例" aria-label="Permalink to &quot;`polygon(circle)` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>polygon(circle)</code> 函数将圆形 <code>circle &#39;&lt;(0,0),2&gt;&#39;</code> 转为多边形。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">polygon</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">circle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;(0,0),2&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((-</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">7320508075688774</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">9999999999999999</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0000000000000002</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">7320508075688772</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">2246467991473532</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">9999999999999996</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">7320508075688774</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">732050807568877</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0000000000000007</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">4492935982947064</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">7320508075688776</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">9999999999999994</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0000000000000009</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">732050807568877</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">6739403974420594</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">9999999999999987</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">732050807568878</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">7320508075688767</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0000000000000009</span><span style="color:#89DDFF;">))</span></span></code></pre></div><p>下面的语句示例展示了如何使用 PostgreSQL <code>polygon(circle)</code> 函数将圆形 <code>circle &#39;&lt;(1,2),3&gt;&#39;</code> 转为多边形。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">polygon</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">circle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;(1,2),3&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((-</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">598076211353316</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5000000000000004</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">598076211353316</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">9999999999999998</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">499999999999999</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">598076211353316</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5980762113533156</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">500000000000001</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0000000000000004</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5980762113533165</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5000000000000009</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5000000000000013</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5980762113533156</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0000000000000004</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">499999999999998</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5980762113533169</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5980762113533151</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">49999999999999867</span><span style="color:#89DDFF;">))</span></span></code></pre></div>',16),e=[p];function c(C,t,r,y,D,F){return a(),o("div",null,e)}const d=s(n,[["render",c]]);export{i as __pageData,d as default};
