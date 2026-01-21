import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from '../CookieConsent';
import styles from './Layout.module.scss';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
            <CookieConsent />
        </div>
    );
};

export default Layout;
