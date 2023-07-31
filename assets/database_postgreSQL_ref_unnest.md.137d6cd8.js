import{_ as s,o as a,c as n,R as l}from"./chunks/framework.318fa179.js";const d=JSON.parse('{"title":"PostgreSQL unnest() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/unnest.md","filePath":"database/postgreSQL/ref/unnest.md","lastUpdated":1690296072000}'),e={name:"database/postgreSQL/ref/unnest.md"},p=l(`<h1 id="postgresql-unnest-函数" tabindex="-1">PostgreSQL unnest() 函数 <a class="header-anchor" href="#postgresql-unnest-函数" aria-label="Permalink to &quot;PostgreSQL unnest() 函数&quot;">​</a></h1><p>PostgreSQL <code>unnest()</code> 函数将指定的数组展开为一个行的集合。</p><h2 id="unnest-语法" tabindex="-1"><code>unnest()</code> 语法 <a class="header-anchor" href="#unnest-语法" aria-label="Permalink to &quot;\`unnest()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>unnest()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">unnest(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span></span></code></pre></div><p>或者</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">unnest(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;">[, array ...]) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">set</span><span style="color:#A6ACCD;"> [, set ...]</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>array</code></em></p><p>必需的。 数组。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>unnest()</code> 函数返回一个集合，数组中的每个元素成为集合中的一行。</p><h2 id="unnest-示例" tabindex="-1"><code>unnest()</code> 示例 <a class="header-anchor" href="#unnest-示例" aria-label="Permalink to &quot;\`unnest()\` 示例&quot;">​</a></h2><h3 id="一维数组" tabindex="-1">一维数组 <a class="header-anchor" href="#一维数组" aria-label="Permalink to &quot;一维数组&quot;">​</a></h3><p>本示例展示了如何使用 PostgreSQL <code>unnest()</code> 函数将一维数组展开为一个集合。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> unnest(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[0, 1, 2]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">unnest</span></span>
<span class="line"><span style="color:#FFCB6B;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">2</span></span></code></pre></div><h3 id="多维数组" tabindex="-1">多维数组 <a class="header-anchor" href="#多维数组" aria-label="Permalink to &quot;多维数组&quot;">​</a></h3><p>本示例展示了如何使用 PostgreSQL <code>unnest()</code> 函数将二维数组展开为一个集合。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> unnest(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[2:4][2:3]={{1,2},{3,4},{5,6}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::</span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">[]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">unnest</span></span>
<span class="line"><span style="color:#FFCB6B;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">6</span></span></code></pre></div><h3 id="展开多个数组" tabindex="-1">展开多个数组 <a class="header-anchor" href="#展开多个数组" aria-label="Permalink to &quot;展开多个数组&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">  unnest(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[1, 2, 3, 4],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> x(x,y,z);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">y</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">z</span></span>
<span class="line"><span style="color:#FFCB6B;">---+---+---</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">A</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">B</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">D</span></span></code></pre></div><p>这里， <code>unnest()</code> 函数展开多个数组，相当于单独将每个数组展开成集合，再将多个集合按行连接起来。</p>`,24),o=[p];function t(c,r,C,y,i,A){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{d as __pageData,D as default};