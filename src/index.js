import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import "./assets/styles/index.css" ;
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';
import { BrowserRouter } from 'react-router-dom';
import Rtl from './components/shared/Rtl';
import ScrollTop from './components/shared/ScrollTop';

const client = new ApolloClient({
  "uri" : process.env.REACT_APP_GRAPH_URI ,
  cache : new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Rtl>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Rtl>
  </ApolloProvider>
);


