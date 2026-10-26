import type { ReactNode } from 'react';
import './globals.css';
export const metadata = { title: 'Solaris Energy · 清洁能源', description: '住宅与企业太阳能解决方案' };
export default function Layout({ children }: {
    children: ReactNode;
}) { return <html lang="zh-CN" data-scroll-behavior="smooth"><body>{children}</body></html>; }
