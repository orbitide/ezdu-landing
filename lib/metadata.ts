import type { Metadata } from 'next';

const BASE_URL = 'https://ezdu.net';

type PageMeta = {
    title: string;
    description: string;
    keywords?: string[];
};

export function buildMetadata(slug: string, meta: PageMeta): Metadata {
    const url = `${BASE_URL}/${slug}`;

    return {
        title: `${meta.title} — EzDu`,
        description: meta.description,
        keywords: meta.keywords,
        alternates: {
            canonical: url,
            languages: {
                'bn-BD': `${BASE_URL}/bn/${slug}`,
                'en-US': `${BASE_URL}/en/${slug}`,
                'x-default': url,
            },
        },
        openGraph: {
            title: `${meta.title} — EzDu`,
            description: meta.description,
            url,
            siteName: 'EzDu',
            locale: 'bn_BD',
            alternateLocale: ['en_US'],
            images: [{ url: `${BASE_URL}/logo.png`, width: 1200, height: 630, alt: 'EzDu' }],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${meta.title} — EzDu`,
            description: meta.description,
            images: [`${BASE_URL}/logo.png`],
        },
    };
}