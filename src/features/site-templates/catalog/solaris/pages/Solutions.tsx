'use client';
import type { SiteTemplatePageProps } from '../../../types';
import { Shell } from '../components/Shell';
import { Solutions as Services, Benefits, FAQ } from '../components/Sections';
export default function Solutions({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <Shell locale={locale} basePath={basePath}><div className="sol-editorial"><Services locale={locale} primary/><Benefits locale={locale}/><FAQ locale={locale} basePath={basePath}/></div></Shell>; }
