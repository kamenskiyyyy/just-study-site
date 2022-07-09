import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BACKEND_URL_GRAPHQL } from './config';

const client = new ApolloClient({
    uri: BACKEND_URL_GRAPHQL,
    cache: new InMemoryCache()
});

export default client;
