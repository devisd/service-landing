export const siteConfig = {
    name: 'Супер Сервис',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://superservice.ru',
    
    // Контактные данные
    phone: '+7 (923) 653-25-13',
    phoneRaw: '+79236532513',
    telegram: 'Rstudioplus',
    whatsapp: '+79236532513',
    
    // Адрес
    address: {
        street: 'Микрорайон 3, дом 7',
        city: 'Славгород',
        region: 'Алтайский край',
        postalCode: '658820',
        country: 'RU',
        full: 'г. Славгород, Микрорайон 3, дом 7',
    },
    
    // Координаты
    geo: {
        latitude: 52.9986,
        longitude: 78.6458,
    },
    
    // Часы работы
    workingHours: {
        weekdays: { open: '09:00', close: '18:00' },
        saturday: { open: '10:00', close: '15:00' },
        sunday: null, // выходной
    },
    
    // Реквизиты
    legal: {
        name: 'ИП Думлер Янис Рудольфович',
        inn: '225901203116',
        ogrnip: '322220200035901',
        registrationDate: '26 апреля 2022 г.',
    },
    
    // Ссылки на соцсети
    socials: {
        telegram: 'https://t.me/Rstudioplus',
        whatsapp: 'https://wa.me/+79236532513',
    },
} as const;

export type SiteConfig = typeof siteConfig;
