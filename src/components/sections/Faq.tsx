'use client'

import React, { useState } from 'react';

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left font-semibold"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className="ml-4">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="mt-2 text-gray-700">
                    {answer}
                </div>
            )}
        </div>
    );
};

const Faq = () => {
    const faqItems = [
        {
            question: "Сколько времени занимает ремонт?",
            answer: "Большинство простых ремонтов выполняется в течение 1-2 часов. Сложные ремонты могут занять от 1 до 3 дней в зависимости от наличия запчастей и характера неисправности."
        },
        {
            question: "Предоставляете ли вы гарантию?",
            answer: "Да, мы предоставляем гарантию от 3 до 12 месяцев на все виды работ и замененные детали."
        },
        {
            question: "Можно ли отремонтировать технику с выездом мастера?",
            answer: "Да, мы предлагаем услугу выезда мастера на дом или в офис в пределах города."
        },
        {
            question: "Что делать, если техника сломалась на гарантии?",
            answer: "Если устройство на гарантии производителя, рекомендуем обратиться в официальный сервисный центр. Если вы решите обратиться к нам, мы выполним ремонт, но гарантия производителя может быть аннулирована."
        }
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-10">
                    Ответы на популярные вопросы
                </h3>
                <div className="max-w-3xl mx-auto">
                    {faqItems.map((item, index) => (
                        <FaqItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq; 