import React from 'react';
import Button from '../../common/buttons/Button';

const Hero: React.FC = () => {
    return (
        <section className="relative bg-blue-700 text-white py-20 overflow-hidden">
            {/* Декоративные элементы */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-blue-400"></div>
                <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 w-80 h-80 rounded-full bg-blue-500"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Профессиональный ремонт техники с гарантией
                    </h1>
                    <h2 className="text-xl md:text-2xl mb-8 text-blue-100">
                        Быстрый и качественный ремонт по доступным ценам – решим любую проблему с вашей техникой!
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-white text-blue-700 hover:bg-blue-50 hover:border-white"
                        >
                            Оставить заявку
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-blue-600"
                        >
                            Узнать стоимость
                        </Button>
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-blue-800/50 p-4 rounded-lg">
                            <div className="text-3xl font-bold">10+</div>
                            <div className="text-blue-100">лет опыта</div>
                        </div>
                        <div className="bg-blue-800/50 p-4 rounded-lg">
                            <div className="text-3xl font-bold">5000+</div>
                            <div className="text-blue-100">довольных клиентов</div>
                        </div>
                        <div className="bg-blue-800/50 p-4 rounded-lg">
                            <div className="text-3xl font-bold">12</div>
                            <div className="text-blue-100">месяцев гарантии</div>
                        </div>
                        <div className="bg-blue-800/50 p-4 rounded-lg">
                            <div className="text-3xl font-bold">24/7</div>
                            <div className="text-blue-100">техподдержка</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 