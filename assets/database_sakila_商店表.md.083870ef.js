import{_ as a,o as e,c as t,R as s}from"./chunks/framework.333b51ca.js";const m=JSON.parse('{"title":"商店表 store","description":"","frontmatter":{},"headers":[],"relativePath":"database/sakila/商店表.md","filePath":"database/sakila/商店表.md","lastUpdated":1688717707000}'),r={name:"database/sakila/商店表.md"},o=s(`<h1 id="商店表-store" tabindex="-1">商店表 store <a class="header-anchor" href="#商店表-store" aria-label="Permalink to &quot;商店表 store&quot;">​</a></h1><p>本文介绍了 Sakila 数据库中的 store 表的表结构以及与其他表的关系。</p><p><code>store</code> 表列出了系统中的所有商店。所有库存都分配到特定的商店，员工和客户被分配到一个“附近的商店”。</p><p><code>store</code> 表中定义了外键指向 <a href="https://www.sjkjc.com/sakila/table-staff/" target="_blank" rel="noreferrer"><code>staff</code></a> 和 <a href="https://www.sjkjc.com/sakila/table-address/" target="_blank" rel="noreferrer"><code>address</code></a> 表。</p><p><code>store</code> 表被 <a href="https://www.sjkjc.com/sakila/table-staff/" target="_blank" rel="noreferrer"><code>staff</code></a>， <a href="https://www.sjkjc.com/sakila/table-customer/" target="_blank" rel="noreferrer"><code>customer</code></a> 和 <a href="https://www.sjkjc.com/sakila/table-inventory/" target="_blank" rel="noreferrer"><code>inventory</code></a> 表中的外键引用。</p><h2 id="表结构" tabindex="-1">表结构 <a class="header-anchor" href="#表结构" aria-label="Permalink to &quot;表结构&quot;">​</a></h2><p><code>store</code> 表结构如下：</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">+------------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| Field            | Type              | Null | Key | Default           | Extra                                         |</span></span>
<span class="line"><span style="color:#A6ACCD;">+------------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| store_id         | tinyint unsigned  | NO   | PRI | NULL              | auto_increment                                |</span></span>
<span class="line"><span style="color:#A6ACCD;">| manager_staff_id | tinyint unsigned  | NO   | UNI | NULL              |                                               |</span></span>
<span class="line"><span style="color:#A6ACCD;">| address_id       | smallint unsigned | NO   | MUL | NULL              |                                               |</span></span>
<span class="line"><span style="color:#A6ACCD;">| last_update      | timestamp         | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |</span></span>
<span class="line"><span style="color:#A6ACCD;">+------------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span></code></pre></div><h2 id="字段说明" tabindex="-1">字段说明 <a class="header-anchor" href="#字段说明" aria-label="Permalink to &quot;字段说明&quot;">​</a></h2><table><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>store_id</code></td><td>唯一标识商店的代理主键。</td></tr><tr><td><code>manager_staff_id</code></td><td>标识该商店经理的外键。</td></tr><tr><td><code>address_id</code></td><td>标识此商店地址的外键。</td></tr><tr><td><code>last_update</code></td><td>该行的创建时间或最近更新时间。</td></tr></tbody></table>`,10),n=[o];function d(l,c,p,i,_,h){return e(),t("div",null,n)}const b=a(r,[["render",d]]);export{m as __pageData,b as default};
