import{_ as n,r as c,o,c as a,a as e,b as t,d as s,e as r}from"./app-5d4e1ead.js";const l={},i=e("code",null,"CSS",-1),h={href:"https://www.houdunren.com/edu/front/system/6",target:"_blank",rel:"noopener noreferrer"},u=r(`<p>大部分HTML元素都有系统提供的样式，但有以下问题</p><ul><li>不同浏览器显示样式不一致</li><li>样式过于简单，显示效果不美观</li><li>很难按照设计稿完全呈现显示效果</li></ul><h2 id="https-doc-houdunren-com-系统课程-css-1-基础知识-html-样式声明-样式声明" tabindex="-1"><a class="header-anchor" href="#https-doc-houdunren-com-系统课程-css-1-基础知识-html-样式声明-样式声明" aria-hidden="true">#</a> [#](https://doc.houdunren.com/系统课程/css/1 基础知识.html#样式声明)样式声明</h2><p>可以通过多种方式定义样式表。</p><h3 id="https-doc-houdunren-com-系统课程-css-1-基础知识-html-外部样式-外部样式" tabindex="-1"><a class="header-anchor" href="#https-doc-houdunren-com-系统课程-css-1-基础知识-html-外部样式-外部样式" aria-hidden="true">#</a> [#](https://doc.houdunren.com/系统课程/css/1 基础知识.html#外部样式)外部样式</h3><p>使用 <code>link</code> 标签引入外部样式文件，需要注意以下几点。</p><ul><li>link 标签放在 <code>head</code> 标签内部</li><li>样式文件要以 <code>.css</code> 为扩展名</li><li>一个页面往往需要引入多个样式文件</li></ul><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>rel</td><td>定义当前文档与被链接文档之间的关系</td></tr><tr><td>href</td><td>外部样式文件</td></tr><tr><td>type</td><td>文档类型</td></tr></tbody></table><blockquote><p>link 还有其他属性会在其他章节单独讲解</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;houdunren.css&quot; type=&quot;text/css&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="https-doc-houdunren-com-系统课程-css-1-基础知识-html-嵌入样式-嵌入样式" tabindex="-1"><a class="header-anchor" href="#https-doc-houdunren-com-系统课程-css-1-基础知识-html-嵌入样式-嵌入样式" aria-hidden="true">#</a> [#](https://doc.houdunren.com/系统课程/css/1 基础知识.html#嵌入样式)嵌入样式</h3><p>使用 <code>style</code> 标签可以在文档内部定义样式规则。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
	body {
		background: red;
	}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="https-doc-houdunren-com-系统课程-css-1-基础知识-html-内联样式-内联样式" tabindex="-1"><a class="header-anchor" href="#https-doc-houdunren-com-系统课程-css-1-基础知识-html-内联样式-内联样式" aria-hidden="true">#</a> [#](https://doc.houdunren.com/系统课程/css/1 基础知识.html#内联样式)内联样式</h3><p>可以为某个标签单独设置样式。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1 style=&quot;color:green;&quot;&gt;houdunren.com&lt;/h1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="https-doc-houdunren-com-系统课程-css-1-基础知识-html-导入样式-导入样式" tabindex="-1"><a class="header-anchor" href="#https-doc-houdunren-com-系统课程-css-1-基础知识-html-导入样式-导入样式" aria-hidden="true">#</a> [#](https://doc.houdunren.com/系统课程/css/1 基础知识.html#导入样式)导入样式</h3><p>使用 <code>@import</code> 可以在原样式规则中导入其他样式表，可以在外部样式、<code>style</code>标签中使用。</p><p>可以使用以下两种方式导入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@import &quot;hd.css&quot;
@import url(&quot;hd.css&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>导入样式要放在样式规则前面定义。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
	@import url(&quot;hdcms.css&quot;);
	body {
		background: red;
	}
&lt;/style1&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="https-doc-houdunren-com-系统课程-css-1-基础知识-html-其他细节-其他细节" tabindex="-1"><a class="header-anchor" href="#https-doc-houdunren-com-系统课程-css-1-基础知识-html-其他细节-其他细节" aria-hidden="true">#</a> [#](https://doc.houdunren.com/系统课程/css/1 基础知识.html#其他细节)其他细节</h2><h3 id="https-doc-houdunren-com-系统课程-css-1-基础知识-html-空白-空白" tabindex="-1"><a class="header-anchor" href="#https-doc-houdunren-com-系统课程-css-1-基础知识-html-空白-空白" aria-hidden="true">#</a> [#](https://doc.houdunren.com/系统课程/css/1 基础知识.html#空白)空白</h3><p>在样式规则中可以随意使用空白，空白只是看不见但同样占用空间，所以可以结合其他工具如 <code>webpack</code> 等将<code>css</code> 压缩为一行。</p><h3 id="https-doc-houdunren-com-系统课程-css-1-基础知识-html-注释-注释" tabindex="-1"><a class="header-anchor" href="#https-doc-houdunren-com-系统课程-css-1-基础知识-html-注释-注释" aria-hidden="true">#</a> [#](https://doc.houdunren.com/系统课程/css/1 基础知识.html#注释)注释</h3><p>注释是对定义样式规则的说明，便于后期维护理解。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
body {
	/* 这是注释的使用 */
	background: red;
}
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="https-doc-houdunren-com-系统课程-css-1-基础知识-html-错误-错误" tabindex="-1"><a class="header-anchor" href="#https-doc-houdunren-com-系统课程-css-1-基础知识-html-错误-错误" aria-hidden="true">#</a> [#](https://doc.houdunren.com/系统课程/css/1 基础知识.html#错误)错误</h3><p>样式规则如果存在错误，解析器会选择忽略，并不会影响其他样式规则。</p><p>以下代码的<code>houdunren:red</code> 是无效样式但不影响后面的 <code>font-size:100px;</code> 规则使用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h1 {
    houdunren: red;
    font-size: 100px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="https-doc-houdunren-com-系统课程-css-1-基础知识-html-初始样式-初始样式" tabindex="-1"><a class="header-anchor" href="#https-doc-houdunren-com-系统课程-css-1-基础知识-html-初始样式-初始样式" aria-hidden="true">#</a> [#](https://doc.houdunren.com/系统课程/css/1 基础知识.html#初始样式)初始样式</h2><p>有些标签默认含有内外边距，且不同浏览器大小也不一样。为了统一我们可以重置标签的CSS默认样式。</p>`,34),m={href:"https://meyerweb.com/eric/tools/css/reset/",target:"_blank",rel:"noopener noreferrer"},p=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1);function v(b,x){const d=c("ExternalLinkIcon");return o(),a("div",null,[e("p",null,[t("因为"),i,t(" 主要是对页面元素的美化，所以需要先学习 "),e("a",h,[t("HTML (opens new window)"),s(d)]),t("相关课程。")]),u,e("p",null,[t("最简单的方式就是使用插件"),e("a",m,[t("css-reset (opens new window)"),s(d)]),t("完成，你也可以在vscode等编辑器中定义代码片段。")]),p])}const f=n(l,[["render",v],["__file","READMIN.html.vue"]]);export{f as default};