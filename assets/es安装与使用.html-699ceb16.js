import{_ as d,r as l,o,c as r,a as s,b as e,d as n,w as t,e as a}from"./app-1d655497.js";const p="/assets/download-93d22966.png",m="/elasticsearch/1.png",u="/assets/3-ba553835.png",v="/assets/2-87389eaa.png",b="/assets/4-46241815.png",h="/assets/image-20220927153941132-db2a4815.png",g="/assets/image-20220927154149016-12ca04e6.png",_="/assets/image-20220927154230580-21393ce6.png",k="/assets/image-20220927154313380-dca2bb9b.png",f="/assets/image-20220927154437177-6d306378.png",x="/assets/image-20220927154528494-896dd9fc.png",y="/assets/image-20220927154618352-4ea44c7e.png",E="/assets/image-20220927162802262-d96f57c8.png",z="/assets/image-20220927163303119-408e07a0.png",w="/assets/image-20220927163357772-3cb7ab4f.png",J="/assets/image-20220927163743685-a70b9409.png",S="/assets/image-20220927163905182-943e0e5b.png",D="/assets/image-20220927163951266-3cee2eef.png",V="/assets/image-20220927164758235-02c0c135.png",K="/assets/image-20220927165222266-286384e2.png",L={},T=s("h1",{id:"elasticsearch-安装-使用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#elasticsearch-安装-使用","aria-hidden":"true"},"#"),e(),s("strong",null,"Elasticsearch"),e(),s("strong",null,"安装"),e(),s("strong",null,"&"),e(),s("strong",null,"使用")],-1),B={href:"https://www.bilibili.com/video/BV1hh411D7sb/?spm_id_from=333.337.search-card.all.click&vd_source=c2c3977953334eb68fd28f89418ceaa6",target:"_blank",rel:"noopener noreferrer"},X=a('<h2 id="下载软件" tabindex="-1"><a class="header-anchor" href="#下载软件" aria-hidden="true">#</a> <strong>下载软件</strong></h2><p>Elasticsearch 的官方地址：https://www.elastic.co/cn/</p><p>Elasticsearch 最新的版本是 8.2.3（截止 2022.06.15），我们选择略早的 8.1.0 版本</p><p>下载地址：https://www.elastic.co/cn/downloads/past-releases#elasticsearch</p><img src="'+p+`" alt="image-20220927135705960" style="zoom:33%;"><p>可以根据情况自行选择不同操作系统的版本。</p><h2 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件" aria-hidden="true">#</a> 安装软件</h2><p>针对新版ES软件的特性与应用，所以采用Linux集群配置</p><ol><li><p>集群规划</p><p>为了演示软件的使用，我们这里准备三台 linux 虚拟机，用于配置 Elasticsearch 集群。</p><p>启动集群后，每台虚拟机的进程如下：</p><table><thead><tr><th>主机名</th><th>linux1</th><th>linux2</th><th>linux3</th></tr></thead><tbody><tr><td>进程名</td><td>Elasticsearch(es-node-1)</td><td>Elasticsearch(es-node-2)</td><td>Elasticsearch(es-node-3)</td></tr></tbody></table><p>Linux 系统环境配置请参考之前课程内容。这里我们给三台虚拟机搭建 ES 集群，集群</p><p>中-节点名称依次为 es-node-1，es-node-2，es-node-3</p></li><li><p>将压缩包 elasticsearch-8.1.0-linux-x86_64.tar.gz 上传到虚拟机中</p><p>解压缩文件到自定义路径，笔者解压路径为：/opt/module,解压后，软件路径为：</p><p>/opt/module/elasticsearch-8.1.0</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换目录</span>
<span class="token builtin class-name">cd</span> software
<span class="token comment"># 解压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> elasticsearch-8.1.0-linux-x86_64.tar.gz <span class="token parameter variable">-C</span> /opt/module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压后的 Elasticsearch 的目录结构如下</p><img src="`+m+`" alt="image-20220927135705960" style="zoom:100%;"><table><thead><tr><th>目录</th><th>含义</th></tr></thead><tbody><tr><td>bin</td><td>可执行脚本目录</td></tr><tr><td>config</td><td>配置目录</td></tr><tr><td>jdk</td><td>内置JDK目录</td></tr><tr><td>lib</td><td>类库</td></tr><tr><td>logs</td><td>日志目录</td></tr><tr><td>modules</td><td>模块目录</td></tr><tr><td>plugins</td><td>插件目录</td></tr></tbody></table></li><li><p>当前安装 ES 版本为 8.1.0，自带 JDK，所以当前 Linux 虚拟机节点无需配置 Java 环境</p></li><li><p>创建linux新用户es，数据文件，证书目录，并修改Elasticsearch文件拥有者</p><p><code>由于es不允许root用户操作，所以需要创建新用户</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新增es用户</span>
<span class="token function">useradd</span> es
<span class="token comment"># 为es用户设置密码</span>
<span class="token function">passwd</span> es

<span class="token comment"># 创建数据文件目录</span>
<span class="token function">mkdir</span> /opt/module/elasticsearch-8.1.0/data
<span class="token comment"># 创建证书目录</span>
<span class="token function">mkdir</span> /opt/module/elasticsearch-8.1.0/config/certs
<span class="token comment"># 切换目录</span>
<span class="token builtin class-name">cd</span> /opt/module/elasticsearch-8.1.0

<span class="token comment"># 修改文件拥有者</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> es:es /opt/module/elasticsearch-8.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在第一台服务器节点es-node-1设置集群多节点通信密钥</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换用户</span>
<span class="token function">su</span> es

<span class="token comment"># 签发 ca 证书，过程中需按两次回车键</span>
bin/elasticsearch-certutil ca
<span class="token comment"># 用 ca 证书签发节点证书，过程中需按三次回车键</span>
bin/elasticsearch-certutil cert <span class="token parameter variable">--ca</span> elastic-stack-ca.p12

<span class="token comment"># 将生成的证书文件移动到 config/certs 目录中</span>
<span class="token function">mv</span> elastic-stack-ca.p12 elastic-certificates.p12 config/certs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在第一台服务器节点es-node-1设置集群多节点HTTP证书</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 签发 Https 证书</span>
bin/elasticsearch-certutil http
<span class="token comment"># 以下是每次要求输入时，需要输入的内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+u+'" alt="image-20220927135705960" style="zoom:66%;"><img src="'+v+'" alt="image-20220927135705960" style="zoom:66%;"><p>指定证书路径</p><img src="'+b+'" alt="image-20220927135705960" style="zoom:66%;"><p>无需输入密码</p><img src="'+h+'" alt="image-20220927153941132" style="zoom:67%;"><p>设置证书失效时间</p><img src="'+g+'" alt="image-20220927154149016" style="zoom:67%;"><p>无需每个节点配置证书</p><img src="'+_+'" alt="image-20220927154230580" style="zoom:67%;"><p>输出连接到第一个节点的所有主机名</p><img src="'+k+'" alt="image-20220927154313380" style="zoom:67%;"><p>输出连接到第一个基点的所有主机 <strong>IP</strong> 地址</p><img src="'+f+'" alt="image-20220927154437177" style="zoom:67%;"><p>不改变证书选项配置</p><img src="'+x+'" alt="image-20220927154528494" style="zoom:67%;"><p>不给证书加密，按键输入两次回车</p><img src="'+y+`" alt="image-20220927154618352" style="zoom:67%;"><p>解压刚刚生成的zip包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压文件</span>
<span class="token function">unzip</span> elasticsearch-ssl-http.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将解压后的证书文件移动到config/certs目录中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 移动文件</span>
<span class="token function">mv</span> elasticsearch/http.p12 kibana/elasticsearch-ca.pem config/certs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改住配置文件：config/elasticsearch.yml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置 ES 集群名称</span>
cluster.name: es-cluster
<span class="token comment"># 设置集群中当前节点名称</span>
node.name: es-node-1
<span class="token comment"># 设置数据，日志文件路径</span>
path.data: /opt/module/elasticsearch-8.1.0/data
path.logs: /opt/module/elasticsearch-8.1.0/log
<span class="token comment"># 设置网络访问节点</span>
network.host: linux1
<span class="token comment"># 设置网络访问端口</span>
http.port: <span class="token number">9200</span>
<span class="token comment"># 初始节点</span>
discovery.seed_hosts: <span class="token punctuation">[</span><span class="token string">&quot;linux1&quot;</span><span class="token punctuation">]</span>
<span class="token comment"># 安全认证</span>
xpack.security.enabled: <span class="token boolean">true</span>
xpack.security.enrollment.enabled: <span class="token boolean">true</span>
xpack.security.http.ssl:
 enabled: <span class="token boolean">true</span>
 keystore.path: /opt/module/elasticsearch-8.1.0/config/certs/http.p12
 truststore.path: /opt/module/elasticsearch-8.1.0/config/certs/http.p12
xpack.security.transport.ssl:
 enabled: <span class="token boolean">true</span>
 verification_mode: certificate
 keystore.path:
/opt/module/elasticsearch-8.1.0/config/certs/elastic-certificates.p12
 truststore.path:
/opt/module/elasticsearch-8.1.0/config/certs/elastic-certificates.p12
<span class="token comment"># 此处需注意，es-node-1 为上面配置的节点名称</span>
cluster.initial_master_nodes: <span class="token punctuation">[</span><span class="token string">&quot;es-node-1&quot;</span><span class="token punctuation">]</span>
http.host: <span class="token punctuation">[</span>_local_, _site_<span class="token punctuation">]</span>
ingest.geoip.downloader.enabled: <span class="token boolean">false</span>
xpack.security.http.ssl.client_authentication: none
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动ES软件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动ES软件</span>
bin/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>第一次成功启动后，会显示密码，请记住，访问时需要。只有第一次才有！</p><img src="`+E+'" alt="image-20220927162802262" style="zoom:67%;">',11),q=s("img",{src:z,alt:"image-20220927163303119",style:{zoom:"50%"}},null,-1),A=s("p",null,[s("img",{src:w,alt:"image-20220927163357772"})],-1),H=s("p",null,"注意：9300端口为Elasticsearch集群间组件的通信端口，9200端口为浏览器访问的http协议RESTFUL端口。",-1),I={start:"9"},M=a('<li><p>访问服务器节点https://虚拟机地址:9200</p><p>因为配置了安全协议，所以使用https协议进行访问，但由于证书是自己生成的，并不可靠，所以会有安全提示</p><img src="'+J+'" alt="image-20220927163743685" style="zoom:50%;"><p>选择继续或在该页面直接敲thisisunsafe即可</p><img src="'+S+'" alt="image-20220927163905182" style="zoom:50%;"><p>输入账号，密码登陆即可</p><img src="'+D+`" alt="image-20220927163951266" style="zoom:50%;"></li><li><p>修改集群中的其他节点配置文件：config/elasticsearch.yml</p><p>linux2: 证书直接拷贝，其他步骤完全相同，配置文件中修改如下内容即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置节点名称</span>
node.name: es-node-2
<span class="token comment"># 设置网络访问主机</span>
network.host: linux2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>linux3:证书直接拷贝，其他步骤完全相同，配置文件中修改如下内容即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置节点名称</span>
node.name: es-node-3
<span class="token comment"># 设置网络访问主机</span>
network.host: linux3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),N=a(`<p>Linux1、linux2、linux3:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 后台启动服务</span>
bin/elasticsearch <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),P=a('<h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决" aria-hidden="true">#</a> 问题解决</h2><ul><li><p>Elasticsearch 是使用 java 开发的，8.1 版本的 ES 需要 JDK17 及以上版本。默认安装包 中带有 JDK 环境，如果系统配置 ES_JAVA_HOME 环境变量，那么会采用系统配置的 JDK。如果没有配置该环境变量，ES 会使用自带捆绑的 JDK。虽然自带的 JDK 是 ES 软件推荐的 Java 版本，但一般建议使用系统配置的 JDK。</p></li><li><p>Windows 环境中出现下面的错误信息，是因为开启了 SSL 认证：</p><img src="'+V+`" alt="image-20220927164758235" style="zoom:50%;"><p>修改 config/elasticsearch.yml 文件，将 enabled 的值修改为 false</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Enable encryption for HTTP API client connections, such as Kibana, Logstash,</span>
and Agents
xpack.security.http.ssl:
 enabled: <span class="token boolean">false</span>
 keystore.path: certs/http.p12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动成功后，如果访问 localhost:9200 地址后，弹出登录窗口</p><p>第一次启动时，因为开启了密码验证模式，在启动窗口中会显示输入账号和密码。如果 没有注意到或没有找到账号密码，可以设置免密登录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Enable security features</span>
xpack.security.enabled: <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>双击启动窗口闪退，通过路径访问追踪错误，如果是“空间不足”，请修改config/jvm.options 配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置 JVM 初始内存为 1G。此值可以设置与-Xmx 相同，以避免每次垃圾回收完成后 JVM 重新分配</span>
内存
<span class="token comment"># Xms represents the initial size of total heap space</span>
<span class="token comment"># 设置 JVM 最大可用内存为 1G</span>
<span class="token comment"># Xmx represents the maximum size of total heap space</span>
<span class="token parameter variable">-Xms4g</span>
<span class="token parameter variable">-Xmx4g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动后，如果密码忘记了，怎么办？可以采用指令重置密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 es 用户，执行指令，重置 elastic 用户密码</span>
bin/elasticsearch-reset-password <span class="token parameter variable">-u</span> elastic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+K+'" alt="image-20220927165222266" style="zoom:50%;"><p>如果只启动单一节点，此操作可能会失败，至少启动 2 个节点，测试成功</p></li></ul>',2);function j(C,G){const c=l("ExternalLinkIcon"),i=l("font");return o(),r("div",null,[T,s("p",null,[e("本章是根据尚硅谷教学视频编写 "),s("a",B,[e("https://www.bilibili.com/video/BV1hh411D7sb/?spm_id_from=333.337.search-card.all.click&vd_source=c2c3977953334eb68fd28f89418ceaa6"),n(c)])]),X,n(i,{color:"red"},{default:t(()=>[e("上面图形内容因为涉及到多节点集群配置以及kibana配置，所以极其重要！！！")]),_:1}),n(i,{color:"red"},{default:t(()=>[e("如果没有出现上面图片，出现下面图片也可以按照指示方式进行配置。")]),_:1}),q,A,H,s("ol",I,[M,s("li",null,[s("p",null,[e("依次启动集群的三台服务器节点, "),n(i,{color:"red"},{default:t(()=>[e("不要忘记切换用户后再启动")]),_:1})]),N])]),P])}const F=d(L,[["render",j],["__file","es安装与使用.html.vue"]]);export{F as default};
