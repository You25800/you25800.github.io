import{_ as a,o as t,c as e,R as s}from"./chunks/framework.318fa179.js";const f=JSON.parse('{"title":"影片类别关系表 film_category","description":"","frontmatter":{},"headers":[],"relativePath":"database/sakila/影片类别关系表.md","filePath":"database/sakila/影片类别关系表.md","lastUpdated":1690270507000}'),o={name:"database/sakila/影片类别关系表.md"},l=s(`<h1 id="影片类别关系表-film-category" tabindex="-1">影片类别关系表 film_category <a class="header-anchor" href="#影片类别关系表-film-category" aria-label="Permalink to &quot;影片类别关系表 film\\_category&quot;">​</a></h1><p>本文介绍了 Sakila 数据库中的 film_category 表的表结构以及与其他表的关系。</p><p><code>film_category</code> 表用于支持影片和类别之间的多对多关系。对于应用于影片的每个类别，都对应了 <code>film_category</code> 表中的一行数据。</p><p>表使用外键 <code>film_category</code> 引用 <a href="./影片表.html"><code>film</code></a> 和 <a href="./类别表.html"><code>category</code></a> 表。</p><h2 id="表结构" tabindex="-1">表结构 <a class="header-anchor" href="#表结构" aria-label="Permalink to &quot;表结构&quot;">​</a></h2><p><code>film_category</code> 表结构如下：</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| Field       | Type              | Null | Key | Default           | Extra                                         |</span></span>
<span class="line"><span style="color:#A6ACCD;">+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| film_id     | smallint unsigned | NO   | PRI | NULL              |                                               |</span></span>
<span class="line"><span style="color:#A6ACCD;">| category_id | tinyint unsigned  | NO   | PRI | NULL              |                                               |</span></span>
<span class="line"><span style="color:#A6ACCD;">| last_update | timestamp         | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |</span></span>
<span class="line"><span style="color:#A6ACCD;">+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span></code></pre></div><h2 id="字段说明" tabindex="-1">字段说明 <a class="header-anchor" href="#字段说明" aria-label="Permalink to &quot;字段说明&quot;">​</a></h2><table><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>film_id</code></td><td>标识影片的外键。</td></tr><tr><td><code>category_id</code></td><td>标识类别的外键。</td></tr><tr><td><code>last_update</code></td><td>该行的创建时间或最近更新时间。</td></tr></tbody></table>`,9),n=[l];function c(d,r,i,p,_,h){return t(),e("div",null,n)}const y=a(o,[["render",c]]);export{f as __pageData,y as default};
