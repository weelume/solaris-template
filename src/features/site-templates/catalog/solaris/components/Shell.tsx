'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { SiteTemplatePageProps } from '../../../types';
import { assets, brand } from '../config/brand';
import { useSolarisHost } from '../host';
import { copy, intro } from '../content';
import { Reveal, Words } from './Motion';
import '../theme.css';
export function Action({ href, children, light = false }: {
    href: string;
    children: ReactNode;
    light?: boolean;
}) { return <Link className={'sol-button' + (light ? ' sol-button-light' : '')} href={href}>{children}</Link>; }
function Logo({ href, name, image }: {
    href: string;
    name: string;
    image?: string;
}) { return <Link href={href} className="sol-logo" aria-label={name}>{image ? <img src={image} alt=""/> : <span className="sol-logo-symbol" aria-hidden="true">S</span>}<span>{name}</span></Link>; }
export function Shell({ children, basePath, locale = 'zh' }: SiteTemplatePageProps & {
    children: ReactNode;
}) {
    const host = useSolarisHost();
    const [menu, setMenu] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const reduced = useReducedMotion();
    const root = basePath.replace(/\/en$/, '');
    const localized = basePath || '/';
    const home = (hash: string) => `${basePath || '/'}${hash}`;
    const contact = `${basePath}/contact`;
    const name = host.brandName?.[locale] ?? brand.name[locale];
    const links = [{ label: copy('首页', 'Home'), href: home('#hero') }, { label: copy('关于我们', 'About'), href: home('#about') }, { label: copy('解决方案', 'Solutions'), href: home('#solution') }, { label: copy('项目案例', 'Projects'), href: home('#projects') }];
    useEffect(() => { document.documentElement.classList.add('solaris-active');
        document.body.classList.add('solaris-active'); const previous = document.documentElement.lang; document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'; return () => { document.documentElement.classList.remove('solaris-active');
            document.body.classList.remove('solaris-active'); document.documentElement.lang = previous; }; }, [locale]);
    useEffect(() => {
        if (!menu)
            return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const trigger = document.querySelector<HTMLButtonElement>('.sol-menu-toggle');
        const panel = document.querySelector<HTMLElement>('#sol-mobile-nav');
        const first = panel?.querySelector<HTMLElement>('a');
        first?.focus();
        // 菜单打开时将键盘焦点保留在可见导航中，关闭后恢复触发按钮。
        const close = (event: KeyboardEvent) => { if (event.key === 'Escape')
            setMenu(false); if (event.key === 'Tab') {
            const links = Array.from(panel?.querySelectorAll<HTMLElement>('a,button') ?? []);
            const initial = links[0], last = links[links.length - 1];
            if (event.shiftKey && document.activeElement === initial) {
                event.preventDefault();
                last?.focus();
            }
            else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                initial?.focus();
            }
        } };
        window.addEventListener('keydown', close);
        return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', close); if (trigger?.isConnected)
            trigger.focus(); };
    }, [menu]);
    const switchLanguage = () => { const page = pathname.slice((locale === 'en' ? `${root}/en` : root).length); return `${root}${locale === 'zh' ? '/en' : ''}${page === '/' ? '' : page}` || '/'; };
    const logo = <Logo href={localized} name={name} image={host.logo}/>;
    return <div className="solaris"><motion.header className="sol-nav" initial={reduced ? false : { opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', damping: 60, stiffness: 500, delay: .1 }}>{logo}<nav aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>{links.map(l => <Link key={l.href} href={l.href}>{l.label[locale]}</Link>)}</nav><div className="sol-nav-actions"><Link className="sol-language" href={switchLanguage()} onClick={event => { if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return; event.preventDefault(); router.push(switchLanguage() + window.location.search + window.location.hash); }}>{locale === 'zh' ? 'EN' : '中文'}</Link><span className="sol-desktop-action"><Action href={contact} light>{locale === 'zh' ? '预约咨询' : 'Get Consultation'}</Action></span><button className="sol-menu-toggle" aria-label={locale === 'zh' ? '切换菜单' : 'Toggle menu'} aria-expanded={menu} aria-controls="sol-mobile-nav" onClick={() => setMenu(v => !v)}>{menu ? '×' : '☰'}</button></div></motion.header>
 <AnimatePresence>{menu && <motion.nav id="sol-mobile-nav" className="sol-mobile-menu" aria-label={locale === 'zh' ? '手机导航' : 'Mobile navigation'} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: reduced ? 0 : .4 }}>{[...links, { label: copy('预约咨询', 'Get Consultation'), href: contact }, { label: copy('能源日志', 'Journal'), href: basePath + '/blog' }].map((l, i) => <motion.div key={l.href} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduced ? 0 : i * .05 }}><Link href={l.href} onClick={() => setMenu(false)}>{l.label[locale]}</Link></motion.div>)}</motion.nav>}</AnimatePresence>
 <main>{children}</main><footer className="sol-footer sol-container sol-glass"><div className="sol-footer-cta"><Words value={copy('创新太阳能方案\n让生活持续向绿', 'Innovative solar energy solutions for sustainable living')} locale={locale}/><p>{intro[locale]}</p><Action href={contact}>{locale === 'zh' ? '预约咨询' : 'Get Consultation'}</Action><img src={assets + 'kewGraGdkuDeNjnXK1JadnTgI0E.png'} alt={locale === 'zh' ? '绿地上的太阳能光伏阵列' : 'Solar panels on a grassy field under a clear sky.'}/></div><div className="sol-footer-grid"><div>{logo}<p>{locale === 'zh' ? '让清洁能源照亮每一天' : 'Clean renewable energy solutions to help homes and businesses reduce electricity costs.'}</p><div className="sol-social">{[['X', 'https://x.com/'], ['Facebook', 'https://facebook.com/'], ['Instagram', 'https://instagram.com/']].map(([label, url]) => <a key={label} href={url} aria-label={label} target="_blank" rel="noreferrer">{label}</a>)}</div></div><div><h4>{locale === 'zh' ? '快捷链接' : 'Quick Links'}</h4>{[...links, { label: copy('能源日志', 'Journal'), href: basePath + '/blog' }, { label: copy('联系我们', 'Contact'), href: contact }].map(l => <Link key={l.href} href={l.href}>{l.label[locale]}</Link>)}</div><div><h4>{locale === 'zh' ? '联系我们' : 'Contact Us'}</h4><a href={'mailto:' + brand.email}>{brand.email}</a><a href={'tel:' + brand.phoneHref}>{brand.phone}</a><p>{brand.address[locale]}</p></div></div><div className="sol-footer-legal"><p>© {brand.year} {name}. {locale === 'zh' ? '保留所有权利' : 'All rights reserved.'}</p><div><Link href={basePath + '/privacy'}>{locale === 'zh' ? '隐私政策' : 'Privacy'}</Link><Link href={basePath + '/terms'}>{locale === 'zh' ? '使用条款' : 'Terms'}</Link></div>{host.filing}</div></footer>
 {host.marketplaceHref && <Link className="sol-marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo && <img src={host.lightLogo} alt=""/>}<span>{name}</span></Link>}
 </div>;
}
export function SectionHeading({ label, title, description, locale, primary = false }: {
    primary?: boolean;
    label: ReturnType<typeof copy>;
    title: ReturnType<typeof copy>;
    description?: ReturnType<typeof copy>;
    locale: 'zh' | 'en';
}) { return <div className="sol-section-heading"><Reveal y={20}><p className="sol-eyebrow">/ {label[locale]}</p></Reveal><Words value={title} locale={locale} hero={primary}/>{description && <Words value={description} locale={locale} paragraph/>}</div>; }
