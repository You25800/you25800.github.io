import{_ as t,r as n,o as s,c as r,a as e,b as a,d as l,e as i}from"./app-aae02a9f.js";const o={},c=i(`<h1 id="libreoffice-或-openoffice" tabindex="-1"><a class="header-anchor" href="#libreoffice-或-openoffice" aria-hidden="true">#</a> Libreoffice 或 Openoffice</h1><blockquote><p>建议用 Libreoffice。 Openoffice 转换效果不是很完美。</p></blockquote><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><p>对 office 文档进行转换处理。在我们程序中，主要用它来将 office 文档转成 PDF。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>到 Libreoffice 官网下载相应系统<code>最新版</code>的 64 位版本的程序。</p><ul><li>官网： https://www.libreoffice.org/</li></ul><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><ol><li><p>双击下载下来的 Libreoffice 程序，全部使用默认安装的方式进行安装，直接点击“下一步”安装完成。</p></li><li><p>将Libreoffice 加入到 Windows系统环境 Path 变量。 我这里Windows的安装路径是:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> C:\\Program Files\\LibreOffice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加入到系统环境变量中的 Path 变量值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> C:\\Program Files\\LibreOffice\\program
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><blockquote><p>建议所有 <code>Linux</code> 系统都用 Ubuntu。</p></blockquote><p>直接在官网进行下载，或者使用如下命令一键安装:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] apt install libreoffice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h3><p>Mac 下，可直接从官网下载 Mac 下的软件包进行一键安装。或者用 <code>brew</code> 命令一键安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] brew install libreoffice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="是否安装成功" tabindex="-1"><a class="header-anchor" href="#是否安装成功" aria-hidden="true">#</a> 是否安装成功</h2><p>在<code>终端</code>执行如下命令，查看版本号，能查到版本号，即表示安装成功。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>soffice --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果查看不到版本号或者提示命令不存在，请检查 Libreoffice 是否已经安装并且配置了 Libreoffice 的系统环境变量。</p><p>如果是Linux或者Mac系统下使用命令一键安装的方式的话，在安装的过程中就已经自动添加进去了。</p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><blockquote><p><code>Libreoffice</code> 在进行文档转换的过程中，转换出来的文档可能会出现乱码，所以需要在正式使用之前，把可能存在的乱码问题进行测试和解决。</p></blockquote><p>创建一个<code>中英文</code>内容的<code>.doc</code> 文档，用如下命令将文档转成 PDF:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] soffice --headless --invisible --convert-to pdf example.doc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>转换成功之后，会在当前目录下生成一个 example.pdf 的文件，然后打开转换后的PDF文件，查看文件中的中文是否存在乱码等。如果存在乱码，则朝以下两个方向去解决。</p><ol><li><p>字符编码是否支持，比如 gbk 或者 utf-8 等</p></li><li><p>是否缺少相应的中文字体库。如 ubuntu 下，可以使用如下的方式进行安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> [sudo] apt install ttf-wqy-zenhei [sudo] apt install fonts-wqy-microhei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h1 id="calibre" tabindex="-1"><a class="header-anchor" href="#calibre" aria-hidden="true">#</a> Calibre</h1><p><code>calibre</code> 是一款强大的电子书工具。</p><p>官网：https://calibre-ebook.com/</p><h2 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1" aria-hidden="true">#</a> 作用</h2><p>用来将 <code>mobi</code>、<code>epub</code>、<code>txt</code> 等格式的电子书转成 PDF 文档，以及在 Windows 下缺少 <code>pdftotext</code> 的工具的时候，从 PDF 文档中提取 txt 内容。</p><h2 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h2><p>到 Calibre 官网，下载相应系统最新版的 calibre。</p><p>下载地址：https://calibre-ebook.com/download</p><h3 id="windows-1" tabindex="-1"><a class="header-anchor" href="#windows-1" aria-hidden="true">#</a> Windows</h3><p>将下载下来的 calibre 二进制exe 文件，直接点击运行安装，采用默认安装的方式即可。</p><p>安装完成之后，将 calibre 的路径加入到 Windows 系统 Path 环境变量。</p><p>这里，我的安装路径是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Program Files\\Calibre2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以这里，我将上面的路径加入到系统的 Path 系统变量中。</p><h3 id="linux-1" tabindex="-1"><a class="header-anchor" href="#linux-1" aria-hidden="true">#</a> Linux</h3><p>用的 Ubuntu 系统，安装最新版的Calibre。</p><p>安装命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo -v &amp;&amp; wget -nv -O- https://download.calibre-ebook.com/linux-installer.py | sudo python -c &quot;import sys; main=lambda:sys.stderr.write(&#39;Download failed\\n&#39;); exec(sys.stdin.read()); main()&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>国内的安装速度非常非常慢…请耐心等待…</p></blockquote><h3 id="mac-1" tabindex="-1"><a class="header-anchor" href="#mac-1" aria-hidden="true">#</a> Mac</h3><p>Mac 下，直接从官网下载 Mac 下的安装包点击安装即可。</p><h2 id="是否安装成功-1" tabindex="-1"><a class="header-anchor" href="#是否安装成功-1" aria-hidden="true">#</a> 是否安装成功</h2><p>在系统<code>终端</code>执行如下命令查看版本号，能查询到程序版本，即表示安装成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ebook-convert --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果查看不到版本号，请确保 calibre 已经安装，并且将安装目录加入到了系统环境变量之中。</p><p>一般情况下，Mac 和 Ubuntu，在安装的时候，已经自动将安装路径加入到了系统环境变量，Windows需要手动添加。</p><p>如果不知道怎么添加，请借助搜索引擎查看教程，这里不赘述。</p><h2 id="测试-1" tabindex="-1"><a class="header-anchor" href="#测试-1" aria-hidden="true">#</a> 测试</h2><p>创建一个<code>中英文</code>内容的txt文档，如 <code>example.txt</code>，通过如下命令将文档转成PDF。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ebook-convert example.txt example.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果转换失败，请根据失败的提示对错误进行处理。</p><p>如果转换成功，则打开PDF文档，查看文档中是否存在乱码。如果存在乱码，则朝以下两个方向去解决。</p><ol><li><p>字符编码是否支持，比如 gbk 或者 utf-8 等</p></li><li><p>是否缺少相应的中文字体库。如 ubuntu 下，可以使用如下的方式进行安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> [sudo] apt install ttf-wqy-zenhei [sudo] apt install fonts-wqy-microhei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="pdf2svg" tabindex="-1"><a class="header-anchor" href="#pdf2svg" aria-hidden="true">#</a> pdf2svg</h3><h4 id="作用-2" tabindex="-1"><a class="header-anchor" href="#作用-2" aria-hidden="true">#</a> 作用</h4><p>用来将 PDF 转成 svg 文件，以供文档浏览。</p><h4 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2" aria-hidden="true">#</a> 安装</h4><h5 id="windows-2" tabindex="-1"><a class="header-anchor" href="#windows-2" aria-hidden="true">#</a> Windows</h5><p>到这里，下载Windows版本：https://github.com/TruthHun/pdf2svg-windows/releases</p><p>解压之后，将 64位 的版本直接放到C盘。</p><p>我这里，pdf2svg 的位置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\pdf2svg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后把这个路径加入到 Windows系统的 <code>Path</code> 环境变量中。</p><h5 id="linux-2" tabindex="-1"><a class="header-anchor" href="#linux-2" aria-hidden="true">#</a> Linux</h5><p>直接使用如下命令进行一键安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] apt install pdf2svg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="mac-2" tabindex="-1"><a class="header-anchor" href="#mac-2" aria-hidden="true">#</a> Mac</h5><p>直接使用命令如下命令一键安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] brew install pdf2svg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="是否安装成功-2" tabindex="-1"><a class="header-anchor" href="#是否安装成功-2" aria-hidden="true">#</a> 是否安装成功</h4><p>在终端执行如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pdf2svg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果显示如下结果，则表示安装成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Usage: pdf2svg &lt;in file.pdf&gt; &lt;out file.svg&gt; [&lt;page no&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果显示的用法不是想上面提示的那样，则表示您安装的版本不对，请通过搜索引擎找办法进行解决。</p><p>如果提示命令不存在，则请确保程序已经安装并且加入到了系统环境变量之中。</p><h4 id="测试-2" tabindex="-1"><a class="header-anchor" href="#测试-2" aria-hidden="true">#</a> 测试</h4><p>随便找来一个中英文内容的PDF文档，比如<code>example.pdf</code>文件，通过如下命令，将PDF文档转svg：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] pdf2svg example.pdf example-no1.svg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果转换失败，请排查 <code>pdf2svg</code> 是否已经安装，并且配置了系统环境变量。</p><p>如果转成成功，则查看svg中是否存在乱码，存在乱码，则从系统字符编码以及中文字体两个方向入手进行着手解决。</p><h1 id="imagemagick" tabindex="-1"><a class="header-anchor" href="#imagemagick" aria-hidden="true">#</a> ImageMagick</h1><h2 id="作用-3" tabindex="-1"><a class="header-anchor" href="#作用-3" aria-hidden="true">#</a> 作用</h2><p>将文档的转化的首个<code>svg</code>图片转成<code>jpg</code>图片，用于作为文档的封面。</p><h2 id="安装-3" tabindex="-1"><a class="header-anchor" href="#安装-3" aria-hidden="true">#</a> 安装</h2><p>到ImageMagick官网，下载相应系统版本的软件。</p><p>下载地址： https://www.imagemagick.org/script/download.php</p><h3 id="windows-3" tabindex="-1"><a class="header-anchor" href="#windows-3" aria-hidden="true">#</a> Windows</h3><p>双击下载下来的 ImageMagick 二进制 exe 文件，采用默认方式进行安装即可。</p><p>在这里，我的安装路径如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Program Files\\ImageMagick-7.0.8-Q16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>则把上述路径，添加到系统的环境变量之中。</p><h3 id="linux-3" tabindex="-1"><a class="header-anchor" href="#linux-3" aria-hidden="true">#</a> Linux</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] apt install imagemagick
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mac-3" tabindex="-1"><a class="header-anchor" href="#mac-3" aria-hidden="true">#</a> Mac</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] brew install imagemagick
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="是否安装成功-3" tabindex="-1"><a class="header-anchor" href="#是否安装成功-3" aria-hidden="true">#</a> 是否安装成功</h2><ol><li><p>Windows下，在终端输入如下命令查看版本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>magick --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果能查看到版本号，则表示安装成功。 如果查询不到版本号或者提示找不到命令，则排查下 ImageMagick 是否已经安装，并且配置了系统环境变量。</p></li><li><p>Linux/Mac 下，在终端执行如下命令查看版本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>convert --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果能查询到版本号，则表示安装成功。 如果查询不到版本号或者提示找不到命令，则排查下 ImageMagick 是否已经安装，并且配置了系统环境变量。一般情况下，Linux和Mac下使用命令的方式进行一键安装的话，会自动把软件加入到系统环境变量之中。</p></li></ol><h1 id="非必需-svgo" tabindex="-1"><a class="header-anchor" href="#非必需-svgo" aria-hidden="true">#</a> 非必需] svgo</h1><p><strong>作用</strong> 去除 svg 文件中的多余字符，减少文件体积。一般情况下能减少 50% 左右的文件大小。</p><p>这里的<code>svgo</code>，指的是 node.js 的一个库，如果您需要使用的话，需要安装 node.js，并使用如下 npm 方式进行安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] npm install svgo -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在系统终端输入如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>svgo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果出现如下内容，则表示安装成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Nodejs-based tool for optimizing SVG vector graphics filesUsage:  svgo [OPTIONS] [ARGS]Options:  -h, --help : Help  -v, --version : Version  -i INPUT, --input=INPUT : Input file, &quot;-&quot; for STDIN  -s STRING, --string=STRING : Input SVG data string  -f FOLDER, --folder=FOLDER : Input folder, optimize and rewrite all *.svg files  -o OUTPUT, --output=OUTPUT : Output file or folder (by default the same as the input), &quot;-&quot; for STDOUT  -p PRECISION, --precision=PRECISION : Set number of digits in the fractional part, overrides plugins params  --config=CONFIG : Config file or JSON string to extend or replace default  --disable=DISABLE : Disable plugin by name  --enable=ENABLE : Enable plugin by name  --datauri=DATAURI : Output as Data URI string (base64, URI encoded or unencoded)  --multipass : Enable multipass  --pretty : Make SVG pretty printed  --indent=INDENT : Indent number when pretty printing SVGs  -q, --quiet : Only output error messages, not regular status messages  --show-plugins : Show available plugins and exitArguments:  INPUT : Alias to --input  OUTPUT : Alias to --output
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 svgo 是非必需的，所以这里不深入，因为我们使用了性能更出色的Go语言的库：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/tdewolff/minify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试的时候，性能大概将近是 svgo 的 几十倍，压缩的svg体积，出于svg文件质量的考虑，只压缩到了 原 svg 文件体积的 60% 左右。</p><h1 id="minio" tabindex="-1"><a class="header-anchor" href="#minio" aria-hidden="true">#</a> Minio</h1>`,117),p={href:"https://www.bookstack.cn/books/MinioCookbookZH",target:"_blank",rel:"noopener noreferrer"},u=i(`<p>目前 DocHub 2.2 开始，已经支持 百度云、腾讯云、阿里云、华为云、七牛云、又拍云 等的对象存储服务，如果您不准备进行本地化部署，则不需要安装 Minio.</p><blockquote><p>建议把 Minio 也放到系统环境变量中去..</p></blockquote><p>Minio 启动命令参考：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>minio server ./cloudstore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行命令之后，一般会出现类似如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Endpoint:  http://169.254.106.253:9000  http://192.168.42.91:9000  http://192.168.56.1:9000  http://127.0.0.1:9000      AccessKey: C7XHAPB2ARLHM6PNWIWPSecretKey: y9GRGGDcpLusB7oasti3eXcw4gyqSYyjII1lBNG4Browser Access:   http://169.254.106.253:9000  http://192.168.42.91:9000  http://192.168.56.1:9000  http://127.0.0.1:9000Command-line Access: https://docs.minio.io/docs/minio-client-quickstart-guide   $ mc.exe config host add myminio http://169.254.106.253:9000 C7XHAPB2ARLHM6PNWIWP y9GRGGDcpLusB7oasti3eXcw4gyqSYyjII1lBNG4Object API (Amazon S3 compatible):   Go:         https://docs.minio.io/docs/golang-client-quickstart-guide   Java:       https://docs.minio.io/docs/java-client-quickstart-guide   Python:     https://docs.minio.io/docs/python-client-quickstart-guide   JavaScript: https://docs.minio.io/docs/javascript-client-quickstart-guide   .NET:       https://docs.minio.io/docs/dotnet-client-quickstart-guide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在我们的 DocHub 程序中，需要用到上面的<code>AccessKey</code>和<code>SecretKey</code>，以及 <code>Endpoint</code></p><h1 id="pdftotext" tabindex="-1"><a class="header-anchor" href="#pdftotext" aria-hidden="true">#</a> pdftotext</h1><h2 id="作用-4" tabindex="-1"><a class="header-anchor" href="#作用-4" aria-hidden="true">#</a> 作用</h2><p>提取 PDF 中的文本内容</p><h2 id="安装-4" tabindex="-1"><a class="header-anchor" href="#安装-4" aria-hidden="true">#</a> 安装</h2><h3 id="windows-4" tabindex="-1"><a class="header-anchor" href="#windows-4" aria-hidden="true">#</a> Windows</h3><p><code>Windows 下不需要安装</code>，因为我目前也没有发现存在Windows的版本。</p><p>不安装这个工具，对程序有影响，但是影响不大，因为从PDF中提取txt文本内容，还可以使用 calibre 进行提取。</p><h3 id="linux-4" tabindex="-1"><a class="header-anchor" href="#linux-4" aria-hidden="true">#</a> Linux</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] apt install poppler-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mac-4" tabindex="-1"><a class="header-anchor" href="#mac-4" aria-hidden="true">#</a> Mac</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[sudo] brew install poppler-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="是否安装成功-4" tabindex="-1"><a class="header-anchor" href="#是否安装成功-4" aria-hidden="true">#</a> 是否安装成功</h2><p>执行如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pdftotext --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看到如下结果，则表示安装成功。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pdftotext --help------pdftotext version 0.41.0Copyright 2005-2016 The Poppler Developers - http://poppler.freedesktop.orgCopyright 1996-2011 Glyph &amp; Cog, LLCUsage: pdftotext [options] &lt;PDF-file&gt; [&lt;text-file&gt;]  -f &lt;int&gt;             : first page to convert  -l &lt;int&gt;             : last page to convert  -r &lt;fp&gt;              : resolution, in DPI (default is 72)  -x &lt;int&gt;             : x-coordinate of the crop area top left corner  -y &lt;int&gt;             : y-coordinate of the crop area top left corner  -W &lt;int&gt;             : width of crop area in pixels (default is 0)  -H &lt;int&gt;             : height of crop area in pixels (default is 0)  -layout              : maintain original physical layout  -fixed &lt;fp&gt;          : assume fixed-pitch (or tabular) text  -raw                 : keep strings in content stream order  -htmlmeta            : generate a simple HTML file, including the meta information  -enc &lt;string&gt;        : output text encoding name  -listenc             : list available encodings  -eol &lt;string&gt;        : output end-of-line convention (unix, dos, or mac)  -nopgbrk             : don&#39;t insert page breaks between pages  -bbox                : output bounding box for each word and page size to html.  Sets -htmlmeta  -bbox-layout         : like -bbox but with extra layout bounding box data.  Sets -htmlmeta  -opw &lt;string&gt;        : owner password (for encrypted files)  -upw &lt;string&gt;        : user password (for encrypted files)  -q                   : don&#39;t print any messages or errors  -v                   : print copyright and version info  -h                   : print usage information  -help                : print usage information  --help               : print usage information  -?                   : print usage information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="测试-3" tabindex="-1"><a class="header-anchor" href="#测试-3" aria-hidden="true">#</a> 测试</h2><p>使用如下命令，测试文本提取结果。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pdftotext -f 1 -l 5 example.pdf example.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提取到 txt 文件中的文本内容没有出现乱码，则表示内容提取成功。如果出现乱码，需要从字符编码和中文字体排查。</p>`,27);function h(g,v){const d=n("ExternalLinkIcon");return s(),r("div",null,[c,e("p",null,[a("Minio 是一个开源的云存储方案，部署文档，安装和部署文档，请看这里："),e("a",p,[a("《Minio Cookbook 中文版》"),l(d)])]),u])}const x=t(o,[["render",h],["__file","环境依赖.html.vue"]]);export{x as default};
