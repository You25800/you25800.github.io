import{_ as s,o as a,c as t,R as e}from"./chunks/framework.333b51ca.js";const m=JSON.parse('{"title":"PostgreSQL jsonb_path_match_tz() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/jsonb_path_match_tz.md","filePath":"database/postgreSQL/ref/jsonb_path_match_tz.md","lastUpdated":1690180485000}'),n={name:"database/postgreSQL/ref/jsonb_path_match_tz.md"},o=e(`<h1 id="postgresql-jsonb-path-match-tz-函数" tabindex="-1">PostgreSQL jsonb_path_match_tz() 函数 <a class="header-anchor" href="#postgresql-jsonb-path-match-tz-函数" aria-label="Permalink to &quot;PostgreSQL jsonb_path_match_tz() 函数&quot;">​</a></h1><p>PostgreSQL <code>jsonb_path_match_tz()</code> 函数返回一个 JSON 路径断言对一个指定的 JSON 值的执行结果。此函数与 <a href="./jsonb_path_match.html"><code>jsonb_path_match()</code></a> 的不同之处在于提供了对带有时区的日期/时间的支持。</p><h2 id="jsonb-path-match-tz-语法" tabindex="-1"><code>jsonb_path_match_tz()</code> 语法 <a class="header-anchor" href="#jsonb-path-match-tz-语法" aria-label="Permalink to &quot;\`jsonb_path_match_tz()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>jsonb_path_match_tz()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">jsonb_path_match_tz(</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F78C6C;">target</span><span style="color:#A6ACCD;"> JSONB</span></span>
<span class="line"><span style="color:#A6ACCD;">   , </span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> JSONPATH</span></span>
<span class="line"><span style="color:#A6ACCD;">  [, vars JSONB</span></span>
<span class="line"><span style="color:#A6ACCD;">  [, silent BOOLEAN]]</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">BOOLEAN</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>target</code></em></p><p>必需的。 要检查的 JSONB 值。</p></li><li><p><em><code>path</code></em></p><p>必需的。 要执行的 JSON 路径断言。</p></li><li><p><em><code>vars</code></em></p><p>可选的。 路径中要用到的变量值。</p></li><li><p><em><code>silent</code></em></p><p>可选的。 如果提供了此参数，并且为 <code>true</code>，该函数会像 <code>@?</code> 和 <code>@@</code> 操作符一样抑制相同的错误。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>jsonb_path_match_tz()</code> 函数返回一个布尔值，它是一个 JSON 路径断言对一个指定的 JSON 值的执行结果。 <code>t</code> 表示指定的 JSON 值与指定的 JSON 路径匹配， <code>f</code> 表示指定的 JSON 值与指定的 JSON 路径不匹配。</p><p>如果任意一个参数是 NULL，<code>jsonb_path_match_tz()</code> 函数将返回 NULL。</p><h2 id="jsonb-path-match-tz-示例" tabindex="-1"><code>jsonb_path_match_tz()</code> 示例 <a class="header-anchor" href="#jsonb-path-match-tz-示例" aria-label="Permalink to &quot;\`jsonb_path_match_tz()\` 示例&quot;">​</a></h2><h3 id="基本示例" tabindex="-1">基本示例 <a class="header-anchor" href="#基本示例" aria-label="Permalink to &quot;基本示例&quot;">​</a></h3><p>下面的示例展示了如何使用 PostgreSQL <code>jsonb_path_match_tz()</code> 函数检查在一个 JSON 数组中是否包含大于 1 的值。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> jsonb_path_match_tz(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, 3]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">exists($[*] ? (@ &gt; 1))</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">jsonb_path_match_tz</span></span>
<span class="line"><span style="color:#FFCB6B;">---------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span></code></pre></div><p>这里，我们使用路径 <code>$[*] ? (@ &gt; 2)</code> 来获取 JSON 数组 <code>[1, 2, 3]</code> 中的大于 2 的项。 而 <code>exists($[*] ? (@ &gt; 1))</code> 检查 JSON 数组中是否包含大于 2 的项。 该语句与下面的 <a href="./jsonb_path_exists.html"><code>jsonb_path_exists()</code></a> 相同：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> jsonb_path_exists(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, 3]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$[*] ? (@ &gt; 1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">jsonb_path_match_tz</span></span>
<span class="line"><span style="color:#FFCB6B;">---------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span></code></pre></div><h3 id="时区" tabindex="-1">时区 <a class="header-anchor" href="#时区" aria-label="Permalink to &quot;时区&quot;">​</a></h3><p>PostgreSQL <code>jsonb_path_match_tz()</code> 函数支持带时区的时间戳。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">select</span></span>
<span class="line"><span style="color:#A6ACCD;">    jsonb_path_match_tz(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;2015-08-01 12:00:00 +00&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">exists($[*] ? (@.datetime() &lt; &quot;2015-08-02&quot;.datetime()))</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">jsonb_path_match_tz</span></span>
<span class="line"><span style="color:#FFCB6B;">---------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span></code></pre></div>`,22),p=[o];function l(c,r,h,i,d,_){return a(),t("div",null,p)}const b=s(n,[["render",l]]);export{m as __pageData,b as default};