import React from 'react';

const WorkProcess = () => {
    const steps = [
        {
            number: 1,
            title: "Обращение",
            description: "Оставьте заявку на сайте или позвоните нам"
        },
        {
            number: 2,
            title: "Диагностика",
            description: "Проводим бесплатную диагностику и определяем причину неисправности"
        },
        {
            number: 3,
            title: "Расчет стоимости",
            description: "Предоставляем точную смету работ без скрытых платежей"
        },
        {
            number: 4,
            title: "Ремонт",
            description: "Выполняем ремонт согласованными методами в оговоренные сроки"
        },
        {
            number: 5,
            title: "Проверка",
            description: "Тестируем устройство на работоспособность всех функций"
        },
        {
            number: 6,
            title: "Выдача",
            description: "Возвращаем отремонтированное устройство с гарантийным талоном"
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-10">
                    Как мы работаем
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                                {index + 1}
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcess; 