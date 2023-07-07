import{_ as n,o as a,c as s,e as t}from"./app-aae02a9f.js";const p={},e=t(`<h1 id="模版引擎" tabindex="-1"><a class="header-anchor" href="#模版引擎" aria-hidden="true">#</a> 模版引擎</h1><h2 id="模板与渲染" tabindex="-1"><a class="header-anchor" href="#模板与渲染" aria-hidden="true">#</a> <strong>模板与渲染</strong></h2><p>在一些前后端分离的 Web 架构中, 我们通常需要在后端将一些数据渲染到 HTML 文档中, 从而实现动态的网页(网页的布局和样式大致一样, 但展示的内容并不一样) 效果.</p><p>我们这里说的模板可以理解为事先定义好的 HTML 文档文件, 模板渲染的左右机制可以简单理解为文本替换操作---使用相应的数据去替换 HTML 文档中实现准备好的标记.</p><p>很多编程语言的 Web 框架中都使用各种模板引擎, 比如 Python 语言中 Flask 框架中使用 jinja2 模板引擎.</p><h2 id="go-语言的模板引擎" tabindex="-1"><a class="header-anchor" href="#go-语言的模板引擎" aria-hidden="true">#</a> <strong>Go 语言的模板引擎</strong></h2><p>Go 语言内置了文本模板引擎<code>text/template</code>和用于 HTML 文档的 html/templant. 它们的作用机制可以简单归纳如下:</p><ol><li><p>模板文件通常定义为.tmpl 和.tpl 为后缀<code>(也可以使用其他后缀)</code>, 必须使用 utf-8 编码.</p></li><li><p>模板文件中使用<code>{{和}}</code>包裹和标识需要传入的数据.</p></li><li><p>传给模板这样的数据就可以通过点号<code>(.)</code>来访问,如果数据是复杂类型的数据, 可以通过<code>{{.FieldName}}</code>来访问它的字段.</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4. 除\`{{和}}\`包裹的内容外, 其他内容均不做修改原样输出.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="模板引擎的使用" tabindex="-1"><a class="header-anchor" href="#模板引擎的使用" aria-hidden="true">#</a> 模板引擎的使用</h2><p>Go 语言模板引擎的使用可以分文三部分: 定义模板文件/解析模板文件/渲染模板文件</p><blockquote><h3 id="定义模板文件" tabindex="-1"><a class="header-anchor" href="#定义模板文件" aria-hidden="true">#</a> 定义模板文件</h3></blockquote><p>其中, 定义模板文件时需要我们按照相关语法规则去编写, 后文会详细介绍.</p><blockquote><h4 id="解析模板文件" tabindex="-1"><a class="header-anchor" href="#解析模板文件" aria-hidden="true">#</a> 解析模板文件</h4></blockquote><p>上面定义好了模板文件之后,可以使用下面的常用方法去解析模板文件, 得到模板对象:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Template<span class="token punctuation">)</span> <span class="token function">Parse</span><span class="token punctuation">(</span>src <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Template<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">ParseFiles</span><span class="token punctuation">(</span>filenames <span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Template<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">ParseGlob</span><span class="token punctuation">(</span>pattern <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>Template<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然, 你也可以使用<code>func New(name string) *Template</code>函数创建一个名为<code>name</code>的模板, 然后对其调用上面的方法去解析模板字符串或模板文件.</p><blockquote><h4 id="模板渲染" tabindex="-1"><a class="header-anchor" href="#模板渲染" aria-hidden="true">#</a> 模板渲染</h4></blockquote><p>渲染模板简单来说就是使用数据去填充模板, 当然实际上可能会复杂很多.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token operator">*</span>Template<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span>wr io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> data <span class="token keyword">interface</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token operator">*</span>Template<span class="token punctuation">)</span> <span class="token function">ExecuteTemplate</span><span class="token punctuation">(</span>wr io<span class="token punctuation">.</span>Writer<span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">,</span> data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="基本示例" tabindex="-1"><a class="header-anchor" href="#基本示例" aria-hidden="true">#</a> 基本示例</h4></blockquote><h5 id="定义模板文件-1" tabindex="-1"><a class="header-anchor" href="#定义模板文件-1" aria-hidden="true">#</a> 定义模板文件</h5><p>我们按照 Go 模板语法定义一个<code>hello.tmpl</code>的模板文件, 内容如下:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=devie-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hello {{.}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="解析模板和渲染模板文件" tabindex="-1"><a class="header-anchor" href="#解析模板和渲染模板文件" aria-hidden="true">#</a> 解析模板和渲染模板文件</h5><p>然后我们创建一个<code>main.go</code>文件,在其中写下 HTTP server 端代码如下:</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// main.go</span>
<span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 解析指定文件生成模板对象</span>
    tmpl<span class="token punctuation">,</span> err <span class="token operator">:=</span> template<span class="token punctuation">.</span><span class="token function">ParseFiles</span><span class="token punctuation">(</span><span class="token string">&quot;./hello.tmpl&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;create template failed, err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 利用给定数据渲染模板, 并将结果写入w</span>
    tmpl<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> sayHello<span class="token punctuation">)</span>
    err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:9090&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;HTTP SERVER failed,err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),o=[e];function c(l,i){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","golang1.html.vue"]]);export{r as default};
