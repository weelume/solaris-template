# 修改指南

修改品牌：config/brand.ts。修改文案和项目：content.ts，中英文同时维护；新增页面同步 meta.ts 与 template.json。颜色、字号、玻璃卡片及滚动条：theme.css。轮播：components/Carousel.tsx；逐词、弹簧与计数：components/Motion.tsx。保留原生滚动、键盘焦点、减少动态效果与仅本地校验声明。替换素材时更新来源摘要和截图。

滚动条令牌统一定义在 theme.css 的 html/body 模板标记与 .solaris 根节点。页面宽度 10px，内部宽度 8px；Chromium 使用伪元素显示圆角和悬停/按下态，其余浏览器沿用标准 scrollbar 属性。保留 scrollbar-gutter 稳定布局与高对比模式的原生配色。
