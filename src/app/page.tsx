import React from 'react';
import Layout from '@/components/common/layout/Layout';
import Hero from '@/components/sections/hero/Hero';
import Services from '@/components/sections/services/Services';
import WhyUs from '@/components/sections/WhyUs';
import Promotions from '@/components/sections/Promotions';
import WorkProcess from '@/components/sections/WorkProcess';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import ContactForm from '@/components/sections/ContactForm';
import Map from '@/components/sections/Map';

export default function Home() {
    return (
        <Layout>
            <Hero />

            <section id="intro" className="py-16">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold mb-6 text-center">
                        Экспертный ремонт всех видов электроники в одном месте
                    </h3>
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
                        Наш сервисный центр предоставляет полный спектр услуг по ремонту и обслуживанию компьютерной и мобильной техники, телевизоров, принтеров и заправке картриджей. С опытом работы более 10 лет и командой сертифицированных мастеров, мы гарантируем решение проблем любой сложности. Доверьте свою технику профессионалам – мы вернем ее к жизни быстро, качественно и по честной цене.
                    </p>
                </div>
            </section>

            <Services />
            <WhyUs />
            <Promotions />
            <WorkProcess />
            <Testimonials />
            <Faq />
            <ContactForm />
            <Map />
        </Layout>
    );
} 