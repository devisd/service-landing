import React from 'react';
import Layout from '@/components/common/layout/Layout';
import Hero from '@/components/sections/hero/Hero';
import QualityStandards from '@/components/sections/QualityStandards';
import Services from '@/components/sections/services/Services';
import WorkProcess from '@/components/sections/WorkProcess';
import Contact from '@/components/sections/Contact';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <QualityStandards />
            <Services />
            <WorkProcess />
            <Contact />
        </Layout>
    );
}
