import{_ as n,o as s,c as a,e}from"./app-aae02a9f.js";const t={},p=e(`<h1 id="stringer" tabindex="-1"><a class="header-anchor" href="#stringer" aria-hidden="true">#</a> stringer</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Stringer is a tool to automate the creation of methods that satisfy the fmt.Stringer interface. Given the name of a (signed or unsigned) integer type T that has constants defined, stringer will create a new self-contained Go source file implementing.</p><p>Stringer是一个自动创建满足fmt.Stringer接口的方法的工具。给定定义了常量（有符号或无符号）整数类型T的名称，stringer将创建一个新的自包含Go源文件实现。</p><p>The file is created in the same package and directory as the package that defines T. It has helpful defaults designed for use with go generate.</p><p>该文件与定义T的软件包在同一个软件包和目录中创建。它具有用于go generate的有用默认值。</p><p>Stringer works best with constants that are consecutive values such as created using iota, but creates good code regardless. In the future it might also provide custom support for constant sets that are bit patterns.</p><p>Stringer最适用于连续值的常量，例如使用iota创建的常量，但无论如何都会创建良好的代码。将来，它还可能为位模式的常量集提供自定义支持。</p><h2 id="安装stringer" tabindex="-1"><a class="header-anchor" href="#安装stringer" aria-hidden="true">#</a> 安装stringer</h2><p>stringer命令不是go安装包自带的，所以需要手动安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载命令</span>
go get golang.org/x/tools/cmd/stringer

<span class="token comment"># 安装命令</span>
go <span class="token function">install</span> golang.org/x/tools/cmd/stringer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>stringer所在目录，需要添加到环境变量的path里面。</p></div><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h2><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>自定义的类型名称</td></tr><tr><td>output</td><td>生成代码的文件名，默认名是{type}_string.go</td></tr><tr><td>linecomment</td><td>使用常量所在行的备注，作为打印输出的信息</td></tr><tr><td>trimprefix</td><td>去掉常量名的前缀</td></tr></tbody></table><blockquote><p><code>type</code>指定了需要generate的对象，后面加文件名的话，就是指定对象所在的文件名</p><p><code>stringer -type=Pill pill.go</code></p></blockquote><h2 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h2><h3 id="简单案例" tabindex="-1"><a class="header-anchor" href="#简单案例" aria-hidden="true">#</a> 简单案例</h3><p>创建一个Pill类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> painkiller

<span class="token keyword">type</span> Pill <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	Placebo Pill <span class="token operator">=</span> <span class="token boolean">iota</span>
	Aspirin
	Ibuprofen
	Paracetamol
	Acetaminophen <span class="token operator">=</span> Paracetamol
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令<code>stringer -type=Pill</code></p><p>在同一目录中，将创建pill_string.go文件，内容如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;strconv&quot;</span>

<span class="token keyword">func</span> <span class="token boolean">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// An &quot;invalid array index&quot; compiler error signifies that the constant values have changed.</span>
    <span class="token comment">// Re-run the stringer command to generate them again.</span>
    <span class="token keyword">var</span> x <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token boolean">_</span> <span class="token operator">=</span> x<span class="token punctuation">[</span>Placebo<span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token boolean">_</span> <span class="token operator">=</span> x<span class="token punctuation">[</span>Aspirin<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token boolean">_</span> <span class="token operator">=</span> x<span class="token punctuation">[</span>Ibuprofen<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token boolean">_</span> <span class="token operator">=</span> x<span class="token punctuation">[</span>Paracetamol<span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> _Pill_name <span class="token operator">=</span> <span class="token string">&quot;PlaceboAspirinIbuprofenParacetamol&quot;</span>

<span class="token keyword">var</span> _Pill_index <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">uint8</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i Pill<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> <span class="token function">Pill</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>_Pill_index<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Pill(&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">FormatInt</span><span class="token punctuation">(</span><span class="token function">int64</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> _Pill_name<span class="token punctuation">[</span>_Pill_index<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span>_Pill_index<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>String()方法将Pill常量的值转换为相应常量名称的字符串表示，因此调用fmt.Print（painkiller.Aspirin）将打印字符串“Aspirin”。</p><p>通常，此过程将使用go generate运行，如下所示：</p><p><code>//go:generate stringer -type=Pill</code></p><h3 id="使用注释" tabindex="-1"><a class="header-anchor" href="#使用注释" aria-hidden="true">#</a> 使用注释</h3><p>我们在创建常量时可以给常量加注释，使用stringer命令生成代码时可以用注释作为输出字符串。</p><p>创建Pill类型</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> painkiller

<span class="token comment">//go:generate stringer -type=Pill -linecomment</span>
<span class="token keyword">type</span> Pill <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	Placebo Pill <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 安慰剂</span>
	Aspirin <span class="token comment">// 阿司匹林</span>
	Ibuprofen <span class="token comment">// 布洛芬</span>
	Paracetamol <span class="token comment">// 扑热息痛</span>
	Acetaminophen <span class="token operator">=</span> Paracetamol
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令</p><p><code>//go:generate stringer -type=Pill -linecomment</code></p><p>生成代码如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;strconv&quot;</span>

<span class="token keyword">func</span> <span class="token boolean">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// An &quot;invalid array index&quot; compiler error signifies that the constant values have changed.</span>
	<span class="token comment">// Re-run the stringer command to generate them again.</span>
	<span class="token keyword">var</span> x <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token boolean">_</span> <span class="token operator">=</span> x<span class="token punctuation">[</span>Placebo<span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token boolean">_</span> <span class="token operator">=</span> x<span class="token punctuation">[</span>Aspirin<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token boolean">_</span> <span class="token operator">=</span> x<span class="token punctuation">[</span>Ibuprofen<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
	<span class="token boolean">_</span> <span class="token operator">=</span> x<span class="token punctuation">[</span>Paracetamol<span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> _Pill_name <span class="token operator">=</span> <span class="token string">&quot;安慰剂阿司匹林布洛芬扑热息痛&quot;</span>

<span class="token keyword">var</span> _Pill_index <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">uint8</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i Pill<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> <span class="token function">Pill</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>_Pill_index<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;Pill(&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">FormatInt</span><span class="token punctuation">(</span><span class="token function">int64</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> _Pill_name<span class="token punctuation">[</span>_Pill_index<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span>_Pill_index<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时调用fmt.Print（painkiller.Aspirin）将打印字符串“阿司匹林”。</p><h3 id="去掉常量名前缀" tabindex="-1"><a class="header-anchor" href="#去掉常量名前缀" aria-hidden="true">#</a> 去掉常量名前缀</h3><p>如果常量名称都包含<code>Pill</code>前缀的话，<code>-trimprefix</code>选项会在生成代码时，去掉<code>Pill</code>前缀。如<code>PillPlacebo</code>、<code>PillAspirin</code>等变量，在String()输出时会去掉前缀。去掉前缀是在生成代码时，去掉前缀，而不是调用<code>String()</code>的时候过滤掉前缀。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//go:generate stringer -type Pill -trimprefix Pill </span>
<span class="token keyword">type</span> Pill <span class="token builtin">int</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	PillPlacebo   Pill <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 安慰剂</span>
	PillAspirin               <span class="token comment">// 阿司匹林</span>
	Ibuprofen                 <span class="token comment">// 布洛芬</span>
	Paracetamol               <span class="token comment">// 扑热息痛</span>
	Acetaminophen <span class="token operator">=</span> Paracetamol
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><p>stringer 命令只能处理整型的数据类型</p></div>`,39),o=[p];function i(l,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","stringer.html.vue"]]);export{u as default};