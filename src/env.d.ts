/// <reference types="astro/client" />

interface Window {
    dataLayer: Array<Record<string, any>>;
    gtag: (...args: any[]) => void;
}
