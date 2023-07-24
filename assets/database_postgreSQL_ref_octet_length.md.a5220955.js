import{_ as s,o as a,c as n,R as o}from"./chunks/framework.333b51ca.js";const h=JSON.parse('{"title":"PostgreSQL octet_length() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/octet_length.md","filePath":"database/postgreSQL/ref/octet_length.md","lastUpdated":1689834507000}'),l={name:"database/postgreSQL/ref/octet_length.md"},e=o(`<h1 id="postgresql-octet-length-函数" tabindex="-1">PostgreSQL octet_length() 函数 <a class="header-anchor" href="#postgresql-octet-length-函数" aria-label="Permalink to &quot;PostgreSQL octet_length() 函数&quot;">​</a></h1><p>PostgreSQL <code>octet_length()</code> 函数以字节(byte)为单位返回给定字符串的长度。</p><p>如果想返回字符串的位数，请使用 <a href="./bit_length.html"><code>bit_length()</code></a> 函数。因为 1 字节(byte)等于 8 位(bit)，因此，对于同一个字符串来说，<code>octet_length()</code> 的返回值是 <code>octet_length()</code> 返回值的 8 倍。</p><p>如果想返回字符串的字符数量，请使用 <a href="./char_length.html"><code>char_length()</code></a>, 或者 <a href="./character_length.html"><code>character_length()</code></a> 或者 <a href="./length.html"><code>length()</code></a>。</p><h2 id="octet-length-语法" tabindex="-1"><code>octet_length()</code> 语法 <a class="header-anchor" href="#octet-length-语法" aria-label="Permalink to &quot;\`octet_length()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>octet_length()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">octet_length(string)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>string</code></em></p><p>必需的。 一个字符串。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>octet_length()</code> 函数返回一个给定字符串中的字节长度。</p><h2 id="octet-length-示例" tabindex="-1"><code>octet_length()</code> 示例 <a class="header-anchor" href="#octet-length-示例" aria-label="Permalink to &quot;\`octet_length()\` 示例&quot;">​</a></h2><h3 id="简单示例" tabindex="-1">简单示例 <a class="header-anchor" href="#简单示例" aria-label="Permalink to &quot;简单示例&quot;">​</a></h3><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Bytes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">String</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    octet_length(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    octet_length(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    octet_length(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">01</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    octet_length(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">你</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">你</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">01</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">你</span></span>
<span class="line"><span style="color:#FFCB6B;">--------+---+--------+----+----</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Bytes</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">3</span></span></code></pre></div><h3 id="octet-length-vs-octet-length" tabindex="-1"><code>octet_length()</code> vs <code>octet_length()</code> <a class="header-anchor" href="#octet-length-vs-octet-length" aria-label="Permalink to &quot;\`octet_length()\` vs \`octet_length()\`&quot;">​</a></h3><p>对于同一个字符串来说，<code>bit_length()</code> 的返回值是 <code>octet_length()</code> 返回值的 8 倍。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ab</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    bit_length(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ab</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bits</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    octet_length(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ab</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bytes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Bits</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Bytes</span></span>
<span class="line"><span style="color:#FFCB6B;">----+------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">16</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">2</span></span></code></pre></div>`,19),t=[e];function p(c,r,C,D,y,F){return a(),n("div",null,t)}const i=s(l,[["render",p]]);export{h as __pageData,i as default};
