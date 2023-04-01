import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import Router from './routes/routes';
import './assets/App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain='askit.us.auth0.com'
        clientId='bcbgyJq1mMkD7MyK0uhWIXNlrHITZ7wj'
        authorizationParams={{ redirect_uri: 'http://localhost:5173/sesion' }}
      >
        <Router />
      </Auth0Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
