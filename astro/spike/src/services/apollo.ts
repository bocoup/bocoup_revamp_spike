import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { Requests } from '../models/requests';

export const client = new ApolloClient({
    uri: Requests.wordpress_graphql_request,
    cache: new InMemoryCache(),
  });