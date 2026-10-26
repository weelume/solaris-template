'use client';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useReducer, useRef, useState } from 'react';
import type { TemplateLocale } from '../../../types';
import { reels, reviews } from '../content';
import { assets } from '../config/brand';
import { initialPlaybackState, playbackReducer, rotationStopped } from './playback';

export function ReelCarousel({ locale }: { locale: TemplateLocale }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playback, dispatch] = useReducer(playbackReducer, initialPlaybackState);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: .15 });
  const elapsedRef = useRef(0);
  const touchX = useRef<number | null>(null);
  const stopped = rotationStopped(playback, Boolean(reduced));
  const autoUnavailable = Boolean(reduced) || reels.length < 2;
  const item = reels[index];

  useEffect(() => {
    if (stopped || hover || !visible || reels.length < 2) return;
    let previous = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      // 保留离屏、悬停和手动暂停时的进度，后台标签恢复时不补跳整段时间。
      if (!document.hidden) {
        let elapsed = elapsedRef.current + now - previous;
        if (elapsed >= 4000) {
          setIndex(value => (value + 1) % reels.length);
          elapsed = 0;
        }
        elapsedRef.current = elapsed;
        setProgress(elapsed / 4000);
      }
      previous = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [stopped, hover, visible]);

  const next = (delta: number) => {
    if (reels.length < 2) return;
    setIndex(value => (value + delta + reels.length) % reels.length);
    elapsedRef.current = 0;
    setProgress(0);
  };
  if (!item) {
    return <div className="sol-reel" role="status">{locale === 'zh' ? '暂无项目' : 'No projects yet'}</div>;
  }
  const playbackLabel = reduced
    ? (locale === 'zh' ? '已减少动态效果，自动轮播已关闭' : 'Autoplay disabled by reduced motion preference')
    : reels.length < 2
      ? (locale === 'zh' ? '仅有一个项目，无需自动轮播' : 'Only one project; autoplay is unnecessary')
    : stopped
      ? (locale === 'zh' ? '播放轮播' : 'Play slideshow')
      : (locale === 'zh' ? '暂停轮播' : 'Pause slideshow');

  return <div
    ref={ref}
    className="sol-reel"
    role="region"
    aria-label={locale === 'zh' ? '太阳能项目轮播' : 'Solar project reel'}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onFocusCapture={event => dispatch({ type: 'focus', keyboard: event.target.matches(':focus-visible') })}
    onBlurCapture={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) dispatch({ type: 'blur' });
    }}
    onTouchStart={event => { touchX.current = event.touches[0].clientX; }}
    onTouchCancel={() => { touchX.current = null; }}
    onTouchEnd={event => {
      if (touchX.current !== null && Math.abs(event.changedTouches[0].clientX - touchX.current) > 45) {
        next(event.changedTouches[0].clientX < touchX.current ? 1 : -1);
      }
      touchX.current = null;
    }}
    onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        next(event.key === 'ArrowRight' ? 1 : -1);
      }
    }}
  >
    <AnimatePresence initial={false}>
      <motion.img key={item.image} src={assets + item.image} alt={item.title[locale]}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: reduced ? 0 : .8, ease: [.25, .46, .45, .94] }} />
    </AnimatePresence>
    <div className="sol-reel-progress">{reels.map((reel, position) => <span key={reel.image}>
      <i style={{ transform: `scaleX(${position < index ? 1 : position === index ? progress : 0})` }} />
    </span>)}</div>
    <button className="sol-reel-pause" aria-label={playbackLabel} title={reduced ? playbackLabel : undefined}
      aria-pressed={stopped} disabled={autoUnavailable} onClick={() => dispatch({ type: 'toggle' })}>
      {stopped || autoUnavailable ? '▷' : 'Ⅱ'}
    </button>
    <button className="sol-reel-prev" aria-label={locale === 'zh' ? '上一张项目' : 'Previous project'} disabled={reels.length < 2} onClick={() => next(-1)}>‹</button>
    <button className="sol-reel-next" aria-label={locale === 'zh' ? '下一张项目' : 'Next project'} disabled={reels.length < 2} onClick={() => next(1)}>›</button>
    <AnimatePresence mode="wait">
      <motion.div key={index} className="sol-reel-caption" initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: reduced ? 0 : .48 }}>
        <time dateTime={item.date}>{new Date(item.date + 'T12:00:00').toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US')}</time>
        <h3>{item.title[locale]}</h3><p>{item.description[locale]}</p>
      </motion.div>
    </AnimatePresence>
  </div>;
}

export function ReviewCarousel({ locale }: { locale: TemplateLocale }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const item = reviews[index];
  if (!item) return <div className="sol-review sol-glass" role="status">{locale === 'zh' ? '暂无评价' : 'No reviews yet'}</div>;
  return <div className="sol-review sol-glass" aria-roledescription={locale === 'zh' ? '轮播' : 'carousel'}>
    <AnimatePresence mode="wait"><motion.img key={item.image} src={assets + item.image}
      alt={locale === 'zh' ? `${item.name} 的肖像` : `Portrait of ${item.name}`}
      initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ duration: reduced ? 0 : .4 }} /></AnimatePresence>
    <div className="sol-review-copy">
      <div className="sol-review-top"><span className="sol-icon">❞</span><span aria-label={locale === 'zh' ? '5 星评价' : 'Rated 5 out of 5'}>★★★★★</span></div>
      <AnimatePresence mode="wait"><motion.blockquote key={index} initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: reduced ? 0 : .4 }}>{item.quote[locale]}</motion.blockquote></AnimatePresence>
      <div className="sol-review-bottom">
        <div><strong>{item.name}</strong><p>{item.location}</p></div>
        <span>{String(index + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span>
        <button aria-label={locale === 'zh' ? '上一条评价' : 'Previous review'} disabled={reviews.length < 2} onClick={() => setIndex(value => (value - 1 + reviews.length) % reviews.length)}>‹</button>
        <button aria-label={locale === 'zh' ? '下一条评价' : 'Next review'} disabled={reviews.length < 2} onClick={() => setIndex(value => (value + 1) % reviews.length)}>›</button>
      </div>
    </div>
  </div>;
}
