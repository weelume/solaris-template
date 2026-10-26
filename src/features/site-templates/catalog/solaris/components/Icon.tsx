export type IconName = 'shield' | 'certificate' | 'sun' | 'award' | 'star' | 'support' | 'finance' | 'monitor' | 'battery' | 'building' | 'charge' | 'pin' | 'mail' | 'phone';
const paths: Record<IconName, string[]> = {
    shield: ['M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6Z', 'm8 12 3 3 5-6'],
    certificate: ['M4 4h16v13H4Z', 'M8 8h8M8 11h4', 'm13 15-1 7 4-2 4 2-1-7'],
    sun: ['M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2', 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0'],
    award: ['M18 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0', 'm8 15-1 7 5-3 5 3-1-7', 'm10 9 1.5 1.5L14 7'],
    star: ['m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z'],
    support: ['M4 13v-2a8 8 0 0 1 16 0v2', 'M3 11h4v8H3Zm14 0h4v8h-4Z', 'M18 19c0 3-6 3-6 3'],
    finance: ['M3 7h18v14H3Z', 'M7 7V3h10v4M12 10v8m3-7h-4a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H9'],
    monitor: ['M3 4h18v13H3Z', 'M8 21h8m-4-4v4M6 13l4-4 4 3 4-5'],
    battery: ['M2 6h17v12H2Zm17 4h3v4h-3', 'M6 9v6m4-6v6m4-6v6'],
    building: ['M4 21V4h12v17M16 10h4v11M2 21h20', 'M8 8h4M8 12h4M8 16h4'],
    charge: ['m13 2-9 12h7l-1 8 10-13h-8Z'],
    pin: ['M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0', 'M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0'],
    mail: ['M3 5h18v14H3Z', 'm3 5 9 8 9-8'],
    phone: ['M7 3 3 5c0 8 8 16 16 16l2-4-5-3-2 2c-3-1-5-3-6-6l2-2Z'],
};
export function Icon({ name }: {
    name: IconName;
}) { return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name].map((d, i) => <path key={i} d={d}/>)}</svg>; }
