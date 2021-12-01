const withImages = require('next-images');
const { i18n } = require('./next-i18next.config');

module.exports = withImages({
    esModule: true,
});

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
    let REACT_APP_URL = process.env.REACT_APP_URL || 'https://originweb.com.br';
    let REACT_APP_WS = process.env.REACT_APP_WS || 'wss://originweb.com.br';
    let REACT_APP_URL_GRAPHQL = `${REACT_APP_URL}/graphql`;
    let REACT_APP_WS_GRAPHQL = `${REACT_APP_WS}/graphql`;
    let NEXT_PUBLIC_RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
    let REACT_APP_URL_SERVER = '';
    let REACT_APP_URL_GRAPHQL_SERVER = ``;

    //dev
    if (phase === PHASE_DEVELOPMENT_SERVER && !process.env.REACT_APP_URL) {
        REACT_APP_URL = 'http://localhost:3000';
        REACT_APP_WS = `ws://localhost:3000`;
        REACT_APP_URL_GRAPHQL = `${REACT_APP_URL}/graphql`;
        REACT_APP_WS_GRAPHQL = `${REACT_APP_WS}/graphql`;
        REACT_APP_URL_SERVER = 'http://localhost:3000';
        REACT_APP_URL_GRAPHQL_SERVER = `${REACT_APP_URL}/graphql`;
    }

    const onlyUrl = (REACT_APP_URL_SERVER || REACT_APP_URL).replace('https://', '').replace('http://', '');

    return withImages({
        serverRuntimeConfig: {
            REACT_APP_URL: REACT_APP_URL_SERVER || REACT_APP_URL,
            REACT_APP_WS: REACT_APP_WS,
            REACT_APP_URL_GRAPHQL: REACT_APP_URL_GRAPHQL_SERVER || REACT_APP_URL_GRAPHQL,
            REACT_APP_WS_GRAPHQL: REACT_APP_WS_GRAPHQL,
            NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
        publicRuntimeConfig: {
            REACT_APP_URL,
            REACT_APP_WS,
            REACT_APP_URL_GRAPHQL,
            REACT_APP_WS_GRAPHQL,
            NODE_ENV: process.env.NODE_ENV,
            NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
        i18n,
        images: {
            domains: [
                'originweb.com.br',
            ],
        },

        future: {
            webpack5: true,
        },

        async rewrites() {
            return [
                // {
                //     source: '/newsletter',
                //     destination: '/news',
                // },
            ];
        },

        async redirects() {
            return [
                // {
                //     source: '/home',
                //     destination: '/dashboard',
                //     permanent: true,
                // },
            ];
        },
    });
};
