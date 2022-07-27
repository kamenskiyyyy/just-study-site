import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client';
import { BACKEND_URL_GRAPHQL } from '../../../config';

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache'
    },
    query: {
        fetchPolicy: 'no-cache'
    }
};

const client = new ApolloClient({
    uri: BACKEND_URL_GRAPHQL,
    cache: new InMemoryCache(),
    ...(process.env.NODE_ENV === 'development' && defaultOptions)
});

export default client;
