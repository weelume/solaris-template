'use client';
import { createContext, useContext, type ReactNode } from 'react';
import type { TemplateLocale } from '../../types';
export interface SolarisHostOptions {
    brandName?: Record<TemplateLocale, string>;
    logo?: string;
    lightLogo?: string;
    marketplaceHref?: string;
    marketplaceLabel?: Record<TemplateLocale, string>;
    marketplaceAriaLabel?: Record<TemplateLocale, string>;
    filing?: ReactNode;
}
const Context = createContext<SolarisHostOptions>({});
/** 品牌、备案与外部导航由宿主显式注入，通用页面保持独立。 */
export function SolarisHostProvider({ children, ...options }: SolarisHostOptions & {
    children: ReactNode;
}) { return <Context.Provider value={options}>{children}</Context.Provider>; }
export const useSolarisHost = () => useContext(Context);
