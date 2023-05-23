import{_ as a,o as s,c as n,e}from"./app-25b9ecd5.js";const i="/assets/image-20220927172231921-1b3130f3.png",l="/assets/image-20220927172308814-9c6667a0.png",t="/assets/image-20220927172516835-da5e9623.png",c="/assets/image-20220927173724710-466b1d2a.png",o="/assets/image-20220927212332244-5d9cc37e.png",r="/assets/image-20220927212513903-39991324.png",p={},d=e('<h1 id="kibana-安装-使用" tabindex="-1"><a class="header-anchor" href="#kibana-安装-使用" aria-hidden="true">#</a> Kibana 安装&amp;使用</h1><p>本章是根据尚硅谷教学视频编写 [https://www.bilibili.com/video/BV1hh411D7sb/?spm_id_from=333.337.search-card.all.click&amp;vd_source=c2c3977953334eb68fd28f89418ceaa6](</p><p>Elasticsearch 的开源分析可视化工具，与存储在 Elasticsearch 中的数据进行交互</p><img src="'+i+'" alt="image-20220927172231921" style="zoom:50%;"><h2 id="下载软件" tabindex="-1"><a class="header-anchor" href="#下载软件" aria-hidden="true">#</a> 下载软件</h2><p>Elasticsearch 下载的版本是 8.1.0，这里我们选择同样的 8.1.0 版本</p><p>下载地址：https://www.elastic.co/cn/downloads/past-releases#kibana</p><img src="'+l+`" alt="image-20220927172308814" style="zoom:50%;"><h2 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件" aria-hidden="true">#</a> 安装软件</h2><p>本课程着重讲解新版 ES 软件的特性及应用，所以对应的 Kibana 也采用 linux 集群配置。</p><ol><li><p>将压缩包 kibana-8.1.0-linux-x86_64.tar.gz 上传到虚拟机中</p><p>解压缩文件到自定义路径，笔者解压路径为：/opt/module，解压后，软件路径为：/opt/module/kibana-8.1.0</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换目录</span>
<span class="token builtin class-name">cd</span> software
<span class="token comment"># 解压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> kibana-8.1.0-linux-x86_64.tar.gz <span class="token parameter variable">-C</span> /opt/module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压后的 kibana 的目录结构如下：</p><img src="`+t+`" alt="image-20220927172516835" style="zoom:50%;"></li><li><p>给 Kibana 生成证书文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 ES 服务器中生成证书，输入回车即可</span>
<span class="token builtin class-name">cd</span> /opt/module/elasticsearch-8.1.0
bin/elasticsearch-certutil csr <span class="token parameter variable">-name</span> kibana <span class="token parameter variable">-dns</span> linux1
<span class="token comment"># 解压文件</span>
<span class="token function">unzip</span> csr-bundle.zip
<span class="token comment"># 将解压后的文件移动到 kibana 的 config 目录中</span>
<span class="token function">mv</span> kibana.csr kibana.key /opt/module/kibana-8.1.0/config/
<span class="token comment"># 生成 crt 文件</span>
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-in</span> kibana.csr <span class="token parameter variable">-signkey</span> kibana.key <span class="token parameter variable">-out</span> kibana.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改配置文件：kibana.yml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 服务端口</span>
server.port: <span class="token number">5601</span>
<span class="token comment"># 服务主机名</span>
server.host: <span class="token string">&quot;linux1&quot;</span>
<span class="token comment"># 国际化 - 中文</span>
i18n.locale: <span class="token string">&quot;zh-CN&quot;</span>
<span class="token comment"># ES 服务主机地址</span>
elasticsearch.hosts: <span class="token punctuation">[</span><span class="token string">&quot;https://linux1:9200&quot;</span><span class="token punctuation">]</span>
<span class="token comment"># 访问 ES 服务的账号密码</span>
elasticsearch.username: <span class="token string">&quot;kibana&quot;</span>
elasticsearch.password: <span class="token string">&quot;fnqIYLQGv81iyW5nWeZ-&quot;</span>
elasticsearch.ssl.verificationMode: none
elasticsearch.ssl.certificateAuthorities:
<span class="token punctuation">[</span> <span class="token string">&quot;/opt/module/elasticsearch-8.1.0/config/certs/elasticsearch-ca.pem&quot;</span> <span class="token punctuation">]</span>
server.ssl.enabled: <span class="token boolean">true</span>
server.ssl.certificate: /opt/module/kibana-8.1.0/config/kibana.crt
server.ssl.key: /opt/module/kibana-8.1.0/config/kibana.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改软件目录拥有者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换目录</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> es:es /opt/module/kibana-8.1.0/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>切换用户，启动软件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换用户</span>
<span class="token function">su</span> es
<span class="token comment"># 启动软件</span>
bin/kibana
<span class="token comment"># 也可以后台启动</span>
<span class="token function">nohup</span> /opt/module/kibana-8.1.0/bin/kibana <span class="token operator">&gt;</span>kibana.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+c+'" alt="image-20220927173724710" style="zoom:50%;"></li><li><p>打开浏览器，输入访问地址：<u>https://linux1:5601</u></p></li></ol><img src="'+o+'" alt="image-20220927212332244" style="zoom:50%;"><p>输入 elastic 账号和密码即可访问</p><img src="'+r+'" alt="image-20220927212513903" style="zoom:50%;">',14),m=[d];function u(v,b){return s(),n("div",null,m)}const h=a(p,[["render",u],["__file","kibana安装与使用.html.vue"]]);export{h as default};
