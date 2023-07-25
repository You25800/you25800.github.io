import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const B=JSON.parse('{"title":"PostgreSQL CREATE TEMPORARY TABLE 临时表","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/临时表.md","filePath":"database/postgreSQL/databaseAndTable/临时表.md","lastUpdated":1690289709000}'),p={name:"database/postgreSQL/databaseAndTable/临时表.md"},o=l(`<h1 id="postgresql-create-temporary-table-临时表" tabindex="-1">PostgreSQL CREATE TEMPORARY TABLE 临时表 <a class="header-anchor" href="#postgresql-create-temporary-table-临时表" aria-label="Permalink to &quot;PostgreSQL CREATE TEMPORARY TABLE 临时表&quot;">​</a></h1><p>本文介绍了什么是 PostgreSQL 临时表以及如何使用临时表。</p><p>PostgreSQL 临时表是一种特殊的表，他们只在会话期间存在。临时表会在会话结束的时候被自动删除。</p><h2 id="创建-postgresql-临时表" tabindex="-1">创建 PostgreSQL 临时表 <a class="header-anchor" href="#创建-postgresql-临时表" aria-label="Permalink to &quot;创建 PostgreSQL 临时表&quot;">​</a></h2><p>您可以使用 <code>CREATE TEMPORARY TABLE</code> 语句像创建普通表一样创建临时表，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> { TEMPORARY | TEMP } </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> temp_table_name (</span></span>
<span class="line"><span style="color:#A6ACCD;">   column_name data_type column_contraint</span></span>
<span class="line"><span style="color:#A6ACCD;">   [, ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">   table_constraint</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>相比于常规的 <a href="./创建表.html"><code>CREATE TABLE</code></a> 语句，它只是多了一个 <code>TEMPORARY</code> 或者 <code>TEMP</code> 关键字，以指示当前创建的表是一个临时表。</p><p>您可以为临时表使用一个和常规表相同的表名，但是在临时表存在期间，您不能访问常规表。</p><h2 id="删除-postgresql-临时表" tabindex="-1">删除 PostgreSQL 临时表 <a class="header-anchor" href="#删除-postgresql-临时表" aria-label="Permalink to &quot;删除 PostgreSQL 临时表&quot;">​</a></h2><p>要删除一个临时表，您可以使用 <a href="./删除表.html"><code>DROP TABLE</code></a> 语句，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> temp_table_name;</span></span></code></pre></div><p>这与删除常规表完全一样。</p><p>或者，您可以通过退出会话让 PostgreSQL 自动删除临时表。</p><h2 id="postgresql-临时表实例" tabindex="-1">PostgreSQL 临时表实例 <a class="header-anchor" href="#postgresql-临时表实例" aria-label="Permalink to &quot;PostgreSQL 临时表实例&quot;">​</a></h2><h3 id="创建临时表的实例" tabindex="-1">创建临时表的实例 <a class="header-anchor" href="#创建临时表的实例" aria-label="Permalink to &quot;创建临时表的实例&quot;">​</a></h3><p>以下语句创建了一个名为 test_temp 的临时表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> TEMP </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> test_temp (</span></span>
<span class="line"><span style="color:#A6ACCD;">  id </span><span style="color:#C792EA;">SERIAL</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  notes </span><span style="color:#C792EA;">VARCHAR</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>使用 <code>\\dt</code> 命令查看数据库中的表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\dt</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">relations</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Schema</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Owner</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------+-------------------+-------+----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pg_temp_4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_temp</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_serial</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_serial_big</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_serial_small</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">user_hobbies</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">users</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>注意，临时表的 Schema 值是 <code>pg_temp_4</code>，而常规表的 Schema 值是 <code>public</code>。</p><h3 id="创建与常规表同名的临时表的实例" tabindex="-1">创建与常规表同名的临时表的实例 <a class="header-anchor" href="#创建与常规表同名的临时表的实例" aria-label="Permalink to &quot;创建与常规表同名的临时表的实例&quot;">​</a></h3><p>在创建临时表 <code>users</code> 之前，我们先看以下常规表 <code>users</code> 的结构：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d users</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public.users</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Collation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Nullable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Default</span></span>
<span class="line"><span style="color:#FFCB6B;">------------+-----------------------------+-----------+----------+---------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">integer</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">character</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">varying</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">45</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">age</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">integer</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">locked</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">created_at</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">timestamp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">without</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">time</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zone</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">Indexes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;users_pkey&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIMARY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KEY,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">btree</span><span style="color:#A6ACCD;"> (id)</span></span>
<span class="line"><span style="color:#FFCB6B;">Referenced</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">by:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user_hobbies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CONSTRAINT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fk_user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FOREIGN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KEY</span><span style="color:#A6ACCD;"> (user_id) REFERENCES users</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> ON UPDATE RESTRICT ON DELETE CASCADE</span></span></code></pre></div><p>以下语句创建一个名称为 <code>users</code> 的临时表，为了区分，临时表 <code>users</code> 只由一个 <code>id</code> 列:</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> TEMP </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> users (</span></span>
<span class="line"><span style="color:#A6ACCD;">  id </span><span style="color:#C792EA;">SERIAL</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>使用 <code>\\dt</code> 命令查看数据库中的表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\dt</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">relations</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Schema</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Owner</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------+-------------------+-------+----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pg_temp_4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_temp</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pg_temp_4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">users</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_serial</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_serial_big</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_serial_small</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">user_hobbies</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>现在， 常规表 <code>users</code> 已经找不到了。</p><p>以下语句使用 <code>\\d</code> 查看 <code>users</code> 的表结构：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d users</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pg_temp_4.users</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Collation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Nullable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">Default</span></span>
<span class="line"><span style="color:#FFCB6B;">--------+---------+-----------+----------+-----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">id</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">integer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">nextval(</span><span style="color:#FFCB6B;">&#39;users_id_seq&#39;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">:regclass)</span></span>
<span class="line"><span style="color:#FFCB6B;">Indexes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;users_pkey&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIMARY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">KEY,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">btree</span><span style="color:#A6ACCD;"> (id)</span></span></code></pre></div><p>这里是临时表 <code>users</code> 的结构。</p><p>删除临时表 <code>users</code>：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> users;</span></span></code></pre></div><p>然后，再次使用 <code>\\dt</code> 命令查看数据库中的表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\dt</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">relations</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Schema</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Owner</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------+-------------------+-------+----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pg_temp_4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_temp</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_serial</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_serial_big</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test_serial_small</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">user_hobbies</span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">users</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>临时表 <code>users</code> 不见了， 常规表 <code>users</code> 又出现在了上面的列表中。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL 临时表是一种只在会话期间存在的特殊的表。在会话结束后， PostgreSQL 会自动删除临时表。</p>`,43),e=[o];function t(c,C,r,y,A,D){return a(),n("div",null,e)}const i=s(p,[["render",t]]);export{B as __pageData,i as default};
