import React from 'react';

const Promotions = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-10">
                    Выгодные предложения для наших клиентов
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {promotions.map((promotion, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="text-primary text-xl font-bold mb-3">{promotion.title}</div>
                            <p className="text-gray-700">{promotion.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const promotions = [
    {
        title: "Скидка 10%",
        description: "На первое обращение для новых клиентов"
    },
    {
        title: "Бесплатная диагностика",
        description: "При любом ремонте"
    },
    {
        title: "Комплексная чистка ноутбука",
        description: "В подарок при замене комплектующих"
    },
    {
        title: "Программа лояльности",
        description: "5% скидка на все услуги после третьего обращения"
    },
    {
        title: "Акция \"Приведи друга\"",
        description: "Скидка 15% для вас и вашего друга"
    }
];

export default Promotions; 