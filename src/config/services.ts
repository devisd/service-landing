export interface ServiceItem {
    name: string;
    price: string;
    duration: string;
}

export interface Service {
    id: string;
    title: string;
    shortTitle: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    features: string[];
    priceList: ServiceItem[];
}

export const services: Service[] = [
    {
        id: 'computers-laptops',
        title: 'Ремонт компьютеров и ноутбуков',
        shortTitle: 'Компьютеры и ноутбуки',
        shortDescription: 'Ремонт ПК, MacBook, ноутбуков любых брендов. Замена комплектующих, чистка, апгрейд.',
        fullDescription: 'Выполняем ремонт настольных компьютеров, моноблоков и ноутбуков всех производителей: Apple, Asus, Lenovo, HP, Dell, Acer и других. Диагностика, замена комплектующих, чистка от пыли, замена термопасты, восстановление после залития.',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
        features: [
            'Бесплатная диагностика',
            'Ремонт любых брендов',
            'Замена матриц и клавиатур',
            'Апгрейд комплектующих',
            'Чистка и замена термопасты',
            'Восстановление после залития',
            'Гарантия до 24 месяцев',
        ],
        priceList: [
            { name: 'Диагностика', price: 'Бесплатно', duration: '30 мин' },
            { name: 'Чистка от пыли + замена термопасты', price: 'от 1 500 ₽', duration: '1-2 часа' },
            { name: 'Замена матрицы ноутбука', price: 'от 3 000 ₽', duration: '1-3 дня' },
            { name: 'Замена клавиатуры', price: 'от 2 000 ₽', duration: '1-2 дня' },
            { name: 'Замена HDD/SSD', price: 'от 500 ₽', duration: '1 час' },
            { name: 'Замена оперативной памяти', price: 'от 300 ₽', duration: '30 мин' },
            { name: 'Ремонт материнской платы', price: 'от 3 000 ₽', duration: '3-7 дней' },
            { name: 'Восстановление после залития', price: 'от 4 000 ₽', duration: '3-7 дней' },
        ],
    },
    {
        id: 'phones-tablets',
        title: 'Ремонт телефонов и планшетов',
        shortTitle: 'Телефоны и планшеты',
        shortDescription: 'Ремонт iPhone, Samsung, Xiaomi, iPad и других устройств. Замена экранов, батарей.',
        fullDescription: 'Профессиональный ремонт смартфонов и планшетов всех производителей. Замена экранов, батарей, разъёмов зарядки, динамиков, камер. Работаем с iPhone, Samsung, Xiaomi, Huawei, Honor, iPad и другими устройствами.',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
        features: [
            'Оригинальные и качественные запчасти',
            'Ремонт iPhone всех моделей',
            'Ремонт Android-устройств',
            'Замена экранов и стёкол',
            'Замена батарей',
            'Ремонт после воды',
            'Гарантия до 12 месяцев',
        ],
        priceList: [
            { name: 'Диагностика', price: 'Бесплатно', duration: '15 мин' },
            { name: 'Замена экрана iPhone', price: 'от 3 000 ₽', duration: '1-2 часа' },
            { name: 'Замена экрана Samsung/Xiaomi', price: 'от 2 500 ₽', duration: '1-2 часа' },
            { name: 'Замена батареи телефона', price: 'от 1 000 ₽', duration: '30 мин' },
            { name: 'Замена разъёма зарядки', price: 'от 1 500 ₽', duration: '1 час' },
            { name: 'Замена экрана iPad', price: 'от 4 000 ₽', duration: '2-3 часа' },
            { name: 'Ремонт после воды', price: 'от 2 000 ₽', duration: '1-3 дня' },
            { name: 'Замена динамика/микрофона', price: 'от 1 000 ₽', duration: '1 час' },
        ],
    },
    {
        id: 'monitors-tvs',
        title: 'Ремонт мониторов и телевизоров',
        shortTitle: 'Мониторы и телевизоры',
        shortDescription: 'Ремонт ЖК-мониторов, LED/OLED телевизоров. Замена матриц, подсветки, плат.',
        fullDescription: 'Выполняем ремонт мониторов и телевизоров всех типов и производителей: Samsung, LG, Sony, Philips, ASUS, Dell, BenQ и других. Замена матриц, LED-подсветки, блоков питания, материнских плат. Устранение битых пикселей, полос на экране.',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1200&auto=format&fit=crop',
        features: [
            'Ремонт всех типов экранов',
            'Замена LED/CCFL подсветки',
            'Замена матриц',
            'Ремонт блоков питания',
            'Устранение полос и артефактов',
            'Ремонт HDMI/VGA портов',
            'Гарантия до 12 месяцев',
        ],
        priceList: [
            { name: 'Диагностика', price: 'Бесплатно', duration: '30 мин' },
            { name: 'Замена LED-подсветки монитора', price: 'от 2 000 ₽', duration: '1-2 дня' },
            { name: 'Замена LED-подсветки ТВ', price: 'от 3 000 ₽', duration: '1-3 дня' },
            { name: 'Замена матрицы монитора', price: 'от 4 000 ₽', duration: '2-5 дней' },
            { name: 'Замена матрицы телевизора', price: 'от 6 000 ₽', duration: '3-7 дней' },
            { name: 'Ремонт блока питания', price: 'от 1 500 ₽', duration: '1-2 дня' },
            { name: 'Ремонт материнской платы', price: 'от 2 500 ₽', duration: '2-5 дней' },
            { name: 'Замена разъёмов HDMI/VGA', price: 'от 1 000 ₽', duration: '1-2 дня' },
        ],
    },
    {
        id: 'office-equipment',
        title: 'Ремонт оргтехники и заправка картриджей',
        shortTitle: 'Оргтехника',
        shortDescription: 'Ремонт принтеров, МФУ, сканеров. Заправка и восстановление картриджей.',
        fullDescription: 'Обслуживание и ремонт офисной техники: принтеры, МФУ, сканеры, копиры. Заправка лазерных и струйных картриджей, восстановление барабанов, прошивка чипов. Работаем с HP, Canon, Epson, Brother, Samsung, Xerox.',
        image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1200&auto=format&fit=crop',
        features: [
            'Заправка всех типов картриджей',
            'Восстановление картриджей',
            'Ремонт принтеров и МФУ',
            'Прошивка чипов',
            'Выезд к клиенту',
            'Обслуживание организаций',
            'Гарантия на заправку',
        ],
        priceList: [
            { name: 'Заправка лазерного картриджа', price: 'от 300 ₽', duration: '15 мин' },
            { name: 'Заправка струйного картриджа', price: 'от 200 ₽', duration: '15 мин' },
            { name: 'Восстановление картриджа', price: 'от 800 ₽', duration: '1-2 дня' },
            { name: 'Замена фотобарабана', price: 'от 1 000 ₽', duration: '30 мин' },
            { name: 'Прошивка чипа картриджа', price: 'от 500 ₽', duration: '15 мин' },
            { name: 'Ремонт принтера/МФУ', price: 'от 1 500 ₽', duration: '1-3 дня' },
            { name: 'Чистка и профилактика', price: 'от 1 000 ₽', duration: '1 час' },
            { name: 'Выезд специалиста', price: 'от 500 ₽', duration: '—' },
        ],
    },
    {
        id: 'accessories',
        title: 'Ремонт аксессуаров и периферии',
        shortTitle: 'Аксессуары и периферия',
        shortDescription: 'Ремонт наушников, геймпадов, клавиатур, мышек и другой периферии.',
        fullDescription: 'Ремонтируем наушники (проводные и беспроводные), геймпады (PlayStation, Xbox, Nintendo), клавиатуры, мыши, веб-камеры, микрофоны и другую периферию. Пайка, замена кабелей, восстановление корпусов.',
        image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=1200&auto=format&fit=crop',
        features: [
            'Ремонт наушников и гарнитур',
            'Ремонт геймпадов PS/Xbox',
            'Ремонт клавиатур',
            'Ремонт мышек',
            'Замена кабелей и разъёмов',
            'Чистка и профилактика',
            'Пайка и восстановление',
        ],
        priceList: [
            { name: 'Диагностика', price: 'Бесплатно', duration: '15 мин' },
            { name: 'Ремонт проводных наушников', price: 'от 500 ₽', duration: '30 мин' },
            { name: 'Ремонт беспроводных наушников', price: 'от 1 000 ₽', duration: '1-2 дня' },
            { name: 'Ремонт геймпада', price: 'от 800 ₽', duration: '1-2 дня' },
            { name: 'Замена стиков геймпада', price: 'от 600 ₽', duration: '1 час' },
            { name: 'Ремонт клавиатуры', price: 'от 500 ₽', duration: '1-2 дня' },
            { name: 'Ремонт мышки', price: 'от 400 ₽', duration: '1 час' },
            { name: 'Замена кабеля/разъёма', price: 'от 300 ₽', duration: '30 мин' },
        ],
    },
];

export const getServiceById = (id: string): Service | undefined => {
    return services.find(service => service.id === id);
};

export const getAllServiceIds = (): string[] => {
    return services.map(service => service.id);
};
