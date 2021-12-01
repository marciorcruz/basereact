import React from 'react';
import { AppProps } from 'next/app';
import { GraphQLProvider } from 'ctx/GraphQLProvider';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <GraphQLProvider>
                <Component {...pageProps} />
            </GraphQLProvider>
        </>
    );
};

export default MyApp;
