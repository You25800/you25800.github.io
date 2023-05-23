import{_ as e,o as i,c as t,e as a}from"./app-25b9ecd5.js";const s="/assets/image-20221009083127846-7252a060.png",r="/assets/image-20221009083358371-f76e9bbe.png",o="/assets/image-20221009090154986-ad0abb20.png",l={},n=a('<h1 id="es检索原理分析" tabindex="-1"><a class="header-anchor" href="#es检索原理分析" aria-hidden="true">#</a> ES检索原理分析</h1><h2 id="索引的原理" tabindex="-1"><a class="header-anchor" href="#索引的原理" aria-hidden="true">#</a> 索引的原理</h2><p>索引是加速数据查询的重要手段，其核心原理是通过不断的缩小想要获取数据的范围来筛选出最终想要的结果，同时把随机的事件变成顺序的事件。</p><h2 id="磁盘io与预读" tabindex="-1"><a class="header-anchor" href="#磁盘io与预读" aria-hidden="true">#</a> 磁盘IO与预读</h2><p>磁盘IO是程序设计中非常高昂的操作，也是影响程序性能的重要因素，因此应当尽量避免过多的磁盘IO，有效的利用内存可以大大的提升程序的性能。在操作系统层面，发生一次IO时，不光把当前磁盘地址的数据，而是把相邻的数据也都读取到内存缓冲区内，局部预读性原理告诉我们，当计算机访问一个地址的数据的时候，与其相邻的数据也会很快被访问到。每一次IO读取的数据我们称之为一页（page）。具体一页有多大数据跟操作系统有关，一般为4k或8k，也就时我盟读取一页内的数据时候，实际上才发生了一次IO，这个理论对于索引的数据结构设计非常有帮助。</p><p>ES倒排索引</p><p>当数据写入ES时，数据将会通过分词被切分为不同的term，ES将term与其对应的文档列表建立一种映射关系，这种结构就是倒排索引。如下图所示：</p><img src="'+s+'" alt="image-20221009083127846" style="zoom:67%;"><p>为了进一步提升索引的效率，ES在term的基础上利用term的前缀或者后缀构建了term index，用于对term本身进行索引，ES实际的索引结构如下图所示：</p><img src="'+r+'" alt="image-20221009083358371" style="zoom:67%;"><p>这样当我们去搜索某个关键词时，ES首先根据它的前缀或者后缀迅速缩小关键词在term dictionary中的范围，大大减小了磁盘IO的次数。</p><ul><li>单词词典（term dictionary）：记录所有文档的单词，记录单词到倒排列表的关联联系</li><li>倒排列表（posting list）：记录了单词对应的文档结合，由倒排索引项组成</li><li>倒排索引项（posting）： <ul><li>文档id</li><li>词频TF-该单词在文档中出现的次数，用于相关性评分</li><li>位置（position）-单词在文档中分词的位置。用于短语搜索（match phrase query）</li><li>偏移（offset）-记录单词的开始结束位置，实现高亮显示</li></ul></li></ul><img src="'+o+'" alt="image-20221009090154986" style="zoom:50%;">',13),c=[n];function m(_,d){return i(),t("div",null,c)}const h=e(l,[["render",m],["__file","ES检索原理分析.html.vue"]]);export{h as default};
