import{_ as e,r as p,o,c as i,a as n,b as s,d as l,f as c,e as a}from"./app-25b9ecd5.js";const u="/assets/image-20221009094851910-21d2f130.png",r="/assets/image-20221009140430492-3242a68d.png",d="/assets/image-20221010092404975-f36d7aaf.png",k="/assets/image-20221010100342982-ca1a4ebf.png",v="/assets/image-20221010102537537-383add10.png",m="/assets/image-20221011144130908-9bf583c1.png",q={},b=n("h1",{id:"高级查询",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#高级查询","aria-hidden":"true"},"#"),s(" 高级查询")],-1),g=n("h2",{id:"es-高级查询-querydsl",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#es-高级查询-querydsl","aria-hidden":"true"},"#"),s(" ES 高级查询 QueryDSL")],-1),y=n("p",null,"ES 中提供了一种强大的检索数据的方式，这种检索方式称之为 Query DSL（Domain Specified Language），Query DSL 是利用 Rest API 传递 JSON 格式的请求体（RequestBody）数据与 ES 进行交互，这种方式的丰富查询语法让 ES 检索变得更强大，更简洁。",-1),h={href:"https://www.elastic.co/guide/en/elasticsearch/reference/8.4/query-dsl.html",target:"_blank",rel:"noopener noreferrer"},_=a(`<p>语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /es_db/_doc/_search <span class="token punctuation">{</span>json请求体数据<span class="token punctuation">}</span>
<span class="token comment"># 可以简化为下面写法</span>
GET /es_db/_search <span class="token punctuation">{</span>json请求体数据<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例数据" tabindex="-1"><a class="header-anchor" href="#示例数据" aria-hidden="true">#</a> 示例数据</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 指定ik分词器</span>
PUT /es_db
<span class="token punctuation">{</span> <span class="token property">&quot;settings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;analysis.analyzer.default.type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token comment">// 创建文档,指定id</span>
PUT /es_db/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东济南&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java developer&quot;</span> <span class="token punctuation">}</span>
PUT /es_db/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东省滨州市&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java&quot;</span> <span class="token punctuation">}</span>
PUT /es_db/_doc/<span class="token number">3</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东济南大明湖&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;php&quot;</span> <span class="token punctuation">}</span>
PUT /es_db/_doc/<span class="token number">4</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;赵六&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东济南千佛山公园&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;python&quot;</span> <span class="token punctuation">}</span>
PUT /es_db/_doc/<span class="token number">5</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张龙&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;济南趵突泉&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;golang&quot;</span> <span class="token punctuation">}</span>
PUT /es_db/_doc/<span class="token number">6</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;赵虎&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣盛时代国际&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;remark&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询所有-match-all" tabindex="-1"><a class="header-anchor" href="#查询所有-match-all" aria-hidden="true">#</a> 查询所有 match_all</h2><p>使用 match_all，默认只会返回 10 条数据。</p><p>原因：_search 查询默认采用的是分页查询，每页记录数 size 的默认值是 10。如果想显示更多数据，需指定 size</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search

<span class="token comment">// 等同于</span>
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回指定条数-size" tabindex="-1"><a class="header-anchor" href="#返回指定条数-size" aria-hidden="true">#</a> 返回指定条数 size</h3><p>size 关键字：指定查询结果中返回指定条数。默认返回值 10 条</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分页查询-from" tabindex="-1"><a class="header-anchor" href="#分页查询-from" aria-hidden="true">#</a> 分页查询 from</h3><p>from 关键字：用来指定起始返回位置，和 size 关键字连用可实现分页效果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span><span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思考：size 可以无限增加吗？</p><p>测试</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">20000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果出现异常：</p><img src="`+u+`" alt="image-20221009094851910" style="zoom:50%;"><p>异常原因：</p><ol><li>查询结果的窗口太大，from+size 的结果必须小于或等于 10000，而当查询结果的窗口为 20000。</li><li>可以采用 scroll api 更高效的请求大量数据集。</li><li>查询结果的窗口的限制可以通过参数 index.max_result_window 进行设置。</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 修改指定索引</span>
PUT /es_db/_settings
<span class="token punctuation">{</span> <span class="token property">&quot;index.max_result_window&quot;</span><span class="token operator">:</span><span class="token string">&quot;20000&quot;</span><span class="token punctuation">}</span>

<span class="token comment">// 修改现有所有的索引，但是新增的索引，还是默认的10000</span>
PUT /_all/_settings
<span class="token punctuation">{</span> <span class="token property">&quot;index.max_result_window&quot;</span><span class="token operator">:</span><span class="token string">&quot;20000&quot;</span><span class="token punctuation">}</span>

<span class="token comment">// 查看所有索引中的index.max_result_window值</span>
GET /es_db/_settings/index.max_result_window
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>参数 index.max_result_window 主要用来显示单次查询满足查询条件的结果窗口的大小，窗口大小由 from+size 共同决定。不能简单理解成查询返回给调用方的数据量。这样做主要是为了限制内存的消耗。</p><p>比如：from 为 1000000，size 为 10，逻辑意义是从满足条件的数据中取 1000000 到（1000000+10）的记录。这时 ES 一定要先将（1000000+10）的记录（即 result_window）加载到内存中，再进行分页取值的操作。尽管最后我们只取到了 10 条数据返回给客户端，单 ES 进程执行查询的过程中需要将（1000000+10）的记录都加载到内存中，可想而知对内存消耗有多大。这也是 ES 中不推荐采用（from+size）方式进行深度分页的原因。</p><p>同理，from 为 0，size 为 1000000 时，ES 进程执行查询操作的过程中的确需要将 1000000 记录都加载到内存中再返回给调用方，也会对 ES 内存造成很大的压力。</p></div><h3 id="分页查询-scroll" tabindex="-1"><a class="header-anchor" href="#分页查询-scroll" aria-hidden="true">#</a> 分页查询 Scroll</h3><p>改动 index.max_result_window 参数值的大小，只能解决一时的问题，当索引的数据量持续增长时，在查询全量数据时还是会出现问题。而且会增加 ES 服务器的内存消耗完的风险。最佳实践还是根据异常提示中的采用 scroll api 更高效的请求大量数据集。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 查询命令中新增scroll=1m，说明采用游标查询，保持游标查询窗口一分钟。</span>
<span class="token comment">// 这里由于测试数据量不够，所以size值设置为2.</span>
<span class="token comment">// 实际使用中为了减少游标查询的次数，可以将值适当增大，比如设置为1000。</span>
GET /es_db/_search?scroll=1m
<span class="token punctuation">{</span>
	<span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果：</p><p>除了返回前 2 条，还返回了一个游标 ID 值_scroll_id。</p><img src="`+r+`" alt="image-20221009140430492" style="zoom:50%;"><p>采用游标 id 查询：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// scroll_id 的值就是上一个请求中返回的 _scroll_id 的值</span>
GET /_search/scroll
<span class="token punctuation">{</span>
  <span class="token property">&quot;scroll&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1m&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scroll_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;FGluY2x1ZGVfY29udGV4dF91dWlkDXF1ZXJ5QW5kRmV0Y2gBFmNwcVdjblRxUzVhZXlicG9HeU02bWcAAAAAAABmzRY2YlV3Z0o5VVNTdWJobkE5Z3MtXzJB&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多次根据 scroll_id 游标查询，直到没有数据返回则结束查询。采用游标查询索引全量数据更安全高效，限制了单次对内存的消耗。</p><h3 id="指定字段排序-sort" tabindex="-1"><a class="header-anchor" href="#指定字段排序-sort" aria-hidden="true">#</a> 指定字段排序 sort</h3><p>注意：会让得分排序失效</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 排序 分页</span>
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">10</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回指定字段-source" tabindex="-1"><a class="header-anchor" href="#返回指定字段-source" aria-hidden="true">#</a> 返回指定字段_source</h3><p>_source 关键字：是一个数组中用来指定展示那些字段</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;march_all&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> match</h2><p>match 在匹配时会对所查找的关键词进行分，然后按分词匹配查找</p><p>match 支持以下参数：</p><ul><li>query：指定匹配的值</li><li>operator: 匹配条件类型 <ul><li>and：条件分词后都要匹配</li><li>or：条件分词后有一个匹配即可</li></ul></li><li>minmum_should_match：最低匹配度，即条件在倒排索引中最低的匹配度</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 模糊匹配 match 分词后or的效果</span>
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;山东济南&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 分词后 and的效果</span>
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;山东济南&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span><span class="token string">&quot;AND&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 match 中的应用：当 operator 参数主；设置为 or 时，minmum_should_match 参数用来控制匹配的分词的最少数量。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 最少匹配山东，济南两个词</span>
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;山东济南&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;minmum_should_match&quot;</span><span class="token operator">:</span><span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="短语查询-match-phrase" tabindex="-1"><a class="header-anchor" href="#短语查询-match-phrase" aria-hidden="true">#</a> 短语查询 match_phrase</h2><p>match_phrase 查询分析文本并根据分析的文本创建一个短语查询。match_phrase 会将检索关键词分词。match_phrase 的分词结果必须在被检索字段的分词中都包含，而且顺序必须相同，而且默认必须都是连续的。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span> <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东济南千佛山&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
GET /es_db/_search
<span class="token punctuation">{</span> <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东济南千&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>查询山东济南千佛山有数据。</p><p>查询山东济南千没有数据。</p></div><img src="`+d+`" alt="image-20221010092404975" style="zoom:25%;"><p>分析原因：</p><p>先查看山东济南千佛山公园分词结果，可以知道山东济南和千不是相邻的词条，中间会隔一个千佛山，而 match_phrase 匹配的是相邻的词条，所以查询山东济南千没有结果。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST _analyze
<span class="token punctuation">{</span> <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;山东济南千佛山&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+k+`" alt="image-20221010100342982" style="zoom:25%;"><p>如何解决词条间隔的问题？可以借助 slop 参数告诉 match_phrase 查询词条能够相隔多远时仍然将文档视为匹配。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 山东济南佛山分词后相隔为2，可以匹配到结果</span>
GET /es_db/_search
<span class="token punctuation">{</span> <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;山东济南佛山&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;slop&quot;</span><span class="token operator">:</span><span class="token number">2</span>
    <span class="token punctuation">}</span>
  	<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+v+`" alt="image-20221010102537537" style="zoom:25%;"><h2 id="多字段查询-multi-match" tabindex="-1"><a class="header-anchor" href="#多字段查询-multi-match" aria-hidden="true">#</a> 多字段查询 multi_match</h2><p>可以根据字段类型，决定是否使用分词查询，得分最高的在前面</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;千佛山张三&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;name&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>字段类型分词，将查询条件分词之后进行查询，如果该字段不分词就会将查询条件作为整体进行查询</p></div><h2 id="query-string" tabindex="-1"><a class="header-anchor" href="#query-string" aria-hidden="true">#</a> query_string</h2><p>允许我们在单个查询字符串中指定 AND | OR | NOT 条件，同时也和 multi_match query 一样，支持多字段搜索。和 match 类似，但是 match 需要指定字段名，query_string 是在所有字段中搜索，范围更广泛。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>查询字段分词就将查询条件分词查询，查询字段不分词将查询条件不分词查询</p></div><ul><li><p>未指定字段查询</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;query_string&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三 OR 千佛山&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>指定单个字段查询</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;query_string&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;default_field&quot;</span><span class="token operator">:</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;张三 OR 千佛山&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>指定多个字段查询</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;query_string&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三 OR 千佛山&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="simple-query-string" tabindex="-1"><a class="header-anchor" href="#simple-query-string" aria-hidden="true">#</a> simple_query_string</h3><p>类似 query_string，但是会忽略错误的语法，同时只支持部分查询语法，不支持 AND OR NOT, 会当作字符串处理。支持部分逻辑：</p><ul><li><code>+</code>替代 AND</li><li><code>|</code>替代 OR</li><li><code>-</code>替代 NOT</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// simple_query_string 默认的operator是OR</span>
GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;simple_query_string&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;address&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token string">&quot;张三千佛山&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;default_operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AND&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;simple_query_string&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;address&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三+千佛山&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键词查询-term" tabindex="-1"><a class="header-anchor" href="#关键词查询-term" aria-hidden="true">#</a> 关键词查询 Term</h2><p>Term 用来使用关键词查询（精确匹配），还可以用来查询没有被进行分词的数据类型。Term 是表达语意的最小单位，搜索和利用统计语言模型进行自然语言处理都需要处理 Term。match 在匹配时会对所查找的关键词进行分词，然后按分词匹配查找，而 term 会直接对关键词进行查找。一般模糊查找的时候，多用 match，而精确查找时可以使用 term。</p><ul><li>ES 中默认使用分词器为标准分词器（StandardAnalyzer），标准分词器对于英文单词分词，对于中文单字分词。</li><li>在 ES 的 Mapping Type 中 Keyword, date, integer, long, double, boolean or ip 这些类型不分词，只有 text 类型分词。</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 关键词查询 term</span>
<span class="token comment">// 思考：查询山东济南是否有数据，为什么？</span>
GET /es_db/_search
<span class="token punctuation">{</span> <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东济南&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token comment">// 采用term精确查询，查询字段映射类型为 keyword</span>
GET /es_db/_search
<span class="token punctuation">{</span> <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;address.keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东济南&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 ES 中，Term 查询，对输入不做分词。会将输入作为一个整体，在倒排索引中查找准确的词项，并且使用相关度算分公式为母个包含该词项的文档进行相关度算分。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /product/_bulk
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;productId&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span><span class="token string">&quot;iPhone&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;productId&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span><span class="token string">&quot;iPad&quot;</span><span class="token punctuation">}</span>

<span class="token comment">// 思考：查询iPhone可以查到数据吗?</span>
GET /product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;productName&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;iPhone&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

GET /product/_analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span><span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;iPhone&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过 Constant Score 将查询转换成一个 Filtering，避免算分，并利用缓存，提高性能。</p><ul><li>将 Query 转成 Filter,忽略 TF-IDF 计算，避免相关性算分的开销</li><li>Filter 可以有效利用缓存</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;constant_score&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;address.keyword&quot;</span><span class="token operator">:</span><span class="token string">&quot;山东济南&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>term 应用场景：对 bool,日期，数字，结构化的文本可以利用 term 做精确匹配</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">28</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>term 处理多值字段，term 查询是包含，不是等于</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /employee/_bulk
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;interest&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;跑步&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;篮球&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;小红&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;interest&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;跳舞&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;画画&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;小丽&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;interest&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;跳舞&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;唱歌&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;跑步&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>

POST /employee/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;interest.keyword&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;跑步&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prefix-前缀搜索" tabindex="-1"><a class="header-anchor" href="#prefix-前缀搜索" aria-hidden="true">#</a> prefix 前缀搜索</h2><p>它会对分词后的 term 进行前缀搜索。</p><ul><li>它不会分析要搜索字符串，传入的前缀就是想要查找的前缀</li><li>默认状态下，前缀查询不做相关度分数计算，它只是将所有匹配的文档返回，然后赋予所有相关分数值为 1 。它的行为更像是一个过滤器而不是查询。两者实际的区别就是过滤器是可以被缓存的，而前缀查询不行。</li></ul><p>prefix 的原理：需要遍历所有倒排索引，并比较每个 term 是否已所指定的前缀开头。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;山东济南&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通配符查询-wildcard" tabindex="-1"><a class="header-anchor" href="#通配符查询-wildcard" aria-hidden="true">#</a> 通配符查询 wildcard</h2><p>通配符查询：工作原理和 prefix 相同，只不过它不是只比较开头，它能支持更为复杂的匹配模式。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;wildcard&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;*济*&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="范围查询-range" tabindex="-1"><a class="header-anchor" href="#范围查询-range" aria-hidden="true">#</a> 范围查询 range</h2><ul><li>range：范围关键字</li><li>gte：大于等于</li><li>lte：小于等于</li><li>gt：大于</li><li>lt：小于</li><li>now：当前时间</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;range&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span><span class="token number">25</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span><span class="token number">30</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

POST /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;range&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span><span class="token number">30</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;address&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期-range" tabindex="-1"><a class="header-anchor" href="#日期-range" aria-hidden="true">#</a> 日期 range</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>DELETE /product
POST /product/_bulk
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token property">&quot;date&quot;</span><span class="token operator">:</span><span class="token string">&quot;2021-01-01&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;productId&quot;</span><span class="token operator">:</span><span class="token string">&quot;XHDK-1293&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token property">&quot;date&quot;</span><span class="token operator">:</span><span class="token string">&quot;2022-01-01&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;productId&quot;</span><span class="token operator">:</span><span class="token string">&quot;KDKE-5421&quot;</span><span class="token punctuation">}</span>


GET /product/_mapping <span class="token comment">// 查看字段属性</span>

GET /product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;range&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;date&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span><span class="token string">&quot;now-2y&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// now-2y 为两年前</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多-id-查询-ids" tabindex="-1"><a class="header-anchor" href="#多-id-查询-ids" aria-hidden="true">#</a> 多 id 查询 ids</h2><p>ids 关键字：值为数组类型，用来根据一组 id 获取多个对应的文档</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;ids&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模糊查询-fuzzy" tabindex="-1"><a class="header-anchor" href="#模糊查询-fuzzy" aria-hidden="true">#</a> 模糊查询 fuzzy</h2><p>在实际的搜索中，我们有时候会打错字，从而导致搜索不到。在 Elasticsearch 中，我们可以使用 fuzziness 属性来进行模糊查询，从而达到搜索有错别字的情形。</p><p>fuzzy 查询会用到两个很重要的参数——fuzziness, prefix_length</p><ul><li>fuzziness：表示输入的关键字通过几次操作可以转变成为 ES 库里面的对应 field 的字段 <ul><li>操作是指：新增一个字符，删除一个字符，修改一个字符，每次操作可以记做编辑距离为 1</li><li>如中文集团中威集团编辑距离就是 1，只需要修改一个字符。</li><li>该参数默认值为 0，即不开启模糊查询。</li><li>如果 fuzziness 值在这里设置成 2，会把编辑距离为 2 的东东集团也查出来</li></ul></li><li>prefix_length：表示限制输入关键字和 ES 对应查询 field 的内容开头的第 n 个字符必须完全匹配，不允许错别字匹配 <ul><li>如这里等于 1，则表示开头的字必须匹配，不匹配则不返回</li><li>默认值也是 0</li><li>加大 prefix_length 的值可以提高效率和准确率。</li></ul></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /es_db/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;fuzzy&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;千弗山&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fuzziness&quot;</span><span class="token operator">:</span><span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>fuzzy 模糊查询 最大模糊错误 必须在 0-2 之间</p><ul><li>搜索关键词长度为 2，不允许存在模糊</li><li>搜索关键词长度为 3-5，允许 1 次模糊</li><li>搜索关键词长度大于 5，允许最大 2 次模糊</li></ul></div><h2 id="高亮-highlight" tabindex="-1"><a class="header-anchor" href="#高亮-highlight" aria-hidden="true">#</a> 高亮 highlight</h2><p>highlight 关键字：可以让符合条件的文档中的关键词高亮。</p><p>highlight 相关属性：</p><ul><li>pre_tags 前缀标签</li><li>post_tags 后缀标签</li><li>tags_schema 设置为 styled 可以使用内置高亮样式</li><li>require_field_match 多字段高亮需要设置为 false</li></ul><p>示例数据</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">//指定ik分词器</span>
PUT /products
<span class="token punctuation">{</span>
  <span class="token property">&quot;settings&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;analysis.analyzer.default.type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

PUT /products/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;proId&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;牛仔男外套&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;牛仔外套男装春季衣服男春装夹克修身休闲男生潮牌工装潮流头号青年春秋棒球服男 7705浅 蓝常规 XL&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamp&quot;</span> <span class="token operator">:</span> <span class="token number">1576313264451</span><span class="token punctuation">,</span>
  <span class="token property">&quot;createTime&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2019-12-13 12:56:56&quot;</span>
<span class="token punctuation">}</span>

PUT /products/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;proId&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;HLA海澜之家牛仔裤男&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;HLA海澜之家牛仔裤男2019时尚有型舒适HKNAD3E109A 牛仔蓝(A9)175/82A(32)&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timestamp&quot;</span> <span class="token operator">:</span> <span class="token number">1576314265571</span><span class="token punctuation">,</span>
  <span class="token property">&quot;createTime&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2019-12-18 15:56:56&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /products/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;牛仔&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;*&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义高亮-html-标签" tabindex="-1"><a class="header-anchor" href="#自定义高亮-html-标签" aria-hidden="true">#</a> 自定义高亮 html 标签</h3><p>可以在 highlight 中使用 pre_tags 和 post_tags</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /products/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;牛仔&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;post_tags&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;&lt;/span&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pre_tags&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;&lt;span style=&#39;color:red&#39;&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;*&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多字段高亮" tabindex="-1"><a class="header-anchor" href="#多字段高亮" aria-hidden="true">#</a> 多字段高亮</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /products/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;trem&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;牛仔&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;pre_tags&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;&lt;font color=&#39;red&#39;&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;post_tags&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;&lt;/font&gt;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;require_field_match&quot;</span><span class="token operator">:</span><span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,117),x=a(`<h2 id="文档映射-mapping" tabindex="-1"><a class="header-anchor" href="#文档映射-mapping" aria-hidden="true">#</a> 文档映射 Mapping</h2><p>Mapping 类似数据库中的 schema 的定义，作用如下：</p><ul><li>定义索引中的字段的名称</li><li>定义字段的数据类型，例如字符串，数字，布尔等</li><li>字段，倒排索引的相关配置</li></ul><p>ES 中 Mapping 映射可以分为动态映射和静态映射。</p><h4 id="动态映射" tabindex="-1"><a class="header-anchor" href="#动态映射" aria-hidden="true">#</a> 动态映射：</h4><p>在关系数据库中，需要事先创建数据库，然后该数据库下创建数据表，并创建表字段、类型、长度、主键等，最后才能基于表插如数据。而 Elasticsearch 中不需要定义 Mapping 映射，在文档写入 Elasticsearch 时，会根据文档字段自动识别类型，这种机制称之为动态映射。</p><h4 id="静态映射" tabindex="-1"><a class="header-anchor" href="#静态映射" aria-hidden="true">#</a> 静态映射</h4><p>静态映射是在 Elasticsearch 中也可以事先定好映射，包含文档的各字段类型、分词器等，这种方式称之为静态眏射。</p><p>动态映射的机制，使得我们无需手动定义 Mapping, Elasticsearch 会自动根据文档信息，推算出字段的类型。但是有时候会推算不对，例如地理位置信息。当类型如果设置不对时，会导到一些功能无法正常使用，例如 Range 查询。</p><p>Dynamic Mapping 类型自动识别：</p><table><thead><tr><th>JSON 类型</th><th>Elasticsearch 类型</th></tr></thead><tbody><tr><td>字符串</td><td>匹配日期类型，设置成 Date<br>配置数字设置为 float 或 long，该选项默认关闭<br>设置为 Text，并且增加 keyword 字段</td></tr><tr><td>布尔值</td><td>boolean</td></tr><tr><td>浮点型</td><td>float</td></tr><tr><td>整数型</td><td>long</td></tr><tr><td>对象</td><td>Object</td></tr><tr><td>数组</td><td>由第一个非空数值的类型所决定</td></tr><tr><td>空值</td><td>忽略</td></tr></tbody></table><p>示例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 删除原索引</span>
DELETE /user
<span class="token comment">// 创建文档(ES根据数据类型, 会自动创建映射)</span>
PUT /user/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;fox&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">32</span><span class="token punctuation">,</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;长沙麓谷&quot;</span> <span class="token punctuation">}</span>
<span class="token comment">// 获取文档映射</span>
GET /user/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">思考</p><p>能否后期更改 Mapping 的字段类型？</p></div><p>两种情况：</p><ul><li>新增加字段 <ul><li>dynamic 设为 true 时，一旦有新增字段的文档写入，Mapping 也同时被更新</li><li>dynamic 设为 false 时，Mapping 不会被更新，新增字段的数据无法被索引，但是信息会出现在_source 中</li><li>dynamic 设置成 strict（严格控制策略），文档写入失败，抛出异常</li></ul></li></ul><table><thead><tr><th></th><th>true</th><th>false</th><th>strict</th></tr></thead><tbody><tr><td>文档可索引</td><td>yes</td><td>yes</td><td>no</td></tr><tr><td>字段可索引</td><td>yes</td><td>no</td><td>no</td></tr><tr><td>Mapping 被更新</td><td>yes</td><td>no</td><td>no</td></tr></tbody></table><ul><li>对已有字段，一旦已经有数据写入，就不再支持修改字段定义 <ul><li>Lucene 实现的倒排索引，一旦生成后，就不允许修改</li><li>如果希望改变类型，必须 Reindex API，重建索引</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">原因</p><ul><li>如果修改了字段的数据类型，会导致已被索引的数据无法被搜索</li><li>但是如果是增加新的字段，就不会有这样的影响</li></ul></div><p>测式</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT /user
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;dynamic&quot;</span><span class="token operator">:</span><span class="token string">&quot;strict&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dynamic&quot;</span><span class="token operator">:</span><span class="token string">&quot;true&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 插入文档报错，原因为age为新增字段,会抛出异常</span>
PUT /user/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">32</span><span class="token punctuation">,</span> <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token property">&quot;province&quot;</span><span class="token operator">:</span><span class="token string">&quot;山东&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;city&quot;</span><span class="token operator">:</span><span class="token string">&quot;济南&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">原因</p><p>dynamic 设置成 strict，新增 age 字段导致文档插入失败</p></div><p>修改 dynamic 后再次插入文档成功</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 修改daynamic</span>
PUT /user/_mapping
<span class="token punctuation">{</span>
  <span class="token property">&quot;dynamic&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对已存在的-mapping-映射进行修改" tabindex="-1"><a class="header-anchor" href="#对已存在的-mapping-映射进行修改" aria-hidden="true">#</a> 对已存在的 mapping 映射进行修改</h4><p>具体方法：</p><ol><li>如果要推倒现有的映射，你得重新建立一个静态索引</li><li>然后把之前索引里的数据导入到新的索引里</li><li>删除原创建的索引</li><li>为新索引起个别名</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>POST _reindex
<span class="token punctuation">{</span>
  <span class="token property">&quot;source&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span>user
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dest&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

DELETE /user

PUT /user1/_alias/user

GET /user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>通过这几个步骤就实现了索引的平滑过度，并且是零停机</p></div><h3 id="常用-mapping-参数配置" tabindex="-1"><a class="header-anchor" href="#常用-mapping-参数配置" aria-hidden="true">#</a> 常用 Mapping 参数配置</h3><ul><li><p>index：控制当前字段是否被索引，默认为 true。如果设置为 false，该字段不可被搜索</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>DELETE /user
PUT /user
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;long&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

PUT /user/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;山东济南&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">20</span>
<span class="token punctuation">}</span>

GET /user/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;山东&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+m+`" alt="image-20221011144130908" style="zoom:33%;"></li><li><p>有四种不同的基本 index_options 配置，控制倒排索引记录的内容</p><ul><li>docs：记录 doc id</li><li>freqs：记录 doc id 和 term frequencies(词频)</li><li>positions：记录 doc id / term frequencies / term position</li><li>offsets：记录 doc id / term frequencies / term position / character offects</li></ul></li></ul><p>text 类型默认记录 positions，其他默认为 docs。记录内容越多，占用存储空间越大</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>DELETE /user
PUT /user
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index_options&quot;</span><span class="token operator">:</span><span class="token string">&quot;offsets&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;long&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>null_value：需要对 Null 值进行搜索，只有 keyword 类型支持设置 null_value</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>DELETE /user
PUT /user
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;null_value&quot;</span><span class="token operator">:</span><span class="token string">&quot;NULL&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;long&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

PUT /user/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">30</span>
<span class="token punctuation">}</span>

GET /user/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;NULL&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>copy_to 设置：将字段的数值拷贝到目标字段，满足一些特定的搜索。copy_to 的目标字段不出现在_source 中。</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 设置copy_to</span>
PUT /address
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;province&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;copy_to&quot;</span><span class="token operator">:</span><span class="token string">&quot;full_address&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;city&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;copy_to&quot;</span><span class="token operator">:</span><span class="token string">&quot;full_address&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
PUT /address/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span> <span class="token property">&quot;province&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;济南&quot;</span> <span class="token punctuation">}</span>
PUT /address/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span> <span class="token property">&quot;province&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;滨州&quot;</span> <span class="token punctuation">}</span>

GET /address/_search
<span class="token punctuation">{</span> <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;full_address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;山东济南&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;and&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function j(f,T){const t=p("ExternalLinkIcon");return o(),i("div",null,[b,g,y,n("p",null,[n("a",h,[s("https://www.elastic.co/guide/en/elasticsearch/reference/8.4/query-dsl.html"),l(t)])]),_,c(`   ## 相关性和相关性算分

搜索是用户和搜索引擎的对话，用户关心的是搜索结果的相关性

- 是否可以找到所有相关的内容
- 有多少不相关的内容被返回了
- 文档的打分是否合理
- 结合业务需求，平衡结果排名

如何衡量相关性：

- precision（查准率）—— 尽可能返回较少的无关文档
- recall（查全率）—— 尽量返回较多的相关文档
- ranking —— 是否能按照相关度进行排序

### 相关性(Relevance)

搜索的相关性算分，描述了一个文档和查询语句匹配的程度。ES会对每个匹配查询条件的结果进行算分_score。

打分的本质是排序，需要把最符合用户需求的文档排在前面。ES 5之前，默认的相关性算分采用TF-IDF，现在采用BM 25 。

| 关键词   | 文档ID      |
| -------- | ----------- |
| JAVA     | 1,2,3       |
| 设计模式 | 1,2,3,4,5,6 |
| 多线程   | 2,3,7,9     |

### 什么是TF-IDF

TF-IDF(term frequency-inverse documeng frequency)是一种用于信息检索与数据挖掘的常用加权技术

- TF-IDF被公认为是信息检索领域最重要的发明，除了在信息检索，在文献分类和其他相关领域有着非常广泛的应用。
- IDF的概念，最早是剑桥大学的“斯巴克·琼斯”提出
  - 1972年——“关键词特殊性的统计解释和它在文献检索中的应用”，但是没有从理论上解释IDF应该是用log(全部文档数/检索词出现过的文档总数)，而不是其他函数，也没有做进一步的研究
  - 1970，1980年代萨尔顿和罗宾逊，进行了进一步的证明和研究，并用香农信息论做了证明[http://www.staff.city.ac.uk/~sb317/papers/foundations_bm25_review.pdf](http://www.staff.city.ac.uk/~sb317/papers/foundations_bm25_review.pdf)
- 现代搜索引擎，对TF-IDF进行了大量细微的优化`),x])}const w=e(q,[["render",j],["__file","ES高级查询.html.vue"]]);export{w as default};
