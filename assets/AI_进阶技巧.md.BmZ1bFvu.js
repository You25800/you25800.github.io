import{_ as a,c as n,o as p,b3 as i}from"./chunks/framework.CatkIGlB.js";const k=JSON.parse('{"title":"Claude Code 进阶技巧","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"AI/进阶技巧.md","filePath":"AI/进阶技巧.md","lastUpdated":1761265537000}'),l={name:"AI/进阶技巧.md"};function e(t,s,h,c,r,d){return p(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="claude-code-进阶技巧" tabindex="-1">Claude Code 进阶技巧 <a class="header-anchor" href="#claude-code-进阶技巧" aria-label="Permalink to &quot;Claude Code 进阶技巧&quot;">​</a></h1><blockquote><p>解决复杂场景痛点 | 提升团队协作效率 | 掌握高级技巧</p></blockquote><p><strong>学习目标</strong>: 掌握 Claude Code 的高级技巧，解决日常开发中的复杂场景问题</p><p><strong>适用对象</strong>: 已掌握基础技能，有 1-2 周实践经验的开发者</p><p><strong>前置条件</strong>:</p><ul><li>✅ 已学习 <a href="./快速上手教程.html">快速上手教程</a></li><li>✅ 已使用 <a href="./实战指南.html">实战指南</a> 完成 2-3 个场景</li><li>✅ 能熟练使用三段式工作流</li></ul><hr><h2 id="📚-课程大纲" tabindex="-1">📚 课程大纲 <a class="header-anchor" href="#📚-课程大纲" aria-label="Permalink to &quot;📚 课程大纲&quot;">​</a></h2><table tabindex="0"><thead><tr><th>部分</th><th>内容</th><th>解决的核心问题</th></tr></thead><tbody><tr><td><strong>第一部分</strong></td><td>复杂场景处理</td><td>如何拆分和组合复杂任务</td></tr><tr><td><strong>第二部分</strong></td><td>团队协作技巧</td><td>如何保持团队代码一致性</td></tr><tr><td><strong>第三部分</strong></td><td>上下文管理策略</td><td>如何高效管理对话上下文</td></tr><tr><td><strong>第四部分</strong></td><td>性能优化实践</td><td>如何识别和解决性能问题</td></tr><tr><td><strong>第五部分</strong></td><td>案例研究</td><td>实际项目中的应用经验</td></tr></tbody></table><hr><h2 id="第一部分-复杂场景处理" tabindex="-1">第一部分：复杂场景处理 <a class="header-anchor" href="#第一部分-复杂场景处理" aria-label="Permalink to &quot;第一部分：复杂场景处理&quot;">​</a></h2><h3 id="_1-1-流程组合技巧" tabindex="-1">1.1 流程组合技巧 <a class="header-anchor" href="#_1-1-流程组合技巧" aria-label="Permalink to &quot;1.1 流程组合技巧&quot;">​</a></h3><h4 id="什么是流程组合" tabindex="-1">什么是流程组合？ <a class="header-anchor" href="#什么是流程组合" aria-label="Permalink to &quot;什么是流程组合？&quot;">​</a></h4><p>将多个基础流程组合使用，解决复杂的系统性任务。</p><h4 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>单一流程无法完成的任务：</span></span>
<span class="line"><span>- 大型功能开发（涉及多个模块）</span></span>
<span class="line"><span>- 系统性重构（多层架构调整）</span></span>
<span class="line"><span>- 复杂的数据迁移</span></span></code></pre></div><hr><h4 id="组合模式-1-串行组合" tabindex="-1">组合模式 1: 串行组合 <a class="header-anchor" href="#组合模式-1-串行组合" aria-label="Permalink to &quot;组合模式 1: 串行组合&quot;">​</a></h4><p><strong>场景</strong>: 开发新功能后需要性能优化</p><p><strong>流程</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>阶段 1: 新功能开发流程（8-10 轮）</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>阶段 2: 性能优化流程（4 轮）</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>阶段 3: 生成文档</span></span></code></pre></div><p><strong>示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 阶段 1: 完成基本功能</span></span>
<span class="line"><span>使用《实战指南 - 工作流 1: 新功能开发》</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（完成后）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 阶段 2: 性能优化</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>继续性能优化，上一阶段已完成基本功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【已完成】</span></span>
<span class="line"><span>- 订单批量导入功能</span></span>
<span class="line"><span>- Model/Service/API 三层实现</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【当前问题】</span></span>
<span class="line"><span>- 导入 1000 条数据需要 30 秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用《实战指南 - 工作流 6: 性能优化》</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（优化后）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 阶段 3: 生成 API 文档</span></span>
<span class="line"><span>@api/v1/order_import.go</span></span>
<span class="line"><span>生成 OpenAPI 3.0 格式的 API 文档</span></span></code></pre></div><p><strong>关键要点</strong>:</p><ul><li>✅ 阶段切换时使用 <code>/clear</code></li><li>✅ 明确说明上一阶段的成果</li><li>✅ 每个阶段聚焦单一目标</li></ul><hr><h4 id="组合模式-2-并行组合" tabindex="-1">组合模式 2: 并行组合 <a class="header-anchor" href="#组合模式-2-并行组合" aria-label="Permalink to &quot;组合模式 2: 并行组合&quot;">​</a></h4><p><strong>场景</strong>: 同时重构多个独立模块</p><p><strong>流程</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>模块 A 重构  ──┐</span></span>
<span class="line"><span>模块 B 重构  ──┤─→ 集成测试</span></span>
<span class="line"><span>模块 C 重构  ──┘</span></span></code></pre></div><p><strong>示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 会话 1: 重构用户模块</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>使用《实战指南 - 工作流 2: 代码重构》</span></span>
<span class="line"><span>重构 user 模块</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【记录设计要点到 DESIGN.md】</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 2: 重构订单模块</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>使用《实战指南 - 工作流 2: 代码重构》</span></span>
<span class="line"><span>重构 order 模块</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【记录设计要点到 DESIGN.md】</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 3: 集成</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@DESIGN.md 包含了两个模块的重构设计</span></span>
<span class="line"><span></span></span>
<span class="line"><span>现在需要：</span></span>
<span class="line"><span>1. 更新模块间的调用关系</span></span>
<span class="line"><span>2. 运行集成测试</span></span>
<span class="line"><span>3. 修复兼容性问题</span></span></code></pre></div><p><strong>关键要点</strong>:</p><ul><li>✅ 使用文件（DESIGN.md）串联多个会话</li><li>✅ 模块独立重构，降低复杂度</li><li>✅ 最后统一集成和测试</li></ul><hr><h3 id="_1-2-长任务拆分策略" tabindex="-1">1.2 长任务拆分策略 <a class="header-anchor" href="#_1-2-长任务拆分策略" aria-label="Permalink to &quot;1.2 长任务拆分策略&quot;">​</a></h3><h4 id="为什么要拆分" tabindex="-1">为什么要拆分？ <a class="header-anchor" href="#为什么要拆分" aria-label="Permalink to &quot;为什么要拆分？&quot;">​</a></h4><p><strong>问题</strong>: 单个会话对话轮数过多（&gt; 50 轮）会导致：</p><ul><li>上下文混乱</li><li>AI 理解偏差</li><li>Token 浪费</li></ul><p><strong>解决</strong>: 将长任务拆分为多个短会话</p><hr><h4 id="拆分原则" tabindex="-1">拆分原则 <a class="header-anchor" href="#拆分原则" aria-label="Permalink to &quot;拆分原则&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>1. 按模块拆分（Model → Service → API）</span></span>
<span class="line"><span>2. 按功能拆分（读 → 写 → 删）</span></span>
<span class="line"><span>3. 按阶段拆分（数据库 → 逻辑 → 接口）</span></span></code></pre></div><hr><h4 id="实战案例" tabindex="-1">实战案例 <a class="header-anchor" href="#实战案例" aria-label="Permalink to &quot;实战案例&quot;">​</a></h4><p><strong>任务</strong>: 开发完整的功能管理系统</p><p><strong>传统方式</strong>（❌ 不推荐）:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>一个会话完成所有功能，导致：</span></span>
<span class="line"><span>- 70+ 轮对话</span></span>
<span class="line"><span>- 上下文混乱</span></span>
<span class="line"><span>- 频繁纠错</span></span></code></pre></div><p><strong>拆分方式</strong>（✅ 推荐）:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│ 会话 1: 数据库设计（4-6 轮）             │</span></span>
<span class="line"><span>│ 输出: DDL 脚本 + 设计文档                │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>              ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│ 会话 2: Model 层实现（6-8 轮）          │</span></span>
<span class="line"><span>│ 输入: @DESIGN.md                        │</span></span>
<span class="line"><span>│ 输出: Model 层代码                       │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>              ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│ 会话 3: Service 层实现（6-8 轮）        │</span></span>
<span class="line"><span>│ 输入: @DESIGN.md + Model 代码            │</span></span>
<span class="line"><span>│ 输出: Service 层代码                     │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>              ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│ 会话 4: API 层实现（6-8 轮）            │</span></span>
<span class="line"><span>│ 输入: @DESIGN.md + Service 代码          │</span></span>
<span class="line"><span>│ 输出: API 层代码 + 文档                  │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span></code></pre></div><p><strong>每个会话的模板</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 会话 1</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>设计功能管理系统的数据库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【需求】</span></span>
<span class="line"><span>（需求描述）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请完成数据库设计，并将设计要点记录到 DESIGN.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 2</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@DESIGN.md 包含了数据库设计</span></span>
<span class="line"><span></span></span>
<span class="line"><span>继续实现 Model 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【要求】</span></span>
<span class="line"><span>- 遵循 CLAUDE.md 规范</span></span>
<span class="line"><span>- 每个表一个 Model 结构体</span></span></code></pre></div><hr><h3 id="_1-3-多模块协作" tabindex="-1">1.3 多模块协作 <a class="header-anchor" href="#_1-3-多模块协作" aria-label="Permalink to &quot;1.3 多模块协作&quot;">​</a></h3><h4 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h4><p>修改涉及多个模块，需要保持一致性。</p><hr><h4 id="技巧-1-使用设计文档串联" tabindex="-1">技巧 1: 使用设计文档串联 <a class="header-anchor" href="#技巧-1-使用设计文档串联" aria-label="Permalink to &quot;技巧 1: 使用设计文档串联&quot;">​</a></h4><p><strong>步骤</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>1. 第一次会话: 分析所有相关模块，输出设计文档</span></span>
<span class="line"><span>2. 后续会话: 引用设计文档，逐个修改模块</span></span></code></pre></div><p><strong>示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 会话 1: 整体设计</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@api/v1/user.go @api/v1/order.go @service/user.go @service/order.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分析：将用户会员逻辑从 user 模块独立为 membership 模块</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【分析内容】</span></span>
<span class="line"><span>1. 哪些函数需要迁移</span></span>
<span class="line"><span>2. 模块间的新调用关系</span></span>
<span class="line"><span>3. 数据表变更</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【输出】</span></span>
<span class="line"><span>请将设计方案记录到 REFACTOR_PLAN.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 2: 实施</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@REFACTOR_PLAN.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>按照重构计划，先完成 membership 模块的创建</span></span></code></pre></div><hr><h4 id="技巧-2-增量式修改" tabindex="-1">技巧 2: 增量式修改 <a class="header-anchor" href="#技巧-2-增量式修改" aria-label="Permalink to &quot;技巧 2: 增量式修改&quot;">​</a></h4><p><strong>原则</strong>: 每次只修改一个模块，立即测试</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>修改模块 A → 测试 → 提交</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>修改模块 B → 测试 → 提交</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>修改模块 C → 测试 → 提交</span></span></code></pre></div><p><strong>好处</strong>:</p><ul><li>问题容易定位</li><li>可以随时回滚</li><li>降低风险</li></ul><hr><h3 id="_1-4-实战案例-复杂重构" tabindex="-1">1.4 实战案例：复杂重构 <a class="header-anchor" href="#_1-4-实战案例-复杂重构" aria-label="Permalink to &quot;1.4 实战案例：复杂重构&quot;">​</a></h3><h4 id="任务" tabindex="-1">任务 <a class="header-anchor" href="#任务" aria-label="Permalink to &quot;任务&quot;">​</a></h4><p>将混乱的订单模块重构为清晰的三层架构。</p><hr><h4 id="第-1-步-全面分析" tabindex="-1">第 1 步: 全面分析 <a class="header-anchor" href="#第-1-步-全面分析" aria-label="Permalink to &quot;第 1 步: 全面分析&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@service/order.go</span></span>
<span class="line"><span>@service/payment.go</span></span>
<span class="line"><span>@service/benefit.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这 3 个文件的逻辑混乱，需要重构为清晰的三层架构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【分析任务】</span></span>
<span class="line"><span>1. 当前的职责划分问题</span></span>
<span class="line"><span>2. 哪些逻辑应该在 Model 层</span></span>
<span class="line"><span>3. 哪些逻辑应该在 Service 层</span></span>
<span class="line"><span>4. 哪些逻辑应该在 API 层</span></span>
<span class="line"><span>5. 模块间的依赖关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【输出】</span></span>
<span class="line"><span>请将分析结果和重构方案记录到 REFACTOR.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不要写代码</span></span></code></pre></div><hr><h4 id="第-2-步-分模块重构" tabindex="-1">第 2 步: 分模块重构 <a class="header-anchor" href="#第-2-步-分模块重构" aria-label="Permalink to &quot;第 2 步: 分模块重构&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 会话 2: 重构 Model 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@REFACTOR.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>按照重构方案，先完成 Model 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【要求】</span></span>
<span class="line"><span>- 每个表一个文件</span></span>
<span class="line"><span>- 只包含数据库操作</span></span>
<span class="line"><span>- 使用结构体方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>每完成一个文件暂停</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 3: 重构 Service 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@REFACTOR.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Model 层已完成，继续 Service 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【要求】</span></span>
<span class="line"><span>- 业务逻辑集中在 Service</span></span>
<span class="line"><span>- 调用 Model 层方法</span></span>
<span class="line"><span>- 使用包级函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 4: 重构 API 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@REFACTOR.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Service 层已完成，继续 API 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【要求】</span></span>
<span class="line"><span>- 参数校验</span></span>
<span class="line"><span>- 响应组装</span></span>
<span class="line"><span>- 调用 Service 层</span></span></code></pre></div><hr><h4 id="第-3-步-集成测试" tabindex="-1">第 3 步: 集成测试 <a class="header-anchor" href="#第-3-步-集成测试" aria-label="Permalink to &quot;第 3 步: 集成测试&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重构已完成，现在进行集成测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【测试要点】</span></span>
<span class="line"><span>1. 原有功能是否正常</span></span>
<span class="line"><span>2. 边界情况是否处理</span></span>
<span class="line"><span>3. 性能是否下降</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请列出测试清单</span></span></code></pre></div><hr><h2 id="第二部分-团队协作技巧" tabindex="-1">第二部分：团队协作技巧 <a class="header-anchor" href="#第二部分-团队协作技巧" aria-label="Permalink to &quot;第二部分：团队协作技巧&quot;">​</a></h2><h3 id="_2-1-建立-claude-md-规范" tabindex="-1">2.1 建立 CLAUDE.md 规范 <a class="header-anchor" href="#_2-1-建立-claude-md-规范" aria-label="Permalink to &quot;2.1 建立 CLAUDE.md 规范&quot;">​</a></h3><h4 id="为什么需要-claude-md" tabindex="-1">为什么需要 CLAUDE.md？ <a class="header-anchor" href="#为什么需要-claude-md" aria-label="Permalink to &quot;为什么需要 CLAUDE.md？&quot;">​</a></h4><p><strong>问题</strong>: 团队成员各自用不同的提示词，导致：</p><ul><li>代码风格不一致</li><li>AI 理解项目方式不同</li><li>协作效率低</li></ul><p><strong>解决</strong>: 建立统一的 CLAUDE.md 规范文档</p><hr><h4 id="claude-md-结构" tabindex="-1">CLAUDE.md 结构 <a class="header-anchor" href="#claude-md-结构" aria-label="Permalink to &quot;CLAUDE.md 结构&quot;">​</a></h4><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"># </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">项目名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">## </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">项目概览</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 技术栈</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 目录结构</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 核心模块</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">## </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">代码规范</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">### </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">命名规范</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 文件命名: snake_case</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 结构体: PascalCase</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 函数: 导出用 PascalCase，私有用 camelCase</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">### </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">分层规范</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> Model 层: 数据库操作，使用结构体方法</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> Service 层: 业务逻辑，使用包级函数</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> API 层: 参数校验 + 响应组装</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">### </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">错误处理</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 统一使用 pkg/errors</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> Service 层返回业务错误</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> API 层转换为 HTTP 状态码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">## </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">常用命令</span></span>
<span class="line"><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;">\`\`\`</span><span style="--shiki-light:#90A4AE90;--shiki-dark:#BABED890;">bash</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;"># 开发</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">npm</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> run</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;"># 构建</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">npm</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> run</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> build</span></span></code></pre></div><h2 id="特殊注意事项" tabindex="-1">特殊注意事项 <a class="header-anchor" href="#特殊注意事项" aria-label="Permalink to &quot;特殊注意事项&quot;">​</a></h2><ul><li>所有数据库操作必须有事务</li><li>外部 API 调用要有超时控制</li><li>敏感信息不能记录日志</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 使用方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**在每次会话开始时**:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`text</span></span>
<span class="line"><span>@CLAUDE.md 请阅读项目规范</span></span>
<span class="line"><span></span></span>
<span class="line"><span>然后执行: {具体任务}</span></span></code></pre></div><p><strong>好处</strong>:</p><ul><li>AI 理解项目上下文</li><li>生成的代码符合团队规范</li><li>减少后续调整</li></ul><hr><h3 id="_2-2-多人协作最佳实践" tabindex="-1">2.2 多人协作最佳实践 <a class="header-anchor" href="#_2-2-多人协作最佳实践" aria-label="Permalink to &quot;2.2 多人协作最佳实践&quot;">​</a></h3><h4 id="实践-1-使用-git-分支隔离" tabindex="-1">实践 1: 使用 Git 分支隔离 <a class="header-anchor" href="#实践-1-使用-git-分支隔离" aria-label="Permalink to &quot;实践 1: 使用 Git 分支隔离&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;"># 每个人在自己的分支上使用 Claude Code</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">git</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> checkout</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> -b</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> feature/user-payment</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;"># 完成后合并</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">git</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> checkout</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> main</span></span>
<span class="line"><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">git</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> merge</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> feature/user-payment</span></span></code></pre></div><p><strong>好处</strong>:</p><ul><li>避免冲突</li><li>便于代码审查</li><li>可以回滚</li></ul><hr><h4 id="实践-2-记录关键决策" tabindex="-1">实践 2: 记录关键决策 <a class="header-anchor" href="#实践-2-记录关键决策" aria-label="Permalink to &quot;实践 2: 记录关键决策&quot;">​</a></h4><p>在 CLAUDE.md 或 DESIGN.md 中记录：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">## </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">关键决策</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">### </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">2025-10-22: 计费方式设计</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#39ADB5;--shiki-light-font-weight:bold;--shiki-dark:#89DDFF;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#E53935;--shiki-light-font-weight:bold;--shiki-dark:#F07178;--shiki-dark-font-weight:bold;">问题</span><span style="--shiki-light:#39ADB5;--shiki-light-font-weight:bold;--shiki-dark:#89DDFF;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: 需要支持多种计费方式</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#39ADB5;--shiki-light-font-weight:bold;--shiki-dark:#89DDFF;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#E53935;--shiki-light-font-weight:bold;--shiki-dark:#F07178;--shiki-dark-font-weight:bold;">方案</span><span style="--shiki-light:#39ADB5;--shiki-light-font-weight:bold;--shiki-dark:#89DDFF;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: 采用策略模式</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#39ADB5;--shiki-light-font-weight:bold;--shiki-dark:#89DDFF;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#E53935;--shiki-light-font-weight:bold;--shiki-dark:#F07178;--shiki-dark-font-weight:bold;">理由</span><span style="--shiki-light:#39ADB5;--shiki-light-font-weight:bold;--shiki-dark:#89DDFF;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: 便于扩展新计费方式</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#39ADB5;--shiki-light-font-weight:bold;--shiki-dark:#89DDFF;--shiki-dark-font-weight:bold;"> **</span><span style="--shiki-light:#E53935;--shiki-light-font-weight:bold;--shiki-dark:#F07178;--shiki-dark-font-weight:bold;">负责人</span><span style="--shiki-light:#39ADB5;--shiki-light-font-weight:bold;--shiki-dark:#89DDFF;--shiki-dark-font-weight:bold;">**</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">: 张三</span></span></code></pre></div><p><strong>好处</strong>:</p><ul><li>其他成员了解背景</li><li>避免重复讨论</li><li>便于追溯</li></ul><hr><h4 id="实践-3-代码审查清单" tabindex="-1">实践 3: 代码审查清单 <a class="header-anchor" href="#实践-3-代码审查清单" aria-label="Permalink to &quot;实践 3: 代码审查清单&quot;">​</a></h4><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">## </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">Code Review 清单</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">在提交 PR 前，使用 Claude Code 检查：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] 代码符合 CLAUDE.md 规范</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] 没有硬编码的配置</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] 错误处理完善</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] 添加了必要的注释</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] 没有 TODO 遗留</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] 测试覆盖关键逻辑</span></span></code></pre></div><p><strong>提示词</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@api/v1/user.go @service/user.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请检查以上代码是否符合 @CLAUDE.md 的规范</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【检查项】</span></span>
<span class="line"><span>- 命名规范</span></span>
<span class="line"><span>- 分层规范</span></span>
<span class="line"><span>- 错误处理</span></span>
<span class="line"><span>- 注释完整性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出检查报告，不要写代码</span></span></code></pre></div><hr><h3 id="_2-3-代码风格统一" tabindex="-1">2.3 代码风格统一 <a class="header-anchor" href="#_2-3-代码风格统一" aria-label="Permalink to &quot;2.3 代码风格统一&quot;">​</a></h3><h4 id="学习参考风格" tabindex="-1">学习参考风格 <a class="header-anchor" href="#学习参考风格" aria-label="Permalink to &quot;学习参考风格&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>读取 @user_benefit 模块的代码，分析其编码风格</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【需要提取的规范】</span></span>
<span class="line"><span>- 文件命名规范</span></span>
<span class="line"><span>- 结构体命名</span></span>
<span class="line"><span>- 函数命名</span></span>
<span class="line"><span>- 注释风格</span></span>
<span class="line"><span>- 错误处理方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>整理后更新到 CLAUDE.md，后续所有代码都遵循此规范</span></span></code></pre></div><hr><h4 id="应用风格" tabindex="-1">应用风格 <a class="header-anchor" href="#应用风格" aria-label="Permalink to &quot;应用风格&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>采用方案 A，开始编码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【要求】</span></span>
<span class="line"><span>- 严格遵循 CLAUDE.md 中的规范</span></span>
<span class="line"><span>- 参考 user_benefit 模块的实现方式</span></span>
<span class="line"><span>- 特别注意错误处理要使用 pkg/errors</span></span></code></pre></div><hr><h2 id="第三部分-上下文管理策略" tabindex="-1">第三部分：上下文管理策略 <a class="header-anchor" href="#第三部分-上下文管理策略" aria-label="Permalink to &quot;第三部分：上下文管理策略&quot;">​</a></h2><h3 id="_3-1-何时清空上下文" tabindex="-1">3.1 何时清空上下文 <a class="header-anchor" href="#_3-1-何时清空上下文" aria-label="Permalink to &quot;3.1 何时清空上下文&quot;">​</a></h3><h4 id="应该清空的场景" tabindex="-1">应该清空的场景 <a class="header-anchor" href="#应该清空的场景" aria-label="Permalink to &quot;应该清空的场景&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>✅ 场景 1: 切换到完全不同的任务</span></span>
<span class="line"><span>   - 从订单模块切换到用户模块</span></span>
<span class="line"><span>   - 从开发切换到 Bug 修复</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 场景 2: 对话超过 50 轮</span></span>
<span class="line"><span>   - 上下文过长</span></span>
<span class="line"><span>   - AI 开始混淆</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 场景 3: AI 开始混淆上下文</span></span>
<span class="line"><span>   - 提到不存在的文件</span></span>
<span class="line"><span>   - 方案前后矛盾</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 场景 4: 完成一个完整流程后</span></span>
<span class="line"><span>   - 新功能开发完成</span></span>
<span class="line"><span>   - 重构完成</span></span></code></pre></div><hr><h4 id="不应该清空的场景" tabindex="-1">不应该清空的场景 <a class="header-anchor" href="#不应该清空的场景" aria-label="Permalink to &quot;不应该清空的场景&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>❌ 场景 1: 任务进行中</span></span>
<span class="line"><span>   - 会丢失重要上下文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>❌ 场景 2: 仅仅换了个文件</span></span>
<span class="line"><span>   - 如果还是同一任务，不要清空</span></span>
<span class="line"><span></span></span>
<span class="line"><span>❌ 场景 3: 对结果不满意</span></span>
<span class="line"><span>   - 应该纠正，而非清空重来</span></span></code></pre></div><hr><h3 id="_3-2-清空后快速恢复" tabindex="-1">3.2 清空后快速恢复 <a class="header-anchor" href="#_3-2-清空后快速恢复" aria-label="Permalink to &quot;3.2 清空后快速恢复&quot;">​</a></h3><h4 id="方法-1-任务摘要恢复" tabindex="-1">方法 1: 任务摘要恢复 <a class="header-anchor" href="#方法-1-任务摘要恢复" aria-label="Permalink to &quot;方法 1: 任务摘要恢复&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>继续订单模块开发</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【上次进度】</span></span>
<span class="line"><span>- 已完成: Model 层、Service 层</span></span>
<span class="line"><span>- 当前: 需要完成 API 层</span></span>
<span class="line"><span>- 关键决策: 采用方案 B（统一订单入口）</span></span>
<span class="line"><span>- 技术选型: 使用事务保证一致性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请先复述关键决策，然后继续 API 层开发</span></span></code></pre></div><p><strong>要点</strong>:</p><ul><li>简明扼要说明进度</li><li>强调关键决策</li><li>明确下一步任务</li></ul><hr><h4 id="方法-2-文件恢复" tabindex="-1">方法 2: 文件恢复 <a class="header-anchor" href="#方法-2-文件恢复" aria-label="Permalink to &quot;方法 2: 文件恢复&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@WORKFLOW.md 记录了当前任务进度</span></span>
<span class="line"><span>@CLAUDE.md 记录了项目规范</span></span>
<span class="line"><span></span></span>
<span class="line"><span>继续当前任务</span></span></code></pre></div><p><strong>WORKFLOW.md 示例</strong>:</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"># </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">当前任务</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">## </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">2025-10-22: 实现功能计费模块</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">### </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">进度</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> [</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;">x</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 需求分析</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> [</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;">x</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 方案设计（采用方案 B）</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] 编码实施 (进行中)</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">  -</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> [</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;">x</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> Model 层</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">  -</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> [</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;">x</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">]</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> Service 层</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">  -</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] API 层</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">### </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">关键决策</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 采用方案 B: 统一订单入口</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 使用事务保证次数扣减和订单创建的一致性</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> 会员价 = 原价时不展示会员标签</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">### </span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">待办</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] 完成 API 层开发</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] 补充 Service 层单元测试</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">-</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> [ ] 生成 API 文档</span></span></code></pre></div><hr><h3 id="_3-3-长任务的上下文管理" tabindex="-1">3.3 长任务的上下文管理 <a class="header-anchor" href="#_3-3-长任务的上下文管理" aria-label="Permalink to &quot;3.3 长任务的上下文管理&quot;">​</a></h3><h4 id="策略-1-分模块管理" tabindex="-1">策略 1: 分模块管理 <a class="header-anchor" href="#策略-1-分模块管理" aria-label="Permalink to &quot;策略 1: 分模块管理&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 第 1 次会话: 完成 Model 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>开发 Function 模块的 Model 层</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>请将 Model 层的设计要点记录到 DESIGN.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 第 2 次会话: 完成 Service 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@DESIGN.md 中有 Model 层的设计</span></span>
<span class="line"><span>继续开发 Service 层</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>请更新 DESIGN.md，补充 Service 层设计</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 第 3 次会话: 完成 API 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@DESIGN.md 中有前两层的设计</span></span>
<span class="line"><span>继续开发 API 层</span></span></code></pre></div><hr><h4 id="策略-2-使用检查点" tabindex="-1">策略 2: 使用检查点 <a class="header-anchor" href="#策略-2-使用检查点" aria-label="Permalink to &quot;策略 2: 使用检查点&quot;">​</a></h4><p>每完成一个阶段，创建检查点：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 完成 Service 层后</span></span>
<span class="line"><span>当前 Service 层已完成，请输出：</span></span>
<span class="line"><span>1. 已实现的功能清单</span></span>
<span class="line"><span>2. 关键设计决策</span></span>
<span class="line"><span>3. 下一步 API 层需要注意的事项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（将输出保存到 CHECKPOINT.md）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 下次会话开始时</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@CHECKPOINT.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>继续 API 层开发</span></span></code></pre></div><hr><h3 id="_3-4-避免上下文污染" tabindex="-1">3.4 避免上下文污染 <a class="header-anchor" href="#_3-4-避免上下文污染" aria-label="Permalink to &quot;3.4 避免上下文污染&quot;">​</a></h3><h4 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h4><p>上下文中包含过多不相关信息：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 错误示例</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【第 1-20 轮】讨论用户模块</span></span>
<span class="line"><span>【第 21-40 轮】讨论订单模块（上下文中仍有用户模块信息）</span></span>
<span class="line"><span>【第 41-60 轮】讨论支付模块（上下文中仍有前两个模块信息）</span></span></code></pre></div><p>结果: AI 开始混淆三个模块</p><hr><h4 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h4><p><strong>方法 1</strong>: 及时清空</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 用户模块完成后</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开始订单模块</span></span>
<span class="line"><span>讨论订单模块需求</span></span></code></pre></div><p><strong>方法 2</strong>: 使用文件串联</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 第 1 次会话</span></span>
<span class="line"><span>讨论用户模块</span></span>
<span class="line"><span>（将设计输出到 USER_DESIGN.md）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 第 2 次会话</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@USER_DESIGN.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用户模块已完成，现在开始订单模块</span></span>
<span class="line"><span>（订单模块需要引用用户设计时，AI 会读取文件）</span></span></code></pre></div><hr><h2 id="第四部分-性能优化实践" tabindex="-1">第四部分：性能优化实践 <a class="header-anchor" href="#第四部分-性能优化实践" aria-label="Permalink to &quot;第四部分：性能优化实践&quot;">​</a></h2><h3 id="_4-1-识别性能瓶颈" tabindex="-1">4.1 识别性能瓶颈 <a class="header-anchor" href="#_4-1-识别性能瓶颈" aria-label="Permalink to &quot;4.1 识别性能瓶颈&quot;">​</a></h3><h4 id="使用-ai-分析性能" tabindex="-1">使用 AI 分析性能 <a class="header-anchor" href="#使用-ai-分析性能" aria-label="Permalink to &quot;使用 AI 分析性能&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@service/order.go#L50-150</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分析这段代码的性能瓶颈，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【分析维度】</span></span>
<span class="line"><span>1. 是否存在 N+1 查询</span></span>
<span class="line"><span>2. 是否有不必要的数据库查询</span></span>
<span class="line"><span>3. 是否有循环中的重复计算</span></span>
<span class="line"><span>4. 是否可以使用缓存</span></span></code></pre></div><hr><h3 id="_4-2-优化-n-1-查询" tabindex="-1">4.2 优化 N+1 查询 <a class="header-anchor" href="#_4-2-优化-n-1-查询" aria-label="Permalink to &quot;4.2 优化 N+1 查询&quot;">​</a></h3><h4 id="场景-1" tabindex="-1">场景 <a class="header-anchor" href="#场景-1" aria-label="Permalink to &quot;场景&quot;">​</a></h4><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">// ❌ N+1 查询</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">func</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;"> GetOrders</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#BABED8;--shiki-dark-font-style:italic;">userID</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> int</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> []</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">Order</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">    orders </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:=</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> model</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;">GetOrdersByUser</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">userID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">  // 1 次查询</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-light-font-style:italic;--shiki-dark:#89DDFF;--shiki-dark-font-style:italic;">    for</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> i</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> order </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:=</span><span style="--shiki-light:#39ADB5;--shiki-light-font-style:italic;--shiki-dark:#89DDFF;--shiki-dark-font-style:italic;"> range</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> orders </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">{</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">        user </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:=</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> model</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;">GetUserByID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">order</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">UserID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">  // N 次查询</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">        orders</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">[</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">i</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">].</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">UserName </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> user</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">Name</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-light-font-style:italic;--shiki-dark:#89DDFF;--shiki-dark-font-style:italic;">    return</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> orders</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><h4 id="优化提示词" tabindex="-1">优化提示词 <a class="header-anchor" href="#优化提示词" aria-label="Permalink to &quot;优化提示词&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@service/order.go#L50-80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里存在 N+1 查询问题，优化为批量查询</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【优化要求】</span></span>
<span class="line"><span>1. 收集所有 user_id</span></span>
<span class="line"><span>2. 批量查询 users 表</span></span>
<span class="line"><span>3. 在内存中组装数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出优化方案，不要写代码</span></span></code></pre></div><hr><h3 id="_4-3-添加缓存" tabindex="-1">4.3 添加缓存 <a class="header-anchor" href="#_4-3-添加缓存" aria-label="Permalink to &quot;4.3 添加缓存&quot;">​</a></h3><h4 id="适用场景判断" tabindex="-1">适用场景判断 <a class="header-anchor" href="#适用场景判断" aria-label="Permalink to &quot;适用场景判断&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@service/function.go#L30-50</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GetFunctionList 函数适合加缓存吗？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【判断标准】</span></span>
<span class="line"><span>- 读多写少？</span></span>
<span class="line"><span>- 数据一致性要求？</span></span>
<span class="line"><span>- 数据量大小？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请分析并给出建议，不要写代码</span></span></code></pre></div><hr><h4 id="实施缓存" tabindex="-1">实施缓存 <a class="header-anchor" href="#实施缓存" aria-label="Permalink to &quot;实施缓存&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>为 GetFunctionList 添加 Redis 缓存</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【缓存策略】</span></span>
<span class="line"><span>- key: function_list_{platform}</span></span>
<span class="line"><span>- 过期时间: 30 分钟</span></span>
<span class="line"><span>- 更新策略: 被动更新</span></span>
<span class="line"><span>- 穿透保护: 空结果缓存 5 分钟</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请先说明实施步骤，不要写代码</span></span></code></pre></div><hr><h3 id="_4-4-异步处理" tabindex="-1">4.4 异步处理 <a class="header-anchor" href="#_4-4-异步处理" aria-label="Permalink to &quot;4.4 异步处理&quot;">​</a></h3><h4 id="场景-2" tabindex="-1">场景 <a class="header-anchor" href="#场景-2" aria-label="Permalink to &quot;场景&quot;">​</a></h4><p>订单创建后发送通知邮件，邮件服务慢导致接口响应慢。</p><h4 id="优化提示词-1" tabindex="-1">优化提示词 <a class="header-anchor" href="#优化提示词-1" aria-label="Permalink to &quot;优化提示词&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@service/order.go#L100-120</span></span>
<span class="line"><span></span></span>
<span class="line"><span>订单创建后发送邮件，改为异步</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【方案要求】</span></span>
<span class="line"><span>1. 订单创建成功后，发送消息到队列</span></span>
<span class="line"><span>2. 异步 worker 从队列消费，发送邮件</span></span>
<span class="line"><span>3. 失败重试机制</span></span>
<span class="line"><span>4. 监控队列堆积</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出完整方案，不要写代码</span></span></code></pre></div><hr><h2 id="第五部分-案例研究" tabindex="-1">第五部分：案例研究 <a class="header-anchor" href="#第五部分-案例研究" aria-label="Permalink to &quot;第五部分：案例研究&quot;">​</a></h2><h3 id="_5-1-案例-1-大型功能开发" tabindex="-1">5.1 案例 1: 大型功能开发 <a class="header-anchor" href="#_5-1-案例-1-大型功能开发" aria-label="Permalink to &quot;5.1 案例 1: 大型功能开发&quot;">​</a></h3><h4 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h4><p>开发一个完整的会员权益系统，包括：</p><ul><li>会员等级管理</li><li>权益配置</li><li>权益消费记录</li><li>统计报表</li></ul><hr><h4 id="实施过程" tabindex="-1">实施过程 <a class="header-anchor" href="#实施过程" aria-label="Permalink to &quot;实施过程&quot;">​</a></h4><p><strong>阶段 1: 整体规划</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设计会员权益系统</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【功能范围】</span></span>
<span class="line"><span>1. 会员等级管理（青铜/白银/黄金/钻石）</span></span>
<span class="line"><span>2. 权益配置（每个等级的权益）</span></span>
<span class="line"><span>3. 权益消费记录</span></span>
<span class="line"><span>4. 统计报表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【技术要求】</span></span>
<span class="line"><span>- 使用现有的三层架构</span></span>
<span class="line"><span>- 权益要可动态配置</span></span>
<span class="line"><span>- 支持权益过期</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出：</span></span>
<span class="line"><span>1. 数据库设计</span></span>
<span class="line"><span>2. 模块划分</span></span>
<span class="line"><span>3. 实施计划（分几个会话完成）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将设计输出到 MEMBER_DESIGN.md</span></span></code></pre></div><hr><p><strong>阶段 2-5: 分模块实施</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 会话 2: Model 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@MEMBER_DESIGN.md</span></span>
<span class="line"><span>实施 Model 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 3: Service 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@MEMBER_DESIGN.md</span></span>
<span class="line"><span>实施 Service 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 4: API 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@MEMBER_DESIGN.md</span></span>
<span class="line"><span>实施 API 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 5: 统计报表</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@MEMBER_DESIGN.md</span></span>
<span class="line"><span>实施统计报表功能</span></span></code></pre></div><hr><p><strong>阶段 6: 集成测试</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>会员权益系统开发完成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【测试要点】</span></span>
<span class="line"><span>1. 会员升级逻辑</span></span>
<span class="line"><span>2. 权益消费扣减</span></span>
<span class="line"><span>3. 权益过期处理</span></span>
<span class="line"><span>4. 统计数据准确性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请列出完整测试清单</span></span></code></pre></div><hr><h4 id="关键收获" tabindex="-1">关键收获 <a class="header-anchor" href="#关键收获" aria-label="Permalink to &quot;关键收获&quot;">​</a></h4><p><strong>项目规模</strong>:</p><ul><li>会话数: 6 个</li><li>代码量: 约 2000 行</li></ul><p><strong>关键成功因素</strong>:</p><ul><li>✅ 详细的前期设计</li><li>✅ 分模块实施</li><li>✅ 使用文件串联会话</li><li>✅ 及时的测试验证</li></ul><hr><h3 id="_5-2-案例-2-紧急-bug-修复" tabindex="-1">5.2 案例 2: 紧急 Bug 修复 <a class="header-anchor" href="#_5-2-案例-2-紧急-bug-修复" aria-label="Permalink to &quot;5.2 案例 2: 紧急 Bug 修复&quot;">​</a></h3><h4 id="背景-1" tabindex="-1">背景 <a class="header-anchor" href="#背景-1" aria-label="Permalink to &quot;背景&quot;">​</a></h4><p><strong>线上故障</strong>: 用户支付成功，但订单状态未更新</p><p><strong>影响</strong>: 用户无法使用已购买的功能</p><p><strong>要求</strong>: 紧急修复</p><hr><h4 id="实施过程-1" tabindex="-1">实施过程 <a class="header-anchor" href="#实施过程-1" aria-label="Permalink to &quot;实施过程&quot;">​</a></h4><p><strong>第 1 步: 快速定位</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>紧急 Bug 需要快速定位</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【问题描述】</span></span>
<span class="line"><span>用户支付成功，但订单状态未更新为&quot;已支付&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【已知信息】</span></span>
<span class="line"><span>- 支付回调收到了</span></span>
<span class="line"><span>- 订单表中状态仍是&quot;待支付&quot;</span></span>
<span class="line"><span>- 用户无法使用功能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【相关代码】</span></span>
<span class="line"><span>@api/v1/payment_callback.go</span></span>
<span class="line"><span>@service/order.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请快速分析可能的原因，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【优先级】</span></span>
<span class="line"><span>1. 是否有事务问题？</span></span>
<span class="line"><span>2. 是否有异常未捕获？</span></span>
<span class="line"><span>3. 是否有并发问题？</span></span></code></pre></div><hr><p><strong>第 2 步: 根因分析</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>基于代码分析，我发现问题：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【问题】</span></span>
<span class="line"><span>支付回调中更新订单状态时抛出异常，但异常被吞掉了，</span></span>
<span class="line"><span>事务回滚导致状态未更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【验证方式】</span></span>
<span class="line"><span>查看日志中是否有异常记录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出详细的问题说明</span></span></code></pre></div><hr><p><strong>第 3 步: 快速修复</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>采用最小修复方案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【修复内容】</span></span>
<span class="line"><span>1. 添加异常捕获和日志记录</span></span>
<span class="line"><span>2. 确保订单状态更新在事务中正确提交</span></span>
<span class="line"><span>3. 添加重试机制</span></span>
<span class="line"><span></span></span>
<span class="line"><span>开始修复</span></span></code></pre></div><hr><p><strong>第 4 步: 验证和部署</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>修复完成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【验证清单】</span></span>
<span class="line"><span>- [ ] 本地测试支付回调</span></span>
<span class="line"><span>- [ ] 测试环境验证</span></span>
<span class="line"><span>- [ ] 代码审查</span></span>
<span class="line"><span>- [ ] 准备回滚方案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出验证步骤</span></span></code></pre></div><hr><h4 id="关键收获-1" tabindex="-1">关键收获 <a class="header-anchor" href="#关键收获-1" aria-label="Permalink to &quot;关键收获&quot;">​</a></h4><p><strong>修复效果</strong>:</p><ul><li>代码变更: 10 行</li><li>影响范围: 最小化</li></ul><p><strong>关键成功因素</strong>:</p><ul><li>✅ 快速聚焦核心问题</li><li>✅ 最小化修复</li><li>✅ 完善的验证流程</li></ul><hr><h3 id="_5-3-案例-3-系统性重构" tabindex="-1">5.3 案例 3: 系统性重构 <a class="header-anchor" href="#_5-3-案例-3-系统性重构" aria-label="Permalink to &quot;5.3 案例 3: 系统性重构&quot;">​</a></h3><h4 id="背景-2" tabindex="-1">背景 <a class="header-anchor" href="#背景-2" aria-label="Permalink to &quot;背景&quot;">​</a></h4><p>订单模块代码混乱，需要重构为清晰的三层架构。</p><p><strong>当前问题</strong>:</p><ul><li>API 层包含业务逻辑</li><li>Service 层包含数据库操作</li><li>没有统一的错误处理</li></ul><hr><h4 id="实施过程-2" tabindex="-1">实施过程 <a class="header-anchor" href="#实施过程-2" aria-label="Permalink to &quot;实施过程&quot;">​</a></h4><p><strong>阶段 1: 全面分析</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@api/v1/order.go</span></span>
<span class="line"><span>@service/order.go</span></span>
<span class="line"><span>@service/payment.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这 3 个文件职责混乱，需要重构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【分析任务】</span></span>
<span class="line"><span>1. 识别每个文件的职责问题</span></span>
<span class="line"><span>2. 梳理正确的分层架构</span></span>
<span class="line"><span>3. 制定重构计划</span></span>
<span class="line"><span>4. 评估风险点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请将分析结果输出到 REFACTOR.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不要写代码</span></span></code></pre></div><hr><p><strong>阶段 2-4: 分层重构</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 会话 2: Model 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@REFACTOR.md</span></span>
<span class="line"><span>重构 Model 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【要求】</span></span>
<span class="line"><span>- 只包含数据库操作</span></span>
<span class="line"><span>- 使用结构体方法</span></span>
<span class="line"><span>- 每个表一个文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 3: Service 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@REFACTOR.md</span></span>
<span class="line"><span>重构 Service 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【要求】</span></span>
<span class="line"><span>- 业务逻辑集中</span></span>
<span class="line"><span>- 调用 Model 层</span></span>
<span class="line"><span>- 统一错误处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 会话 4: API 层</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span>@REFACTOR.md</span></span>
<span class="line"><span>重构 API 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【要求】</span></span>
<span class="line"><span>- 参数校验</span></span>
<span class="line"><span>- 响应组装</span></span>
<span class="line"><span>- 调用 Service 层</span></span></code></pre></div><hr><p><strong>阶段 5: 回归测试</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重构完成，进行回归测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【测试范围】</span></span>
<span class="line"><span>- 所有订单相关接口</span></span>
<span class="line"><span>- 边界情况</span></span>
<span class="line"><span>- 性能对比</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请列出完整测试清单</span></span></code></pre></div><hr><h4 id="关键收获-2" tabindex="-1">关键收获 <a class="header-anchor" href="#关键收获-2" aria-label="Permalink to &quot;关键收获&quot;">​</a></h4><p><strong>重构成果</strong>:</p><ul><li>代码变更: 1500 行</li><li>Bug 修复: 0（重构过程中未引入新 Bug）</li></ul><p><strong>关键成功因素</strong>:</p><ul><li>✅ 详细的前期分析</li><li>✅ 分层逐步重构</li><li>✅ 完善的测试保障</li><li>✅ 保持向后兼容</li></ul><hr><h2 id="🎓-学习总结" tabindex="-1">🎓 学习总结 <a class="header-anchor" href="#🎓-学习总结" aria-label="Permalink to &quot;🎓 学习总结&quot;">​</a></h2><h3 id="你已经掌握" tabindex="-1">你已经掌握 <a class="header-anchor" href="#你已经掌握" aria-label="Permalink to &quot;你已经掌握&quot;">​</a></h3><p>✅ <strong>复杂场景处理</strong></p><ul><li>流程组合（串行/并行）</li><li>长任务拆分策略</li><li>多模块协作技巧</li></ul><p>✅ <strong>团队协作</strong></p><ul><li>建立 CLAUDE.md 规范</li><li>多人协作最佳实践</li><li>代码风格统一</li></ul><p>✅ <strong>上下文管理</strong></p><ul><li>何时清空上下文</li><li>清空后快速恢复</li><li>避免上下文污染</li></ul><p>✅ <strong>性能优化</strong></p><ul><li>识别性能瓶颈</li><li>优化 N+1 查询</li><li>缓存和异步处理</li></ul><p>✅ <strong>实战经验</strong></p><ul><li>大型功能开发流程</li><li>紧急 Bug 修复技巧</li><li>系统性重构方法</li></ul><hr><h3 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to &quot;下一步&quot;">​</a></h3><h4 id="实践建议" tabindex="-1">实践建议 <a class="header-anchor" href="#实践建议" aria-label="Permalink to &quot;实践建议&quot;">​</a></h4><ol><li><p><strong>选择一个真实项目</strong></p><ul><li>使用学到的技巧</li><li>建立项目的 CLAUDE.md</li><li>记录最佳实践</li></ul></li><li><p><strong>分享给团队</strong></p><ul><li>组织内部培训</li><li>建立团队规范</li><li>持续优化流程</li></ul></li><li><p><strong>持续学习</strong></p><ul><li>探索更多场景</li><li>总结经验教训</li><li>贡献到团队知识库</li></ul></li></ol><hr><h3 id="参考资源" tabindex="-1">参考资源 <a class="header-anchor" href="#参考资源" aria-label="Permalink to &quot;参考资源&quot;">​</a></h3><table tabindex="0"><thead><tr><th>资源</th><th>用途</th></tr></thead><tbody><tr><td><a href="./快速上手教程.html">快速上手教程</a></td><td>复习基础知识</td></tr><tr><td><a href="./实战指南.html">实战指南</a></td><td>查找具体场景</td></tr><tr><td><a href="./ClaudeCode.html">ClaudeCode.md</a></td><td>查询模板语法</td></tr><tr><td><a href="./README.html">README.md</a></td><td>文档导航</td></tr></tbody></table><hr><p><strong>版本</strong>: v1.1 <strong>最后更新</strong>: 2025-10-23 <strong>适用</strong>: 有 1-2 周基础经验的开发者 <strong>前置</strong>: <a href="./快速上手教程.html">快速上手教程</a></p>`,274)])])}const g=a(l,[["render",e]]);export{k as __pageData,g as default};
