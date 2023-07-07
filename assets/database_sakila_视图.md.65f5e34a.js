import{_ as e,o,c,R as d}from"./chunks/framework.333b51ca.js";const y=JSON.parse('{"title":"Sakila 数据库中的视图","description":"","frontmatter":{},"headers":[],"relativePath":"database/sakila/视图.md","filePath":"database/sakila/视图.md","lastUpdated":1688717707000}'),t={name:"database/sakila/视图.md"},a=d('<h1 id="sakila-数据库中的视图" tabindex="-1">Sakila 数据库中的视图 <a class="header-anchor" href="#sakila-数据库中的视图" aria-label="Permalink to &quot;Sakila 数据库中的视图&quot;">​</a></h1><p>本文整理了 Sakila 数据库中定义的 7 个视图及每个视图的说明。</p><p>Sakila 数据库中共定义了 7 个视图：</p><ol><li><p>actor_info</p><p><code>actor_info</code> 视图提供了所有演员的列表，包括他们所表演的影片，按类别细分。</p><p><code>actor_info</code> 视图结合了 <code>film</code> ， <code>actor</code> ， <code>category</code>，<code>film_actor</code> 和 <code>film_category</code> 表的数据。</p></li><li><p>customer_list</p><p><code>customer_list</code> 视图提供了一个客户列表，将客户额名字和姓氏连接在一起，地址信息合并到一个视图中。</p><p><code>customer_list</code> 视图结合了来自 <code>customer</code> ， <code>address</code>，<code>city</code> 和 <code>country</code> 表的数据。</p></li><li><p>film_list</p><p><code>film_list</code> 视图包含 <code>film</code> 表格的格式化视图，以及每部影片的以逗号分隔的演员列表。</p><p><code>film_list</code> 视图结合了 <code>film</code> ， <code>category</code> ， <code>film_category</code>，<code>actor</code> 和 <code>film_actor</code> 表的数据。</p></li><li><p>nicer_but_slower_film_list</p><p><code>nicer_but_slower_film_list</code> 视图包含 <code>film</code> 表格的格式化视图，以及以逗号分隔的影片演员列表。</p><p><code>nicer_but_slower_film_list</code> 视图与 <code>film_list</code> 演员列表中的视图不同。演员姓名的字母大写进行了调整，使每个姓名的第一个字母大写，而不是全大写。</p><p>正如其名称所示， <code>nicer_but_slower_film_list</code> 视图执行额外的处理，因此返回数据的时间比 <code>film_list</code> 视图长。</p><p><code>nicer_but_slower_film_list</code> 视图视图结合了 <code>film</code> ， <code>category</code> ， <code>film_category</code>，<code>actor</code> 和 <code>film_actor</code> 表的数据。</p></li><li><p>sales_by_film_category</p><p><code>sales_by_film_category</code> 视图提供了单个影片类别汇总销售额的列表。</p><p>由于一部影片可以列入多个类别，因此不建议通过合计此视图的行来计算总销售额。</p><p><code>sales_by_film_category</code> 视图结合了来自 <code>category</code> ， <code>payment </code>，<code>rental</code>， <code>inventory</code>，<code>film</code>， <code>film_category</code> 和 <code>category</code> 表的数据。</p></li><li><p>sales_by_store</p><p><code>sales_by_store</code> 视图提供了按商店细分的总销售额列表。该视图返回商店位置、经理姓名和总销售额。</p><p><code>sales_by_store</code> 视图结合了 <code>city</code> ， <code>country</code> ， <code>payment </code>，<code>rental</code>， <code>inventory</code>，<code>store</code>， <code>address</code> 和 <code>staff</code> 表的数据。</p></li><li><p>staff_list</p><p><code>staff_list</code> 视图提供了所有员工的列表，包括地址和商店信息。</p><p><code>staff_list</code> 视图包含来自 <code>staff</code> 和<code>address</code> 表的数据。</p></li></ol>',4),i=[a];function l(_,s,r,p,f,m){return o(),c("div",null,i)}const u=e(t,[["render",l]]);export{y as __pageData,u as default};
