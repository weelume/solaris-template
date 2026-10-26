'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import type { TemplateLocale } from '../../../types';
import { copy } from '../content';
import { Icon, type IconName } from './Icon';
const credentials = [copy('持牌经营与保险保障', 'Licensed and Insured'), copy('认证安装团队', 'Certified Installers'), copy('一线太阳能组件', 'Tier 1 Solar Panels'), copy('25 年组件质保', '25-Year Panel Warranty'), copy('4.9 分客户评价', '4.9 Customer Rating'), copy('本地支持团队', 'Local Support Team')];
/** 依照原站 40px/s 根据实际轨道宽度计算周期，避免中英文速度不同。 */
export function TrustStrip({ locale }: {
    locale: TemplateLocale;
}) { const ref = useRef<HTMLDivElement>(null); const group = useRef<HTMLDivElement>(null); const visible = useInView(ref); const [duration, setDuration] = useState(32); useEffect(() => { const element = group.current; if (!element)
    return; const update = () => setDuration(element.getBoundingClientRect().width / 40); update(); const observer = new ResizeObserver(update); observer.observe(element); return () => observer.disconnect(); }, [locale]); return <div className="sol-trust sol-container"><p>{locale === 'zh' ? '500+ 家庭的信赖\n认证、持牌、保险保障' : 'Trusted by 500+ homeowners.\nCertified, licensed and insured.'}</p><div ref={ref} className="sol-trust-window" tabIndex={0} aria-label={locale === 'zh' ? '服务资质，可横向滚动' : 'Service credentials, scroll horizontally'}><div className="sol-trust-track" style={{ animationDuration: duration + 's', animationPlayState: visible ? 'running' : 'paused' }}>{[0, 1].map(g => <div ref={g === 0 ? group : undefined} key={g} aria-hidden={g === 1 ? true : undefined}>{credentials.map((t, i) => <span key={t.en}><i className="sol-icon"><Icon name={(['shield', 'certificate', 'sun', 'award', 'star', 'support'] as IconName[])[i]}/></i>{t[locale]}</span>)}</div>)}</div></div></div>; }
