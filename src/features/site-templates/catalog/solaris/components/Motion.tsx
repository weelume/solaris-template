'use client';
import { motion, useReducedMotion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Copy } from '../content';
import type { TemplateLocale } from '../../../types';
export function Reveal({ children, delay = 0, y = 80, className = '' }: {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}) { const reduced = useReducedMotion(); return <motion.div className={className} initial={reduced ? false : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ type: 'spring', stiffness: 250, damping: 80, delay: reduced ? 0 : delay }}>{children}</motion.div>; }
/** 原站逐词模糊入场：20px 位移、10px 模糊、每词 50ms 错峰。 */
export function Words({ value, locale, hero = false, paragraph = false }: {
    value: Copy;
    locale: TemplateLocale;
    hero?: boolean;
    paragraph?: boolean;
}) { const reduced = useReducedMotion(); const words = locale === 'en' ? value[locale].split(' ') : Array.from(value[locale]); const Tag = paragraph ? motion.p : hero ? motion.h1 : motion.h2; return <Tag className={paragraph ? 'sol-copy' : ''} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} aria-label={value[locale]}>{words.map((word, i) => word === '\n' ? <br key={i}/> : <motion.span aria-hidden="true" className="sol-word" key={i} variants={{ hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20, filter: reduced ? 'none' : 'blur(10px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } }} transition={{ duration: reduced ? 0 : .7, delay: reduced ? 0 : (hero ? .1 : paragraph ? .2 : 0) + i * (locale === 'en' ? .05 : .025), ease: [.12, .23, .17, .98] }}>{word}{locale === 'en' ? '\u00a0' : ''}</motion.span>)}</Tag>; }
export function Counter({ end, suffix }: {
    end: number;
    suffix: string;
}) { const ref = useRef<HTMLSpanElement>(null); const visible = useInView(ref, { once: true, amount: .5 }); const reduced = useReducedMotion(); const [value, setValue] = useState(0); useEffect(() => { if (!visible)
    return; const start = performance.now(); let frame = 0; const tick = (now: number) => { const p = Math.min(1, (now - start) / 2000); setValue(Math.round(end * (p < .5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2))); if (p < 1)
    frame = requestAnimationFrame(tick); }; if (!reduced)
    frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [visible, end, reduced]); return <span ref={ref}>{reduced ? end : value}{suffix}</span>; }
export function HeroImage({ src, alt }: {
    src: string;
    alt: string;
}) { const ref = useRef<HTMLDivElement>(null); const reduced = useReducedMotion(); const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] }); const y = useTransform(scrollYProgress, [0, 1], [0, 150]); const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]); return <motion.div ref={ref} className="sol-house" style={reduced ? {} : { y, scale }}><motion.img src={src} alt={alt} initial={reduced ? false : { opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', damping: 80, stiffness: 250 }}/></motion.div>; }
