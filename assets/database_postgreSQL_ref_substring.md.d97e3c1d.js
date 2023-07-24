import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const A=JSON.parse('{"title":"PostgreSQL substring() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/substring.md","filePath":"database/postgreSQL/ref/substring.md","lastUpdated":1689922193000}'),o={name:"database/postgreSQL/ref/substring.md"},p=l(`<h1 id="postgresql-substring-函数" tabindex="-1">PostgreSQL substring() 函数 <a class="header-anchor" href="#postgresql-substring-函数" aria-label="Permalink to &quot;PostgreSQL substring() 函数&quot;">​</a></h1><p>PostgreSQL <code>substring()</code> 函数从一个指定的字符串中根据指定的起始位置和长度提取子字符串，或者根据正则表达式提取子字符串。</p><h2 id="substring-语法" tabindex="-1"><code>substring()</code> 语法 <a class="header-anchor" href="#substring-语法" aria-label="Permalink to &quot;\`substring()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>substring()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(string [FROM start] [FOR length])</span></span></code></pre></div><p>或</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(string </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> pattern)</span></span></code></pre></div><p>或</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(string SIMILAR pattern ESCAPE escape)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>string</code></em></p><p>必需的。 一个字符串。</p></li><li><p><em><code>start</code></em></p><p>可选的。 子字符串的起始位置。默认是 1，也就是字符串的开头。</p></li><li><p><em><code>length</code></em></p><p>可选的。 子字符串的长度。默认是提取到字符串的结尾。</p></li><li><p><em><code>pattern</code></em></p><p>必需的。 正则表达式。 <code>FROM pattern</code> 子句中使用的是 POSIX 正则表达式；<code>SIMILAR pattern</code> 子句中使用的是 SQL 正则表达式。</p></li><li><p><em><code>escape</code></em></p><p>必需的。 转义字符。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>substring()</code> 函数从字符串 <code>string</code> 中提取从位置 <code>start</code> 开始且长度为 <code>length</code> 的子字符串并返回。若没有指定参数 <code>length</code>，则提取从 <code>start</code> 开始到字符串 <code>string</code> 的结尾的子字符串。</p><p>如果 <code>start + length</code> 超过了字符串 <code>string</code> 的长度，则返回 <code>start</code> 到字符串的结尾 <code>string</code> 的子字符串。</p><p>若参数为 <code>NULL</code>，该函数将返回 <code>NULL</code>。</p><h2 id="substring-示例" tabindex="-1"><code>substring()</code> 示例 <a class="header-anchor" href="#substring-示例" aria-label="Permalink to &quot;\`substring()\` 示例&quot;">​</a></h2><h3 id="语法-1-示例" tabindex="-1">语法 1 示例 <a class="header-anchor" href="#语法-1-示例" aria-label="Permalink to &quot;语法 1 示例&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">substring(&#39;hello&#39; FROM 2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> FOR </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">substring(&#39;hello&#39; FROM 2 FOR 2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> FOR </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">substring(&#39;hello&#39; FOR 2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RECORD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]-------------------+-----</span></span>
<span class="line"><span style="color:#FFCB6B;">substring(</span><span style="color:#FFCB6B;">&#39;hello&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ello</span></span>
<span class="line"><span style="color:#FFCB6B;">substring(</span><span style="color:#FFCB6B;">&#39;hello&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FOR</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">el</span></span>
<span class="line"><span style="color:#FFCB6B;">substring(</span><span style="color:#FFCB6B;">&#39;hello&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FOR</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">he</span></span></code></pre></div><h3 id="语法-2-示例" tabindex="-1">语法 2 示例 <a class="header-anchor" href="#语法-2-示例" aria-label="Permalink to &quot;语法 2 示例&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">^.{2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">substring(&#39;hello&#39; FROM &#39;^.{2}&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.{3}$</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">substring(&#39;hello&#39; FROM &#39;.{3}$&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">-[</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">RECORD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]-------------------+----</span></span>
<span class="line"><span style="color:#FFCB6B;">substring(</span><span style="color:#FFCB6B;">&#39;hello&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">^.{2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">he</span></span>
<span class="line"><span style="color:#FFCB6B;">substring(</span><span style="color:#FFCB6B;">&#39;hello&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.{3}$</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">llo</span></span></code></pre></div><p>这里，<code>FROM pattern</code> 子句中使用的是 POSIX 正则表达式。</p><h3 id="语法-3-示例" tabindex="-1">语法 3 示例 <a class="header-anchor" href="#语法-3-示例" aria-label="Permalink to &quot;语法 3 示例&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">substring</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> SIMILAR </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%#&quot;__l#&quot;%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ESCAPE </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">substring</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">hel</span></span></code></pre></div><p>这里，<code>SIMILAR pattern</code> 语句中使用的是 SQL 正则表达式，就像 <code>LIKE</code> 一样。</p><p>注意，<code>SIMILAR</code> 语句只有在 SQL 正则表达式匹配整个字符串时才会成功，因此上面的例子中使用 <code>#&quot;</code> 分隔返回字符串。</p>`,28),e=[p];function t(c,r,C,y,i,D){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
