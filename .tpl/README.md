# Solaris Energy

React + Next.js + TypeScript 的中英双语响应式太阳能官网。包含首页、解决方案、能源日志、三篇知识文章、联系表单、隐私和条款。原始参考站为 https://solaris-energy.framer.website/ ，原站实际站内页面为首页与联系页，其余为模板完整性补充。

先读 .tpl/template.json 与 .tpl/project.json。Node 24.16.0，pnpm 9.15.4；pnpm install --frozen-lockfile 后 pnpm dev，默认 http://127.0.0.1:43420 ，英文 /en；Ctrl+C 停止。可复制 .env.example 为 .env 修改 HOSTNAME/PORT。无服务端密钥，无数据库。

检查：pnpm typecheck、pnpm lint、pnpm test、pnpm build；pnpm start 启动生产产物。所有安装与编译在本地 Linux 文件系统完成。

品牌 config/brand.ts、双语 content.ts、主题 theme.css、组件 components/、页面 pages/ 均位于 src/features/site-templates/catalog/solaris。共享包导出 template 与 host，宿主可显式注入品牌及外部导航；业务源码不依赖消费方。

联系表单只校验，不发送、不保存；地图使用 Google Maps 嵌入，其他运行图片及字体本地托管。素材权利未核实，listed=false。完整限制见 .tpl/docs/LICENSE.md 与验收记录。
