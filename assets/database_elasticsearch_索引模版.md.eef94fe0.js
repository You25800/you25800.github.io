import{_ as s,o as n,c as a,R as l}from"./chunks/framework.318fa179.js";const A=JSON.parse('{"title":"索引模版","description":"","frontmatter":{},"headers":[],"relativePath":"database/elasticsearch/索引模版.md","filePath":"database/elasticsearch/索引模版.md","lastUpdated":1669898765000}'),p={name:"database/elasticsearch/索引模版.md"},o=l(`<h1 id="索引模版" tabindex="-1">索引模版 <a class="header-anchor" href="#索引模版" aria-label="Permalink to &quot;索引模版&quot;">​</a></h1><h2 id="index-template" tabindex="-1">index Template <a class="header-anchor" href="#index-template" aria-label="Permalink to &quot;index Template&quot;">​</a></h2><p>index Template 可以帮助你设定Mappings和Settings，并按照一定的规则，自动匹配倒新创建的索引之上</p><ul><li>模版仅在一个索引被新创建时，才会产生作用。修改模版不会影响已创建的索引。</li><li>你可以设定多个索引模版，这些设置会被“merge”在一起</li><li>你可以“order”的数值，控制“merging”的过程</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">PUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/_template/template_default</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;index_patterns&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">&quot;*&quot;</span><span style="color:#FFCB6B;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;order&quot;</span><span style="color:#FFCB6B;">:0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;version&quot;</span><span style="color:#FFCB6B;">:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;settings&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;number_of_shards&quot;</span><span style="color:#FFCB6B;">:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;number_of_replicas&quot;</span><span style="color:#FFCB6B;">:1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">PUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/_template/temlplate_test</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;index_patterns&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">[</span><span style="color:#FFCB6B;">&quot;test&quot;</span><span style="color:#FFCB6B;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;order&quot;</span><span style="color:#FFCB6B;">:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;settings&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;number_of_shards&quot;</span><span style="color:#FFCB6B;">:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;number_of_replicas&quot;</span><span style="color:#FFCB6B;">:1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&quot;mappings&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;date_detection&quot;</span><span style="color:#FFCB6B;">:false,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 关闭日期探测</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;numeric_detection&quot;</span><span style="color:#FFCB6B;">:true</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="index-template-的工作方式" tabindex="-1">Index Template 的工作方式 <a class="header-anchor" href="#index-template-的工作方式" aria-label="Permalink to &quot;Index Template 的工作方式&quot;">​</a></h4><p>当一个索引被新创建时：</p><ul><li>应用Elasticsearch默认的settings和mappings</li><li>应用order数值低的index template中的设定</li><li>应用order高的Index template中的设定，之前的设定会被覆盖</li><li>应用创建索引时，用户所指定的settings和mappings，并覆盖模版中的设定</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看template信息</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/_template/template_default</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/_template/temp</span><span style="color:#A6ACCD;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 详闭日期探测，createDate会推断为text类型</span></span>
<span class="line"><span style="color:#FFCB6B;">PUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/testtemplate/_doc/1</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;orderNo&quot;</span><span style="color:#FFCB6B;">:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;createDate&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#FFCB6B;">&quot;2022/01/01&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/testtemplate/_mappings</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/testtemplate/_settings</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 开启日期探测</span></span>
<span class="line"><span style="color:#FFCB6B;">PUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/test1</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;mappings&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">&quot;date_detection&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">PUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/test1/_doc/1</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;orderNo&quot;</span><span style="color:#FFCB6B;">:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;createDate&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#FFCB6B;">&quot;2022/01/01&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/test1/_mapping</span></span></code></pre></div><h2 id="dynamic-template" tabindex="-1">Dynamic Template <a class="header-anchor" href="#dynamic-template" aria-label="Permalink to &quot;Dynamic Template&quot;">​</a></h2><p>根据Elasticsearch 识别的数据类型，结合字段名称，来动态设定字段类型</p><ul><li>所有的字符串类型都设定成keyword，或者关闭keyword字段</li><li>is开头的字段都设成boolean</li><li>long_开头的都设置成long类型</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">PUT /my_index_index</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">mappings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dynamic_templates</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:[{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">full_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">path_match</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name.*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">path_unmatch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*.middle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">mapping</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">copy_to</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">full_name</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">PUT /my_test_index/_doc/</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">first</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">middle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Winston</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">last</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lennon</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">GET /my_test_index/_search</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">query</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">match</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">full_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,13),e=[o];function t(c,r,F,y,D,C){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
