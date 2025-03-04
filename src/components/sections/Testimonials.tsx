import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-10">
                    Что говорят наши клиенты
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold mr-4">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                                </div>
                            </div>
                            <div className="text-gray-700 italic">"{testimonial.text}"</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const testimonials = [
    {
        name: "Александр М.",
        role: "клиент",
        text: "Отличный сервис! Мой ноутбук перестал включаться после попадания воды. Мастера оперативно продиагностировали проблему, заменили материнскую плату и даже сохранили все данные с жесткого диска. Все сделали за 2 дня, цена полностью соответствовала озвученной при диагностике."
    },
    {
        name: "Ольга К.",
        role: "клиент",
        text: "Разбила экран на iPhone 13. Обзвонила несколько сервисов, здесь предложили лучшую цену. Заменили дисплей за час, телефон как новый! Очень вежливый персонал, приятно иметь дело с профессионалами."
    },
    {
        name: "Михаил Т.",
        role: "директор ООО \"Перспектива\"",
        text: "Наша компания на постоянной основе обслуживает офисную технику в этом сервисе. За два года сотрудничества ни разу не подвели: быстро, качественно, с гарантией. Особенно ценим, что мастер всегда приезжает в течение часа после вызова."
    }
];

export default Testimonials; 