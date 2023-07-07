import{_ as a,o as t,c as e,R as s}from"./chunks/framework.333b51ca.js";const u=JSON.parse('{"title":"城市表 city","description":"","frontmatter":{},"headers":[],"relativePath":"database/sakila/城市表.md","filePath":"database/sakila/城市表.md","lastUpdated":1688717707000}'),n={name:"database/sakila/城市表.md"},c=s(`<h1 id="城市表-city" tabindex="-1">城市表 city <a class="header-anchor" href="#城市表-city" aria-label="Permalink to &quot;城市表 city&quot;">​</a></h1><p>本文介绍了 Sakila 数据库中的 city 表的表结构以及与其他表的关系。</p><p><code>city</code> 表包含城市列表。</p><p><code>city</code> 表中定义了外键指向 <a href="https://www.sjkjc.com/sakila/table-country/" target="_blank" rel="noreferrer"><code>country</code></a> 的主键。</p><p><a href="https://www.sjkjc.com/sakila/table-address/" target="_blank" rel="noreferrer"><code>address</code></a> 表中定义了外键指向 <code>city</code> 表的逐渐。</p><h2 id="表结构" tabindex="-1">表结构 <a class="header-anchor" href="#表结构" aria-label="Permalink to &quot;表结构&quot;">​</a></h2><p><code>city</code> 表结构如下：</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| Field       | Type              | Null | Key | Default           | Extra                                         |</span></span>
<span class="line"><span style="color:#A6ACCD;">+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| city_id     | smallint unsigned | NO   | PRI | NULL              | auto_increment                                |</span></span>
<span class="line"><span style="color:#A6ACCD;">| city        | varchar(50)       | NO   |     | NULL              |                                               |</span></span>
<span class="line"><span style="color:#A6ACCD;">| country_id  | smallint unsigned | NO   | MUL | NULL              |                                               |</span></span>
<span class="line"><span style="color:#A6ACCD;">| last_update | timestamp         | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |</span></span>
<span class="line"><span style="color:#A6ACCD;">+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span></code></pre></div><h2 id="字段说明" tabindex="-1">字段说明 <a class="header-anchor" href="#字段说明" aria-label="Permalink to &quot;字段说明&quot;">​</a></h2><table><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>city_id</code></td><td>用于唯一标识表中每个城市的代理主键。</td></tr><tr><td><code>city</code></td><td>城市名。</td></tr><tr><td><code>country_id</code></td><td>标识城市所属国家的外键。</td></tr><tr><td><code>last_update</code></td><td>该行的创建时间或最近更新时间。</td></tr></tbody></table>`,10),o=[c];function l(d,r,i,p,_,h){return t(),e("div",null,o)}const A=a(n,[["render",l]]);export{u as __pageData,A as default};
