import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, createHttpLink, from, split } from '@apollo/client';
import getConfig from 'next/config';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
import { createUploadLink } from 'apollo-upload-client';

const config = { ...publicRuntimeConfig, ...serverRuntimeConfig };

let splitLink: ApolloLink = null;
const getToken = () => {
    if (process.browser) {
        const token = process.browser ? localStorage?.getItem('@SumB:token') : null;
        return token;
    }
    return '';
};

const httpLink = createUploadLink({
    uri: config.REACT_APP_URL_GRAPHQL,
});

const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
        },
        options: {
            reconnect: true,
            connectionParams: {
                Authorization: getToken() ? `Bearer ${getToken()}` : '',
            },
        },
    };
});

let wsLink = null;

if (process.browser) {
    wsLink = new WebSocketLink({
        uri: config.REACT_APP_WS_GRAPHQL || '',
        options: {
            reconnect: true,
            connectionParams: {
                Authorization: getToken() ? `Bearer ${getToken()}` : '',
            },
        },
    });
}

if (wsLink) {
    splitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        },
        ApolloLink.from([authLink, wsLink]),
        ApolloLink.from([authLink, httpLink]),
    );
} else {
    splitLink = split(({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    }, ApolloLink.from([authLink, httpLink]));
}

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});
