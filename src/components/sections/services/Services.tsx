import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const servicesList = [
    {
        id: 'computers',
        title: 'Ремонт компьютеров и ноутбуков',
        image: '/images/services/computer-repair.jpg',
        features: [
            'Бесплатная диагностика неисправностей за 30 минут',
            'Ремонт и замена комплектующих',
            'Восстановление данных с поврежденных накопителей',
            'Профессиональная чистка от пыли с заменой термопасты',
            'Установка и настройка программного обеспечения'
        ]
    },
    {
        id: 'smartphones',
        title: 'Ремонт мобильных устройств',
        image: '/images/services/phone-repair.jpg',
        features: [
            'Замена экранов, сенсорных модулей и защитных стекол',
            'Ремонт после падений и попадания жидкости',
            'Замена разъемов зарядки, кнопок и аккумуляторов',
            'Обновление ПО и разблокировка устройств',
            'Ремонт планшетов и электронных книг'
        ]
    },
    {
        id: 'tvs',
        title: 'Ремонт телевизоров',
        image: '/images/services/tv-repair.jpg',
        features: [
            'Ремонт LCD, LED, OLED и плазменных телевизоров всех марок',
            'Замена матриц, блоков питания и управления',
            'Настройка Smart TV и устранение программных ошибок',
            'Выезд мастера на дом для крупногабаритной техники',
            'Ремонт пультов дистанционного управления'
        ]
    },
    {
        id: 'printers',
        title: 'Ремонт и обслуживание принтеров',
        image: '/images/services/printer-repair.jpg',
        features: [
            'Диагностика и ремонт лазерных, струйных и матричных принтеров',
            'Качественная заправка и восстановление картриджей с гарантией',
            'Чистка печатающих головок и тракта подачи бумаги',
            'Настройка сетевых принтеров и МФУ',
            'Заключение договоров на обслуживание офисной техники'
        ]
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">Полный спектр услуг по ремонту и обслуживанию техники</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Наши сертифицированные специалисты помогут решить любые проблемы с вашими устройствами быстро и качественно
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesList.map((service) => (
                        <div key={service.id} id={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                            <div className="relative h-64">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                                <ul className="space-y-2">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center"
                                    >
                                        Подробнее
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services; 