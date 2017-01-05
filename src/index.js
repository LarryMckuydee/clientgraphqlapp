import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import './index.css';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: 'http://localhost:4001/api/companies'}),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
