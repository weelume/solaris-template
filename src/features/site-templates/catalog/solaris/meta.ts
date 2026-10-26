import type { SiteTemplate } from '../../types';
export const solarisTemplate: SiteTemplate = { ...{
        "id": "solaris",
        "gitUrl": "https://github.com/weelume/solaris-template",
        "name": "Solaris · 智慧太阳能",
        "localizedNames": {
            "en": "Solaris · Smart solar energy"
        },
        "sceneId": "corporate-site",
        "listed": false,
        "tags": [
            "清洁能源",
            "太阳能",
            "荧光黄绿",
            "中英文",
            "PC / iPad / H5"
        ],
        "summary": "住宅与商业太阳能品牌官网，包含动态项目轮播、系统方案、安装案例、能源知识与本地咨询演示。",
        "accentColor": "#e3ff59",
        "cover": "/templates/solaris/screenshots/desktop-home.webp",
        "screenshots": [
            {
                "src": "/templates/solaris/screenshots/desktop-home.webp",
                "alt": "Solaris desktop home",
                "device": "desktop",
                "width": 1430,
                "height": 993
            },
            {
                "src": "/templates/solaris/screenshots/desktop-solutions.webp",
                "alt": "Solaris desktop solutions",
                "device": "desktop",
                "width": 1430,
                "height": 993
            },
            {
                "src": "/templates/solaris/screenshots/desktop-blog.webp",
                "alt": "Solaris desktop blog",
                "device": "desktop",
                "width": 1430,
                "height": 993
            },
            {
                "src": "/templates/solaris/screenshots/desktop-contact.webp",
                "alt": "Solaris desktop contact",
                "device": "desktop",
                "width": 1430,
                "height": 993
            },
            {
                "src": "/templates/solaris/screenshots/tablet-home.webp",
                "alt": "Solaris tablet home",
                "device": "tablet",
                "width": 824,
                "height": 1166
            },
            {
                "src": "/templates/solaris/screenshots/tablet-solutions.webp",
                "alt": "Solaris tablet solutions",
                "device": "tablet",
                "width": 824,
                "height": 1166
            },
            {
                "src": "/templates/solaris/screenshots/tablet-blog.webp",
                "alt": "Solaris tablet blog",
                "device": "tablet",
                "width": 824,
                "height": 1166
            },
            {
                "src": "/templates/solaris/screenshots/tablet-contact.webp",
                "alt": "Solaris tablet contact",
                "device": "tablet",
                "width": 824,
                "height": 1166
            },
            {
                "src": "/templates/solaris/screenshots/mobile-home.webp",
                "alt": "Solaris mobile home",
                "device": "mobile",
                "width": 380,
                "height": 822
            },
            {
                "src": "/templates/solaris/screenshots/mobile-solutions.webp",
                "alt": "Solaris mobile solutions",
                "device": "mobile",
                "width": 380,
                "height": 822
            },
            {
                "src": "/templates/solaris/screenshots/mobile-blog.webp",
                "alt": "Solaris mobile blog",
                "device": "mobile",
                "width": 380,
                "height": 822
            },
            {
                "src": "/templates/solaris/screenshots/mobile-contact.webp",
                "alt": "Solaris mobile contact",
                "device": "mobile",
                "width": 380,
                "height": 822
            }
        ]
    }, surfaces: [{ id: 'site', name: '能源官网', platform: 'pc', locales: ['zh', 'en'], pages: [{ slug: "", title: "首页", localizedTitles: { en: "Home" }, load: () => import('./pages/Home') }, { slug: "solutions", title: "解决方案", localizedTitles: { en: "Solutions" }, load: () => import('./pages/Solutions') }, { slug: "blog", title: "能源日志", localizedTitles: { en: "Journal" }, load: () => import('./pages/Journal') }, { slug: "blog/choosing-solar", title: "选择太阳能系统", localizedTitles: { en: "Choosing solar" }, load: () => import('./pages/Journal') }, { slug: "blog/battery-storage", title: "太阳能与储能", localizedTitles: { en: "Solar and storage" }, load: () => import('./pages/Journal') }, { slug: "blog/system-care", title: "系统维护", localizedTitles: { en: "System care" }, load: () => import('./pages/Journal') }, { slug: "contact", title: "联系我们", localizedTitles: { en: "Contact" }, load: () => import('./pages/Contact') }, { slug: "privacy", title: "隐私政策", localizedTitles: { en: "Privacy" }, load: () => import('./pages/Policy') }, { slug: "terms", title: "使用条款", localizedTitles: { en: "Terms" }, load: () => import('./pages/Policy') }] }] };
