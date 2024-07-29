import{_ as s,r as a,o as p,c as t,a as e,f as o}from"./app-7f713c0e.js";const c={},l=o(`<h2 id="案例分析" tabindex="-1"><a class="header-anchor" href="#案例分析" aria-hidden="true">#</a> 案例分析</h2><p>我们要实现一个简单的图片刮刮乐。<br> 具体来说，我们要先创建一个画布 (canvas), 然后在其中绘制一张图片作为底图，并覆盖一张图片作为涂层。<br> 当鼠标在涂层上移动时，会绘制圆形裁剪区域，并将该区域清空，从而展示出底部的图片。当鼠标抬起或移出画布时，程序会计算已经刮出的面积，并根据阈值决定是否重新绘制底部全图。</p><h2 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现" aria-hidden="true">#</a> 具体实现</h2><h3 id="_1、创建画布" tabindex="-1"><a class="header-anchor" href="#_1、创建画布" aria-hidden="true">#</a> 1、创建画布</h3><p>首先我们要定义一个 div ,里面有一个 img 和一个 canvas 元素。div 元素用于作为容器，img 元素为底部的图片。<br> canvas 元素则用于绘制涂层和处理用户的交互行为。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 顶部图片 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>canvas 
      id<span class="token operator">=</span><span class="token string">&quot;canvas&quot;</span> 
      @mousedown<span class="token operator">=</span><span class="token string">&quot;handleMouseDown&quot;</span> 
      @mousemove<span class="token operator">=</span><span class="token string">&quot;handleMouseMove&quot;</span> 
      @mouseup<span class="token operator">=</span><span class="token string">&quot;handleMouseUp&quot;</span> 
      @mouseout<span class="token operator">=</span><span class="token string">&quot;handleMouseOut&quot;</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 底部图片 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>img <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;baseImg&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

canvas <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、创建钩子和引入图片" tabindex="-1"><a class="header-anchor" href="#_2、创建钩子和引入图片" aria-hidden="true">#</a> 2、创建钩子和引入图片</h3><p>接下来导入 vue 中的 onMounted、reactive 和 defineProps 方法，用于组件的生命周期钩子和响应式数据管理。<br> 通过 defineProps 定义了两个组件属性：topImg 和 baseImg，分别表示底部图片和涂层图片的地址，并设置了默认值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span>defineProps<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">topImg</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 顶部图片</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;01.jpg&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">baseImg</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 底部图片</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;02.jpg&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 reactive 方法创建了一个响应式数据对象 data，其中包含了一些状态变量和配置参数，用于记录用户操作和控制程序的行为。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">isMouseDown</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 当前鼠标是否按下</span>
  <span class="token literal-property property">lastLoc</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 上一次鼠标位置</span>
  <span class="token literal-property property">curLoc</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 当前鼠标位置</span>
  <span class="token literal-property property">canvasWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// canvas 的宽</span>
  <span class="token literal-property property">canvasHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// canvas 的高</span>
  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">0.65</span> <span class="token comment">// 添加一个阈值属性</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、绘制-canvas-底图" tabindex="-1"><a class="header-anchor" href="#_3、绘制-canvas-底图" aria-hidden="true">#</a> 3、绘制 canvas 底图</h3><p>在组件挂载后，会获取到 canvas 元素并设置其宽度和高度，然后获取到画布上下文（Context），并调用 drawCover 方法绘制图片。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> ctx<span class="token punctuation">;</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> divElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 获取div的宽度</span>
  <span class="token keyword">let</span> width <span class="token operator">=</span> divElement<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width

  <span class="token comment">// 计算 baseImg 图片在容器中的宽高比例</span>
  <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  img<span class="token punctuation">.</span>crossOrigin <span class="token operator">=</span> <span class="token string">&#39;anonymous&#39;</span><span class="token punctuation">;</span> 
  img<span class="token punctuation">.</span>src <span class="token operator">=</span> props<span class="token punctuation">.</span>baseImg<span class="token punctuation">;</span>
  img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">.</span>canvasWidth <span class="token operator">=</span> width<span class="token punctuation">;</span> <span class="token comment">// 容器中的宽度</span>
    data<span class="token punctuation">.</span>canvasHeight <span class="token operator">=</span> width<span class="token operator">/</span><span class="token punctuation">(</span>img<span class="token punctuation">.</span>width<span class="token operator">/</span>img<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 容器中的高度</span>
    <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置 canvas 的宽高，并将其传递给 drawCover 函数，然后让其绘制图片。</span>
<span class="token keyword">const</span> <span class="token function-variable function">initialize</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>
  canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> data<span class="token punctuation">.</span>canvasWidth<span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> data<span class="token punctuation">.</span>canvasHeight<span class="token punctuation">;</span>
  ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">drawCover</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>topImg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 绘制图片</span>
<span class="token keyword">const</span> <span class="token function-variable function">drawCover</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">imgSrc</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  img<span class="token punctuation">.</span>crossOrigin <span class="token operator">=</span> <span class="token string">&#39;anonymous&#39;</span><span class="token punctuation">;</span> 
  img<span class="token punctuation">.</span>src <span class="token operator">=</span> imgSrc<span class="token punctuation">;</span>
  img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>canvasWidth<span class="token punctuation">,</span> data<span class="token punctuation">.</span>canvasHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、监听鼠标事件" tabindex="-1"><a class="header-anchor" href="#_4、监听鼠标事件" aria-hidden="true">#</a> 4、监听鼠标事件</h3><p>添加鼠标事件 mousedown、mousemove、mouseup、mouseout</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">handleMouseDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  data<span class="token punctuation">.</span>isMouseDown <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  data<span class="token punctuation">.</span>lastLoc <span class="token operator">=</span> <span class="token function">windowToCanvas</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientX<span class="token punctuation">,</span> e<span class="token punctuation">.</span>clientY<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleMouseMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>isMouseDown<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">.</span>curLoc <span class="token operator">=</span> <span class="token function">windowToCanvas</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientX<span class="token punctuation">,</span> e<span class="token punctuation">.</span>clientY<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 绘制圆形裁剪区域</span>
    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>curLoc<span class="token punctuation">.</span>x<span class="token punctuation">,</span> data<span class="token punctuation">.</span>curLoc<span class="token punctuation">.</span>y<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">clip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 清空画布</span>
    ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>canvasWidth<span class="token punctuation">,</span> data<span class="token punctuation">.</span>canvasHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleMouseUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  data<span class="token punctuation">.</span>isMouseDown <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 计算已经刮出的面积</span>
  <span class="token keyword">const</span> imageData <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>canvasWidth<span class="token punctuation">,</span> data<span class="token punctuation">.</span>canvasHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> pixels <span class="token operator">=</span> imageData<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pixels<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pixels<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> area <span class="token operator">=</span> count <span class="token operator">/</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>canvasWidth <span class="token operator">*</span> data<span class="token punctuation">.</span>canvasHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 如果被刮出的面积大于阈值，重新绘制底部全图</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>area <span class="token operator">&gt;</span> data<span class="token punctuation">.</span>threshold<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>canvasWidth<span class="token punctuation">,</span> data<span class="token punctuation">.</span>canvasHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleMouseOut</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>isMouseDown<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">.</span>isMouseDown <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">windowToCanvas</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> bbox <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>x <span class="token operator">-</span> bbox<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>y <span class="token operator">-</span> bbox<span class="token punctuation">.</span>top<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、查看效果" tabindex="-1"><a class="header-anchor" href="#_5、查看效果" aria-hidden="true">#</a> 5、查看效果</h3>`,18);function i(u,r){const n=a("ScratchTicket");return p(),t("div",null,[l,e(n)])}const d=s(c,[["render",i],["__file","index.html.vue"]]);export{d as default};
