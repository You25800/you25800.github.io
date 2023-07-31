import{_ as s,o as t,c as o,R as r}from"./chunks/framework.318fa179.js";const e="/assets/postgresql-download-page.c881b21a.png",p="/assets/install-postgresql-01.bad22015.png",n="/assets/install-postgresql-02.bc82220b.png",g="/assets/install-postgresql-03.df7b0cf6.png",l="/assets/install-postgresql-04.33ead7e6.png",a="/assets/install-postgresql-05.dcfabe1c.png",i="/assets/install-postgresql-06.1b9c22ab.png",c="/assets/install-postgresql-07.c19908d2.png",d="/assets/install-postgresql-08.e9f70d30.png",_="/assets/install-postgresql-09.308e9403.png",m="/assets/install-postgresql-10.62b7bb6a.png",S="/assets/install-postgresql-11.6d3e1849.png",T=JSON.parse('{"title":"在 Windows 上安装 PostgreSQL 14","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/index.md","filePath":"database/postgreSQL/index.md","lastUpdated":1688630446000}'),P={name:"database/postgreSQL/index.md"},L=r('<h1 id="在-windows-上安装-postgresql-14" tabindex="-1">在 Windows 上安装 PostgreSQL 14 <a class="header-anchor" href="#在-windows-上安装-postgresql-14" aria-label="Permalink to &quot;在 Windows 上安装 PostgreSQL 14&quot;">​</a></h1><p>在本文中，我们带您在 Windows 上逐步安装 PostgreSQL 14。</p><p>PostgreSQL 是一个跨平台的数据库管理系统，能运行与 Unix, Linux, MacOS, Windows 等平台上。本文将在 Windows 10 上安装 PostgreSQL 14。</p><h2 id="下载-postgresql-14" tabindex="-1">下载 PostgreSQL 14 <a class="header-anchor" href="#下载-postgresql-14" aria-label="Permalink to &quot;下载 PostgreSQL 14&quot;">​</a></h2><p>要下载 PostgreSQL 14 安装程序，请到官方下载页面：<a href="https://content-www.enterprisedb.com/downloads/postgresql%E3%80%82" target="_blank" rel="noreferrer">https://content-www.enterprisedb.com/downloads/postgresql。</a></p><p><img src="'+e+'" alt="PostgreSQL 14 官方下载页面"></p><p>选择 <code>Windows x86-64</code> 平台文件下载即可。您将下载 <code>postgresql-14.0-1-windows-x64.exe</code> 文件。</p><h2 id="安装-postgresql-14" tabindex="-1">安装 PostgreSQL 14 <a class="header-anchor" href="#安装-postgresql-14" aria-label="Permalink to &quot;安装 PostgreSQL 14&quot;">​</a></h2><p>双击下载好的安装文件，即可进入安装过程。请跟随我们逐步完成安装。</p><ol><li><p><strong>欢迎界面</strong></p><p><img src="'+p+'" alt="安装 PostgreSQL - 欢迎界面"></p><p>请直接点击 <em>Next</em> 按钮进入下一步。</p></li><li><p><strong>选择安装目录</strong></p><p><img src="'+n+'" alt="安装 PostgreSQL - 选择安装目录界面"></p><p>请根据自己的情况选择 PostgreSQL 的安装目录。</p></li><li><p><strong>选择安装组件</strong></p><p><img src="'+g+'" alt="安装 PostgreSQL - 选择安装组件界面"></p><p>这里请选择要安装的组件，其中包括：</p><ul><li><strong>PostgreSQL Server</strong>: 服务器组件，必选项。</li><li><strong>pgAdmin</strong>: 一个图形化的 PostgreSQL 客户端软件。</li><li><strong>Stack Builder</strong>: 扩展、驱动等。</li><li><strong>Command Line Tools</strong>: 命令行工具。</li></ul><p>为了方便我们学习，建议都安装。</p></li><li><p><strong>选择数据目录</strong></p><p><img src="'+l+'" alt="安装 PostgreSQL - 选择数据目录界面"></p><p>请根据自己需要选择一个目录，用来存放 PostgreSQL 数据。</p></li><li><p><strong>设置超级用户密码</strong></p><p><img src="'+a+'" alt="安装 PostgreSQL - 设置超级用户密码界面"></p><p>在 PostgreSQL 中， <code>postgre</code> 是默认的超级用户。</p></li><li><p><strong>设置服务器端口</strong></p><p><img src="'+i+'" alt="安装 PostgreSQL - 设置服务器端口界面"></p><p>PostgreSQL 服务器的默认端口号是 <code>5432</code> 。</p></li><li><p><strong>高级选项</strong></p><p><img src="'+c+'" alt="安装 PostgreSQL - 高级选项界面"></p><p>这里保持默认即可。</p></li><li><p><strong>安装前查看已设置的安装配置</strong></p><p><img src="'+d+'" alt="安装 PostgreSQL - 安装前查看已设置的安装配置界面"></p><p>这里显示了上面几步的结果。如果你要修改，请点击 <strong>Back</strong> 按钮去修改。</p></li><li><p><strong>准备安装</strong></p><p><img src="'+_+'" alt="安装 PostgreSQL - 准备安装界面"></p><p>请点击 <strong>Next</strong> 按钮进入安装。</p></li><li><p><strong>安装中</strong></p><p><img src="'+m+'" alt="安装 PostgreSQL - 安装中界面"></p></li><li><p><strong>安装完成</strong></p><p><img src="'+S+'" alt="安装 PostgreSQL - 安装完成界面"></p><p>这里已经结束了安装。如果你想立刻启动 <strong>Stack Builder</strong> 以安装附件组件、驱动等，请勾选。 在您点击了 <strong>Finish</strong> 按钮后，会启动 <strong>Stack Builder</strong> 应用。</p></li></ol><p>至此，您已经成功安装了 PostgreSQL 14.</p>',11),Q=[L];function q(h,b,w,f,u,x){return t(),o("div",null,Q)}const W=s(P,[["render",q]]);export{T as __pageData,W as default};