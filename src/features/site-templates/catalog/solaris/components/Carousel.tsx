'use client';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { TemplateLocale } from '../../../types';
import { reels, reviews } from '../content';
import { assets } from '../config/brand';
export function ReelCarousel({ locale }: {
    locale: TemplateLocale;
}) {
    const [index, setIndex] = useState(0), [paused, setPaused] = useState(false), [hover, setHover] = useState(false), [focus, setFocus] = useState(false), [progress, setProgress] = useState(0);
    const reduced = useReducedMotion();
    const ref = useRef<HTMLDivElement>(null);
    const visible = useInView(ref, { amount: .15 });
    const elapsedRef = useRef(0);
    const touchX = useRef<number | null>(null);
    const item = reels[index];
    useEffect(() => { if (paused || hover || focus || !visible || reduced)
        return; let previous = performance.now(), frame = 0, elapsed = elapsedRef.current; const tick = (now: number) => { if (!document.hidden) {
        elapsed = elapsedRef.current;
        elapsed += now - previous;
        if (elapsed >= 4000) {
            setIndex(i => (i + 1) % reels.length);
            elapsed = 0;
        }
        elapsedRef.current = elapsed;
        setProgress(elapsed / 4000);
    } previous = now; frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [paused, hover, focus, visible, reduced]); // 进度保留于暂停时；不在每帧重建计时器。
    const next = (delta: number) => { setIndex(i => (i + delta + reels.length) % reels.length); elapsedRef.current = 0; setProgress(0); };
    return <div ref={ref} className="sol-reel" role="region" aria-label={locale === 'zh' ? '太阳能项目轮播' : 'Solar project reel'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocusCapture={() => setFocus(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget))
        setFocus(false); }} onTouchStart={e => { touchX.current = e.touches[0].clientX; }} onTouchEnd={e => { if (touchX.current !== null && Math.abs(e.changedTouches[0].clientX - touchX.current) > 45)
        next(e.changedTouches[0].clientX < touchX.current ? 1 : -1); touchX.current = null; }} onKeyDown={e => { if (e.key === 'ArrowRight')
        next(1); if (e.key === 'ArrowLeft')
        next(-1); }}>
 <AnimatePresence initial={false}><motion.img key={item.image} src={assets + item.image} alt={item.title[locale]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .8, ease: [.25, .46, .45, .94] }}/></AnimatePresence>
 <div className="sol-reel-progress">{reels.map((r, i) => <span key={r.image}><i style={{ transform: `scaleX(${i < index ? 1 : i === index ? progress : 0})` }}/></span>)}</div>
 <button className="sol-reel-pause" aria-label={locale === 'zh' ? (paused ? '播放轮播' : '暂停轮播') : (paused ? 'Play slideshow' : 'Pause slideshow')} aria-pressed={paused} onClick={() => setPaused(p => !p)}>{paused ? '▷' : 'Ⅱ'}</button>
 <button className="sol-reel-prev" aria-label={locale === 'zh' ? '上一张项目' : 'Previous project'} onClick={() => next(-1)}>‹</button><button className="sol-reel-next" aria-label={locale === 'zh' ? '下一张项目' : 'Next project'} onClick={() => next(1)}>›</button>
 <AnimatePresence mode="wait"><motion.div key={index} className="sol-reel-caption" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: reduced ? 0 : .48 }}><time dateTime={item.date}>{new Date(item.date + 'T12:00:00').toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US')}</time><h3>{item.title[locale]}</h3><p>{item.description[locale]}</p></motion.div></AnimatePresence>
 </div>;
}
export function ReviewCarousel({ locale }: {
    locale: TemplateLocale;
}) { const [index, setIndex] = useState(0); const reduced = useReducedMotion(); const item = reviews[index]; return <div className="sol-review sol-glass" aria-roledescription={locale === 'zh' ? '轮播' : 'carousel'}><AnimatePresence mode="wait"><motion.img key={item.image} src={assets + item.image} alt={locale === 'zh' ? `${item.name} 的肖像` : `Portrait of ${item.name}`} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ duration: reduced ? 0 : .4 }}/></AnimatePresence><div className="sol-review-copy"><div className="sol-review-top"><span className="sol-icon">❞</span><span aria-label={locale === 'zh' ? '5 星评价' : 'Rated 5 out of 5'}>★★★★★</span></div><AnimatePresence mode="wait"><motion.blockquote key={index} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: reduced ? 0 : .4 }}>{item.quote[locale]}</motion.blockquote></AnimatePresence><div className="sol-review-bottom"><div><strong>{item.name}</strong><p>{item.location}</p></div><span>{String(index + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span><button aria-label={locale === 'zh' ? '上一条评价' : 'Previous review'} onClick={() => setIndex(i => (i - 1 + reviews.length) % reviews.length)}>‹</button><button aria-label={locale === 'zh' ? '下一条评价' : 'Next review'} onClick={() => setIndex(i => (i + 1) % reviews.length)}>›</button></div></div></div>; }
