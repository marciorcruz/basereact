import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import 'animate.css/animate.min.css';

const Home: React.FC = () => {
    const constraintsX = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            if ((window as any).loadActiveHosted) {
                (window as any).loadActiveHosted();
            }
        });
    }, []);

    return (
        <>
            <Head>
                <title>BASE</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Work+Sans:wght@400;600&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
                />
            </Head>

        </>
    );
};
export default Home;
