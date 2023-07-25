import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const i=JSON.parse('{"title":"在 PostgreSQL 中查看表的定义或结构","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/查看表.md","filePath":"database/postgreSQL/databaseAndTable/查看表.md","lastUpdated":1690289709000}'),o={name:"database/postgreSQL/databaseAndTable/查看表.md"},p=l(`<h1 id="在-postgresql-中查看表的定义或结构" tabindex="-1">在 PostgreSQL 中查看表的定义或结构 <a class="header-anchor" href="#在-postgresql-中查看表的定义或结构" aria-label="Permalink to &quot;在 PostgreSQL 中查看表的定义或结构&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 查看数据表的定义或结构的两种方法。</p><p>PostgreSQL 提供了两种方法查看一个现有的表的定义或者结构：</p><ul><li>在 <code>psql</code> 工具中使用 <code>\\d</code> 或者 <code>\\d+</code> 列出当前数据库中的所有的表。</li><li>从 <code>information_schema.columns</code> 中查询表中的列。</li></ul><h2 id="使用-d-查看表的信息" tabindex="-1">使用 <code>\\d</code> 查看表的信息 <a class="header-anchor" href="#使用-d-查看表的信息" aria-label="Permalink to &quot;使用 \`\\d\` 查看表的信息&quot;">​</a></h2><p>本实例演示了使用 <code>psql</code> 工具登录数据库并查看表信息的详细步骤。请按照如下步骤进行：</p><ol><li><p>使用 postgres 用户登录 PostgreSQL 服务器：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">~</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> psql -U postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">psql</span><span style="color:#A6ACCD;"> (14.4)</span></span>
<span class="line"><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help.</span></span></code></pre></div><p>注意：您也可以使用其他任何具有相应的数据库权限的用户登录。</p></li><li><p>使用以下语句选择 <code>testdb</code> 数据库：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\c testdb;</span></span></code></pre></div><p>如果还未创建数据库，请先运行如下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">testdb</span><span style="color:#A6ACCD;">;</span></span></code></pre></div></li><li><p>以下语句使用 <code>\\d</code> 命令查看 <code>test_date</code> 表的结构，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d test_date</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public.test_date</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Collation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Nullable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">Default</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+---------+-----------+----------+------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">integer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">generated</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">identity</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">date_value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">date</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CURRENT_DATE</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Indexes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;test_date_pkey&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIMARY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KEY,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">btree</span><span style="color:#A6ACCD;"> (id)</span></span></code></pre></div><p>您可以看到，<code>\\d</code> 输出了表的名字、表中的列，表中的约束等信息。</p></li><li><p>如果要查看更多关于 <code>test_date</code> 表的信息，请使用 <code>\\d+</code> 命令，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> test_date</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public.test_date</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Collation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Nullable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">Default</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Storage</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Compression</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Stats</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">target</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Description</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+---------+-----------+----------+------------------------------+---------+-------------+--------------+-------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">integer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">generated</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">identity</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">plain</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">date_value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">date</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CURRENT_DATE</span><span style="color:#A6ACCD;">                 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">plain</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Indexes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;test_date_pkey&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIMARY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KEY,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">btree</span><span style="color:#A6ACCD;"> (id)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Access</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">method:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">heap</span></span></code></pre></div><p>您可以看到， <code>\\d+</code> 的输入比 <code>\\d</code> 输出多了 <code>Compression</code>, <code>Stats target</code> 和 <code>Description</code> 列。</p></li></ol><h2 id="从-information-schema-中查看表中的所有列" tabindex="-1">从 information_schema 中查看表中的所有列 <a class="header-anchor" href="#从-information-schema-中查看表中的所有列" aria-label="Permalink to &quot;从 information_schema 中查看表中的所有列&quot;">​</a></h2><p><code>information_schema</code> 是一个系统级的 Schema, 其中提供了一些视图可以查看表、列、索引、函数等信息。</p><p>该 <code>information_schema.columns</code> 目录包含有关所有表的列的信息。</p><p>以下语句从 <code>information_schema.columns</code> 中查询 <code>test_date</code> 表的所有的列：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">   table_name,</span></span>
<span class="line"><span style="color:#A6ACCD;">   column_name,</span></span>
<span class="line"><span style="color:#A6ACCD;">   data_type,</span></span>
<span class="line"><span style="color:#A6ACCD;">   column_default</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">   information_schema.columns</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">   table_name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test_date</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">table_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">column_name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">data_type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">column_default</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+-------------+-----------+----------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_date</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">integer</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_date</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">date_value</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">date</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CURRENT_DATE</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>以上语句返回了 <code>test_date</code> 表的所有的列的信息，包括 列名，数据类型，默认值。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL 提供了两种方法查看一个现有的表的定义或者结构：</p><ul><li>在 <code>psql</code> 工具中使用 <code>\\d</code> 或者 <code>\\d+</code> 列出当前当前数据库中的所有的表。</li><li>从 <code>information_schema.columns</code> 中查询表中的列。</li></ul>`,17),e=[p];function t(c,C,r,y,A,D){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{i as __pageData,d as default};
