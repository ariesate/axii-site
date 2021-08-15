var e=Object.defineProperty,n=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,l=(n,a,t)=>a in n?e(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,o=(e,o)=>{for(var i in o||(o={}))n.call(o,i)&&l(e,i,o[i]);if(a)for(var i of a(o))t.call(o,i)&&l(e,i,o[i]);return e},i=(e,l)=>{var o={};for(var i in e)n.call(e,i)&&l.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&a)for(var i of a(e))l.indexOf(i)<0&&t.call(e,i)&&(o[i]=e[i]);return o};import{T as p,C as r,B as m,b as c,a as u,D as s,c as d,L as h,d as b,e as f,N,f as y,I as x,g as C,h as k,U as g,i as v,j as T,k as w,l as j,m as A,E as D,n as L,F as I}from"./ExtendInput.737a6321.js";import{b as M,h as X,C as O,g as S,x as B,I as E}from"./vendor.0cdd2c30.js";function F(e){var{components:n}=e,a=i(e,["components"]);return M("wrapper",o({components:n},a),M("h1",null,"Axii"),M("p",null,"Axii 是一个开源的前端框架，主要特点是："),M("ul",null,M("li",{parentName:"ul"},"使用 function + jsx 来写组件。不使用 template。"),M("li",{parentName:"ul"},"使用 vue 3 形式的 reactive data。框架内识别 jsx 片段中的 reactive data，实现局部更新。"),M("li",{parentName:"ul"},"提供了一套组件 ",M("strong",{parentName:"li"},"扩展")," 和 ",M("strong",{parentName:"li"},"复写")," 机制，让组件创建者和使用者都更轻松。")),M("p",null,"下面的文档将快速带你了解 Axii 的使用，更多的文档正在补充中。欢迎 来参与开源工作。\n感谢 React 和 Vue 的创造者们。"))}F.isMDXComponent=!0;function P(e){var{components:n}=e,a=i(e,["components"]);return M("wrapper",o({components:n},a),M("h1",null,"使用 Reactive Data"),M("ul",null,M("li",{parentName:"ul"},"使用 ",M("inlineCode",{parentName:"li"},"atom")," 来创建 ",M("inlineCode",{parentName:"li"},"string"),"/",M("inlineCode",{parentName:"li"},"number"),"/",M("inlineCode",{parentName:"li"},"boolean")," 等非对象数据。对于不需要深度监听的对象数据，也可以使用 atom。"),M("li",{parentName:"ul"},"atom 创建的数据要使用 ",M("inlineCode",{parentName:"li"},".value")," 来取值和修改。绑定到 form 组件上时不需要使用 ",M("inlineCode",{parentName:"li"},".value"),"。"),M("li",{parentName:"ul"},"使用 ",M("inlineCode",{parentName:"li"},"computed")," 创建计算数据。计算数据会自动监听内部依赖的数据，并进行更新。")),M(r,{instance:M(m,{parentName:"Code",mdxType:"Basic"}),code:c,mdxType:"Code"}),"\n",M(p,{content:"Axii 实现了局部更新。这意味着视图的每个节点只当自己绑定的 reactive 数据变化时才会局部变化。如果没有外部引起的变化，那么组件函数只会执行一次。",mdxType:"Tips"}))}P.isMDXComponent=!0;function q(e){var{components:n}=e,a=i(e,["components"]);return M("wrapper",o({components:n},a),M("h1",null,"组件中的动态结构"),M("p",null,"如果要返回动态的结构，例如循环输出，或者条件控制，只需要将节点写成函数即可。\n未来会考虑自动识别动态结构的表达式。"),M(r,{instance:M(u,{parentName:"Code",mdxType:"DynamicStructure"}),code:s,mdxType:"Code"}))}q.isMDXComponent=!0;function R(e){var{components:n}=e,a=i(e,["components"]);return M("wrapper",o({components:n},a),M("h1",null,"创建更好的组件和组件库"),M("p",null,"使用 Axii 提供的 ",M("inlineCode",{parentName:"p"},"createComponent")," 来创建组件可获得一下能力增强："),M("ul",null,M("li",{parentName:"ul"},"更好的样式系统",M("ul",{parentName:"li"},M("li",{parentName:"ul"},"纯样式逻辑与其他逻辑的分离"),M("li",{parentName:"ul"},"布局样式与非布局样式的分离"))),M("li",{parentName:"ul"},"更强的组件行为的控制",M("ul",{parentName:"li"},M("li",{parentName:"ul"},"自动实现 callback"),M("li",{parentName:"ul"},"自动实现 controlled/uncontrolled/delegated 模式"))),M("li",{parentName:"ul"},"Feature based 组件逻辑拆分")))}R.isMDXComponent=!0;function V(e){var{components:n}=e,a=i(e,["components"]);return M("wrapper",o({components:n},a),M("h1",null,"Layout 样式"),M("p",null,'layout 样式指的是"盒子" ',M("strong",{parentName:"p"},"大小"),"、",M("strong",{parentName:"p"},"位置")," 相关的样式。例如 ",M("inlineCode",{parentName:"p"},"display/width/height"),"。\n因为 layout 样式通常和结构有关。例如 ",M("inlineCode",{parentName:"p"},"display:flex")," 影响的是当前元素下的子元素位置。\n为了让我们写组、改动组件结构时更好地同步处理 layout 样式，我们为所有原生节点提供了 Layout Attribute。"),M("p",null,"建议遵循以下来写更好的组件:"),M("ol",null,M("li",{parentName:"ol"},"使用有语义的自定义标签名来替代原生标签名。"),M("li",{parentName:"ol"},"创建 ",M("inlineCode",{parentName:"li"},"text/inline/block")," 属性。注意，",M("inlineCode",{parentName:"li"},"inline")," 实际上使用的是 ",M("inlineCode",{parentName:"li"},"display: inline-block"),"，",M("inlineCode",{parentName:"li"},"text")," 是 ",M("inlineCode",{parentName:"li"},"display: inline"),"。"),M("li",{parentName:"ol"},"如果有更复杂的需求，可以用 ",M("inlineCode",{parentName:"li"},"flex-display")," 或者 自己定义的 display。"),M("li",{parentName:"ol"},"设置 ",M("inlineCode",{parentName:"li"},"width/height")," 或者相应 ",M("inlineCode",{parentName:"li"},"display")," 的属性。属性需要加上 ",M("inlineCode",{parentName:"li"},"block|inline")," 等前缀。")),M(p,{content:M("div",{parentName:"Tips"},M("div",{parentName:"div"},'layout attribute 提供"连写"的写法来更快地书写:'),M("div",{parentName:"div"},'flex-justify-content="space-between"'),M("div",{parentName:"div"},"flex-justify-content-space-between")),mdxType:"Tips"}),"\n",M(p,{"layout:block":!0,"layout:block-margin-top-10px":!0,content:M("div",{parentName:"Tips"},M("div",{parentName:"div"},"只要提供一个 boolean 值(可以使 reactive data)，就可以动态控制是否需要该 layout attribute:"),M("div",{parentName:"div"},"flex-justify-content-space-between=",!0)),mdxType:"Tips"}),"\n",M(r,{instance:M(b,{parentName:"Code",mdxType:"LayoutStyle"}),code:f,mdxType:"Code"}),M("h2",null,"Layout Attribute 穿透组件"),M("p",null,'有时我们需要控制自己所使用的组件的"盒子"样式，例如使其固定宽度、自适应内容。\n在 Axii 中默认可以使用 ',M("inlineCode",{parentName:"p"},"layout:[Layout Attribute]")," 来将 Layout Attribute 传递到组件的的根节点上。"),M(r,{instance:M(d,{parentName:"Code",mdxType:"LayoutStyleComponent"}),code:h,mdxType:"Code"}))}V.isMDXComponent=!0;function z(e){var{components:n}=e,a=i(e,["components"]);return M("wrapper",o({components:n},a),M("h1",null,"非 Layout 样式"),M("p",null,"非 layout 样式指的是和结构无关的样式，例如 ",M("inlineCode",{parentName:"p"},"color/font-family")," 等。\n非 layout 样式是利用 ",M("inlineCode",{parentName:"p"},"createComponent")," 提供的 feature 能力实现的。"),M("p",null,"feature 可以声明自己的 propType，监听事件等。"),M(r,{instance:M(N,{parentName:"Code",mdxType:"NonLayoutStyle"}),code:y,mdxType:"Code"}),"\n",M(p,{content:"更多 feature 的能力见后续章节。",mdxType:"Tips"}))}z.isMDXComponent=!0;function U(e){var{components:n}=e,a=i(e,["components"]);return M("wrapper",o({components:n},a),M("h1",null,"对组件的控制"),M("ul",null,M("li",{parentName:"ul"},"受控模式/委托修改模式/非受控模式"),M("li",{parentName:"ul"},"动态阻止事件")),M("p",null,"用户可以给组件传入函数 property，如果函数作为 event callback 挂载到事件上，那么调用时 Axii 会传入 event 作为参数。\n如果该函数 property 在 propType 中声明为 propTypes.callback。那么 Axii 会其增强一下功能："),M("ul",null,M("li",{parentName:"ul"},"自动为 event callback 补充 3 个参数。",M("ul",{parentName:"li"},M("li",{parentName:"ul"},"draftProps: 用户可以直接修改。"),M("li",{parentName:"ul"},"props: 原始的 props，不能修改。"),M("li",{parentName:"ul"},"event。"))),M("li",{parentName:"ul"},"通过 ",M("inlineCode",{parentName:"li"},"return false")," 阻止默认 callback 对数据的修改。"),M("li",{parentName:"ul"},"通过 ",M("inlineCode",{parentName:"li"},"overwrite")," 标记来完全控制组件的行为。")),M("p",null,"根据传入数据 property 的不同，组件对数据的操作会不同，最终引起组件行为的不同："),M("ul",null,M("li",{parentName:"ul"},"传入 reactive data：组件会使用 ",M("inlineCode",{parentName:"li"},"propTypes")," 定义的 default event callback 进行修改。"),M("li",{parentName:"ul"},"传入原始数据：不会进行修改。"),M("li",{parentName:"ul"},"不传入：组件会使用 propTypes 上定义的 default 数据自行构造。")),M("h2",null,"基础示例组件"),M(r,{instance:M(w,{parentName:"Code",mdxType:"Input"}),code:j,mdxType:"Code"}),M("h2",null,"完全外部控制"),M("p",null,"传入非 reactive data，使其完全受外部控制。"),M(r,{instance:M(v,{parentName:"Code",mdxType:"ControlledComponent"}),code:T,mdxType:"Code"}),M("h2",null,"使用组件默认数据"),M("p",null,"不传入数据，数据将由组件自己根据 propTypes 定义产生。用户在回调中可以获取到相应数据。"),M(r,{instance:M(k,{parentName:"Code",mdxType:"UncontrolledComponent"}),code:g,mdxType:"Code"}),M("h2",null,"委托组件操作数据"),M("p",null,"传入 reactive data，委托组件对数据进行操作。"),M(r,{instance:M(x,{parentName:"Code",mdxType:"DelegateComponent"}),code:C,mdxType:"Code"}))}U.isMDXComponent=!0;function G(e){var{components:n}=e,a=i(e,["components"]);return M("wrapper",o({components:n},a),M("h1",null,"扩展和覆写组件"),M("p",null,"可以将代码能力按照 feature 而不是结构分离。\nfeature 可以声明自己的数据、事件、样式，修改原始结构。\n可以在运行时，更加动态地控制组件行为，例如监听任何组件内部任何元素的任何事件。"),M("p",null,"Feature 可控制的行为："),M("ul",null,M("li",{parentName:"ul"},"样式"),M("li",{parentName:"ul"},"fragment 渲染结果"),M("li",{parentName:"ul"},"注册节点事件回调")),M("p",null,"将组件的逻辑按照 Feature 来划分，可以减轻逻辑的复杂的程度，并且渐进地扩展组件。"),M(r,{instance:M(L,{parentName:"Code",mdxType:"FeatureBasedInput"}),code:I,mdxType:"Code"}),M("p",null,"对使用者来说，如果需要的功能组件不支持，可以自己写 feature 进行动态扩展或者覆写。"),M(r,{instance:M(A,{parentName:"Code",mdxType:"ExtendInput"}),code:D,mdxType:"Code"}),"\n",M(p,{content:M("div",{parentName:"Tips"},M("span",{parentName:"div"},"更多示例，推荐参考官方组件库中的"),M("a",{href:"https://github.com/ariesate/engine/blob/master/packages/axii-components/src/table",parentName:"div"},"Table 组件"),"。"),mdxType:"Tips"}))}G.isMDXComponent=!0;function H(e){var{components:n}=e,a=i(e,["components"]);return M("wrapper",o({components:n},a),M("h1",null,"快速开始"),M("h2",null,"创建应用"),M("p",null,"Use npx & degit:"),M("pre",null,M("code",{className:"language-bash",parentName:"pre"},"npx degit ariesate/engine/packages/vite-axii my-project\ncd my-project\n\nnpm install\nnpm start\n")),M("h2",null,"官方组件/图标库"),M("pre",null,M("code",{className:"language-bash",parentName:"pre"},"npm install axii-components --save\nnpm install axii-icons --save\n")),M("p",null,M("a",{href:"https://github.com/ariesate/axii-component-site",parentName:"p"},"Visit Component Repo")),M("p",null,M("a",{href:"https://ariesate.github.io/axii-component-site",parentName:"p"},"Visit Component Site")))}H.isMDXComponent=!0;const J=[{id:"chapter0",Chapter:F},{id:"chapter1",Chapter:P},{id:"chapter2",Chapter:q},{id:"chapter3",Chapter:R},{id:"chapter4",Chapter:V},{id:"chapter5",Chapter:z},{id:"chapter6",Chapter:U},{id:"chapter7",Chapter:G},{id:"quick-start",Chapter:H}];function K(){return S("container",{block:!0,"block-height":"100%","block-width":"100%","block-overflow-y-scroll":!0},S("outline",{block:!0,"block-position-fixed":!0,"block-top-20px":!0,"block-left-20px":!0,"block-padding-20px":!0},S("part",{block:!0},S("name",{block:!0,use:"a",href:"#chapter1"},"Axii 基本用法"),S("children",{block:!0,"block-margin-left-20px":!0},S("name",{block:!0,use:"a",href:"#chapter1"},"使用 Reactive Data"),S("name",{block:!0,use:"a",href:"#chapter2"},"组件中的动态结构"))),S("part",{block:!0},S("name",{block:!0,use:"a",href:"#chapter3"},"创建更好的组件和组件库"),S("children",{block:!0,"block-margin-left-20px":!0},S("name",{block:!0,use:"a",href:"#chapter4"},"布局样式"),S("name",{block:!0,use:"a",href:"#chapter5"},"非布局样式"),S("name",{block:!0,use:"a",href:"#chapter6"},"组件的数据与回调"),S("name",{block:!0,use:"a",href:"#chapter7"},"扩展和覆写组件"))),S("part",{block:!0},S("name",{block:!0,use:"a",href:"#quick-start"},"快速开始"),S("children",{block:!0,"block-margin-left-20px":!0},S("name",{block:!0,use:"a",href:"#quick-start"},"创建应用"),S("name",{block:!0,use:"a",href:"#quick-start"},"官方组件/图标库")))),S("landing",{block:!0,"block-height":"100%","block-width":"100%","flex-display":!0,"flex-align-items-center":!0,"flex-justify-content-center":!0},S("framework",{block:!0},S("frameworkName",{block:!0,"block-font-size-150px":!0},"Axii"),S("info",{block:!0,"flex-display":!0,"flex-justify-content-center":!0,"flex-align-items-center":!0},S("frameworkVersion",null,B),S("frameworkGithub",{use:"a",href:"https://github.com/ariesate/engine/tree/master/packages/controller-axii",inline:!0,"inline-line-height-1":!0,"inline-margin-left-10px":!0},S(E,null)),S("frameworkTrans",{inline:!0,"inline-margin-left-10px":!0,use:"a",href:"/index.html"},"English")))),S("chapters",{block:!0,"block-max-width-800px":!0,"block-margin-left-auto":!0,"block-margin-right-auto":!0},J.map((({Chapter:e,id:n})=>S("chapter",{block:!0,"block-margin-bottom-50px":!0,"block-padding-bottom-50px":!0,id:n},S(e,null))))))}K.Style=e=>{e.root.elements.outline.style({background:"#fff",border:"1px #cecece dashed",zIndex:999}),e.root.elements.name.style({fontSize:14,lineHeight:1,color:"#666666",marginBottom:14}),e.root.elements.frameworkTrans.style({color:"#666666"}),e.root.elements.chapter.style({borderBottom:"1px #cecece dashed"})};const Q=X(K);O(S(Q,null),document.getElementById("root")),Prism.highlightAll();
