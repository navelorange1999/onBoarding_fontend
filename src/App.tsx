import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import { ApolloProvider } from "@apollo/client";

import Routes from "./Routes";
import {client} from "@/graphql"
import UserProvider from "@/components/UserAccountProvider"

export default function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <ApolloProvider client={client}>
        <UserProvider>
          <Router>
            <Routes />
          </Router>
        </UserProvider>
      </ApolloProvider>
    </AppProvider>
    
  )
}
