export function getRootJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'MobileApplication',
                '@id': 'https://ezdu.net/#mobile-app',
                name: 'EzDu',
                description: 'SSC, HSC, BCS, IELTS পরীক্ষার MCQ প্র্যাকটিস ও mock test অ্যাপ',
                applicationCategory: 'EducationApplication',
                operatingSystem: 'Android, iOS',
                url: 'https://ezdu.net',
                downloadUrl: 'https://play.google.com/store/apps/details?id=your.app.id',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'BDT' },
            },
            {
                '@type': 'WebApplication',
                '@id': 'https://ezdu.net/#web-app',
                name: 'EzDu Web',
                description: 'SSC, HSC, BCS, IELTS পরীক্ষার MCQ প্র্যাকটিস ও mock test — ব্রাউজারেই করো',
                applicationCategory: 'EducationApplication',
                browserRequirements: 'Requires JavaScript',
                url: 'https://ezdu.net',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'BDT' },
            },
            {
                '@type': 'Organization',
                '@id': 'https://ezdu.net/#organization',
                name: 'EzDu',
                url: 'https://ezdu.net',
                logo: 'https://ezdu.net/logo.png',
                sameAs: [
                    'https://facebook.com/ezdu',
                    'https://youtube.com/@ezdu',
                    'https://play.google.com/store/apps/details?id=your.app.id',
                ],
            },
        ],
    };
}

export function getPageJsonLd(slug: string, name: string, description: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        '@id': `https://ezdu.net/${slug}/#quiz`,
        name,
        description,
        inLanguage: 'bn',
        isAccessibleForFree: true,
        provider: {
            '@type': 'Organization',
            '@id': 'https://ezdu.net/#organization',
            name: 'EzDu',
            url: 'https://ezdu.net',
        },
    };
}

export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    };
}