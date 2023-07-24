import{_ as s,o as a,c as l,R as o}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"PostgreSQL lpad() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/lpad.md","filePath":"database/postgreSQL/ref/lpad.md","lastUpdated":1689843090000}'),p={name:"database/postgreSQL/ref/lpad.md"},n=o(`<h1 id="postgresql-lpad-函数" tabindex="-1">PostgreSQL lpad() 函数 <a class="header-anchor" href="#postgresql-lpad-函数" aria-label="Permalink to &quot;PostgreSQL lpad() 函数&quot;">​</a></h1><p>PostgreSQL <code>lpad()</code> 函数在一个字符串的左侧填充指定的字符，使其达到指定的长度。</p><p>如果您想要右侧填充一个字符串，请使用 <a href="./rpad.html"><code>rpad()</code></a> 函数。</p><h2 id="lpad-语法" tabindex="-1"><code>lpad()</code> 语法 <a class="header-anchor" href="#lpad-语法" aria-label="Permalink to &quot;\`lpad()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>lpad()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">lpad(string, </span><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>或</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">lpad(string, </span><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">, characters)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>str</code></em></p><p>必需的。 需要填充的字符串。</p></li><li><p><em><code>length</code></em></p><p>必需的。 需要填充到的字符串长度。</p></li><li><p><em><code>characters</code></em></p><p>可选的。 用来填充的字符。默认是一个空格。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>lpad()</code> 函数在字符串 <code>str</code> 的左侧填充指定的字符 <code>characters</code>（默认为一个空格），使其达到长度 <code>length</code>。</p><p>如果字符串 <code>str</code> 的长度已经超过 <code>length</code>，那么它将会在右侧被截断。</p><p>若任意一个参数为 <code>NULL</code>，该函数将返回 <code>NULL</code>。</p><h2 id="lpad-示例" tabindex="-1"><code>lpad()</code> 示例 <a class="header-anchor" href="#lpad-示例" aria-label="Permalink to &quot;\`lpad()\` 示例&quot;">​</a></h2><p>以下的这些示例说明了如果使用 <code>lpad()</code> 函数左侧填充字符串。</p><h3 id="左侧填充空格" tabindex="-1">左侧填充空格 <a class="header-anchor" href="#左侧填充空格" aria-label="Permalink to &quot;左侧填充空格&quot;">​</a></h3><p>这个示例演示了使用 <code>lpad()</code> 函数在 <code>hello</code> 左侧填充空格使其长度达到 10。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> lpad(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lpad(&#39;hello&#39;, 10)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lpad(</span><span style="color:#FFCB6B;">&#39;hello&#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">hello</span></span></code></pre></div><p>您也可以是使用 <a href="./format.html"><code>format()</code></a> 函数做到同样的事情：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%10s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">format(&#39;%10s&#39;, &#39;hello&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">format(</span><span style="color:#FFCB6B;">&#39;%10s&#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">hello</span></span></code></pre></div><h3 id="左侧填充数字" tabindex="-1">左侧填充数字 <a class="header-anchor" href="#左侧填充数字" aria-label="Permalink to &quot;左侧填充数字&quot;">​</a></h3><p>有时候，为了让数字看起来整齐，我们需要在数字的左侧填充 <code>0</code> 使其达到一定的长度。 下面的例子展示了在数字左侧填充 <code>0</code> 使其长度达到 10。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    lpad(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lpad(&#39;1234&#39;, 10, &#39;0&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    lpad(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">9876</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lpad(&#39;9876&#39;, 10, &#39;0&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lpad(</span><span style="color:#FFCB6B;">&#39;1234&#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">lpad(</span><span style="color:#FFCB6B;">&#39;9876&#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------+-----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0000123456</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">0000009876</span></span></code></pre></div><h3 id="左侧填充多个字符" tabindex="-1">左侧填充多个字符 <a class="header-anchor" href="#左侧填充多个字符" aria-label="Permalink to &quot;左侧填充多个字符&quot;">​</a></h3><p>您还可以使用 <code>lpad()</code> 函数还可以填充多个字符：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> lpad(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xyz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lpad(&#39;Hello&#39;, 10, &#39;xyz&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lpad(</span><span style="color:#FFCB6B;">&#39;Hello&#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xyz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">--------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">xyzxyHello</span></span></code></pre></div>`,31),e=[n];function t(c,r,C,y,d,D){return a(),l("div",null,e)}const A=s(p,[["render",t]]);export{i as __pageData,A as default};
