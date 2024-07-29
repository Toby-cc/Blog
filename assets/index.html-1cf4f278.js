import{_ as m,r as i,o as b,c as k,a,w as e,b as n,d as s,f as r}from"./app-ab9ebd95.js";const h={},g=n("span",null,"目录",-1),_={class:"catalogue-content"},f=n("br",null,null,-1),x=n("br",null,null,-1),y=n("br",null,null,-1),q=n("br",null,null,-1),w=n("br",null,null,-1),j=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"前言"),n("p",null,"最近突然对个人博客产生了浓厚的兴趣，于是自己的试着用vuepress搭建了一个。并写下了搭建的基本流程，希望能和大家分享一下。")],-1),T=n("h2",{id:"_1、搭建vuepress项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、搭建vuepress项目","aria-hidden":"true"},"#"),s(" 1、搭建Vuepress项目")],-1),z={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},M=n("h3",{id:"_1-1-项目初始化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1-项目初始化","aria-hidden":"true"},"#"),s(" 1.1 项目初始化")],-1),N=n("p",null,"新建一个Vuepress2.X项目文件夹，命名随意，并初始化目录",-1),P=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"git"),s(` init
`),n("span",{class:"token function"},"pnpm"),s(` init
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"git"),s(` init
`),n("span",{class:"token function"},"yarn"),s(` init
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"git"),s(` init
`),n("span",{class:"token function"},"npm"),s(` init
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h3",{id:"_1-2-下载依赖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-2-下载依赖","aria-hidden":"true"},"#"),s(" 1.2 下载依赖")],-1),L=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress@next @vuepress/client@next vue
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=r(`<h3 id="_1-3-配置package" tabindex="-1"><a class="header-anchor" href="#_1-3-配置package" aria-hidden="true">#</a> 1.3 配置package</h3><p>在 package.json 中添加 scripts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;vuepress dev docs&quot;,
    &quot;build&quot;: &quot;vuepress build docs&quot;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-创建你的首页" tabindex="-1"><a class="header-anchor" href="#_1-4-创建你的首页" aria-hidden="true">#</a> 1.4 创建你的首页</h3><p>在项目中新建 README.md，并写下你的第一个页面：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
# 设定该页面是首页还是普通页面
home: true
# 首页的大标题
heroText: My blog
# 首页图片
heroImage: https://vuejs.org/images/logo.png
---

&lt;!-- 内容 --&gt;
这个是我的首页

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-示例" tabindex="-1"><a class="header-anchor" href="#_1-5-示例" aria-hidden="true">#</a> 1.5 示例</h3><p>接下来让我们的博客在本地跑起来</p>`,8),A=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(` docs:dev
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(` docs:dev
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` run docs:dev
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),S=n("p",null,"看看效果：",-1),U=r(`<h3 id="_1-6-markdown格式乱码" tabindex="-1"><a class="header-anchor" href="#_1-6-markdown格式乱码" aria-hidden="true">#</a> 1.6 Markdown格式乱码</h3><blockquote><p>注：<br> 到这一步，有的小伙伴会发现打开的博客页面是乱码<br> 那是因为你的编码格式是 UTF-16 LE 导致的<br> 所以我们把编码格式改为 UTF-8 就好了</p></blockquote><h2 id="_2、vuepress基本配置" tabindex="-1"><a class="header-anchor" href="#_2、vuepress基本配置" aria-hidden="true">#</a> 2、Vuepress基本配置</h2><blockquote><p>只有一个首页是远远不够把博客支撑起来的 为了更好的搭建自己的网站 我们需要对项目做一些配置</p></blockquote><h3 id="_2-1-创建-vuepress目录" tabindex="-1"><a class="header-anchor" href="#_2-1-创建-vuepress目录" aria-hidden="true">#</a> 2.1 创建.vuepress目录</h3><p>我们在根目录下创建一个 .vuepress 目录，一般的配置文件都会放在这个目录下面。<br> 再创建一个 docs 文件夹，用来存放博客内容。<br> 目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├─ .vuepress
│  └─ config.js  <span class="token operator">&lt;</span>--- 配置文件
│  └─ public     <span class="token operator">&lt;</span>--- 静态资源文件夹
│  └─ styles     <span class="token operator">&lt;</span>--- 公共样式文件夹
├─ docs
├─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="font-size:14px;">官方建议 .vuepress 是放在 docs 目录下的，不过我想 docs 下只希望放置博客文章，所以就把 .vuepress 移到了根目录下。</span></p><h3 id="_2-2-添加标题和描述" tabindex="-1"><a class="header-anchor" href="#_2-2-添加标题和描述" aria-hidden="true">#</a> 2.2 添加标题和描述</h3><p>在config.js 中自定义标题和描述：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  base: <span class="token string">&#39;/base/&#39;</span>, // 部署站点的基础路径
  title: <span class="token string">&quot;Toby的博客&quot;</span>, // 站点的标题。
  description: <span class="token string">&quot;这是Toby的个人博客&quot;</span>, // 站点的描述。
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-多语言支持" tabindex="-1"><a class="header-anchor" href="#_2-3-多语言支持" aria-hidden="true">#</a> 2.3 多语言支持</h3><p>在config.js 中配置多语言:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  locales: <span class="token punctuation">{</span>
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 <span class="token string">&#39;/&#39;</span> 作为其路径。
    <span class="token string">&#39;/&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      lang: <span class="token string">&#39;en-US&#39;</span>,
      title: <span class="token string">&#39;My blog&#39;</span>,
      description: <span class="token string">&#39;This is my blog&#39;</span>,
    <span class="token punctuation">}</span>,
    <span class="token string">&#39;/zh/&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      lang: <span class="token string">&#39;zh-CN&#39;</span>,
      title: <span class="token string">&#39;我的博客&#39;</span>,
      description: <span class="token string">&#39;这是我的博客&#39;</span>,
    <span class="token punctuation">}</span>,
  <span class="token punctuation">}</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),F={href:"https://v2.vuepress.vuejs.org/zh/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},H=r(`<h3 id="_2-4-配置-head-标签" tabindex="-1"><a class="header-anchor" href="#_2-4-配置-head-标签" aria-hidden="true">#</a> 2.4 配置 head 标签</h3><p>在config.js 中配置 &lt; head &gt; 标签 <br> 可以在 &lt; head &gt; 标签内加入的额外标签。</p><ul><li>示例： 增加一个自定义的 favicon ：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Public 文件路径 / 也可以为url</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>渲染结果</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>link <span class="token assign-left variable">rel</span><span class="token operator">=</span><span class="token string">&quot;icon&quot;</span> <span class="token assign-left variable">href</span><span class="token operator">=</span><span class="token string">&quot;/images/logo.png&quot;</span> /<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-配置默认主题" tabindex="-1"><a class="header-anchor" href="#_2-5-配置默认主题" aria-hidden="true">#</a> 2.5 配置默认主题</h3><p>在config.js 中配置默认主题</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/theme-default&#39;</span>

<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  theme: defaultTheme<span class="token punctuation">(</span><span class="token punctuation">{</span> 
    // 在这里进行配置
  <span class="token punctuation">}</span><span class="token punctuation">)</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-1-配置导航栏头像" tabindex="-1"><a class="header-anchor" href="#_2-5-1-配置导航栏头像" aria-hidden="true">#</a> 2.5-1 配置导航栏头像</h4><p>logo 配置导航栏头像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  theme: defaultTheme<span class="token punctuation">(</span><span class="token punctuation">{</span> 
    // 可以是 Public 文件路径
    logo: <span class="token string">&#39;/images/hero.png&#39;</span>,
    // 也可以是 URL
    logo: <span class="token string">&#39;https://toby607-1317049696.cos.ap-guangzhou.myqcloud.com/images/202303201032564.png/compress50&#39;</span>,
  <span class="token punctuation">}</span><span class="token punctuation">)</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-2-头部导航栏配置" tabindex="-1"><a class="header-anchor" href="#_2-5-2-头部导航栏配置" aria-hidden="true">#</a> 2.5-2 头部导航栏配置</h4><p>navbar 配置头部导航栏</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  theme: defaultTheme<span class="token punctuation">(</span><span class="token punctuation">{</span> 
     navbar:<span class="token punctuation">[</span>
        <span class="token punctuation">{</span> text: <span class="token string">&quot;首页&quot;</span>, link: <span class="token string">&quot;/&quot;</span> <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          text: <span class="token string">&#39;博客&#39;</span>,
          children: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> text: <span class="token string">&#39;test1&#39;</span>, link: <span class="token string">&#39;/test1&#39;</span> <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span> text: <span class="token string">&#39;test2&#39;</span>, link: <span class="token string">&#39;/test2&#39;</span> <span class="token punctuation">}</span>,
          <span class="token punctuation">]</span>,
        <span class="token punctuation">}</span>,
      <span class="token punctuation">]</span>,
  <span class="token punctuation">}</span><span class="token punctuation">)</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-3-左侧边栏配置" tabindex="-1"><a class="header-anchor" href="#_2-5-3-左侧边栏配置" aria-hidden="true">#</a> 2.5-3 左侧边栏配置</h4><p>sidebar 配置左侧边栏</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  theme: defaultTheme<span class="token punctuation">(</span><span class="token punctuation">{</span> 
     sidebar:<span class="token punctuation">[</span>
        <span class="token punctuation">{</span> text: <span class="token string">&quot;首页&quot;</span>, link: <span class="token string">&quot;/&quot;</span>, icon: <span class="token string">&#39;Home&#39;</span> <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          text: <span class="token string">&#39;博客&#39;</span>,
          children: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> text: <span class="token string">&#39;test1&#39;</span>, link: <span class="token string">&#39;/test1&#39;</span><span class="token punctuation">}</span>,
            <span class="token punctuation">{</span> text: <span class="token string">&#39;test2&#39;</span>, link: <span class="token string">&#39;/test2&#39;</span><span class="token punctuation">}</span>,
          <span class="token punctuation">]</span>,
        <span class="token punctuation">}</span>,
      <span class="token punctuation">]</span>,
  <span class="token punctuation">}</span><span class="token punctuation">)</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、写一篇博客" tabindex="-1"><a class="header-anchor" href="#_3、写一篇博客" aria-hidden="true">#</a> 3、写一篇博客</h2><blockquote><p>基本配置已经完成就开始写下我们的第一篇博客了</p></blockquote><h3 id="_3-1-正文信息" tabindex="-1"><a class="header-anchor" href="#_3-1-正文信息" aria-hidden="true">#</a> 3.1 正文信息</h3><p>现在我们在 docs 文件夹中新建一个 test.md 文件<br> 在 test.md 中定义 Frontmatter<br></p><ul><li><span style="color:red;">title</span> 是标题， <span style="color:red;">date</span> 是日期， <span style="color:red;">categories</span> 是分类， <span style="color:red;">tags</span> 是标签，可以有多个分类和标签， <span style="color:red;">sticky</span> 可以让文章置顶，数字表示顺序。 <span style="color:red;">permalink</span> 当前页面链接，会覆盖默认的路由路径</li><li>变量后面要加冒号，冒号后面要有空格，不要加逗号</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>---
title: test1
date: <span class="token number">2023</span>/3/1
tags:
  - css
  - 分享
categories:
  - 前端
permalink: /test/
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-正文内容" tabindex="-1"><a class="header-anchor" href="#_3-2-正文内容" aria-hidden="true">#</a> 3.2 正文内容</h3><p>我们都知道 Markdown 中是允许使用 HTML 的<br> 而且 Vue 模板语法是和 HTML 兼容的。<br> 所以我们在 Vuepress 的 Markdown 中直接写 Vue<br></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token operator">&gt;</span> 这是test1号博客

## 开始
  我的第一个博客

## 文档
  这个是<span class="token punctuation">{</span><span class="token punctuation">{</span>name1<span class="token punctuation">}</span><span class="token punctuation">}</span>

## 库
  这个是<span class="token punctuation">{</span><span class="token punctuation">{</span>name2<span class="token punctuation">}</span><span class="token punctuation">}</span>

## 工具
  这个是<span class="token punctuation">{</span><span class="token punctuation">{</span>name3<span class="token punctuation">}</span><span class="token punctuation">}</span>

## Node
  <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;color&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name4<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>

## <span class="token keyword">for</span>循环
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in 10&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> name1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;文档&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;库&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> name3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;工具&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> name4 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Node&#39;</span><span class="token punctuation">)</span>
 
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
 <span class="token punctuation">.</span>color <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span>red
 <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-效果图" tabindex="-1"><a class="header-anchor" href="#_3-2-效果图" aria-hidden="true">#</a> 3.2 效果图</h3>`,28),Y={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html",target:"_blank",rel:"noopener noreferrer"};function X(J,K){const l=i("SvgIcon"),o=i("RouterLink"),u=i("el-collapse-item"),v=i("el-collapse"),p=i("ExternalLinkIcon"),t=i("CodeGroupItem"),c=i("CodeGroup"),d=i("el-image");return b(),k("div",null,[a(v,null,{default:e(()=>[a(u,{class:"catalogue"},{title:e(()=>[g,a(l,{name:"T-a-22",size:20})]),default:e(()=>[n("div",_,[a(l,{name:"T-dangqianweizhi",size:20}),a(o,{to:"/vuepress_1/"},{default:e(()=>[s("(1) 搭建Vuepress项目")]),_:1}),f,a(l,{name:"T-jiantou_xiangyouliangci",size:20}),a(o,{to:"/vuepress_2/"},{default:e(()=>[s("(2) 使用社区主题和插件")]),_:1}),x,a(l,{name:"T-jiantou_xiangyouliangci",size:20}),a(o,{to:"/vuepress_3/"},{default:e(()=>[s("(3) 使用 Element-Plus 组件库")]),_:1}),y,a(l,{name:"T-jiantou_xiangyouliangci",size:20}),a(o,{to:"/vuepress_4/"},{default:e(()=>[s("(4) 使用阿里巴巴图标")]),_:1}),q,a(l,{name:"T-jiantou_xiangyouliangci",size:20}),a(o,{to:"/vuepress_5/"},{default:e(()=>[s("(5) 部署 VuePress")]),_:1}),w])]),_:1})]),_:1}),j,T,n("blockquote",null,[n("p",null,[s("少不了得先创建一个vuepress的项目。 可以参考 "),n("a",z,[s("VuePress官方文档"),a(p)])])]),M,N,a(c,null,{default:e(()=>[a(t,{title:"PNPM"},{default:e(()=>[P]),_:1}),a(t,{title:"YARN"},{default:e(()=>[V]),_:1}),a(t,{title:"NPM"},{default:e(()=>[E]),_:1})]),_:1}),C,a(c,null,{default:e(()=>[a(t,{title:"PNPM"},{default:e(()=>[L]),_:1}),a(t,{title:"YARN"},{default:e(()=>[R]),_:1}),a(t,{title:"NPM"},{default:e(()=>[I]),_:1})]),_:1}),B,a(c,null,{default:e(()=>[a(t,{title:"PNPM"},{default:e(()=>[A]),_:1}),a(t,{title:"YARN"},{default:e(()=>[D]),_:1}),a(t,{title:"NPM"},{default:e(()=>[G]),_:1})]),_:1}),S,a(d,{class:"imageBorder",src:"https://toby607-1317049696.cos.ap-guangzhou.myqcloud.com/images/blogs/202303211820123.png/compress50",lazy:""}),n("p",null,[s("至此，一个简单的博客就搭建完成了。"),a(l,{name:"T-caidai",size:20})]),U,n("p",null,[s("有需要的小伙伴可以参考一下 "),n("a",F,[s("VuePress 多语言支持"),a(p)])]),H,a(d,{class:"imageBorder",src:"https://toby607-1317049696.cos.ap-guangzhou.myqcloud.com/images/blogs/202303211835843.png/compress50",lazy:""}),n("p",null,[s("这样一个简单的博客基础配置就完成了，更多的配置可以参考 "),n("a",Y,[s("VuePress官方文档"),a(p)])])])}const Q=m(h,[["render",X],["__file","index.html.vue"]]);export{Q as default};
