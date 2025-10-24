import{_ as a,c as n,o as p,b3 as i}from"./chunks/framework.CatkIGlB.js";const k=JSON.parse('{"title":"Claude Code 快速上手教程","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"AI/快速上手教程.md","filePath":"AI/快速上手教程.md","lastUpdated":null}'),e={name:"AI/快速上手教程.md"};function l(t,s,h,r,o,c){return p(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="claude-code-快速上手教程" tabindex="-1">Claude Code 快速上手教程 <a class="header-anchor" href="#claude-code-快速上手教程" aria-label="Permalink to &quot;Claude Code 快速上手教程&quot;">​</a></h1><blockquote><p>零基础友好 | 学练结合 | 快速提升 70% 开发效率</p></blockquote><p><strong>学习目标</strong>: 掌握 Claude Code 的核心使用技能，显著提升开发效率</p><p><strong>适用对象</strong>: 从未使用过 Claude Code 的开发者</p><p><strong>学习方式</strong>: 建议按顺序学习，每个章节包含理论 + 实践</p><hr><h2 id="📚-课程大纲" tabindex="-1">📚 课程大纲 <a class="header-anchor" href="#📚-课程大纲" aria-label="Permalink to &quot;📚 课程大纲&quot;">​</a></h2><table tabindex="0"><thead><tr><th>部分</th><th>内容</th><th>形式</th></tr></thead><tbody><tr><td><strong>第一部分</strong></td><td>核心理念</td><td>理论</td></tr><tr><td><strong>第二部分</strong></td><td>必备技能</td><td>理论 + 练习</td></tr><tr><td><strong>第三部分</strong></td><td>实战演练</td><td>场景 + 练习</td></tr><tr><td><strong>第四部分</strong></td><td>快速避坑</td><td>案例</td></tr><tr><td><strong>第五部分</strong></td><td>下一步</td><td>指引</td></tr></tbody></table><hr><h2 id="第一部分-核心理念" tabindex="-1">第一部分：核心理念 <a class="header-anchor" href="#第一部分-核心理念" aria-label="Permalink to &quot;第一部分：核心理念&quot;">​</a></h2><h3 id="_1-1-为什么需要结构化提示词" tabindex="-1">1.1 为什么需要结构化提示词 <a class="header-anchor" href="#_1-1-为什么需要结构化提示词" aria-label="Permalink to &quot;1.1 为什么需要结构化提示词&quot;">​</a></h3><h4 id="传统方式的问题" tabindex="-1">传统方式的问题 <a class="header-anchor" href="#传统方式的问题" aria-label="Permalink to &quot;传统方式的问题&quot;">​</a></h4><p>❌ <strong>问题场景</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>开发者: &quot;帮我写一个订单功能&quot;</span></span>
<span class="line"><span>AI: (生成 500 行代码)</span></span>
<span class="line"><span>开发者: &quot;这个不对，我需要支持会员折扣&quot;</span></span>
<span class="line"><span>AI: (重新生成 500 行代码)</span></span>
<span class="line"><span>开发者: &quot;还要支持免费次数...&quot;</span></span>
<span class="line"><span>AI: (再次重新生成...)</span></span></code></pre></div><p><strong>问题</strong>:</p><ul><li>💸 浪费大量 token</li><li>🔄 反复返工</li><li>😰 代码质量不可控</li><li>⏰ 效率低下</li></ul><hr><h4 id="结构化方式的优势" tabindex="-1">结构化方式的优势 <a class="header-anchor" href="#结构化方式的优势" aria-label="Permalink to &quot;结构化方式的优势&quot;">​</a></h4><p>✅ <strong>正确场景</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>【分析阶段】</span></span>
<span class="line"><span>开发者: &quot;讨论订单功能需求，不要写代码&quot;</span></span>
<span class="line"><span>AI: &quot;理解需求，识别 4 种计费场景...&quot;</span></span>
<span class="line"><span>开发者: &quot;理解正确&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【设计阶段】</span></span>
<span class="line"><span>开发者: &quot;给出 2-3 个实现方案，不要写代码&quot;</span></span>
<span class="line"><span>AI: &quot;方案 A: 统一入口... 方案 B: 分散处理...&quot;</span></span>
<span class="line"><span>开发者: &quot;采用方案 A&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【实施阶段】</span></span>
<span class="line"><span>开发者: &quot;按方案 A 开始编码&quot;</span></span>
<span class="line"><span>AI: &quot;生成符合预期的代码&quot;</span></span>
<span class="line"><span>开发者: &quot;完美！&quot;</span></span></code></pre></div><p><strong>优势</strong>:</p><ul><li>✅ 一次到位，减少返工</li><li>✅ 节省 token 成本</li><li>✅ 代码质量可控</li><li>✅ 效率大幅提升</li></ul><hr><h3 id="_1-2-三段式工作流" tabindex="-1">1.2 三段式工作流 <a class="header-anchor" href="#_1-2-三段式工作流" aria-label="Permalink to &quot;1.2 三段式工作流&quot;">​</a></h3><p>这是 Claude Code 协作的核心方法论：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│  阶段 1: 分析 (Analysis)                 │</span></span>
<span class="line"><span>│  目标: 理解现状、评估可行性               │</span></span>
<span class="line"><span>│  关键词: 解释、分析、不要写代码           │</span></span>
<span class="line"><span>│  时长: 1-2 轮对话                        │</span></span>
<span class="line"><span>├─────────────────────────────────────────┤</span></span>
<span class="line"><span>│  阶段 2: 设计 (Design)                   │</span></span>
<span class="line"><span>│  目标: 制定方案、确认需求                 │</span></span>
<span class="line"><span>│  关键词: 讨论、对比、复述、不要写代码      │</span></span>
<span class="line"><span>│  时长: 2-3 轮对话                        │</span></span>
<span class="line"><span>├─────────────────────────────────────────┤</span></span>
<span class="line"><span>│  阶段 3: 实施 (Implementation)           │</span></span>
<span class="line"><span>│  目标: 编写代码、分步执行                 │</span></span>
<span class="line"><span>│  关键词: 采用方案 X、开始编码            │</span></span>
<span class="line"><span>│  时长: 1-N 轮对话（根据复杂度）           │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span></code></pre></div><h4 id="核心原则" tabindex="-1">核心原则 <a class="header-anchor" href="#核心原则" aria-label="Permalink to &quot;核心原则&quot;">​</a></h4><p><strong>原则 1: 先分析，再设计，后实施</strong></p><ul><li>❌ 不要直接要求写代码</li><li>✅ 先理解现状，讨论方案，最后编码</li></ul><p><strong>原则 2: 关键时刻说&quot;不要写代码&quot;</strong></p><ul><li>分析阶段：必须加</li><li>设计阶段：必须加</li><li>实施阶段：不需要</li></ul><p><strong>原则 3: 使用 @ 精确引用</strong></p><ul><li>❌ &quot;在订单文件的 100 行左右&quot;</li><li>✅ <code>@service/order.go#L100-120</code></li></ul><hr><h3 id="_1-3-为什么这样更高效" tabindex="-1">1.3 为什么这样更高效？ <a class="header-anchor" href="#_1-3-为什么这样更高效" aria-label="Permalink to &quot;1.3 为什么这样更高效？&quot;">​</a></h3><h4 id="效果对比" tabindex="-1">效果对比 <a class="header-anchor" href="#效果对比" aria-label="Permalink to &quot;效果对比&quot;">​</a></h4><table tabindex="0"><thead><tr><th>维度</th><th>传统方式</th><th>三段式工作流</th></tr></thead><tbody><tr><td><strong>返工次数</strong></td><td>3-5 次</td><td>0-1 次</td></tr><tr><td><strong>Token 消耗</strong></td><td>大量</td><td>节省 40-60%</td></tr><tr><td><strong>对话轮数</strong></td><td>15-20 轮</td><td>5-10 轮</td></tr><tr><td><strong>代码质量</strong></td><td>不可控</td><td>可控</td></tr><tr><td><strong>学习曲线</strong></td><td>陡峭</td><td>平缓</td></tr></tbody></table><h4 id="真实案例" tabindex="-1">真实案例 <a class="header-anchor" href="#真实案例" aria-label="Permalink to &quot;真实案例&quot;">​</a></h4><p><strong>任务</strong>: 为订单接口增加会员折扣逻辑</p><p><strong>传统方式</strong>: 12 轮对话，3 次重写 <strong>三段式</strong>: 5 轮对话，一次到位</p><p>节省时间: <strong>70%</strong></p><hr><h2 id="第二部分-必备技能" tabindex="-1">第二部分：必备技能 <a class="header-anchor" href="#第二部分-必备技能" aria-label="Permalink to &quot;第二部分：必备技能&quot;">​</a></h2><h3 id="_2-1-核心语法" tabindex="-1">2.1 核心语法 <a class="header-anchor" href="#_2-1-核心语法" aria-label="Permalink to &quot;2.1 核心语法&quot;">​</a></h3><h4 id="语法-1-文件引用符" tabindex="-1">语法 1: @ 文件引用符 <a class="header-anchor" href="#语法-1-文件引用符" aria-label="Permalink to &quot;语法 1: @ 文件引用符&quot;">​</a></h4><p><strong>作用</strong>: 精确引用文件或代码段</p><p><strong>格式</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@文件路径                    # 引用整个文件</span></span>
<span class="line"><span>@文件路径#L50                # 引用第 50 行</span></span>
<span class="line"><span>@文件路径#L50-80             # 引用第 50-80 行</span></span>
<span class="line"><span>@文件1 @文件2                # 引用多个文件</span></span></code></pre></div><p><strong>示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 引用整个文件</span></span>
<span class="line"><span>@api/v1/order.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 引用特定行</span></span>
<span class="line"><span>@service/user.go#L100</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 引用范围</span></span>
<span class="line"><span>@service/order.go#L50-80</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 引用多个文件</span></span>
<span class="line"><span>@api/v1/order.go @service/order.go</span></span></code></pre></div><p><strong>为什么重要？</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>❌ 错误: &quot;订单文件的第 100 行左右那个函数&quot;</span></span>
<span class="line"><span>   - AI 可能找错位置</span></span>
<span class="line"><span>   - 描述模糊不准确</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ 正确: &quot;@service/order.go#L100-120&quot;</span></span>
<span class="line"><span>   - 精确定位</span></span>
<span class="line"><span>   - 不会出错</span></span></code></pre></div><hr><h4 id="语法-2-关键修饰符" tabindex="-1">语法 2: 关键修饰符 <a class="header-anchor" href="#语法-2-关键修饰符" aria-label="Permalink to &quot;语法 2: 关键修饰符&quot;">​</a></h4><p><strong>修饰符 1: &quot;不要写代码&quot;</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>用途: 限制 AI 只分析讨论，不生成代码</span></span>
<span class="line"><span>使用场景: 分析阶段、设计阶段</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例:</span></span>
<span class="line"><span>@service/order.go#L50-100</span></span>
<span class="line"><span>解释一下订单创建的完整流程，不要写代码</span></span></code></pre></div><p><strong>修饰符 2: &quot;先说明&quot;</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>用途: 要求 AI 先给出方案，等确认后再执行</span></span>
<span class="line"><span>使用场景: 复杂修改前、风险较高的操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例:</span></span>
<span class="line"><span>@api/v1/user.go#L50-80</span></span>
<span class="line"><span>删除 deprecated 字段，先说明影响范围，不要写代码</span></span></code></pre></div><p><strong>修饰符 3: &quot;直接修改&quot;</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>用途: 跳过讨论，立即执行</span></span>
<span class="line"><span>使用场景: 简单操作、已经明确的修改</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例:</span></span>
<span class="line"><span>@model/user.go#L20</span></span>
<span class="line"><span>将 UserID 改为 UID，直接修改</span></span></code></pre></div><hr><h4 id="语法-3-命令符" tabindex="-1">语法 3: / 命令符 <a class="header-anchor" href="#语法-3-命令符" aria-label="Permalink to &quot;语法 3: / 命令符&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear          清空上下文</span></span>
<span class="line"><span>/think          深度思考模式</span></span></code></pre></div><p><strong>使用场景</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>/clear 使用时机:</span></span>
<span class="line"><span>  ✅ 切换到完全不同的任务</span></span>
<span class="line"><span>  ✅ 上下文超过 50 轮对话</span></span>
<span class="line"><span>  ✅ AI 开始混淆之前的内容</span></span>
<span class="line"><span>  ❌ 任务进行中（会丢失上下文）</span></span>
<span class="line"><span>  ❌ 仅仅换了个文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/think 使用时机:</span></span>
<span class="line"><span>  ✅ 复杂的架构设计</span></span>
<span class="line"><span>  ✅ 难以抉择的技术选型</span></span>
<span class="line"><span>  ✅ 需要深度分析的问题</span></span></code></pre></div><hr><h4 id="语法-4-结构化描述" tabindex="-1">语法 4: 结构化描述 <a class="header-anchor" href="#语法-4-结构化描述" aria-label="Permalink to &quot;语法 4: 结构化描述&quot;">​</a></h4><p>使用标识符组织信息：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>【需求背景】</span></span>
<span class="line"><span>现有功能管理页面混乱，需要重新设计</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【功能目标】</span></span>
<span class="line"><span>实现统一的功能管理，包括：</span></span>
<span class="line"><span>- 价格配置</span></span>
<span class="line"><span>- 免费次数设置</span></span>
<span class="line"><span>- 平台支持</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【技术要求】</span></span>
<span class="line"><span>- 响应时间 &lt; 500ms</span></span>
<span class="line"><span>- 支持批量导入</span></span>
<span class="line"><span>- 配置变更要有审计日志</span></span></code></pre></div><p><strong>为什么使用结构化？</strong></p><ul><li>✅ 信息清晰，不遗漏</li><li>✅ AI 更容易理解</li><li>✅ 便于后续追溯</li></ul><hr><h4 id="语法-5-占位符约定" tabindex="-1">语法 5: 占位符约定 <a class="header-anchor" href="#语法-5-占位符约定" aria-label="Permalink to &quot;语法 5: 占位符约定&quot;">​</a></h4><p>在模板中使用占位符：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>{文件}     → api/v1/user.go</span></span>
<span class="line"><span>{行号}     → #L100-120</span></span>
<span class="line"><span>{功能}     → 订单创建逻辑</span></span>
<span class="line"><span>{模块}     → user_benefit</span></span>
<span class="line"><span>{方案X}    → 方案A</span></span>
<span class="line"><span>{字段}     → member_level</span></span></code></pre></div><p><strong>示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>模板:</span></span>
<span class="line"><span>@{文件}#{行号} 解释{功能}，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实际使用:</span></span>
<span class="line"><span>@api/v1/order.go#L50-100 解释订单创建逻辑，不要写代码</span></span></code></pre></div><hr><h3 id="_2-2-三段式工作流实操" tabindex="-1">2.2 三段式工作流实操 <a class="header-anchor" href="#_2-2-三段式工作流实操" aria-label="Permalink to &quot;2.2 三段式工作流实操&quot;">​</a></h3><h4 id="阶段-1-分析" tabindex="-1">阶段 1: 分析 <a class="header-anchor" href="#阶段-1-分析" aria-label="Permalink to &quot;阶段 1: 分析&quot;">​</a></h4><p><strong>目标</strong>: 理解现状，不要盲目修改</p><p><strong>核心模板</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@{文件}#{行号} 解释一下{功能/逻辑}，不要写代码</span></span></code></pre></div><p><strong>完整示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@api/v1/order.go#L50-100</span></span>
<span class="line"><span>解释一下订单创建的完整流程，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请说明：</span></span>
<span class="line"><span>1. 输入参数和返回值</span></span>
<span class="line"><span>2. 核心步骤分解</span></span>
<span class="line"><span>3. 边界条件处理</span></span>
<span class="line"><span>4. 错误处理方式</span></span></code></pre></div><p><strong>AI 会输出</strong>:</p><ul><li>函数的核心逻辑</li><li>关键步骤说明</li><li>边界条件</li><li>潜在问题</li></ul><p><strong>你要做的</strong>:</p><ul><li>确认理解是否正确</li><li>识别遗漏的部分</li><li>决定是否需要看更多代码</li></ul><hr><h4 id="阶段-2-设计" tabindex="-1">阶段 2: 设计 <a class="header-anchor" href="#阶段-2-设计" aria-label="Permalink to &quot;阶段 2: 设计&quot;">​</a></h4><p><strong>目标</strong>: 制定方案，充分讨论</p><p><strong>核心模板</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>讨论需求，不要写代码</span></span>
<span class="line"><span>{详细需求描述}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>有没有更好的方案，不要写代码</span></span></code></pre></div><p><strong>完整示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>讨论需求，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【当前功能】</span></span>
<span class="line"><span>订单创建接口，所有用户统一价格</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【需要增加的逻辑】</span></span>
<span class="line"><span>根据用户类型计费：</span></span>
<span class="line"><span>- 场景 1: 免费功能，直接创建订单</span></span>
<span class="line"><span>- 场景 2: 付费功能，优先扣免费次数</span></span>
<span class="line"><span>- 场景 3: 无免费次数，会员按会员价</span></span>
<span class="line"><span>- 场景 4: 非会员按原价</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【技术要求】</span></span>
<span class="line"><span>- 免费次数扣减和订单创建要在同一事务</span></span>
<span class="line"><span>- 会员价 = 原价时，不显示会员标识</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出 2-3 个实现方案，不要写代码</span></span></code></pre></div><p><strong>AI 会输出</strong>:</p><ul><li>方案 A、B、C</li><li>每个方案的优缺点</li><li>推荐方案和理由</li></ul><p><strong>你要做的</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>采用方案 B，请详细说明实施步骤，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>包括：</span></span>
<span class="line"><span>1. 数据查询顺序</span></span>
<span class="line"><span>2. 判断逻辑</span></span>
<span class="line"><span>3. 事务范围</span></span>
<span class="line"><span>4. 返回字段设计</span></span></code></pre></div><hr><h4 id="阶段-3-实施" tabindex="-1">阶段 3: 实施 <a class="header-anchor" href="#阶段-3-实施" aria-label="Permalink to &quot;阶段 3: 实施&quot;">​</a></h4><p><strong>目标</strong>: 编写代码，分步执行</p><p><strong>核心模板</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>采用方案{X}，开始编码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 遵循 CLAUDE.md 中的规范</span></span>
<span class="line"><span>- {其他约束条件}</span></span></code></pre></div><p><strong>完整示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>采用方案 B，开始编码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【编码规范】</span></span>
<span class="line"><span>- 遵循 CLAUDE.md 中的分层规范</span></span>
<span class="line"><span>- 参考 user_benefit 模块的实现方式</span></span>
<span class="line"><span>- 错误处理统一使用 pkg/errors</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【实施顺序】</span></span>
<span class="line"><span>1. 先完成 Model 层（数据查询）</span></span>
<span class="line"><span>2. 再完成 Service 层（业务逻辑）</span></span>
<span class="line"><span>3. 最后完成 API 层（接口暴露）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>每完成一层暂停，等我确认后继续</span></span></code></pre></div><p><strong>AI 会输出</strong>:</p><ul><li>按顺序生成代码</li><li>每层完成后暂停</li></ul><p><strong>你要做的</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 确认第一层</span></span>
<span class="line"><span>ok，继续 Service 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 确认第二层</span></span>
<span class="line"><span>ok，继续 API 层</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 全部完成</span></span>
<span class="line"><span>完美，生成单元测试</span></span></code></pre></div><hr><h3 id="💡-动手练习-1" tabindex="-1">💡 动手练习 1 <a class="header-anchor" href="#💡-动手练习-1" aria-label="Permalink to &quot;💡 动手练习 1&quot;">​</a></h3><p><strong>任务</strong>: 使用三段式工作流理解一个函数</p><p>假设你有一个文件 <code>service/user.go</code>，其中 L50-100 是用户注册函数。</p><p><strong>请写出</strong>:</p><ol><li>分析阶段的提示词</li><li>设计阶段的提示词（假设要增加手机号验证）</li><li>实施阶段的提示词</li></ol><p><strong>提示</strong>:</p><ul><li>记得使用 @ 引用</li><li>记得加&quot;不要写代码&quot;</li><li>使用结构化描述</li></ul><p><strong>参考答案</strong>（不要偷看，先自己写）:</p><details class="details custom-block"><summary>点击查看参考答案</summary><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>【分析阶段】</span></span>
<span class="line"><span>@service/user.go#L50-100</span></span>
<span class="line"><span>解释一下用户注册函数的完整流程，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请说明：</span></span>
<span class="line"><span>1. 当前的验证逻辑</span></span>
<span class="line"><span>2. 数据存储方式</span></span>
<span class="line"><span>3. 错误处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【设计阶段】</span></span>
<span class="line"><span>讨论需求，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【当前功能】</span></span>
<span class="line"><span>用户注册，验证邮箱后创建账户</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【需要增加】</span></span>
<span class="line"><span>增加手机号验证：</span></span>
<span class="line"><span>- 发送验证码</span></span>
<span class="line"><span>- 验证码 5 分钟有效</span></span>
<span class="line"><span>- 验证通过后才能注册</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请给出实现方案，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【实施阶段】</span></span>
<span class="line"><span>采用你推荐的方案，开始编码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 遵循现有的错误处理方式</span></span>
<span class="line"><span>- 验证码存储在 Redis</span></span>
<span class="line"><span>- 每完成一个函数暂停</span></span></code></pre></div></details><hr><h2 id="第三部分-实战演练" tabindex="-1">第三部分：实战演练 <a class="header-anchor" href="#第三部分-实战演练" aria-label="Permalink to &quot;第三部分：实战演练&quot;">​</a></h2><h3 id="_3-1-场景-1-简单逻辑增加" tabindex="-1">3.1 场景 1: 简单逻辑增加 <a class="header-anchor" href="#_3-1-场景-1-简单逻辑增加" aria-label="Permalink to &quot;3.1 场景 1: 简单逻辑增加&quot;">​</a></h3><h4 id="场景描述" tabindex="-1">场景描述 <a class="header-anchor" href="#场景描述" aria-label="Permalink to &quot;场景描述&quot;">​</a></h4><p><strong>任务</strong>: 在用户信息接口中，如果用户是会员，额外返回会员等级和过期时间</p><p><strong>当前代码</strong>:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">// api/v1/user.go L50-80</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">func</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;"> GetUserInfo</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#BABED8;--shiki-dark-font-style:italic;">c</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> *</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">gin</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">Context</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">    userID </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:=</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> c</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;">GetInt</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;">user_id</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">    user</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> err </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:=</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> model</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;">GetUserByID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">userID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-light-font-style:italic;--shiki-dark:#89DDFF;--shiki-dark-font-style:italic;">    if</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> err </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">!=</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> nil</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">        response</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;">Error</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">c</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> err</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-light-font-style:italic;--shiki-dark:#89DDFF;--shiki-dark-font-style:italic;">        return</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">    response</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;">Success</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">c</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;"> gin</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">H</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">{</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">        &quot;</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;">user_id</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> user</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">ID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">        &quot;</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;">username</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> user</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">Username</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">        &quot;</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;">email</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> user</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">Email</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">    })</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p><strong>需求</strong>: 增加会员信息字段</p><p><strong>复杂度</strong>: 🟢 简单（2-3 轮）</p><hr><h4 id="第-1-轮-理解-设计" tabindex="-1">第 1 轮: 理解 + 设计 <a class="header-anchor" href="#第-1-轮-理解-设计" aria-label="Permalink to &quot;第 1 轮: 理解 + 设计&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@api/v1/user.go#L50-80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【当前功能】</span></span>
<span class="line"><span>获取用户基本信息接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【需要增加】</span></span>
<span class="line"><span>如果用户是会员，额外返回：</span></span>
<span class="line"><span>- member_level: 会员等级</span></span>
<span class="line"><span>- member_expire_at: 会员过期时间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【要求】</span></span>
<span class="line"><span>- 非会员用户不返回这些字段</span></span>
<span class="line"><span>- 使用 omitempty 保持向后兼容</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请先：</span></span>
<span class="line"><span>1. 复述当前函数逻辑</span></span>
<span class="line"><span>2. 说明修改建议</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不要写代码</span></span></code></pre></div><hr><h4 id="第-2-轮-实施" tabindex="-1">第 2 轮: 实施 <a class="header-anchor" href="#第-2-轮-实施" aria-label="Permalink to &quot;第 2 轮: 实施&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>方案合理，开始修改</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 新增字段使用 json:&quot;,omitempty&quot; 标签</span></span>
<span class="line"><span>- 添加注释说明</span></span></code></pre></div><hr><h4 id="关键要点" tabindex="-1">关键要点 <a class="header-anchor" href="#关键要点" aria-label="Permalink to &quot;关键要点&quot;">​</a></h4><p>✅ <strong>正确做法</strong>:</p><ul><li>先理解现状</li><li>使用 omitempty 保持兼容性</li><li>分步执行</li></ul><p>❌ <strong>常见错误</strong>:</p><ul><li>直接要求加字段，没理解现有逻辑</li><li>忘记向后兼容</li><li>没有测试非会员场景</li></ul><hr><h3 id="💡-动手练习-2" tabindex="-1">💡 动手练习 2 <a class="header-anchor" href="#💡-动手练习-2" aria-label="Permalink to &quot;💡 动手练习 2&quot;">​</a></h3><p><strong>任务</strong>: 在商品列表接口中，如果商品有折扣，额外返回折扣信息</p><p><strong>提示</strong>:</p><ol><li>参考场景 1 的流程</li><li>思考：折扣信息包含哪些字段？</li><li>思考：如何判断商品是否有折扣？</li><li>写出完整的 2 轮提示词</li></ol><hr><h3 id="_3-2-场景-2-bug-修复" tabindex="-1">3.2 场景 2: Bug 修复 <a class="header-anchor" href="#_3-2-场景-2-bug-修复" aria-label="Permalink to &quot;3.2 场景 2: Bug 修复&quot;">​</a></h3><h4 id="场景描述-1" tabindex="-1">场景描述 <a class="header-anchor" href="#场景描述-1" aria-label="Permalink to &quot;场景描述&quot;">​</a></h4><p><strong>Bug 现象</strong>: 用户反馈，订单创建后扣了两次免费次数</p><p><strong>问题代码</strong>:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">// service/order.go L100-130</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">func</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;"> CreateOrder</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#BABED8;--shiki-dark-font-style:italic;">userID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#BABED8;--shiki-dark-font-style:italic;"> functionID</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> int</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span><span style="--shiki-light:#9C3EDA;--shiki-dark:#C792EA;"> error</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">    // 查询免费次数</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">    usage </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:=</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> model</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;">GetUsage</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">userID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> functionID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-light-font-style:italic;--shiki-dark:#89DDFF;--shiki-dark-font-style:italic;">    if</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> usage</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">FreeCount </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&gt;</span><span style="--shiki-light:#F76D47;--shiki-dark:#F78C6C;"> 0</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">        // 扣减免费次数</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">        model</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;">DecrementFreeCount</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">userID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> functionID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-light-font-style:italic;--shiki-dark:#676E95;--shiki-dark-font-style:italic;">    // 创建订单</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">    order </span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:=</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> &amp;</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">model</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#E2931D;--shiki-dark:#FFCB6B;">Order</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">{</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">        UserID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> userID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">        FunctionID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> functionID</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-light-font-style:italic;--shiki-dark:#89DDFF;--shiki-dark-font-style:italic;">    return</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;"> model</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6182B8;--shiki-dark:#82AAFF;">CreateOrder</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">(</span><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">order</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">)</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">}</span></span></code></pre></div><p><strong>复杂度</strong>: 🟡 中等（3-4 轮）</p><hr><h4 id="第-1-轮-问题复现" tabindex="-1">第 1 轮: 问题复现 <a class="header-anchor" href="#第-1-轮-问题复现" aria-label="Permalink to &quot;第 1 轮: 问题复现&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>遇到以下问题，请帮助定位</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【问题描述】</span></span>
<span class="line"><span>用户创建订单后，免费次数被扣减了 2 次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【复现步骤】</span></span>
<span class="line"><span>1. 用户有 5 次免费次数</span></span>
<span class="line"><span>2. 创建 1 个订单</span></span>
<span class="line"><span>3. 免费次数变成 3（应该是 4）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【预期行为】</span></span>
<span class="line"><span>创建 1 个订单，免费次数扣减 1 次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【相关代码】</span></span>
<span class="line"><span>@service/order.go#L100-130</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请分析可能的原因，不要写代码</span></span></code></pre></div><hr><h4 id="第-2-轮-根因分析" tabindex="-1">第 2 轮: 根因分析 <a class="header-anchor" href="#第-2-轮-根因分析" aria-label="Permalink to &quot;第 2 轮: 根因分析&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>基于代码分析根本原因，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【分析内容】</span></span>
<span class="line"><span>1. 为什么会扣两次？</span></span>
<span class="line"><span>2. 是否有并发问题？</span></span>
<span class="line"><span>3. 是否缺少事务？</span></span></code></pre></div><hr><h4 id="第-3-轮-修复方案" tabindex="-1">第 3 轮: 修复方案 <a class="header-anchor" href="#第-3-轮-修复方案" aria-label="Permalink to &quot;第 3 轮: 修复方案&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>请给出修复方案，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【方案要求】</span></span>
<span class="line"><span>1. 解决并发问题</span></span>
<span class="line"><span>2. 保证事务一致性</span></span>
<span class="line"><span>3. 最小化改动</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如有多个方案，请对比说明</span></span></code></pre></div><hr><h4 id="第-4-轮-实施修复" tabindex="-1">第 4 轮: 实施修复 <a class="header-anchor" href="#第-4-轮-实施修复" aria-label="Permalink to &quot;第 4 轮: 实施修复&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>采用方案 A（使用事务），开始修复</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 订单创建和次数扣减在同一事务</span></span>
<span class="line"><span>- 添加错误回滚逻辑</span></span></code></pre></div><hr><h4 id="关键要点-1" tabindex="-1">关键要点 <a class="header-anchor" href="#关键要点-1" aria-label="Permalink to &quot;关键要点&quot;">​</a></h4><p>✅ <strong>正确做法</strong>:</p><ul><li>详细描述问题现象</li><li>分析根本原因</li><li>方案要考虑并发</li><li>使用事务保证一致性</li></ul><p>❌ <strong>常见错误</strong>:</p><ul><li>描述不清晰</li><li>没考虑并发场景</li><li>直接要求改代码，没分析原因</li></ul><hr><h3 id="💡-动手练习-3" tabindex="-1">💡 动手练习 3 <a class="header-anchor" href="#💡-动手练习-3" aria-label="Permalink to &quot;💡 动手练习 3&quot;">​</a></h3><p><strong>Bug</strong>: 用户修改密码后，仍然能用旧密码登录</p><p><strong>提示</strong>:</p><ol><li>写出问题复现的提示词</li><li>写出根因分析的提示词</li><li>思考可能的原因（缓存？token？）</li></ol><hr><h3 id="_3-3-场景-3-方案选择" tabindex="-1">3.3 场景 3: 方案选择 <a class="header-anchor" href="#_3-3-场景-3-方案选择" aria-label="Permalink to &quot;3.3 场景 3: 方案选择&quot;">​</a></h3><h4 id="场景描述-2" tabindex="-1">场景描述 <a class="header-anchor" href="#场景描述-2" aria-label="Permalink to &quot;场景描述&quot;">​</a></h4><p><strong>需求</strong>: 系统需要支持多种计费方式（按次、按天、按月、阶梯定价）</p><p><strong>当前</strong>: 只支持按次计费</p><p><strong>复杂度</strong>: 🔴 复杂（4-6 轮）</p><hr><h4 id="第-1-轮-需求讨论" tabindex="-1">第 1 轮: 需求讨论 <a class="header-anchor" href="#第-1-轮-需求讨论" aria-label="Permalink to &quot;第 1 轮: 需求讨论&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>讨论需求，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【背景】</span></span>
<span class="line"><span>当前订单系统只支持按次计费</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【新需求】</span></span>
<span class="line"><span>需要支持 4 种计费方式：</span></span>
<span class="line"><span>1. 按次计费（现有）</span></span>
<span class="line"><span>2. 按天计费（24 小时有效）</span></span>
<span class="line"><span>3. 按月计费（30 天有效）</span></span>
<span class="line"><span>4. 阶梯定价（用量越多，单价越低）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【技术要求】</span></span>
<span class="line"><span>- 不能影响现有按次计费的订单</span></span>
<span class="line"><span>- 需要支持未来新增计费方式</span></span>
<span class="line"><span>- 计费逻辑要可配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请分析：</span></span>
<span class="line"><span>1. 现有架构是否支持</span></span>
<span class="line"><span>2. 需要新增哪些表/字段</span></span>
<span class="line"><span>3. 主要技术难点</span></span></code></pre></div><hr><h4 id="第-2-轮-方案对比" tabindex="-1">第 2 轮: 方案对比 <a class="header-anchor" href="#第-2-轮-方案对比" aria-label="Permalink to &quot;第 2 轮: 方案对比&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>基于以上分析，请提供 2-3 个设计方案，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对比维度：</span></span>
<span class="line"><span>- 实施复杂度</span></span>
<span class="line"><span>- 扩展性</span></span>
<span class="line"><span>- 维护成本</span></span>
<span class="line"><span>- 对现有系统的影响</span></span></code></pre></div><hr><h4 id="第-3-轮-详细设计" tabindex="-1">第 3 轮: 详细设计 <a class="header-anchor" href="#第-3-轮-详细设计" aria-label="Permalink to &quot;第 3 轮: 详细设计&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>采用方案 B（策略模式），请详细说明实施步骤，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>包括：</span></span>
<span class="line"><span>1. 数据库设计（表结构/字段）</span></span>
<span class="line"><span>2. 代码分层设计</span></span>
<span class="line"><span>3. 如何保证向后兼容</span></span>
<span class="line"><span>4. 实施顺序</span></span></code></pre></div><hr><h4 id="第-4-轮-需求确认" tabindex="-1">第 4 轮: 需求确认 <a class="header-anchor" href="#第-4-轮-需求确认" aria-label="Permalink to &quot;第 4 轮: 需求确认&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>请复述以下内容，确认理解一致，不要写代码：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 数据库设计</span></span>
<span class="line"><span>2. 计费策略如何选择</span></span>
<span class="line"><span>3. 如何保证现有订单不受影响</span></span>
<span class="line"><span>4. 新增计费方式的流程</span></span></code></pre></div><hr><h4 id="第-5-6-轮-分步实施" tabindex="-1">第 5-6 轮: 分步实施 <a class="header-anchor" href="#第-5-6-轮-分步实施" aria-label="Permalink to &quot;第 5-6 轮: 分步实施&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>确认无误，开始编码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【实施顺序】</span></span>
<span class="line"><span>1. 先完成数据库变更</span></span>
<span class="line"><span>2. 再完成计费策略接口</span></span>
<span class="line"><span>3. 实现 4 种计费策略</span></span>
<span class="line"><span>4. 修改订单创建逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>每完成一步暂停</span></span></code></pre></div><hr><h4 id="关键要点-2" tabindex="-1">关键要点 <a class="header-anchor" href="#关键要点-2" aria-label="Permalink to &quot;关键要点&quot;">​</a></h4><p>✅ <strong>正确做法</strong>:</p><ul><li>充分的需求讨论</li><li>多个方案对比</li><li>详细的设计阶段</li><li>需求复述确认</li><li>分步实施</li></ul><p>❌ <strong>常见错误</strong>:</p><ul><li>没有方案对比就选定方案</li><li>忽略向后兼容性</li><li>没有考虑扩展性</li><li>一次性实现所有功能</li></ul><hr><h2 id="第四部分-快速避坑" tabindex="-1">第四部分：快速避坑 <a class="header-anchor" href="#第四部分-快速避坑" aria-label="Permalink to &quot;第四部分：快速避坑&quot;">​</a></h2><h3 id="_4-1-五个最常见错误" tabindex="-1">4.1 五个最常见错误 <a class="header-anchor" href="#_4-1-五个最常见错误" aria-label="Permalink to &quot;4.1 五个最常见错误&quot;">​</a></h3><h4 id="错误-1-没理解就修改" tabindex="-1">错误 1: 没理解就修改 <a class="header-anchor" href="#错误-1-没理解就修改" aria-label="Permalink to &quot;错误 1: 没理解就修改&quot;">​</a></h4><p>❌ <strong>错误示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@service/order.go#L50-150</span></span>
<span class="line"><span>帮我在这里加个会员判断逻辑</span></span></code></pre></div><p><strong>问题</strong>:</p><ul><li>AI 不知道插入哪里</li><li>不知道变量是否已初始化</li><li>可能破坏原有流程</li></ul><p>✅ <strong>正确做法</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@service/order.go#L50-150</span></span>
<span class="line"><span>请先解释当前函数的完整逻辑，不要写代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（AI 解释后）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>理解正确，现在在&quot;校验权限&quot;之后插入会员判断逻辑</span></span></code></pre></div><hr><h4 id="错误-2-描述不清晰" tabindex="-1">错误 2: 描述不清晰 <a class="header-anchor" href="#错误-2-描述不清晰" aria-label="Permalink to &quot;错误 2: 描述不清晰&quot;">​</a></h4><p>❌ <strong>错误示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>订单文件的第 100 行左右那个函数，改一下</span></span></code></pre></div><p><strong>问题</strong>:</p><ul><li>位置模糊</li><li>操作不明确</li></ul><p>✅ <strong>正确做法</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@service/order.go#L100-120</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将 OrderType 字段改为 FunctionKey，要求：</span></span>
<span class="line"><span>- 更新所有引用</span></span>
<span class="line"><span>- 保持向后兼容</span></span></code></pre></div><hr><h4 id="错误-3-忽略并发安全" tabindex="-1">错误 3: 忽略并发安全 <a class="header-anchor" href="#错误-3-忽略并发安全" aria-label="Permalink to &quot;错误 3: 忽略并发安全&quot;">​</a></h4><p>❌ <strong>错误示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>帮我实现扣减免费次数的逻辑</span></span></code></pre></div><p><strong>问题</strong>:</p><ul><li>没说明并发场景</li><li>AI 可能生成非并发安全的代码</li></ul><p>✅ <strong>正确做法</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>实现扣减免费次数的逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【并发要求】</span></span>
<span class="line"><span>- 需要并发安全（同一用户可能同时创建多个订单）</span></span>
<span class="line"><span>- 使用数据库事务或乐观锁</span></span>
<span class="line"><span>- 扣减失败要有明确提示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请先说明并发处理方案，不要写代码</span></span></code></pre></div><hr><h4 id="错误-4-破坏兼容性" tabindex="-1">错误 4: 破坏兼容性 <a class="header-anchor" href="#错误-4-破坏兼容性" aria-label="Permalink to &quot;错误 4: 破坏兼容性&quot;">​</a></h4><p>❌ <strong>错误示例</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>删除 user 表的 nickname 字段</span></span></code></pre></div><p><strong>问题</strong>:</p><ul><li>可能有地方还在用</li><li>可能导致线上故障</li></ul><p>✅ <strong>正确做法</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>@model/user.go</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除 nickname 字段前，请先：</span></span>
<span class="line"><span>1. 搜索所有引用该字段的位置</span></span>
<span class="line"><span>2. 评估影响范围</span></span>
<span class="line"><span>3. 给出兼容性迁移方案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不要写代码</span></span></code></pre></div><hr><h4 id="错误-5-上下文混乱" tabindex="-1">错误 5: 上下文混乱 <a class="header-anchor" href="#错误-5-上下文混乱" aria-label="Permalink to &quot;错误 5: 上下文混乱&quot;">​</a></h4><p>❌ <strong>错误现象</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 第 50 轮对话</span></span>
<span class="line"><span>开发者: &quot;继续上一个任务&quot;</span></span>
<span class="line"><span>AI: &quot;混淆了 20 轮前的任务和 40 轮前的任务&quot;</span></span></code></pre></div><p><strong>问题</strong>:</p><ul><li>对话太长</li><li>任务切换没清空上下文</li></ul><p>✅ <strong>正确做法</strong>:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span># 切换任务时</span></span>
<span class="line"><span>/clear</span></span>
<span class="line"><span></span></span>
<span class="line"><span>继续订单模块开发</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【上次进度】</span></span>
<span class="line"><span>- 已完成: Model 层、Service 层</span></span>
<span class="line"><span>- 当前: 需要完成 API 层</span></span>
<span class="line"><span>- 关键决策: 采用方案 B（统一入口）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请先复述关键决策，然后继续</span></span></code></pre></div><hr><h3 id="_4-2-快速检查清单" tabindex="-1">4.2 快速检查清单 <a class="header-anchor" href="#_4-2-快速检查清单" aria-label="Permalink to &quot;4.2 快速检查清单&quot;">​</a></h3><p>在发送提示词前，快速检查：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 是否使用 @ 精确引用了文件？</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 分析/设计阶段是否加了&quot;不要写代码&quot;？</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 需求描述是否清晰完整？</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 是否考虑了并发安全？</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 是否考虑了向后兼容？</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 是否使用结构化描述（【】标识）？</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 复杂修改是否先说明方案？</span></span></code></pre></div><hr><h2 id="第五部分-下一步" tabindex="-1">第五部分：下一步 <a class="header-anchor" href="#第五部分-下一步" aria-label="Permalink to &quot;第五部分：下一步&quot;">​</a></h2><h3 id="_5-1-学习路径" tabindex="-1">5.1 学习路径 <a class="header-anchor" href="#_5-1-学习路径" aria-label="Permalink to &quot;5.1 学习路径&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│ 你现在的位置                             │</span></span>
<span class="line"><span>│ ✅ 掌握了核心理念和语法                   │</span></span>
<span class="line"><span>│ ✅ 学会了三段式工作流                     │</span></span>
<span class="line"><span>│ ✅ 完成了 3 个实战场景                    │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>              ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│ 初级阶段（接下来 1-2 周）                 │</span></span>
<span class="line"><span>│ → 使用实战指南完成实际工作任务             │</span></span>
<span class="line"><span>│ → 熟练掌握 5-10 个常用场景                │</span></span>
<span class="line"><span>│ → 建立团队的 CLAUDE.md 规范文档           │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>              ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│ 中级阶段（1-2 个月后）                    │</span></span>
<span class="line"><span>│ → 学习进阶技巧（流程组合、上下文管理）     │</span></span>
<span class="line"><span>│ → 处理复杂的重构和新功能开发              │</span></span>
<span class="line"><span>│ → 优化团队协作流程                       │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span>
<span class="line"><span>              │</span></span>
<span class="line"><span>              ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────┐</span></span>
<span class="line"><span>│ 高级阶段（3 个月后）                      │</span></span>
<span class="line"><span>│ → 掌握所有高级技巧                       │</span></span>
<span class="line"><span>│ → 能够培训其他团队成员                   │</span></span>
<span class="line"><span>│ → 建立团队最佳实践                       │</span></span>
<span class="line"><span>└─────────────────────────────────────────┘</span></span></code></pre></div><hr><h3 id="_5-2-推荐的下一步行动" tabindex="-1">5.2 推荐的下一步行动 <a class="header-anchor" href="#_5-2-推荐的下一步行动" aria-label="Permalink to &quot;5.2 推荐的下一步行动&quot;">​</a></h3><h4 id="行动-1-完成一个真实任务" tabindex="-1">行动 1: 完成一个真实任务 <a class="header-anchor" href="#行动-1-完成一个真实任务" aria-label="Permalink to &quot;行动 1: 完成一个真实任务&quot;">​</a></h4><p>选择你当前工作中的一个小任务（如：增加一个字段、修复一个 Bug），使用三段式工作流完成它。</p><hr><h4 id="行动-2-根据工作阶段选择合适文档" tabindex="-1">行动 2: 根据工作阶段选择合适文档 <a class="header-anchor" href="#行动-2-根据工作阶段选择合适文档" aria-label="Permalink to &quot;行动 2: 根据工作阶段选择合适文档&quot;">​</a></h4><p><strong>选择指南</strong>:</p><ul><li><p><strong>日常开发任务</strong> → 使用 <a href="./实战指南.html">实战指南.md</a></p><ul><li>快速查找具体场景的完整流程</li><li>适合执行明确的开发任务</li><li>推荐场景：文档项目(场景 1-5)、后端开发(工作流 1-3)、前端开发(工作流 2, 4)</li></ul></li><li><p><strong>遇到复杂问题</strong> → 使用 <a href="./进阶技巧.html">进阶技巧.md</a></p><ul><li>学习如何拆分复杂任务</li><li>掌握上下文管理策略</li><li>适合 1-2 周后有一定经验时使用</li></ul></li></ul><hr><h4 id="行动-3-建立项目的-claude-md" tabindex="-1">行动 3: 建立项目的 CLAUDE.md <a class="header-anchor" href="#行动-3-建立项目的-claude-md" aria-label="Permalink to &quot;行动 3: 建立项目的 CLAUDE.md&quot;">​</a></h4><p>为你的项目创建 CLAUDE.md 文件，记录：</p><ul><li>项目结构</li><li>代码规范</li><li>常用命令</li><li>特殊注意事项</li></ul><p>参考: <a href="./../CLAUDE.html">CLAUDE.md 模板</a></p><hr><h3 id="_5-3-资源速查" tabindex="-1">5.3 资源速查 <a class="header-anchor" href="#_5-3-资源速查" aria-label="Permalink to &quot;5.3 资源速查&quot;">​</a></h3><table tabindex="0"><thead><tr><th>资源</th><th>用途</th><th>何时使用</th></tr></thead><tbody><tr><td><a href="./ClaudeCode.html">ClaudeCode.md</a></td><td>提示词模板库</td><td>查询特定模板语法</td></tr><tr><td><a href="./实战指南.html">实战指南.md</a></td><td>完整场景流程</td><td>执行复杂的多步骤任务</td></tr><tr><td><a href="./README.html">README.md</a></td><td>文档导航</td><td>不确定用哪个文档时</td></tr><tr><td><a href="./../CLAUDE.html">CLAUDE.md</a></td><td>项目规范</td><td>了解项目特定规范</td></tr><tr><td><a href="./进阶技巧.html">进阶技巧.md</a></td><td>高级技巧</td><td>1-2 个月后学习</td></tr></tbody></table><hr><h3 id="_5-4-常见问题" tabindex="-1">5.4 常见问题 <a class="header-anchor" href="#_5-4-常见问题" aria-label="Permalink to &quot;5.4 常见问题&quot;">​</a></h3><h4 id="q1-我应该什么时候使用三段式" tabindex="-1">Q1: 我应该什么时候使用三段式？ <a class="header-anchor" href="#q1-我应该什么时候使用三段式" aria-label="Permalink to &quot;Q1: 我应该什么时候使用三段式？&quot;">​</a></h4><p><strong>答</strong>:</p><ul><li>✅ 复杂度 &gt; 简单修改时</li><li>✅ 不确定如何实现时</li><li>✅ 涉及多个文件协作时</li><li>❌ 非常简单的操作（如改个变量名）可以直接要求</li></ul><hr><h4 id="q2-每次都要三个阶段吗" tabindex="-1">Q2: 每次都要三个阶段吗？ <a class="header-anchor" href="#q2-每次都要三个阶段吗" aria-label="Permalink to &quot;Q2: 每次都要三个阶段吗？&quot;">​</a></h4><p><strong>答</strong>: 不一定</p><ul><li>简单任务: 分析 + 实施（2 轮）</li><li>中等任务: 分析 + 设计 + 实施（3-5 轮）</li><li>复杂任务: 完整三段式（6-10 轮）</li></ul><hr><h4 id="q3-ai-理解错了怎么办" tabindex="-1">Q3: AI 理解错了怎么办？ <a class="header-anchor" href="#q3-ai-理解错了怎么办" aria-label="Permalink to &quot;Q3: AI 理解错了怎么办？&quot;">​</a></h4><p><strong>答</strong>: 使用纠错模板</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>不对，{错误点说明}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>正确理解应该是：</span></span>
<span class="line"><span>{详细说明}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请先复述正确理解，然后重新{操作}</span></span></code></pre></div><hr><h4 id="q4-如何知道我是否掌握了" tabindex="-1">Q4: 如何知道我是否掌握了？ <a class="header-anchor" href="#q4-如何知道我是否掌握了" aria-label="Permalink to &quot;Q4: 如何知道我是否掌握了？&quot;">​</a></h4><p><strong>答</strong>: 自我检查</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes material-theme-lighter material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 能独立使用三段式完成一个中等任务？</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 能准确使用 @ 引用和修饰符？</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 知道何时说&quot;不要写代码&quot;？</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 能识别并避免 5 个常见错误？</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">□ 完成了至少 1 个真实工作任务？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#BABED8;">如果全部打勾，恭喜你已经掌握核心技能！</span></span></code></pre></div><hr><h2 id="🎉-恭喜完成学习" tabindex="-1">🎉 恭喜完成学习！ <a class="header-anchor" href="#🎉-恭喜完成学习" aria-label="Permalink to &quot;🎉 恭喜完成学习！&quot;">​</a></h2><p>你已经掌握了 Claude Code 的核心技能：</p><p>✅ 理解三段式工作流的价值 ✅ 掌握核心语法（@、修饰符、命令） ✅ 能够独立完成简单任务 ✅ 知道如何避免常见错误 ✅ 知道下一步如何提升</p><p><strong>现在就去实践吧！</strong></p><p>记住：</p><ul><li>🎯 先分析，再设计，后实施</li><li>📍 使用 @ 精确引用</li><li>🛑 关键时刻说&quot;不要写代码&quot;</li></ul><hr><p><strong>版本</strong>: v1.1 <strong>最后更新</strong>: 2025-10-23 <strong>下一步</strong>: <a href="./实战指南.html">实战指南.md</a> 或 <a href="./进阶技巧.html">进阶技巧.md</a></p>`,296)])])}const g=a(e,[["render",l]]);export{k as __pageData,g as default};
