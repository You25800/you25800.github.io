import{_ as n,o as s,c as a,a as e}from"./app-13259c29.js";const t={},i=e(`<h1 id="索引模版" tabindex="-1"><a class="header-anchor" href="#索引模版" aria-hidden="true">#</a> 索引模版</h1><h2 id="index-template" tabindex="-1"><a class="header-anchor" href="#index-template" aria-hidden="true">#</a> index Template</h2><p>index Template 可以帮助你设定Mappings和Settings，并按照一定的规则，自动匹配倒新创建的索引之上</p><ul><li>模版仅在一个索引被新创建时，才会产生作用。修改模版不会影响已创建的索引。</li><li>你可以设定多个索引模版，这些设置会被“merge”在一起</li><li>你可以“order”的数值，控制“merging”的过程</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /_template/template_default
<span class="token punctuation">{</span>
  <span class="token string">&quot;index_patterns&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span>,
  <span class="token string">&quot;order&quot;</span>:0,
  <span class="token string">&quot;version&quot;</span>:1,
  <span class="token string">&quot;settings&quot;</span>:<span class="token punctuation">{</span>
    <span class="token string">&quot;number_of_shards&quot;</span>:1,
    <span class="token string">&quot;number_of_replicas&quot;</span>:1
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


PUT /_template/temlplate_test
<span class="token punctuation">{</span>
  <span class="token string">&quot;index_patterns&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">]</span>,
  <span class="token string">&quot;order&quot;</span>:1,
  <span class="token string">&quot;settings&quot;</span>:<span class="token punctuation">{</span>
    <span class="token string">&quot;number_of_shards&quot;</span>:1,
    <span class="token string">&quot;number_of_replicas&quot;</span>:1
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;mappings&quot;</span>:<span class="token punctuation">{</span>
    <span class="token string">&quot;date_detection&quot;</span>:false, <span class="token comment"># 关闭日期探测</span>
    <span class="token string">&quot;numeric_detection&quot;</span>:true
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="index-template-的工作方式" tabindex="-1"><a class="header-anchor" href="#index-template-的工作方式" aria-hidden="true">#</a> Index Template 的工作方式</h4><p>当一个索引被新创建时：</p><ul><li>应用Elasticsearch默认的settings和mappings</li><li>应用order数值低的index template中的设定</li><li>应用order高的Index template中的设定，之前的设定会被覆盖</li><li>应用创建索引时，用户所指定的settings和mappings，并覆盖模版中的设定</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看template信息</span>
GET /_template/template_default
GET /_template/temp*

<span class="token comment"># 详闭日期探测，createDate会推断为text类型</span>
PUT /testtemplate/_doc/1
<span class="token punctuation">{</span>
	<span class="token string">&quot;orderNo&quot;</span>:1,
	<span class="token string">&quot;createDate&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2022/01/01&quot;</span>
<span class="token punctuation">}</span>
GET /testtemplate/_mappings
GET /testtemplate/_settings

<span class="token comment"># 开启日期探测</span>
PUT /test1
<span class="token punctuation">{</span>
	<span class="token string">&quot;mappings&quot;</span>:<span class="token punctuation">{</span>
		<span class="token string">&quot;date_detection&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

PUT /test1/_doc/1
<span class="token punctuation">{</span>
	<span class="token string">&quot;orderNo&quot;</span>:1,
	<span class="token string">&quot;createDate&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2022/01/01&quot;</span>
<span class="token punctuation">}</span>

GET /test1/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dynamic-template" tabindex="-1"><a class="header-anchor" href="#dynamic-template" aria-hidden="true">#</a> Dynamic Template</h2><p>根据Elasticsearch 识别的数据类型，结合字段名称，来动态设定字段类型</p><ul><li>所有的字符串类型都设定成keyword，或者关闭keyword字段</li><li>is开头的字段都设成boolean</li><li>long_开头的都设置成long类型</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /my_index_index
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;dynamic_templates&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token property">&quot;full_name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;path_match&quot;</span><span class="token operator">:</span><span class="token string">&quot;name.*&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path_unmatch&quot;</span><span class="token operator">:</span><span class="token string">&quot;*.middle&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mapping&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;copy_to&quot;</span><span class="token operator">:</span><span class="token string">&quot;full_name&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

PUT /my_test_index/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;first&quot;</span><span class="token operator">:</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;middle&quot;</span><span class="token operator">:</span><span class="token string">&quot;Winston&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last&quot;</span><span class="token operator">:</span><span class="token string">&quot;Lennon&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /my_test_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;full_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;John&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[i];function p(o,c){return s(),a("div",null,l)}const d=n(t,[["render",p],["__file","索引模版.html.vue"]]);export{d as default};
