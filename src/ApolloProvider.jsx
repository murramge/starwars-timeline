import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }) => (
  <Provider client={client}>{children}</Provider>
);

export default ApolloProvider;
