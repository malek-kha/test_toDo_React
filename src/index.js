import React from 'react';
import {render} from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from "@apollo/client";

import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root')
);
